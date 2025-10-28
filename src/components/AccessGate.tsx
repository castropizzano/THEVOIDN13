import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
const subscribeSchema = z.object({
  email: z.string().trim().email("Email inválido / Invalid email").max(255, "Email muito longo / Email too long"),
  full_name: z.string().trim().min(2, "Nome muito curto (mín. 2 caracteres) / Name too short (min 2 chars)").max(100, "Nome muito longo (máx. 100 caracteres) / Name too long (max 100 chars)")
});
interface AccessGateProps {
  onAccessGranted: () => void;
}
export const AccessGate = ({
  onAccessGranted
}: AccessGateProps) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  useEffect(() => {
    // Check if user already has access
    const accessGranted = localStorage.getItem("thevoidn13_access_granted");
    if (accessGranted === "true") {
      setHasAccess(true);
      onAccessGranted();
    }
  }, [onAccessGranted]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    const validation = subscribeSchema.safeParse({
      email,
      full_name: fullName
    });
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }
    setIsSubmitting(true);
    try {
      // Check if user already exists
      const {
        data: session
      } = await supabase.auth.getSession();
      if (!session.session) {
        // Sign up new user
        const {
          data: signUpData,
          error: signUpError
        } = await supabase.auth.signUp({
          email: validation.data.email,
          password: crypto.randomUUID(),
          // Generate random password
          options: {
            data: {
              full_name: validation.data.full_name
            },
            emailRedirectTo: `${window.location.origin}/`
          }
        });
        if (signUpError) {
          // User might already exist, try to sign in
          if (signUpError.message.includes("already registered")) {
            toast.error("Este email já está cadastrado. Verifique sua caixa de entrada. / " + "This email is already registered. Check your inbox.");
            return;
          }
          throw signUpError;
        }
      }

      // Save to newsletter
      const {
        error: insertError
      } = await supabase.from("newsletter_subscribers").insert({
        email: validation.data.email,
        full_name: validation.data.full_name,
        ip_address: await fetch("https://api.ipify.org?format=json").then(r => r.json()).then(data => data.ip).catch(() => null),
        user_agent: navigator.userAgent,
        consent_given: true
      });
      if (insertError && !insertError.message.includes("duplicate")) {
        throw insertError;
      }

      // Grant access
      localStorage.setItem("thevoidn13_access_granted", "true");
      setHasAccess(true);
      toast.success("Bem-vindo ao THEVOIDN13! Verifique seu email para confirmar o cadastro. / " + "Welcome to THEVOIDN13! Check your email to confirm registration.");
      onAccessGranted();
    } catch (error: any) {
      console.error("Access gate error:", error);
      toast.error(error.message || "Erro ao processar cadastro / Error processing registration");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (hasAccess) return null;
  return <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-primary/30 shadow-2xl">
        <CardHeader className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="text-center">
              <CardTitle className="site-title text-primary text-2xl leading-tight">
                O VAZIO CHAMA
              </CardTitle>
              <CardTitle className="site-title text-primary text-2xl leading-tight">
                THE VOID CALLS
              </CardTitle>
            </div>
            <span className="text-xs text-muted-foreground font-mono">v1.3</span>
          </div>
          <CardDescription className="site-paragraph space-y-3 leading-relaxed">
            <p className="leading-relaxed">
              Entre no limiar entre luz e sombra onde a memória artística se transforma
              <br />
              em experiência viva e o vazio revela seus segredos aos que ousam adentrar.
            </p>
            <p className="text-xs leading-relaxed">
              Step into the threshold between light and shadow where artistic memory
              <br />
              transforms into living experience and the void reveals its secrets to those who dare.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="fullName" className="site-subtitle">
                Nome Completo / Full Name
              </label>
              <Input id="fullName" type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="seu nome / your name" required disabled={isSubmitting} className="h-12" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="site-subtitle">
                Email
              </label>
              <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com / your@email.com" required disabled={isSubmitting} className="h-12" />
            </div>

            <div className="space-y-2">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ao adentrar, você aceita nossa{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
                {" "}e concorda em receber transmissões sobre
                <br />
                a jornada no vazio e as manifestações artísticas que emergem das sombras.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                By entering, you accept our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                {" "}and agree to receive transmissions
                <br />
                about the journey into the void and the artistic manifestations that emerge from shadows.
              </p>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full h-12" size="lg">
              {isSubmitting ? <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processando... / Processing...
                </> : <>ENTRE NO VAZIO / ENTER THE VOID</>}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>;
};