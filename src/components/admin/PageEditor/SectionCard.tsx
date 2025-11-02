import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface SectionCardProps {
  title: string;
  sectionNumber: number;
  children: ReactNode;
}

export const SectionCard = ({ title, sectionNumber, children }: SectionCardProps) => {
  return (
    <Card className="border-l-4 border-l-primary">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
            {sectionNumber}
          </span>
          <span className="bible-subtitle">{title}</span>
        </CardTitle>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent className="space-y-4">
        {children}
      </CardContent>
    </Card>
  );
};
