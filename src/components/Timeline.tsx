import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  highlight?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2008",
    title: "CasaTrezeStudio",
    titleEn: "CasaTrezeStudio",
    description: "Fundação do laboratório criativo independente. A casa onde cresci transforma-se em abrigo coletivo para experimentação visual e audiovisual.",
    descriptionEn: "Foundation of the independent creative laboratory. The house where I grew up transforms into a collective shelter for visual and audiovisual experimentation.",
  },
  {
    year: "2017-2020",
    title: "Docência em Economia Criativa",
    titleEn: "Teaching in Creative Economy",
    description: "Professor na Universidade Positivo. Articulação entre práticas criativas autônomas e pensamento acadêmico.",
    descriptionEn: "Professor at Universidade Positivo. Articulation between autonomous creative practices and academic thinking.",
  },
  {
    year: "2021",
    title: "Formação do Coletivo LowPressure™",
    titleEn: "Formation of LowPressure™ Collective",
    description: "Consolidação do coletivo de artistas-skatistas. Início do processo criativo que culminaria no LowMovie™.",
    descriptionEn: "Consolidation of the artist-skater collective. Beginning of the creative process that would culminate in LowMovie™.",
  },
  {
    year: "2022-2023",
    title: "Produção do LowMovie™",
    titleEn: "Production of LowMovie™",
    description: "Filmagens, sessões nas ruas de Curitiba, montagem colaborativa. Criação das trilhas sonoras originais por Dan Guinski e Raphael Carvalho.",
    descriptionEn: "Filming, sessions in the streets of Curitiba, collaborative editing. Creation of original soundtracks by Dan Guinski and Raphael Carvalho.",
    highlight: true,
  },
  {
    year: "2023",
    title: "Estreia do LowMovie™",
    titleEn: "LowMovie™ Premiere",
    description: "Première do filme. Início das exibições em mostras independentes, universidades e projetos de formação. Lançamento dos álbuns Like Rats on Hostile Paths e Lowbyrinth EP.",
    descriptionEn: "Film premiere. Beginning of screenings at independent festivals, universities and educational projects. Release of albums Like Rats on Hostile Paths and Lowbyrinth EP.",
    highlight: true,
  },
  {
    year: "2024",
    title: "Ingresso no Mestrado PPG-CINEAV",
    titleEn: "Entry into Master's Program PPG-CINEAV",
    description: "Início da pesquisa acadêmica sobre processos de criação no cinema e artes do vídeo. Qualificação da dissertação sobre o LowMovie™ e práticas colaborativas.",
    descriptionEn: "Beginning of academic research on creation processes in cinema and video arts. Qualification of dissertation on LowMovie™ and collaborative practices.",
  },
  {
    year: "2024",
    title: "Jogos Olímpicos Paris 2024",
    titleEn: "Paris 2024 Olympic Games",
    description: "Integrantes do LowPressure™ representam o Brasil: Augusto Akio (Japinha) conquista bronze no skatepark; Luigi Cini (Lui) compete na categoria street.",
    descriptionEn: "LowPressure™ members represent Brazil: Augusto Akio (Japinha) wins bronze in skatepark; Luigi Cini (Lui) competes in street category.",
    highlight: true,
  },
  {
    year: "2025",
    title: "Criação do Portal THEVØIDN13",
    titleEn: "Creation of THEVØIDN13 Portal",
    description: "Expansão da metodologia híbrida para processos digitais. Memorial visual performático que integra co-criação humano-máquina. Experimentação com IAs como parceiras criativas.",
    descriptionEn: "Expansion of hybrid methodology to digital processes. Performative visual memorial that integrates human-machine co-creation. Experimentation with AIs as creative partners.",
    highlight: true,
  },
  {
    year: "2025",
    title: "Defesa da Dissertação",
    titleEn: "Dissertation Defense",
    description: "LowMovie™ e o Labirinto Criativo: apresentação do processo de pesquisa que entrelaça corpo, cidade e imagem. Obra como gesto inaugural de uma estética em movimento.",
    descriptionEn: "LowMovie™ and the Creative Labyrinth: presentation of the research process that interweaves body, city and image. Work as inaugural gesture of an aesthetic in motion.",
    highlight: true,
  },
  {
    year: "Futuro",
    title: "LowTour & Expansões",
    titleEn: "LowTour & Expansions",
    description: "Turnê latino-americana planejada. Novos desdobramentos transmídia do universo LowMovie™. Continuidade da experimentação entre rua, tela e código.",
    descriptionEn: "Planned Latin American tour. New transmedia developments of LowMovie™ universe. Continuation of experimentation between street, screen and code.",
  },
];

export const Timeline = () => {
  return (
    <Card className="bg-card/80 border-primary/30">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          <span className="lang-pt">Timeline Criativa</span>
          <span className="lang-en">Creative Timeline</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="lang-pt">Percurso entre a rua e a pesquisa</span>
          <span className="lang-en">Journey between street and research</span>
        </CardDescription>
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
                {/* Year Circle */}
                <div
                  className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                    ${event.highlight 
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/20" 
                      : "bg-card border-2 border-primary/30 text-primary"
                    }
                  `}
                >
                  <span className="text-xs font-bold">{event.year.split('-')[0]}</span>
                </div>

                {/* Content */}
                <div
                  className={`bg-card/60 border rounded-lg p-6 transition-all duration-300
                    ${event.highlight 
                      ? "border-primary/50 hover:border-primary" 
                      : "border-border hover:border-primary/30"
                    }
                  `}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold text-primary">{event.year}</h3>
                    {event.highlight && (
                      <span className="text-xs uppercase tracking-wide text-primary font-medium">
                        Marco / Milestone
                      </span>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-border/50">
                      <h4 className="text-lg font-semibold mb-1">{event.titleEn}</h4>
                      <p className="text-sm text-muted-foreground">
                        {event.descriptionEn}
                      </p>
                    </div>
                  </div>
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
              <span className="text-muted-foreground">Marcos principais / Key milestones</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-primary/30" />
              <span className="text-muted-foreground">Eventos contextuais / Contextual events</span>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground italic">
              <span className="font-bold text-foreground">Lowbyrinth™:</span> Um percurso não-linear, 
              espiralado, onde cada dobra revela novas camadas de sentido. 
              A timeline não é sequência — é constelação de experiências que vibram juntas.
            </p>
            <p className="text-sm text-muted-foreground italic">
              <span className="font-bold text-foreground">Lowbyrinth™:</span> A non-linear path, 
              spiraling, where each fold reveals new layers of meaning. 
              The timeline is not a sequence — it is a constellation of experiences that vibrate together.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
