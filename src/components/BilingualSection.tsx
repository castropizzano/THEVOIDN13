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
  const customPadding = className.match(/py-\d+/)?.[0] || "py-20";
  const otherClasses = className.replace(/py-\d+/g, "").trim();
  
  // Sempre usar fundo Preto Sombra #1A1A1A (Bible v13)
  return <section className={`${customPadding} bg-background`}>
      <div className={`max-w-6xl mx-auto px-6 ${otherClasses}`}>
        {children}
      </div>
    </section>;
};
interface BilingualContentProps {
  portugueseContent: React.ReactNode;
  englishContent: React.ReactNode;
  alignTop?: boolean;
  showLabels?: boolean;
}
export const BilingualContent = ({
  portugueseContent,
  englishContent,
  alignTop = false,
  showLabels = true
}: BilingualContentProps) => {
  return <div className="bilingual-grid">
      <div className="bilingual-col">
        {showLabels && <p className="lang-pill">&lt;PORTUGUÊS&gt;</p>}
        {portugueseContent}
      </div>
      <div className="bilingual-col">
        {showLabels && <p className="lang-pill">&lt;ENGLISH&gt;</p>}
        {englishContent}
      </div>
    </div>;
};