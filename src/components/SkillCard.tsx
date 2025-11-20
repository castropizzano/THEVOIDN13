import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  content: string;
  className?: string;
}

export const SkillCard = ({ title, content, className }: SkillCardProps) => {
  return (
    <Card 
      className={cn(
        "bg-card/50 border border-primary/20 hover:border-primary/40",
        "transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-mono font-bold text-primary uppercase tracking-wide">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs font-mono text-muted-foreground leading-snug">
          {content}
        </p>
      </CardContent>
    </Card>
  );
};
