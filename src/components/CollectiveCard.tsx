import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
        group relative overflow-hidden
        bg-card/80 backdrop-blur-sm
        border-primary/30 hover:border-primary
        transition-all duration-300
        hover:shadow-lg hover:shadow-primary/20
        hover:-translate-y-1
        ${highlight ? 'ring-2 ring-primary/50' : ''}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="bible-subtitle text-primary group-hover:text-primary/90 transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="bible-caption text-muted-foreground mt-1">
              {period}
            </CardDescription>
          </div>
          {icon && (
            <div className="text-primary/60 group-hover:text-primary transition-colors">
              {icon}
            </div>
          )}
        </div>
        
        {role && (
          <Badge variant="outline" className="w-fit mt-2 text-xs">
            {role}
          </Badge>
        )}
      </CardHeader>
      
      <CardContent className="relative">
        <p className="bible-body text-foreground/90 leading-relaxed">
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs font-normal"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
