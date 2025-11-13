import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BilingualSection } from "@/components/BilingualSection";
import zine01 from "@/assets/zine/zine_01.png";
import zine02 from "@/assets/zine/zine_02.png";
import zine03 from "@/assets/zine/zine_03.png";
import zine04 from "@/assets/zine/zine_04.png";
import zine05 from "@/assets/zine/zine_05.png";
import zine06 from "@/assets/zine/zine_06.png";
import zine07 from "@/assets/zine/zine_07.png";
import zine08 from "@/assets/zine/zine_08.png";
import zine09 from "@/assets/zine/zine_09.png";
import zine10 from "@/assets/zine/zine_10.png";
import zine11 from "@/assets/zine/zine_11.png";
import zine12 from "@/assets/zine/zine_12.png";
import zine13 from "@/assets/zine/zine_13.png";
import zine14 from "@/assets/zine/zine_14.png";
import zine15 from "@/assets/zine/zine_15.png";
import zine16 from "@/assets/zine/zine_16.png";

export const InterviewsTabs = () => {
  const zineImages = [
    zine01, zine02, zine03, zine04, zine05, 
    zine06, zine07, zine08, zine09, zine10,
    zine11, zine12, zine13, zine14, zine15, zine16
  ];

  return (
    <BilingualSection className="py-16">
      <div className="bible-bilingual-grid bible-block-spacing mb-8">
        <div>
          <h2 className="bible-title">ENTREVISTAS & REGISTROS</h2>
          <p className="bible-subtitle text-primary mt-2">Processos e Conversas</p>
        </div>
        <div>
          <h2 className="bible-title">INTERVIEWS & RECORDS</h2>
          <p className="bible-subtitle text-primary mt-2">Processes and Conversations</p>
        </div>
      </div>

      <Tabs defaultValue="skate-punk" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="skate-punk">Skate Punk Interview</TabsTrigger>
          <TabsTrigger value="black-media">Black Media Interview</TabsTrigger>
          <TabsTrigger value="lowzine">LowZine Gallery</TabsTrigger>
        </TabsList>

        {/* Skate Punk Interview Tab */}
        <TabsContent value="skate-punk" className="space-y-8">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h3 className="bible-title">SKATE PUNK — PROCESSOS CRIATIVOS</h3>
              <p className="bible-subtitle text-primary mt-2">Entrevista Chiclé Vídeos</p>
            </div>
            <div>
              <h3 className="bible-title">SKATE PUNK — CREATIVE PROCESSES</h3>
              <p className="bible-subtitle text-primary mt-2">Chiclé Vídeos Interview</p>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing mt-8">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <p className="bible-body mt-6">
                Podcast Chiclé Vídeos — Conversa sobre a trajetória criativa, os bastidores do LowMovie™, a relação entre skate e audiovisual, e os processos colaborativos do coletivo LowPressure™.
              </p>
            </div>
            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <p className="bible-body mt-6">
                Podcast Chiclé Vídeos — Conversation about the creative trajectory, the backstage of LowMovie™, the relationship between skateboarding and audiovisual, and the collaborative processes of the LowPressure™ collective.
              </p>
            </div>
          </div>

          <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/50 shadow-lg shadow-primary/10 my-12 max-w-5xl mx-auto">
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
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <div className="space-y-6 mt-6">
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
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <div className="space-y-6 mt-6">
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
                      <li>• <span className="font-semibold">Punk DIY Aesthetics:</span> Handcrafted, experimental and collaborative creation</li>
                      <li>• <span className="font-semibold">City as Flow:</span> Urban landscape as symbolic territory</li>
                      <li>• <span className="font-semibold">Collective:</span> Relational practices and shared processes</li>
                    </ul>
                  </div>
                </Card>

                <p className="text-muted-foreground text-sm italic mt-6">
                  The complete interview reinforces the place of body, skateboarding and punk DIY aesthetics as methodological foundations of the research.
                </p>
              </div>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing mt-8">
            <div>
              <Card className="p-6 bg-background/50 border border-border/50">
                <h3 className="bible-subtitle mb-4">Transcrição Completa</h3>
                <p className="bible-body mb-4">
                  Acesse a transcrição completa da entrevista com todos os depoimentos e conversas sobre processos criativos.
                </p>
                <a 
                  href="/documents/Skate_Punk_Interview_Transcript.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Download da Transcrição (PDF)
                </a>
              </Card>
            </div>

            <div>
              <Card className="p-6 bg-background/50 border border-border/50">
                <h3 className="bible-subtitle mb-4">Full Transcription</h3>
                <p className="bible-body mb-4">
                  Access the complete interview transcription with all testimonials and conversations about creative processes.
                </p>
                <a 
                  href="/documents/Skate_Punk_Interview_Transcript.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Download Transcription (PDF)
                </a>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Black Media Interview Tab */}
        <TabsContent value="black-media" className="space-y-8">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h3 className="bible-title">BLACK MEDIA SKATE — LOWMOVIE™</h3>
              <p className="bible-subtitle text-primary mt-2">Black View / Entrevista Coletiva</p>
            </div>
            <div>
              <h3 className="bible-title">BLACK MEDIA SKATE — LOWMOVIE™</h3>
              <p className="bible-subtitle text-primary mt-2">Black View / Collective Interview</p>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing mt-8">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <p className="bible-body mt-6">
                Black Media Skate — Conversa coletiva com toda a crew LowPressure™ sobre o processo de criação do LowMovie™, os bastidores das filmagens, a dinâmica do coletivo e o significado do filme para cada skatista.
              </p>
            </div>
            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <p className="bible-body mt-6">
                Black Media Skate — Collective conversation with the entire LowPressure™ crew about the creation process of LowMovie™, behind-the-scenes filming, collective dynamics and the meaning of the film for each skater.
              </p>
            </div>
          </div>

          <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/50 shadow-lg shadow-primary/10 my-12 max-w-5xl mx-auto">
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
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <div className="space-y-6 mt-6">
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
                    Acesse a transcrição completa da entrevista com todos os depoimentos dos membros da crew.
                  </p>
                  <a 
                    href="/documents/Black_Media_Skate_LowMovie_Interview.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    Download da Transcrição (PDF)
                  </a>
                </Card>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">
                  This collective interview brings together all members of the LowPressure™ crew for an open conversation about LowMovie™. 
                  Led by Black Media Skate, the conversation explores individual and collective perspectives on the creative process, 
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
                  <h3 className="bible-subtitle mb-4">Full Transcription</h3>
                  <p className="bible-body mb-4">
                    Access the complete interview transcription with all crew members' testimonials.
                  </p>
                  <a 
                    href="/documents/Black_Media_Skate_LowMovie_Interview.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    Download Transcription (PDF)
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* LowZine Gallery Tab */}
        <TabsContent value="lowzine" className="space-y-8">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h3 className="bible-title">LOWZINE</h3>
              <p className="bible-subtitle text-primary mt-2">LowPressure™ — The LowMovie</p>
            </div>
            <div>
              <h3 className="bible-title">LOWZINE</h3>
              <p className="bible-subtitle text-primary mt-2">LowPressure™ — The LowMovie</p>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing mt-8">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <p className="bible-body mt-6">
                Zine produzida pela crew em parceria com Black Media Skate. Registro fotográfico, depoimentos dos skatistas e bastidores do processo criativo do LowMovie™. Uma publicação que documenta a energia, o estilo e a filosofia DIY do coletivo.
              </p>
            </div>
            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <p className="bible-body mt-6">
                Zine produced by the crew in partnership with Black Media Skate. Photographic record, skaters' testimonials and behind-the-scenes of the LowMovie™ creative process. A publication that documents the energy, style and DIY philosophy of the collective.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {zineImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                <img
                  src={image}
                  alt={`LowZine page ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-foreground font-mono text-sm">Page {index + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bible-bilingual-grid bible-section-spacing mt-12">
            <div>
              <Card className="p-6 bg-background/50 border border-border/50">
                <h3 className="bible-subtitle mb-4">Transcrição Completa</h3>
                <p className="bible-body mb-4">
                  Acesse a transcrição completa da entrevista coletiva com toda a crew sobre a produção da LowZine e do LowMovie™.
                </p>
                <a 
                  href="/documents/LOWZINE._LowPressure™_-_The_LowMovie.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Download da Transcrição (PDF)
                </a>
              </Card>
            </div>

            <div>
              <Card className="p-6 bg-background/50 border border-border/50">
                <h3 className="bible-subtitle mb-4">Full Transcription</h3>
                <p className="bible-body mb-4">
                  Access the complete collective interview transcription with the entire crew about the production of LowZine and LowMovie™.
                </p>
                <a 
                  href="/documents/LOWZINE._LowPressure™_-_The_LowMovie.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Download Transcription (PDF)
                </a>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </BilingualSection>
  );
};
