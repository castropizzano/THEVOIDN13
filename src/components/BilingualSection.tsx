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
  // Usa espaçamento minimalista definitivo
  const customPadding = className.match(/py-\d+/)?.[0] || "py-16 sm:py-20 md:py-24";
  const otherClasses = className.replace(/py-\d+/g, "").trim();
  
  return (
    <section className={`${customPadding} bg-[#0C0C0C] ${bgClassName}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${otherClasses}`}>
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
  // Novo padrão: PT seguido de EN em formato vertical (nunca lado a lado)
  return (
    <div className="tvn-bilingual-block">
      {/* Conteúdo PT (principal) */}
      <div className="tvn-text-pt">
        {portugueseContent}
      </div>
      
      {/* Conteúdo EN (logo abaixo, italic, opacidade reduzida) */}
      <div className="tvn-text-en">
        {englishContent}
      </div>
    </div>
  );
};