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
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-start items-start sm:items-center">
              <SurveillanceFreeBadge size="sm" />
              <a 
                href="https://pollinations.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 hover:bg-purple-500/20 transition-colors border border-purple-500/20 hover:border-purple-500/30"
              >
                <span className="text-[10px] sm:text-xs font-medium text-purple-400">
                  Powered by Pollinations.AI
                </span>
              </a>
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
