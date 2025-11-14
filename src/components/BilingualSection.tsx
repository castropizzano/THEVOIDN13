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
  
  // Container global 1400px fixo
  return <section className={`${customPadding} bg-background`}>
      <div className={`max-w-[1400px] mx-auto px-6 ${otherClasses}`}>
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
  // Grid bilíngue fixo 1fr 1fr com gap consistente
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      <div className="space-y-0">
        {portugueseContent}
      </div>
      <div className="space-y-0">
        {englishContent}
      </div>
    </div>;
};