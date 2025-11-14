import { Card } from "@/components/ui/card";
import { BilingualContent } from "./BilingualSection";
import { useState } from "react";
import MediaDialog from "./MediaDialog";

interface PhilosophyReference {
  title: string;
  author: string;
  year: string;
  description: string;
  context: string;
  link: string;
  action?: "external" | "video" | "audio" | "pdf";
}

export default function PhilosophyShowcase() {
  const [mediaDialog, setMediaDialog] = useState<{
    open: boolean;
    title: string;
    type: "video" | "audio" | "pdf";
    url: string;
  }>({
    open: false,
    title: "",
    type: "video",
    url: "",
  });

  const philosophies: PhilosophyReference[] = [
    {
      title: "THE WAY OF CODE",
      author: "Rick Rubin",
      year: "2024",
      description: "Filosofia criativa que conecta o Tao Te Ching com desenvolvimento de software, propondo que código seja tratado como arte contemplativa.",
      context: "Metodologia de não-ação criativa (Wu Wei) aplicada à programação",
      link: "https://www.thewayofcode.com",
      action: "external"
    },
    {
      title: "VIBE CODING",
      author: "Rick Rubin",
      year: "2024",
      description: "Abordagem intuitiva de programação mediada por IA, onde o desenvolvedor atua como diretor criativo ao invés de executor técnico.",
      context: "Democratização do acesso ao desenvolvimento via ferramentas de IA",
      link: "https://www.youtube.com/watch?v=GvzaNZ67gQA",
      action: "video"
    },
    {
      title: "PUNK ROCK OF CODING",
      author: "Rick Rubin",
      year: "2024",
      description: "IA como movimento revolucionário no desenvolvimento: acessível, rebelde, democratizante. Paralelo com o punk rock dos anos 70.",
      context: "Resistência criativa contra elitismo técnico e barreiras de entrada",
      link: "https://open.spotify.com/episode/1wbhdwipLP4EKyU5oVeNB9?si=LDS2TxBRR5qLOEtU983Tmw",
      action: "audio"
    },
    {
      title: "LOVABLE",
      author: "Meta-Referência",
      year: "2024",
      description: "Ferramenta de co-criação humano-IA que materializa os princípios de vibe coding e resistência criativa. Este site foi construído com ela.",
      context: "Praxis concreta da filosofia punk rock do código",
      link: "https://asset.empiricus.com.br/conteudos/ponto-cego-do-mercado/lovable-e-a-autofagia-do-software/",
      action: "external"
    },
    {
      title: "TAO TE CHING",
      author: "Lao Tzu",
      year: "~400 AC",
      description: "Texto fundacional do Taoísmo sobre fluxo, não-ação criativa (Wu Wei) e harmonia com processos naturais. Base filosófica de The Way of Code.",
      context: "Sabedoria ancestral sobre criatividade sem esforço forçado",
      link: "https://ia902905.us.archive.org/32/items/plus-mystics/PLUS%20MYSTICS/EBOOK/ENG/TAO/OKE/Tao%20Te%20Ching%20The%20New%20Translation%20from%20Tao%20Te%20Ching%2C%20The%20Definitive%20Edition.pdf",
      action: "pdf"
    },
    {
      title: "PROCESS ART",
      author: "Metodologia",
      year: "1960-2024",
      description: "Arte como processo performativo documentado, não apenas produto final. O caminho criativo é a obra—cada decisão, iteração e transformação tem valor artístico.",
      context: "Documentação performática do desenvolvimento como arte conceitual",
      link: "https://arthistoryunstuffed.com/process-art/",
      action: "external"
    }
  ];

  const handleCardClick = (e: React.MouseEvent, phil: PhilosophyReference) => {
    e.preventDefault();
    
    if (phil.action === "external") {
      window.open(phil.link, "_blank", "noopener,noreferrer");
    } else if (phil.action === "video") {
      setMediaDialog({
        open: true,
        title: phil.title,
        type: "video",
        url: phil.link,
      });
    } else if (phil.action === "audio") {
      setMediaDialog({
        open: true,
        title: phil.title,
        type: "audio",
        url: phil.link,
      });
    } else if (phil.action === "pdf") {
      setMediaDialog({
        open: true,
        title: phil.title,
        type: "pdf",
        url: phil.link,
      });
    }
  };

  const connections = [
    {
      title: "PUNK ROCK (1976-1979)",
      description: "Democratização da música: três acordes e a verdade. Resistência ao virtuosismo elitista, acesso radical à expressão.",
    },
    {
      title: "VIBE CODING (2024)",
      description: "Democratização do código: prompts e intuição. Resistência ao elitismo técnico, acesso radical ao desenvolvimento.",
    },
    {
      title: "CINEMA PUNK (1977-1995)",
      description: "Estética da precariedade: Kids, Fallen Angels, The Warriors. Beleza no imperfeito, verdade no marginal.",
    },
    {
      title: "TAO DO CÓDIGO (400 AC - 2024)",
      description: "Wu Wei criativo: fluxo natural, não-ação proposital. Da filosofia ancestral ao desenvolvimento contemporâneo.",
    }
  ];

  return (
    <section className="space-y-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <BilingualContent
        portugueseContent={
          <>
            <h3 className="bible-subtitle text-left section-title">FILOSOFIA & METODOLOGIA</h3>
            <p className="text-muted-foreground text-left mt-4 text-base leading-relaxed max-w-none section-paragraph">
              Referências conceituais que estruturam a abordagem criativa e metodológica do projeto. 
              Da sabedoria ancestral do Tao Te Ching à revolução contemporânea do vibe coding, 
              essas filosofias informam tanto o processo quanto o produto.
            </p>
          </>
        }
        englishContent={
          <>
            <h3 className="bible-subtitle text-left section-title">PHILOSOPHY & METHODOLOGY</h3>
            <p className="text-muted-foreground text-left mt-4 text-base leading-relaxed max-w-none section-paragraph">
              Conceptual references that structure the project's creative and methodological approach. 
              From the ancestral wisdom of Tao Te Ching to the contemporary revolution of vibe coding, 
              these philosophies inform both process and product.
            </p>
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {philosophies.map((phil, index) => (
          <div
            key={index}
            onClick={(e) => handleCardClick(e, phil)}
            className="group cursor-pointer"
          >
            <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="h-1 bg-primary" />
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {phil.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {phil.author} • {phil.year}
                  </p>
                </div>
                
                <p className="text-base leading-relaxed max-w-none">
                  {phil.description}
                </p>
                
                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-muted-foreground italic max-w-none">
                    {phil.context}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <MediaDialog
        open={mediaDialog.open}
        onOpenChange={(open) => setMediaDialog({ ...mediaDialog, open })}
        title={mediaDialog.title}
        type={mediaDialog.type}
        url={mediaDialog.url}
      />

      <BilingualContent
        portugueseContent={
          <p className="text-left text-muted-foreground text-base leading-relaxed max-w-none section-paragraph">
            A intersecção entre resistência criativa, democratização tecnológica e filosofia contemplativa. 
            Do punk rock dos anos 70 ao vibe coding de 2024: a mesma energia, diferentes mídias.
          </p>
        }
        englishContent={
          <p className="text-left text-muted-foreground text-base leading-relaxed max-w-none section-paragraph">
            The intersection of creative resistance, technological democratization, and contemplative philosophy. 
            From 70s punk rock to 2024 vibe coding: same energy, different media.
          </p>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {connections.map((connection, index) => (
          <Card key={index} className="p-6 border-l-4 border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-xl">{connection.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mt-2">
                  {connection.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      </div>

      <div className="max-w-6xl mx-auto">
        <Card className="p-8 bg-gradient-to-br from-background via-background to-primary/5 border-2 border-primary/20 section-title">
          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle text-left mb-6 section-subtitle">A TESE CENTRAL</h3>
                <div className="space-y-4 text-left">
                  <p className="leading-relaxed text-base max-w-none section-paragraph">
                    Rick Rubin propõe que a IA no desenvolvimento de software é análoga ao punk rock na música: 
                    ambos democratizam acesso, desafiam gatekeepers estabelecidos e priorizam expressão autêntica 
                    sobre virtuosismo técnico.
                  </p>
                  <p className="leading-relaxed text-base max-w-none section-paragraph">
                    Nos anos 70, não era necessário ser músico virtuoso para formar uma banda—bastavam 
                    três acordes e algo a dizer. Em 2024, não é necessário ser engenheiro de software 
                    para construir aplicações—bastam prompts claros e visão criativa.
                  </p>
                  <p className="leading-relaxed text-base max-w-none section-paragraph">
                    THEVØIDN13 materializa essa filosofia: construído via co-criação humano-IA (Lovable), 
                    documentado como processo artístico performativo, estruturado pela filosofia contemplativa 
                    do Tao Te Ching aplicada ao código.
                  </p>
                  <blockquote className="text-primary italic text-lg font-medium border-l-4 border-primary pl-4 mt-6 section-paragraph">
                    "The punk rock of coding is here—three prompts and the truth."
                  </blockquote>
                </div>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle text-left mb-6 section-subtitle">THE CENTRAL THESIS</h3>
                <div className="space-y-4 text-left">
                  <p className="leading-relaxed text-base max-w-none section-paragraph">
                    Rick Rubin proposes that AI in software development is analogous to punk rock in music: 
                    both democratize access, challenge established gatekeepers, and prioritize authentic expression 
                    over technical virtuosity.
                  </p>
                  <p className="leading-relaxed text-base max-w-none section-paragraph">
                    In the 70s, you didn't need to be a virtuoso musician to form a band—three chords and something 
                    to say were enough. In 2024, you don't need to be a software engineer to build applications—clear 
                    prompts and creative vision suffice.
                  </p>
                  <p className="leading-relaxed text-base max-w-none section-paragraph">
                    THEVØIDN13 materializes this philosophy: built via human-AI co-creation (Lovable), 
                    documented as performative artistic process, structured by the contemplative philosophy 
                    of Tao Te Ching applied to code.
                  </p>
                  <blockquote className="text-primary italic text-lg font-medium border-l-4 border-primary pl-4 mt-6 section-paragraph">
                    "The punk rock of coding is here—three prompts and the truth."
                  </blockquote>
                </div>
              </>
            }
          />
        </Card>
      </div>
    </section>
  );
}
