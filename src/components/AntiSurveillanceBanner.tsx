import { useState, useEffect } from "react";
import { Lock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PrivacyPolicyDialog } from "@/components/PrivacyPolicyDialog";
import { useTranslation } from "@/hooks/useTranslation";

export const AntiSurveillanceBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Check if banner was already seen in this session
    const bannerSeen = sessionStorage.getItem('antiSurveillanceBannerSeen');
    
    if (!bannerSeen) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('antiSurveillanceBannerSeen', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-2 fade-in duration-500">
      <div className="bg-background/95 backdrop-blur-md border-t border-border/40 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 mt-1">
              <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm sm:text-base mb-2 tracking-wide uppercase">
                {t("antiSurveillanceBannerTitle")}
              </h3>
              <p className="bible-body text-xs sm:text-sm text-muted-foreground">
                {t("antiSurveillanceBannerLine1")} {t("antiSurveillanceBannerLine2")} <span className="font-semibold text-foreground">{t("antiSurveillanceBannerLine3")}</span>
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                <Button
                  onClick={handleDismiss}
                  size="sm"
                  className="text-xs sm:text-sm"
                >
                  {t("antiSurveillanceBannerButtonGotIt")}
                </Button>
                
                <PrivacyPolicyDialog>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    {t("antiSurveillanceBannerButtonPolicy")}
                  </Button>
                </PrivacyPolicyDialog>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-1 rounded-md hover:bg-muted/50 transition-colors"
              aria-label="Close banner"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
