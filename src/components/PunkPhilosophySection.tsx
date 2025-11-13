import { Card } from "@/components/ui/card";
import { BilingualContent } from "./BilingualSection";
import { Music, Code2, Film, BookOpen } from "lucide-react";

export default function PunkPhilosophySection() {
  const connections = [
    {
      icon: Music,
      title: "Punk Rock (1976-1979)",
      description: "Democratização da música: três acordes e a verdade. Resistência ao virtuosismo elitista, acesso radical à expressão.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Code2,
      title: "Vibe Coding (2024)",
      description: "Democratização do código: prompts e intuição. Resistência ao elitismo técnico, acesso radical ao desenvolvimento.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Film,
      title: "Cinema Punk (1977-1995)",
      description: "Estética da precariedade: Kids, Fallen Angels, The Warriors. Beleza no imperfeito, verdade no marginal.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: BookOpen,
      title: "Tao do Código (400 AC - 2024)",
      description: "Wu Wei criativo: fluxo natural, não-ação proposital. Da filosofia ancestral ao desenvolvimento contemporâneo.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 space-y-12">
      <BilingualContent
        portugueseContent={
          <>
            <h2 className="bible-title text-left">PUNK PHILOSOPHY</h2>
            <p className="text-left text-muted-foreground mt-4 text-base leading-relaxed">
              A intersecção entre resistência criativa, democratização tecnológica e filosofia contemplativa. 
              Do punk rock dos anos 70 ao vibe coding de 2024: a mesma energia, diferentes mídias.
            </p>
          </>
        }
        englishContent={
          <>
            <h2 className="bible-title text-left">PUNK PHILOSOPHY</h2>
            <p className="text-left text-muted-foreground mt-4 text-base leading-relaxed">
              The intersection of creative resistance, technological democratization, and contemplative philosophy. 
              From 70s punk rock to 2024 vibe coding: same energy, different media.
            </p>
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {connections.map((connection, index) => {
          const IconComponent = connection.icon;
          return (
            <Card key={index} className="p-6 border-l-4 border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-lg bg-gradient-to-br ${connection.gradient} bg-opacity-10`}>
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-bold text-xl">{connection.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {connection.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-8 bg-gradient-to-br from-background via-background to-primary/5 border-2 border-primary/20">
        <BilingualContent
          portugueseContent={
            <>
              <h3 className="bible-subtitle text-left mb-6">A TESE CENTRAL</h3>
              <div className="space-y-4 text-left">
                <p className="leading-relaxed text-base">
                  Rick Rubin propõe que a IA no desenvolvimento de software é análoga ao punk rock na música: 
                  ambos democratizam acesso, desafiam gatekeepers estabelecidos e priorizam expressão autêntica 
                  sobre virtuosismo técnico.
                </p>
                <p className="leading-relaxed text-base mt-4">
                  Nos anos 70, não era necessário ser músico virtuoso para formar uma banda—bastavam 
                  três acordes e algo a dizer. Em 2024, não é necessário ser engenheiro de software 
                  para construir aplicações—bastam prompts claros e visão criativa.
                </p>
                <p className="leading-relaxed text-base mt-4">
                  THEVØIDN13 materializa essa filosofia: construído via co-criação humano-IA (Lovable), 
                  documentado como processo artístico performativo, estruturado pela filosofia contemplativa 
                  do Tao Te Ching aplicada ao código.
                </p>
                <p className="text-sm italic text-muted-foreground mt-6">
                  "The punk rock of coding is here—three prompts and the truth."
                </p>
              </div>
            </>
          }
          englishContent={
            <>
              <h3 className="bible-subtitle text-left mb-6">THE CENTRAL THESIS</h3>
              <div className="space-y-4 text-left">
                <p className="leading-relaxed text-base">
                  Rick Rubin proposes that AI in software development is analogous to punk rock in music: 
                  both democratize access, challenge established gatekeepers, and prioritize authentic expression 
                  over technical virtuosity.
                </p>
                <p className="leading-relaxed text-base mt-4">
                  In the 70s, you didn't need to be a virtuoso musician to form a band—three chords 
                  and something to say were enough. In 2024, you don't need to be a software engineer 
                  to build applications—clear prompts and creative vision suffice.
                </p>
                <p className="leading-relaxed text-base mt-4">
                  THEVØIDN13 materializes this philosophy: built via human-AI co-creation (Lovable), 
                  documented as performative artistic process, structured by the contemplative philosophy 
                  of Tao Te Ching applied to code.
                </p>
                <p className="text-sm italic text-muted-foreground mt-6">
                  "The punk rock of coding is here—three prompts and the truth."
                </p>
              </div>
            </>
          }
        />
      </Card>
    </section>
  );
}
