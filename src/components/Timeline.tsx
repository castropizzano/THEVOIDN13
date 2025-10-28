import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Camera, Film, GraduationCap, Home, Sparkles, Trophy, Users, Video } from "lucide-react";
import { useState } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2008",
    title: "CasaTrezeStudio",
    description: "Fundação do laboratório criativo independente. A casa onde cresci transforma-se em abrigo coletivo para experimentação visual e audiovisual.",
    icon: <Home className="w-5 h-5" />,
  },
  {
    year: "2017-2020",
    title: "Docência em Economia Criativa",
    description: "Professor na Universidade Positivo. Articulação entre práticas criativas autônomas e pensamento acadêmico.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    year: "2021",
    title: "Formação do Coletivo LowPressure™",
    description: "Consolidação do coletivo de artistas-skatistas. Início do processo criativo que culminaria no LowMovie™.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    year: "2022-2023",
    title: "Produção do LowMovie™",
    description: "Filmagens, sessões nas ruas de Curitiba, montagem colaborativa. Criação das trilhas sonoras originais por Dan Guinski e Raphael Carvalho.",
    icon: <Camera className="w-5 h-5" />,
    highlight: true,
  },
  {
    year: "2023",
    title: "Estreia do LowMovie™",
    description: "Première do filme. Início das exibições em mostras independentes, universidades e projetos de formação. Lançamento dos álbuns Like Rats on Hostile Paths e Lowbyrinth EP.",
    icon: <Film className="w-5 h-5" />,
    highlight: true,
  },
  {
    year: "2024",
    title: "Ingresso no Mestrado PPG-CINEAV",
    description: "Início da pesquisa acadêmica sobre processos de criação no cinema e artes do vídeo. Qualificação da dissertação sobre o LowMovie™ e práticas colaborativas.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    year: "2024",
    title: "Jogos Olímpicos Paris 2024",
    description: "Integrantes do LowPressure™ representam o Brasil: Augusto Akio (Japinha) conquista bronze no skatepark; Luigi Cini (Lui) compete na categoria street.",
    icon: <Trophy className="w-5 h-5" />,
    highlight: true,
  },
  {
    year: "2025",
    title: "Criação do Portal THEVØIDN13",
    description: "Expansão da metodologia híbrida para processos digitais. Memorial visual performático que integra co-criação humano-máquina. Experimentação com IAs como parceiras criativas.",
    icon: <Sparkles className="w-5 h-5" />,
    highlight: true,
  },
  {
    year: "2025",
    title: "Defesa da Dissertação",
    description: "LowMovie™ e o Labirinto Criativo: apresentação do processo de pesquisa que entrelaça corpo, cidade e imagem. Obra como gesto inaugural de uma estética em movimento.",
    icon: <Video className="w-5 h-5" />,
    highlight: true,
  },
  {
    year: "Futuro",
    title: "LowTour & Expansões",
    description: "Turnê latino-americana planejada. Novos desdobramentos transmídia do universo LowMovie™. Continuidade da experimentação entre rua, tela e código.",
    icon: <Sparkles className="w-5 h-5" />,
  },
];

export const Timeline = () => {
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  return (
    <Card className="bg-card/80 border-primary/30">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          <div>
            <CardTitle className="text-2xl font-bold text-primary">
              Timeline Criativa / Creative Timeline
            </CardTitle>
            <CardDescription className="text-base">
              Percurso entre a rua e a pesquisa / Journey between street and research
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="relative pl-20 group"
              >
                {/* Icon Circle */}
                <div
                  className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
                    ${event.highlight 
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/20" 
                      : "bg-card border-2 border-primary/30 text-primary hover:bg-primary/10"
                    }
                    ${expandedYear === event.year ? "scale-110 ring-4 ring-primary/30" : ""}
                  `}
                  onClick={() => setExpandedYear(expandedYear === event.year ? null : event.year)}
                >
                  {event.icon}
                </div>

                {/* Content */}
                <div
                  className={`bg-card/60 border rounded-lg p-6 transition-all duration-300 cursor-pointer
                    ${event.highlight 
                      ? "border-primary/50 hover:border-primary" 
                      : "border-border hover:border-primary/30"
                    }
                    ${expandedYear === event.year ? "border-primary shadow-lg shadow-primary/20" : ""}
                  `}
                  onClick={() => setExpandedYear(expandedYear === event.year ? null : event.year)}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold text-primary">{event.year}</h3>
                    {event.highlight && (
                      <span className="text-xs uppercase tracking-wide text-primary font-medium">
                        Marco
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                  <p
                    className={`text-sm text-muted-foreground transition-all duration-300
                      ${expandedYear === event.year ? "line-clamp-none" : "line-clamp-2"}
                    `}
                  >
                    {event.description}
                  </p>
                  {expandedYear !== event.year && event.description.length > 100 && (
                    <button className="text-xs text-primary hover:underline mt-2">
                      Expandir →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex items-center gap-6 flex-wrap text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary" />
              <span className="text-muted-foreground">Marcos principais</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-primary/30" />
              <span className="text-muted-foreground">Eventos contextuais</span>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
          <p className="text-sm text-muted-foreground italic">
            <span className="font-bold text-foreground">Lowbyrinth™:</span> Um percurso não-linear, 
            espiralado, onde cada dobra revela novas camadas de sentido. 
            A timeline não é sequência — é constelação de experiências que vibram juntas.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
