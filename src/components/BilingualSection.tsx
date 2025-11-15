import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BilingualSectionProps {
  children: React.ReactNode;
  className?: string;
  bgClassName?: string;
}

export const BilingualSection = ({
  children,
  className = "",
  bgClassName = ""
}: BilingualSectionProps) => {
  // Extract custom py-* class from className if present, otherwise use default py-20
  const customPadding = className.match(/py-\d+/)?.[0] || "py-12 sm:py-16 md:py-20";
  const otherClasses = className.replace(/py-\d+/g, "").trim();
  
  // Sempre usar fundo Preto Sombra #1A1A1A (Bible v13)
  return <section className={`${customPadding} bg-background`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${otherClasses}`}>
        {children}
      </div>
    </section>;
};

interface BilingualContentProps {
  portugueseContent: React.ReactNode;
  englishContent: React.ReactNode;
  alignTop?: boolean;
}

export const BilingualContent = ({
  portugueseContent,
  englishContent,
  alignTop = false
}: BilingualContentProps) => {
  // Persistir idioma selecionado no localStorage
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("preferred-language") || "pt";
    }
    return "pt";
  });

  useEffect(() => {
    localStorage.setItem("preferred-language", activeTab);
  }, [activeTab]);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
        <TabsTrigger value="pt" className="text-sm font-semibold uppercase tracking-wider">
          Português
        </TabsTrigger>
        <TabsTrigger value="en" className="text-sm font-semibold uppercase tracking-wider">
          English
        </TabsTrigger>
      </TabsList>

      <TabsContent value="pt" className="mt-0 animate-fade-in">
        <div className="bilingual-content">
          {portugueseContent}
        </div>
      </TabsContent>

      <TabsContent value="en" className="mt-0 animate-fade-in">
        <div className="bilingual-content">
          {englishContent}
        </div>
      </TabsContent>
    </Tabs>
  );
};