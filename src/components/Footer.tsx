import { useTranslation } from "@/hooks/useTranslation";
import { SurveillanceFreeBadge } from "@/components/SurveillanceFreeBadge";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border bible-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold tracking-wide">THEVØIDN13</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t("artisticMemorial")}
            </p>
            <SurveillanceFreeBadge size="sm" />
          </div>
          <div className="text-left md:text-right space-y-2">
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t("copyright")} © 2025 Castro Pizzano
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Licensed under CC BY-NC-SA 4.0
            </p>
            <a 
              href="/transparency" 
              className="text-xs sm:text-sm text-primary hover:underline block"
            >
              {language === "pt" ? "Transparência Técnica" : "Technical Transparency"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
