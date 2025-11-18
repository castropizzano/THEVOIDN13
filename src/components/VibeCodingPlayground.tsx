import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RotateCcw } from "lucide-react";
import { BilingualContent } from "./BilingualSection";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const examplePrompts = [
  {
    pt: "Criar um botão animado que brilha ao passar o mouse",
    en: "Create an animated button that glows on hover",
    output: `<button className="relative overflow-hidden
  bg-primary text-primary-foreground
  px-6 py-3 rounded-lg
  transition-all duration-300
  hover:shadow-lg hover:shadow-primary/50
  hover:scale-105">
  Click Me
</button>`
  },
  {
    pt: "Fazer um card de perfil com foto e bio",
    en: "Make a profile card with photo and bio",
    output: `<div className="max-w-sm rounded-lg
  border border-border bg-card p-6">
  <img src="/avatar.jpg" 
    className="w-24 h-24 rounded-full mx-auto" />
  <h3 className="text-xl font-bold mt-4 text-center">
    John Doe
  </h3>
  <p className="text-muted-foreground mt-2">
    Creative developer exploring AI-powered design
  </p>
</div>`
  },
  {
    pt: "Criar uma lista de tarefas com checkbox",
    en: "Create a todo list with checkboxes",
    output: `<ul className="space-y-2">
  {tasks.map(task => (
    <li key={task.id} 
      className="flex items-center gap-3">
      <input type="checkbox"
        checked={task.done}
        className="w-5 h-5" />
      <span className={task.done ? 
        "line-through text-muted-foreground" : ""}>
        {task.text}
      </span>
    </li>
  ))}
</ul>`
  }
];

