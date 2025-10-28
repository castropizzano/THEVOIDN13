import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PrivacyPolicyDialog } from "@/components/PrivacyPolicyDialog";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("thevoidn13_cookie_consent");
    if (!consent) {
      // Delay banner appearance for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("thevoidn13_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("thevoidn13_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-500">
      <Card className="max-w-4xl mx-auto bg-card/95 backdrop-blur border-2 border-primary/30 shadow-2xl">
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="site-title text-primary">
              POLÍTICA DE COOKIES / COOKIE POLICY
            </h3>
            <p className="site-paragraph text-muted-foreground leading-relaxed">
              Este site utiliza cookies essenciais para garantir funcionalidade básica e armazenamento local para melhorar sua experiência de navegação. Não coletamos dados pessoais além do necessário para o cadastro, respeitando sua privacidade e segurança em cada etapa do processo.
            </p>
            <p className="site-paragraph text-muted-foreground text-xs leading-relaxed">
              This site uses essential cookies to ensure basic functionality and local storage to improve your browsing experience. We do not collect personal data beyond what is necessary for registration, respecting your privacy and security at every step of the process.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAccept}
              className="flex-1"
              size="lg"
            >
              Aceitar / Accept
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1"
              size="lg"
            >
              Recusar / Decline
            </Button>
            <PrivacyPolicyDialog>
              <Button
                variant="ghost"
                className="flex-1"
                size="lg"
              >
                Política de Privacidade / Privacy Policy
              </Button>
            </PrivacyPolicyDialog>
          </div>
        </div>
      </Card>
    </div>
  );
};