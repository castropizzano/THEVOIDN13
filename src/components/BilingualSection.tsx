interface BilingualSectionProps {
  children: React.ReactNode;
  className?: string;
  bgClassName?: string;
}

export const BilingualSection = ({ children, className = "", bgClassName = "" }: BilingualSectionProps) => {
  // Extract custom py-* class from className if present, otherwise use default py-20
  const customPadding = className.match(/py-\d+/)?.[0] || "py-20";
  const otherClasses = className.replace(/py-\d+/g, "").trim();
  
  return (
    <section className={`${customPadding} px-6 ${bgClassName}`}>
      <div className={`max-w-6xl mx-auto ${otherClasses}`}>
        {children}
      </div>
    </section>
  );
};

interface BilingualContentProps {
  portugueseContent: React.ReactNode;
  englishContent: React.ReactNode;
}

export const BilingualContent = ({ portugueseContent, englishContent }: BilingualContentProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-wider text-foreground/60">PORTUGUÊS</p>
        {portugueseContent}
      </div>
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-wider text-foreground/60">ENGLISH</p>
        {englishContent}
      </div>
    </div>
  );
};