export default function VibeCodingPlayground() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      // Find matching example or use generic output
      const matchingExample = examplePrompts.find(ex => 
        prompt.toLowerCase().includes(ex.pt.toLowerCase().split(" ")[1]) ||
        prompt.toLowerCase().includes(ex.en.toLowerCase().split(" ")[1])
      );
      
      setOutput(matchingExample?.output || `// ${prompt}\n\n<div className="p-4 rounded-lg border border-border">\n  {/* Your creative vision here */}\n</div>`);
      setIsGenerating(false);
    }, 1500);
  };

  const handleReset = () => {
    setPrompt("");
    setOutput("");
  };

  const handleExampleClick = (example: typeof examplePrompts[0]) => {
    setPrompt(language === "pt" ? example.pt : example.en);
    setOutput(example.output);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <BilingualContent
          portugueseContent={
            <>
              <h3 className="bible-subtitle text-left section-title">VIBE CODING PLAYGROUND</h3>
              <p className="text-left text-muted-foreground mt-4 text-base leading-relaxed max-w-none section-paragraph">
                Experimente o desenvolvimento intuitivo mediado por IA. Escreva o que você imagina, 
                veja como a intenção criativa se transforma em código. Teoria encontra prática.
              </p>
            </>
          }
          englishContent={
            <>
              <h3 className="bible-subtitle text-left section-title">VIBE CODING PLAYGROUND</h3>
              <p className="text-left text-muted-foreground mt-4 text-base leading-relaxed max-w-none section-paragraph">
                Experience intuitive AI-mediated development. Write what you imagine, 
                watch creative intention transform into code. Theory meets practice.
              </p>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Side */}
        <Card className="p-6 space-y-4 bg-card/80 border-primary/30">
          <h4 className="text-accent font-mono text-sm font-bold mb-4">
            <BilingualContent
              portugueseContent="[SUA_VISÃO]"
              englishContent="[YOUR_VISION]"
            />
          </h4>

          <Textarea
            placeholder={language === "pt" ? "// Descreva o que você quer criar..." : "// Describe what you want to create..."}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] font-mono text-sm bg-black/50 border-primary/30"
          />

          <div className="flex gap-2">
            <Button 
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="flex-1"
            >
              {isGenerating ? t("generating") : t("generateStill")}
            </Button>
            <Button 
              onClick={handleReset}
              variant="outline"
              size="icon"
            >
              ✕
            </Button>
          </div>

          <div className="pt-4 border-t border-primary/20">
            <p className="text-xs font-mono text-muted-foreground mb-3">
              <BilingualContent
                portugueseContent="// exemplos rápidos"
                englishContent="// quick examples"
              />
            </p>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((example, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  size="sm"
                  onClick={() => handleExampleClick(example)}
                  className="text-xs"
                >
                  {language === "pt" ? example.pt : example.en}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Output Side */}
        <Card className="p-6 space-y-4 bg-card/80 border-primary/30">
          <h4 className="text-accent font-mono text-sm font-bold mb-4">
            <BilingualContent
              portugueseContent="[CÓDIGO_GERADO]"
              englishContent="[GENERATED_CODE]"
            />
          </h4>

          <div className="relative">
            <pre className="bg-black/50 border border-primary/30 rounded-lg p-4 overflow-x-auto min-h-[200px]">
              <code className="text-xs font-mono">
                {output || (language === "pt" 
                  ? "// O código aparecerá aqui...\n// Escreva um prompt acima para começar." 
                  : "// Code will appear here...\n// Write a prompt above to start."
                )}
              </code>
            </pre>
            {output && (
              <div className="absolute top-2 right-2">
                <div className="bg-primary/20 text-primary text-xs px-2 py-1 rounded font-mono border border-primary/30">
                  {language === "pt" ? "// gerado" : "// generated"}
                </div>
              </div>
            )}
          </div>

          <div className="bg-background/30 border border-primary/20 rounded-lg p-4">
            <p className="text-xs font-mono text-muted-foreground leading-relaxed">
              <BilingualContent
                portugueseContent="// A IA transforma intenção em estrutura. O código emerge do pensamento."
                englishContent="// AI transforms intention into structure. Code emerges from thought."
              />
            </p>
          </div>
        </Card>
      </div>

      {/* Philosophy Connection */}
      <Card className="p-8 bg-gradient-to-br from-background via-background to-blue-500/5 border-2 border-blue-500/20 section-title">
        <BilingualContent
          portugueseContent={
            <div className="space-y-4 text-left">
              <h4 className="font-bold text-xl section-subtitle">DA TEORIA À PRÁTICA</h4>
              <p className="leading-relaxed text-base max-w-none section-paragraph">
                Este playground materializa os princípios de <strong>The Way of Code</strong>: 
                desenvolvimento como fluxo criativo (Wu Wei), não como execução técnica forçada.
              </p>
              <p className="leading-relaxed text-base max-w-none section-paragraph">
                Aqui você experimenta o <strong>Punk Rock of Coding</strong>—acesso democratizado, 
                sem necessidade de anos de estudo técnico. A barreira entre ideia e realização 
                se dissolve.
              </p>
              <p className="text-sm italic text-muted-foreground section-paragraph">
                "The best code is the code you don't have to write—just imagine."
              </p>
            </div>
          }
          englishContent={
            <div className="space-y-4 text-left">
              <h4 className="font-bold text-xl section-subtitle">FROM THEORY TO PRACTICE</h4>
              <p className="leading-relaxed text-base max-w-none section-paragraph">
                This playground materializes <strong>The Way of Code</strong> principles: 
                development as creative flow (Wu Wei), not forced technical execution.
              </p>
              <p className="leading-relaxed text-base max-w-none section-paragraph">
                Here you experience the <strong>Punk Rock of Coding</strong>—democratized access, 
                no need for years of technical study. The barrier between idea and realization 
                dissolves.
              </p>
              <p className="text-sm italic text-muted-foreground section-paragraph">
                "The best code is the code you don't have to write—just imagine."
              </p>
            </div>
          }
        />
      </Card>
      </div>
    </section>
  );
}
