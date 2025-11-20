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
      <CardHeader className="pb-3">
        <CardTitle className="bible-subtitle text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="bible-body text-muted-foreground leading-relaxed">
          {content}
        </p>
      </CardContent>
    </Card>
  );
};
