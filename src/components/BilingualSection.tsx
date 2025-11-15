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
  // Extract custom py-* class from className if present, otherwise use default py-20
  const customPadding = className.match(/py-\d+/)?.[0] || "py-12 sm:py-16 md:py-20";
  const otherClasses = className.replace(/py-\d+/g, "").trim();
  
  // Sempre usar fundo Preto Sombra #1A1A1A (Bible v13)
  return <section className={`${customPadding} bg-background`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${otherClasses}`}>
        {children}
      </div>
    </section>;
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
  return (
    <div className="space-y-16">
      {/* Conteúdo em Português */}
      <div className="bilingual-section">
        <div className="bilingual-lang-label">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">PT</span>
        </div>
        <div className="bilingual-content">
          {portugueseContent}
        </div>
      </div>

      {/* Separador sutil */}
      <div className="border-t border-border/30"></div>

      {/* Conteúdo em Inglês */}
      <div className="bilingual-section">
        <div className="bilingual-lang-label">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">EN</span>
        </div>
        <div className="bilingual-content">
          {englishContent}
        </div>
      </div>
    </div>
  );
};