import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { PrivacyPolicyDialog } from "@/components/PrivacyPolicyDialog";
import { useTranslation } from "@/hooks/useTranslation";
import { useValidationMessage } from "@/lib/zodValidation";

const createLoginSchema = (vm: (key: string) => string) => z.object({
  email: z.string().trim().email(vm("emailInvalid")),
  password: z.string().min(6, vm("passwordMinLength"))
});

const createSignupSchema = (vm: (key: string) => string) => z.object({
  email: z.string().trim().email(vm("emailInvalid")).max(255, vm("emailTooLong")),
  full_name: z.string().trim().min(2, vm("nameMinLength")).max(100, vm("nameMaxLength")),
  password: z.string().min(6, vm("passwordMinLength"))
});
interface AccessGateProps {
  onAccessGranted: () => void;
}
export const AccessGate = ({
  onAccessGranted
}: AccessGateProps) => {
  const { t } = useTranslation();
  const vm = useValidationMessage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Bot detection field
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        setHasAccess(true);
        onAccessGranted();
      }
    };

    checkAuth();
  }, [onAccessGranted]);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginSchema = createLoginSchema(vm);
    const validation = loginSchema.safeParse({ email, password });
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: validation.data.email,
        password: validation.data.password,
      });

      if (error) {
        toast.error(t("invalidEmailPassword"));
        return;
      }

      setHasAccess(true);
      onAccessGranted();
      toast.success(t("welcomeBack"));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : t("loginError");
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      toast.error(t("invalidSubmission"));
      return;
    }

    const signupSchema = createSignupSchema(vm);
    const validation = signupSchema.safeParse({ email, password, full_name: fullName });
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: validation.data.email,
        password: validation.data.password,
        options: {
          data: {
            full_name: validation.data.full_name
          },
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (signUpError) {
        if (signUpError.message.includes("already registered")) {
          toast.error(t("emailAlreadyRegistered"));
          setActiveTab("login");
          return;
        }
        throw signUpError;
      }

      // Save to newsletter with duplicate check
      const { error: insertError } = await supabase.from("newsletter_subscribers").insert({
        email: validation.data.email,
        full_name: validation.data.full_name,
        consent_given: true,
        consent_timestamp: new Date().toISOString()
      });

      setHasAccess(true);
      onAccessGranted();

      // Show appropriate success message based on newsletter subscription result
      if (insertError) {
        if (insertError.code === '23505' || insertError.message.includes("duplicate") || insertError.message.includes("unique")) {
          // Email already subscribed to newsletter, but account created successfully
          toast.success(t("accountCreated"), {
            description: t("alreadySubscribed")
          });
        } else {
          // Other newsletter error - show warning but still confirm account creation
          toast.success(t("accountCreated"), {
            description: t("newsletterError")
          });
        }
      } else {
        // Everything worked perfectly
        toast.success(t("accountCreated"), {
          description: t("newsletterSubscribed")
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : t("signupError");
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (hasAccess) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-primary/30 shadow-2xl">
        <CardHeader className="space-y-4 text-center relative">
          <div className="absolute top-4 right-4 text-xs text-foreground/60 tracking-wider font-medium">
            v1.3
          </div>
          <div className="text-center space-y-1">
            <CardTitle className="bible-title text-primary text-2xl leading-tight">
              O VAZIO CHAMA
            </CardTitle>
            <CardTitle className="bible-title text-primary text-2xl leading-tight">
              THE VOID CALLS
            </CardTitle>
          </div>
          <CardDescription className="bible-body text-sm leading-relaxed">
            Há um ponto onde o tempo desacelera e a consciência escuta o ruído do próprio silêncio.
            <br />
            <span className="text-xs">
              There's a point where time slows down and awareness hears the noise of its own silence.
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "login" | "signup")}>
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="login">{t("loginTab")}</TabsTrigger>
              <TabsTrigger value="signup">{t("signupTab")}</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="login-email" className="bible-subtitle text-sm">
                    {t("emailLabel")}
                  </label>
                  <Input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("emailPlaceholder")}
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="login-password" className="bible-subtitle text-sm">
                    {t("passwordLabel")}
                  </label>
                  <Input
                    id="login-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••"
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full h-11" size="lg">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t("loggingIn")}
                    </>
                  ) : (
                    <>{t("loginButton")}</>
                  )}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                {/* Honeypot field - hidden from users, visible to bots */}
                <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <Input
                    id="website"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-name" className="bible-subtitle text-sm">
                    {t("fullNameLabel")}
                  </label>
                  <Input
                    id="signup-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t("fullNamePlaceholder")}
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-email" className="bible-subtitle text-sm">
                    {t("emailLabel")}
                  </label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("emailPlaceholder")}
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-password" className="bible-subtitle text-sm">
                    {t("passwordLabel")}
                  </label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("passwordPlaceholder")}
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>

                <p className="bible-body text-xs text-muted-foreground">
                  Ao se cadastrar, você concorda em receber nossa newsletter e aceita nossa política de privacidade.
                  By signing up, you agree to receive our newsletter and accept our privacy policy.
                </p>

                <Button type="submit" disabled={isSubmitting} className="w-full h-11" size="lg">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t("creatingAccount")}
                    </>
                  ) : (
                    <>{t("signupButton")}</>
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};