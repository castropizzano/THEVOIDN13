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
        "bg-card/50 border-2 border-primary/50 hover:border-primary",
        "transition-all duration-300",
        className
      )}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-mono font-bold text-primary uppercase tracking-wide">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs font-mono text-muted-foreground leading-relaxed">
          {content}
        </p>
      </CardContent>
    </Card>
  );
};
