import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PrivacyPolicyDialog } from "@/components/PrivacyPolicyDialog";
import { useTranslation } from "@/hooks/useTranslation";

interface SurveillanceFreeBadgeProps {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

export const SurveillanceFreeBadge = ({ 
  variant = "outline",
  size = "md" 
}: SurveillanceFreeBadgeProps) => {
  const { t } = useTranslation();

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
    <PrivacyPolicyDialog>
      <Badge 
        variant={variant}
        className={`cursor-pointer hover:bg-muted/50 transition-colors ${sizeClasses[size]} font-mono uppercase tracking-wide`}
      >
        <Shield className="flex-shrink-0" size={iconSizes[size]} />
        <span>{t("surveillanceFreeBadge")}</span>
      </Badge>
    </PrivacyPolicyDialog>
  );
};
