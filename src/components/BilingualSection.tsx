import { useLanguage } from "@/contexts/LanguageContext";

interface BilingualSectionProps {
  children: React.ReactNode;
  className?: string;
  bgClassName?: string;
}

export const BilingualSection = ({
  children,
  className = "",
  bgClassName = ""
}: BilingualSectionProps) => {
  // Detect bible-section or py-* and apply spacing on wrapper
  const hasBibleSection = /\bbible-section\b/.test(className);
  const pyClass = className.match(/py-\d+/)?.[0];
  const wrapperSpacing = hasBibleSection ? "bible-section" : (pyClass ?? "bible-section");

  const cleanedClasses = className
    .replace(/\bbible-section\b/g, "")
    .replace(/py-\d+/g, "")
    .trim();

  return (
    <section className={`${wrapperSpacing} bg-background ${bgClassName}`.trim()}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${cleanedClasses}`.trim()}>
        {children}
      </div>
    </section>
  );
};

interface BilingualContentProps {
  portugueseContent: React.ReactNode;
  englishContent: React.ReactNode;
  alignTop?: boolean;
}

export const BilingualContent = ({
  portugueseContent,
  englishContent,
  alignTop = false
}: BilingualContentProps) => {
  const { language } = useLanguage();

  return (
    <div className="bilingual-content animate-fade-in">
      {language === "pt" ? portugueseContent : englishContent}
    </div>
  );
};