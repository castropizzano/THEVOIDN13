interface BilingualSectionProps {
  children: React.ReactNode;
  className?: string;
  bgClassName?: string;
  id?: string;
}
export const BilingualSection = ({
  children,
  className = "",
  bgClassName = "",
  id
}: BilingualSectionProps) => {
  // Extract custom py-* class from className if present, otherwise use default py-20
  const customPadding = className.match(/py-\d+/)?.[0] || "py-12 sm:py-16 md:py-20";
  const otherClasses = className.replace(/py-\d+/g, "").trim();
  
  // Sempre usar fundo Preto Sombra #1A1A1A (Bible v13)
  return <section id={id} className={`${customPadding} bg-background`}>
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