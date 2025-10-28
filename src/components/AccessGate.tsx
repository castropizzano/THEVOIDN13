import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { PrivacyPolicyDialog } from "@/components/PrivacyPolicyDialog";
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
      toast.success("Bem-vindo ao THEVØIDN13! Verifique seu email para confirmar o cadastro. / " + "Welcome to THEVØIDN13! Check your email to confirm registration.");
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
          <CardDescription className="site-paragraph space-y-4 leading-relaxed">
            <p className="leading-relaxed">
              Há um ponto onde o tempo desacelera e a consciência escuta o ruído do próprio silêncio.
              Luz e sombra se confundem — e o que era apenas lembrança começa a pulsar.
              Nada aqui é linear. Cada passo dentro do vazio é uma lembrança futura tentando se materializar.
            </p>
            <p className="text-xs leading-relaxed">
              There's a point where time slows down and awareness hears the noise of its own silence.
              Light and shadow blur — and what was once memory begins to pulse.
              Nothing here is linear. Each step inside the void is a future memory trying to take form.
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
                Ao seguir adiante, você aceita nossa{" "}
                <PrivacyPolicyDialog>
                  <button type="button" className="text-primary hover:underline">
                    Política de Privacidade
                  </button>
                </PrivacyPolicyDialog>
                {" "}e permite que o vazio lhe envie ecos — fragmentos, imagens e sinais sobre o que emerge das sombras.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                By proceeding, you accept our{" "}
                <PrivacyPolicyDialog>
                  <button type="button" className="text-primary hover:underline">
                    Privacy Policy
                  </button>
                </PrivacyPolicyDialog>
                {" "}and allow the void to send you echoes — fragments, images, and signals of what rises from the shadows.
              </p>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full h-12" size="lg">
              {isSubmitting ? <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processando... / Processing...
                </> : <>ENTRAR / ENTER THE VOID</>}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>;
};