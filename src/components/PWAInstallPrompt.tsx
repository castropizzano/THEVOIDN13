import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Check if user has dismissed before
      const dismissed = localStorage.getItem('pwa_install_dismissed');
      if (!dismissed) {
        setShowPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowPrompt(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('PWA installed');
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa_install_dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <Card className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 p-4 bg-card border-primary/30 shadow-lg">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
          <Download className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="bible-subtitle text-sm font-semibold">
              Instalar THEVØIDN13
            </h3>
            <p className="bible-body text-xs text-muted-foreground mt-1">
              Acesso offline, carregamento rápido e experiência nativa
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={handleInstall}
              className="flex-1"
            >
              Instalar
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleDismiss}
            >
              Depois
            </Button>
          </div>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="flex-shrink-0 h-8 w-8"
          onClick={handleDismiss}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};
