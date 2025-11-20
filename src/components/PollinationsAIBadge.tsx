import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PollinationsAIBadgeProps {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

export const PollinationsAIBadge = ({ 
  variant = "outline",
  size = "md" 
}: PollinationsAIBadgeProps) => {
  const sizeClasses = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
    lg: "text-sm px-3 py-1.5 gap-2"
  };

  const iconSizes = {
    sm: 10,
    md: 12,
    lg: 14
  };

  return (
    <a 
      href="https://pollinations.ai/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Badge 
        variant={variant}
        className={`cursor-pointer hover:bg-muted/50 transition-colors ${sizeClasses[size]} font-mono uppercase tracking-wide`}
      >
        <Sparkles className="flex-shrink-0" size={iconSizes[size]} />
        <span>Powered by Pollinations.AI</span>
      </Badge>
    </a>
  );
};
