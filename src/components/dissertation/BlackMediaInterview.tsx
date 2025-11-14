import { Card } from "@/components/ui/card";
import { BilingualSection } from "@/components/BilingualSection";

export const BlackMediaInterview = () => {
  return (
    <BilingualSection className="py-16">
      <div className="bible-bilingual-grid bible-block-spacing">
        <div>
          <h2 className="bible-title">BLACK MEDIA SKATE — LOWMOVIE™</h2>
          <p className="bible-subtitle text-primary mt-2">Black View / Entrevista Coletiva</p>
        </div>
        <div>
          <h2 className="bible-title">BLACK MEDIA SKATE — LOWMOVIE™</h2>
          <p className="bible-subtitle text-primary mt-2">Black View / Collective Interview</p>
        </div>
      </div>

      <div className="bible-bilingual-grid bible-section-spacing mt-8">
        <div>
          <p className="bible-body">
            Black Media Skate — Conversa coletiva com toda a crew LowPressure™ sobre o processo de criação do LowMovie™, os bastidores das filmagens, a dinâmica do coletivo e o significado do filme para cada skatista.
          </p>
        </div>
        <div>
          <p className="bible-body">
            Black Media Skate — Collective conversation with the entire LowPressure™ crew about the creation process of LowMovie™, behind-the-scenes filming, collective dynamics and the meaning of the film for each skater.
          </p>
        </div>
      </div>

      {/* Single YouTube Video Player */}
      <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/50 shadow-lg shadow-primary/10 my-12 max-w-6xl mx-auto">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/YJEW5YB59Ws"
          title="Black Media Skate — LowMovie™ Black View"
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
              Esta entrevista coletiva reúne todos os membros da crew LowPressure™ para uma conversa aberta sobre o LowMovie™. 
              Conduzida pela Black Media Skate, a conversa explora as perspectivas individuais e coletivas sobre o processo criativo, 
              os desafios das filmagens, e como o filme cristalizou a identidade da crew.
            </p>
            
            <Card className="p-6 border-l-4 border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="space-y-4">
                <h3 className="bible-subtitle">Participantes</h3>
                <div className="grid grid-cols-2 gap-2 bible-body text-sm">
                  <div>
                    <p>• Castro Pizzano "Punk"</p>
                    <p>• Lucas Kovalski "Kovas"</p>
                    <p>• Miguel Oliveira "Jamal"</p>
                    <p>• Augusto Akio "Japinha"</p>
                    <p>• Gabriel Franco "Peralta"</p>
                    <p>• Raphael Meyer "Syd"</p>
                    <p>• Raphael Carvalho "Relvi"</p>
                  </div>
                  <div>
                    <p>• Pedro Henrique "Punkinho"</p>
                    <p>• Giovanni Fontanella "Anão"</p>
                    <p>• Eduardo Alvares "Ducas"</p>
                    <p>• Luigi Cini</p>
                    <p>• Dan Guinski "Non-Grata"</p>
                    <p>• Rafael Auto Leite "Rafão VM"</p>
                    <p>• E outros membros da crew</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/50 border border-border/50">
              <h3 className="bible-subtitle mb-4">Transcrição Completa</h3>
              <p className="bible-body mb-4">
                A transcrição completa desta entrevista está disponível para consulta acadêmica:
              </p>
              <a 
                href="/documents/Black_Media_Skate_LowMovie_Interview.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="bible-link hover:underline inline-flex items-center gap-2"
              >
                📄 Baixar Transcrição (PDF)
              </a>
            </Card>

            <p className="text-muted-foreground text-sm italic mt-6">
              Esta entrevista documenta as vozes plurais da crew, revelando como o LowMovie™ é simultaneamente projeto individual e construção coletiva.
            </p>
          </div>
        </div>

        <div>
          <div className="space-y-6">
            <p className="bible-body">
              This collective interview brings together all members of the LowPressure™ crew for an open conversation about LowMovie™. 
              Conducted by Black Media Skate, the conversation explores individual and collective perspectives on the creative process, 
              filming challenges, and how the film crystallized the crew's identity.
            </p>
            
            <Card className="p-6 border-l-4 border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="space-y-4">
                <h3 className="bible-subtitle">Participants</h3>
                <div className="grid grid-cols-2 gap-2 bible-body text-sm">
                  <div>
                    <p>• Castro Pizzano "Punk"</p>
                    <p>• Lucas Kovalski "Kovas"</p>
                    <p>• Miguel Oliveira "Jamal"</p>
                    <p>• Augusto Akio "Japinha"</p>
                    <p>• Gabriel Franco "Peralta"</p>
                    <p>• Raphael Meyer "Syd"</p>
                    <p>• Raphael Carvalho "Relvi"</p>
                  </div>
                  <div>
                    <p>• Pedro Henrique "Punkinho"</p>
                    <p>• Giovanni Fontanella "Anão"</p>
                    <p>• Eduardo Alvares "Ducas"</p>
                    <p>• Luigi Cini</p>
                    <p>• Dan Guinski "Non-Grata"</p>
                    <p>• Rafael Auto Leite "Rafão VM"</p>
                    <p>• And other crew members</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/50 border border-border/50">
              <h3 className="bible-subtitle mb-4">Complete Transcription</h3>
              <p className="bible-body mb-4">
                The complete transcription of this interview is available for academic consultation:
              </p>
              <a 
                href="/documents/Black_Media_Skate_LowMovie_Interview.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="bible-link hover:underline inline-flex items-center gap-2"
              >
                📄 Download Transcription (PDF)
              </a>
            </Card>

            <p className="text-muted-foreground text-sm italic mt-6">
              This interview documents the crew's plural voices, revealing how LowMovie™ is simultaneously an individual project and collective construction.
            </p>
          </div>
        </div>
      </div>
    </BilingualSection>
  );
};
