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
const loginSchema = z.object({
  email: z.string().trim().email("Email inválido / Invalid email"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres / Password must be at least 6 characters")
});

const signupSchema = z.object({
  email: z.string().trim().email("Email inválido / Invalid email").max(255, "Email muito longo / Email too long"),
  full_name: z.string().trim().min(2, "Nome muito curto (mín. 2 caracteres) / Name too short (min 2 chars)").max(100, "Nome muito longo (máx. 100 caracteres) / Name too long (max 100 chars)"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres / Password must be at least 6 characters")
});
interface AccessGateProps {
  onAccessGranted: () => void;
}
export const AccessGate = ({
  onAccessGranted
}: AccessGateProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
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
        toast.error("Email ou senha incorretos / Incorrect email or password");
        return;
      }

      setHasAccess(true);
      onAccessGranted();
      toast.success("Bem-vindo de volta ao vazio / Welcome back to the void");
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.message || "Erro ao fazer login / Login error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

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
          toast.error("Email já cadastrado. Use a aba 'Entrar' / Email already registered. Use 'Login' tab");
          setActiveTab("login");
          return;
        }
        throw signUpError;
      }

      // Save to newsletter
      const { error: insertError } = await supabase.from("newsletter_subscribers").insert({
        email: validation.data.email,
        full_name: validation.data.full_name,
        ip_address: await fetch("https://api.ipify.org?format=json").then(r => r.json()).then(data => data.ip).catch(() => null),
        user_agent: navigator.userAgent,
        consent_given: true
      });

      if (insertError && !insertError.message.includes("duplicate")) {
        console.error("Newsletter error:", insertError);
      }

      setHasAccess(true);
      onAccessGranted();
      toast.success("Conta criada! Bem-vindo ao vazio / Account created! Welcome to the void");
    } catch (error: any) {
      console.error("Signup error:", error);
      toast.error(error.message || "Erro ao criar conta / Signup error");
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
            <CardTitle className="site-title text-primary text-2xl leading-tight">
              O VAZIO CHAMA
            </CardTitle>
            <CardTitle className="site-title text-primary text-2xl leading-tight">
              THE VOID CALLS
            </CardTitle>
          </div>
          <CardDescription className="site-paragraph text-sm leading-relaxed">
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
              <TabsTrigger value="login">Entrar / Login</TabsTrigger>
              <TabsTrigger value="signup">Cadastrar / Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="login-email" className="site-subtitle text-sm">
                    Email
                  </label>
                  <Input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com / your@email.com"
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="login-password" className="site-subtitle text-sm">
                    Senha / Password
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
                      Entrando... / Logging in...
                    </>
                  ) : (
                    <>ENTRAR / LOGIN</>
                  )}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="signup-name" className="site-subtitle text-sm">
                    Nome Completo / Full Name
                  </label>
                  <Input
                    id="signup-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="seu nome / your name"
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-email" className="site-subtitle text-sm">
                    Email
                  </label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com / your@email.com"
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-password" className="site-subtitle text-sm">
                    Senha / Password
                  </label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="mínimo 6 caracteres / min 6 chars"
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Ao cadastrar, você aceita nossa{" "}
                    <PrivacyPolicyDialog>
                      <button type="button" className="text-primary hover:underline">
                        Política de Privacidade
                      </button>
                    </PrivacyPolicyDialog>
                    {" "}e permite que o vazio envie ecos.
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    By signing up, you accept our{" "}
                    <PrivacyPolicyDialog>
                      <button type="button" className="text-primary hover:underline">
                        Privacy Policy
                      </button>
                    </PrivacyPolicyDialog>
                    {" "}and allow the void to send echoes.
                  </p>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full h-11" size="lg">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Criando conta... / Creating account...
                    </>
                  ) : (
                    <>CADASTRAR / SIGN UP</>
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