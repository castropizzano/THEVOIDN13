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
  return <section className={`${customPadding} ${bgClassName}`}>
      <div className={`max-w-6xl mx-auto px-6 ${otherClasses}`}>
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
  return <div className={`grid md:grid-cols-2 gap-12 ${alignTop ? 'items-start' : 'items-stretch'}`}>
      <div className="content-spacing w-full">
        <p className="label-bilingual">&lt;PORTUGUÊS&gt;</p>
        <div className="w-full">
          {portugueseContent}
        </div>
      </div>
      <div className="content-spacing w-full">
        <p className="label-bilingual">ENGLISH</p>
        <div className="w-full">
          {englishContent}
        </div>
      </div>
    </div>;
};