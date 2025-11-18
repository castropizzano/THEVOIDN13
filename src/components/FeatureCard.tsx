import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  icon?: ReactNode;
}

export const FeatureCard = ({ title, description, buttonText, onClick }: FeatureCardProps) => {
  return (
    <Card className="bg-card/80 border-primary/30 hover:border-primary transition-colors">
      <CardHeader>
        <CardTitle className="bible-title text-primary">
          {title}
        </CardTitle>
        <CardDescription className="bible-body text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={onClick}
          variant="outline"
          className="w-full justify-start text-left"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};
