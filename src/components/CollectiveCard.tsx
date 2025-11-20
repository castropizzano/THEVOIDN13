import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CollectiveCardProps {
  title: string;
  period: string;
  role?: string;
  description: string;
  tags?: string[];
  icon?: ReactNode;
  highlight?: boolean;
}

export const CollectiveCard = ({ 
  title, 
  period, 
  role, 
  description, 
  tags,
  icon,
  highlight = false 
}: CollectiveCardProps) => {
  return (
    <Card 
      className={`
        relative overflow-hidden
        bg-black/90 border-l-4 border-primary
        ${highlight ? 'border-primary' : 'border-primary/50'}
      `}
    >
      <CardHeader className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="bible-subtitle text-primary uppercase">
              {title}
            </CardTitle>
            <CardDescription className="font-mono text-xs text-muted-foreground mt-1">
              {period}
            </CardDescription>
          </div>
          {icon && (
            <div className="text-primary/60">
              {icon}
            </div>
          )}
        </div>
        
        {role && (
          <p className="font-mono text-xs text-muted-foreground mt-2">
            {role}
          </p>
        )}
      </CardHeader>
      
      <CardContent className="relative">
        <p className="font-mono text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
