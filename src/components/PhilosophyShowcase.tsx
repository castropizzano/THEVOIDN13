import { Card } from "@/components/ui/card";
import { BilingualContent } from "./BilingualSection";
import { useState } from "react";
import MediaDialog from "./MediaDialog";
import { useTranslation } from "@/hooks/useTranslation";

interface PhilosophyReference {
  titleKey: string;
  authorKey: string;
  yearKey: string;
  descriptionKey: string;
  contextKey: string;
  link: string;
  action?: "external" | "video" | "audio" | "pdf";
}

export default function PhilosophyShowcase() {
  const { t, language } = useTranslation();
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
      titleKey: "wayOfCode",
      authorKey: "Rick Rubin",
      yearKey: "2024",
      descriptionKey: "wayOfCodeDesc",
      contextKey: "taoTeChingContext",
      link: "https://www.thewayofcode.com",
      action: "external"
    },
    {
      titleKey: "vibeCoding",
      authorKey: "Rick Rubin",
      yearKey: "2024",
      descriptionKey: "vibeCodingMethodDesc",
      contextKey: "lovableContext",
      link: "https://www.youtube.com/watch?v=GvzaNZ67gQA",
      action: "video"
    },
    {
      titleKey: "punkRockCoding",
      authorKey: "Rick Rubin",
      yearKey: "2024",
      descriptionKey: "punkRockCodingDesc",
      contextKey: "lovableContext",
      link: "https://open.spotify.com/episode/1wbhdwipLP4EKyU5oVeNB9?si=LDS2TxBRR5qLOEtU983Tmw",
      action: "audio"
    },
    {
      titleKey: "LOVABLE",
      authorKey: "philosophyMetaRef",
      yearKey: "2024",
      descriptionKey: "lovableDesc",
      contextKey: "lovableContext",
      link: "https://asset.empiricus.com.br/conteudos/ponto-cego-do-mercado/lovable-e-a-autofagia-do-software/",
      action: "external"
    },
    {
      titleKey: "taoTeChingTitle",
      authorKey: "Lao Tzu",
      yearKey: "~400 AC",
      descriptionKey: "taoTeChingDesc",
      contextKey: "taoTeChingContext",
      link: "/documents/Tao_Te_Ching.pdf",
      action: "pdf"
    },
    {
      titleKey: "processArt",
      authorKey: "philosophyMethodology",
      yearKey: "1960-2024",
      descriptionKey: "processArtDesc",
      contextKey: "processArtContext",
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
        title: t(phil.titleKey as any),
        type: "video",
        url: phil.link,
      });
    } else if (phil.action === "audio") {
      setMediaDialog({
        open: true,
        title: t(phil.titleKey as any),
        type: "audio",
        url: phil.link,
      });
    } else if (phil.action === "pdf") {
      setMediaDialog({
        open: true,
        title: t(phil.titleKey as any),
        type: "pdf",
        url: phil.link,
      });
    }
  };

  const getConnections = () => {
    return [
      {
        title: "PUNK ROCK (1976-1979)",
        description: t("connectionPunkRock"),
      },
      {
        title: "VIBE CODING (2024)",
        description: t("connectionVibeCoding"),
      },
      {
        title: "CINEMA PUNK (1977-1995)",
        description: t("connectionCinemaPunk"),
      },
      {
        title: language === "pt" ? "TAO DO CÓDIGO (400 AC - 2024)" : "TAO OF CODE (400 BC - 2024)",
        description: t("connectionTaoCoding"),
      }
    ];
  };

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
                    {t(phil.titleKey as any)}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {phil.authorKey === "philosophyMetaRef" || phil.authorKey === "philosophyMethodology" ? t(phil.authorKey as any) : phil.authorKey} • {phil.yearKey}
                  </p>
                </div>
                
                <p className="text-base leading-relaxed max-w-none">
                  {t(phil.descriptionKey as any)}
                </p>
                
                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-muted-foreground italic max-w-none">
                    {t(phil.contextKey as any)}
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
        {getConnections().map((connection, index) => (
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
