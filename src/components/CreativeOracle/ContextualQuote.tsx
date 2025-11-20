import { useLanguage } from "@/contexts/LanguageContext";
import { contextualQuotesByQuestion } from "./data/contextualQuotes";

interface ContextualQuoteProps {
  questionIndex: number;
}

export const ContextualQuote = ({ questionIndex }: ContextualQuoteProps) => {
  const { language } = useLanguage();
  const quote = contextualQuotesByQuestion[questionIndex];

  if (!quote) return null;

  return (
    <div className="border-l-2 border-accent/50 pl-4 py-3 space-y-2 bg-accent/5 rounded-r animate-fade-in">
      <div className="text-sm text-foreground/90 italic leading-relaxed">
        "{language === "pt" ? quote.text : quote.textEn}"
      </div>
      <div className="text-xs text-muted-foreground">
        — {quote.author}
        {quote.work && (
          <span className="text-muted-foreground/70">
            {", "}
            {language === "pt" ? quote.work : quote.workEn}
          </span>
        )}
      </div>
      {quote.context && (
        <div className="text-xs text-muted-foreground/80 pt-2 border-t border-accent/20">
          {language === "pt" ? quote.context : quote.contextEn}
        </div>
      )}
    </div>
  );
};
