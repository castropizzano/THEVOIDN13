import { Card } from "@/components/ui/card";
import { BilingualSection } from "@/components/BilingualSection";

export const SkatePunkInterview = () => {
  return (
    <BilingualSection className="py-16">
      <div className="bible-bilingual-grid bible-block-spacing">
        <div>
          <h2 className="bible-title">SKATE PUNK — PROCESSOS CRIATIVOS</h2>
          <p className="bible-subtitle text-primary mt-2">Entrevista</p>
        </div>
        <div>
          <h2 className="bible-title">SKATE PUNK — CREATIVE PROCESSES</h2>
          <p className="bible-subtitle text-primary mt-2">Interview</p>
        </div>
      </div>

      <div className="bible-bilingual-grid bible-section-spacing mt-8">
        <div>
          <p className="bible-body">
            Podcast Chiclé Vídeos — Conversa sobre a trajetória criativa, os bastidores do LowMovie™, a relação entre skate e audiovisual, e os processos colaborativos do coletivo LowPressure™.
          </p>
        </div>
        <div>
          <p className="bible-body">
            Podcast Chiclé Vídeos — Conversation about the creative trajectory, the backstage of LowMovie™, the relationship between skateboarding and audiovisual, and the collaborative processes of the LowPressure™ collective.
          </p>
        </div>
      </div>

      {/* Single YouTube Video Player */}
      <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/50 shadow-lg shadow-primary/10 my-12 max-w-6xl mx-auto">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/rOoUJyzGkDY"
          title="Skate Punk — Processos Criativos — Castro Pizzano"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      <div className="bible-bilingual-grid bible-section-spacing mt-8">
        <div>
          <div className="space-y-6">
            <p className="bible-body">
              Esta entrevista é fundamental para a compreensão dos processos criativos que permeiam o universo do skate punk. 
              Através de conversas em profundidade com membros do coletivo LowPressure™, exploramos como o corpo em movimento, 
              a cultura de rua e a estética DIY se entrelaçam na construção de uma linguagem audiovisual única.
            </p>
            
            <Card className="p-6 border-l-4 border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="space-y-4">
                <h3 className="bible-subtitle">Tópicos da Conversa</h3>
                <ul className="space-y-2 bible-body">
                  <li>• <span className="font-semibold">Corpo e Movimento:</span> O skate como método, o andar como epistemologia</li>
                  <li>• <span className="font-semibold">Estética Punk DIY:</span> Criação artesanal, experimental e colaborativa</li>
                  <li>• <span className="font-semibold">Cidade como Fluxo:</span> A paisagem urbana como território simbólico</li>
                  <li>• <span className="font-semibold">Coletivo:</span> Práticas relacionais e processos compartilhados</li>
                </ul>
              </div>
            </Card>

            <p className="text-muted-foreground text-sm italic mt-6">
              A entrevista completa reforça o lugar do corpo, do skate e da estética punk DIY como fundamentos metodológicos da pesquisa.
            </p>
          </div>
        </div>

        <div>
          <div className="space-y-6">
            <p className="bible-body">
              This interview is fundamental to understanding the creative processes that permeate the skate punk universe. 
              Through in-depth conversations with members of the LowPressure™ collective, we explore how the body in movement, 
              street culture and DIY aesthetics intertwine in the construction of a unique audiovisual language.
            </p>
            
            <Card className="p-6 border-l-4 border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="space-y-4">
                <h3 className="bible-subtitle">Conversation Topics</h3>
                <ul className="space-y-2 bible-body">
                  <li>• <span className="font-semibold">Body and Movement:</span> Skateboarding as method, walking as epistemology</li>
                  <li>• <span className="font-semibold">Punk DIY Aesthetics:</span> Artisanal, experimental and collaborative creation</li>
                  <li>• <span className="font-semibold">City as Flow:</span> Urban landscape as symbolic territory</li>
                  <li>• <span className="font-semibold">Collective:</span> Relational practices and shared processes</li>
                </ul>
              </div>
            </Card>

            <p className="text-muted-foreground text-sm italic mt-6">
              The complete interview reinforces the place of the body, skateboarding and punk DIY aesthetics as methodological foundations of the research.
            </p>
          </div>
        </div>
      </div>
    </BilingualSection>
  );
};
