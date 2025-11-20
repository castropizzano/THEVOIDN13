import { useTranslation } from "@/hooks/useTranslation";
import { SurveillanceFreeBadge } from "@/components/SurveillanceFreeBadge";
import { TechnicalTransparencyBadge } from "@/components/TechnicalTransparencyBadge";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-card border-t border-border bible-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:items-start">
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold tracking-wide h-[1.5rem] flex items-center">THEVØIDN13</h3>
            <p className="text-xs sm:text-sm text-muted-foreground h-[1.5rem] flex items-center">
              {t("artisticMemorial")}
            </p>
            <div className="flex justify-start">
              <SurveillanceFreeBadge size="sm" />
            </div>
          </div>
          <div className="text-left md:text-right space-y-2">
            <p className="text-xs sm:text-sm text-muted-foreground h-[1.5rem] flex items-center md:justify-end">
              {t("copyright")} © 2025 Castro Pizzano
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground h-[1.5rem] flex items-center md:justify-end">
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
