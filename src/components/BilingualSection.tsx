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
  // Padding padronizado: 80px desktop / 64px mobile
  // Remove qualquer py-* customizado do className
  const cleanClassName = className.replace(/py-\d+/g, "").trim();
  
  return <section className="py-12 md:py-20 bg-background">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${cleanClassName}`}>
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