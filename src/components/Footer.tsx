import { useTranslation } from "@/hooks/useTranslation";
import { SurveillanceFreeBadge } from "@/components/SurveillanceFreeBadge";
import { TechnicalTransparencyBadge } from "@/components/TechnicalTransparencyBadge";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-card border-t border-border bible-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 w-full md:w-auto">
            <h3 className="text-sm sm:text-base font-bold tracking-wide">THEVØIDN13</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t("artisticMemorial")}
            </p>
            <div className="flex justify-start">
              <SurveillanceFreeBadge size="sm" />
            </div>
          </div>
          <div className="text-left md:text-right space-y-2 w-full md:w-auto">
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t("copyright")} © 2025 Castro Pizzano
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Licensed under CC BY-NC-SA 4.0
            </p>
            <div className="flex justify-start md:justify-end">
              <TechnicalTransparencyBadge size="sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
