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
  // Extract custom py-* class from className if present, otherwise use py-20 (80px)
  const customPadding = className.match(/py-\d+/)?.[0] || "py-20";
  const otherClasses = className.replace(/py-\d+/g, "").trim();
  
  // THEVØIDN13 v1.3b: max-width 1320px, espaçamento 80px entre seções
  return <section className={`${customPadding} bg-background`}>
      <div className={`max-w-[1320px] mx-auto px-4 sm:px-6 ${otherClasses}`}>
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
  // Aplica automaticamente classes de espaçamento nos títulos e parágrafos
  const processContent = (content: React.ReactNode) => {
    return content;
  };

  return <div className="bilingual-grid">
      <div className="bilingual-col">
        {processContent(portugueseContent)}
      </div>
      <div className="bilingual-col">
        {processContent(englishContent)}
      </div>
    </div>;
};