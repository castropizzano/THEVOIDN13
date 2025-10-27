import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import heroImage from "@/assets/hero-concept-art.png";
import conceptCrew from "@/assets/concept-crew.png";
import conceptFront from "@/assets/concept-front.png";
import conceptBack from "@/assets/concept-back.png";
import conceptSide from "@/assets/concept-side.png";
import roughs000 from "@/assets/roughs-000.png";
import roughs001 from "@/assets/roughs-001.png";
import meditationScene from "@/assets/meditation-scene.png";

const Dissertacao = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero Image */}
        <section className="w-full h-screen overflow-hidden">
          <img src={heroImage} alt="LOWMOVIE™ E O LABIRINTO CRIATIVO" className="w-full h-full object-contain" />
        </section>

        <BilingualSection className="py-8">
          <div className="space-y-4">
            <h1 className="text-sm font-medium tracking-wide uppercase">
              LOWMOVIE™ E O LABIRINTO CRIATIVO
            </h1>
          </div>
        </BilingualSection>

        <BilingualSection className="py-8">
          <BilingualContent 
            portugueseContent={
              <p className="text-base text-justify leading-relaxed">
                Subjetividade, Subcultura e a Construção de uma Estética em Movimento no Coletivo LowPressure™
              </p>
            }
            englishContent={
              <p className="text-base text-justify leading-relaxed">
                Subjectivity, Subculture and the Construction of an Aesthetic in Motion in the LowPressure™ Collective
              </p>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={meditationScene} alt="Meditation Scene" className="w-full h-full object-contain" />
        </section>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-base font-bold">Introdução / Rastros nas Ruas</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Esta pesquisa se constrói como travessia em primeira pessoa, um deslizamento entre o skate, o vídeo e a escrita, ativando formas de escuta, presença e invenção. O ato de escrever aqui é corpo em movimento, gesto que se arrisca, que se lança como quem dropa uma borda, um corrimão, uma escada. Drop é esse instante inaugural em que o skatista se projeta de um ponto mais alto e inicia o percurso com risco e intuição, abrindo caminho no concreto.
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
                  O processo criativo delineado neste trabalho emerge da convivência com o coletivo LowPressure™, organismo em vibração, movido por sintonia estética e prática. No vocabulário do skate, trata-se de uma crew, mas também de uma forma de vida em rede, em que o pertencimento se inscreve nos gestos, nas imagens e nos vínculos forjados em movimento. É nesse território que nasce o LowMovie™, dispositivo audiovisual de criação partilhada que atravessa toda esta pesquisa.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-base font-bold">Introduction / Traces in the Streets</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  This research is constructed as a first-person journey, a drift between skateboarding, video and writing, activating forms of listening, presence and invention. The act of writing here is body in movement, gesture that takes risks, that launches itself like someone dropping a ledge, a handrail, a staircase. Drop is that inaugural instant in which the skater projects themselves from a higher point and begins the course with risk and intuition, opening a path in the concrete.
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
                  The creative process outlined in this work emerges from coexistence with the LowPressure™ collective, an organism in vibration, moved by aesthetic and practical syntony. In skateboarding vocabulary, it is a crew, but also a networked form of life, in which belonging is inscribed in gestures, images and bonds forged in movement. It is in this territory that LowMovie™ is born, an audiovisual device of shared creation that runs through all this research.
                </p>
              </>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={conceptCrew} alt="Concept" className="w-full h-full object-contain" />
        </section>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-base font-bold">A VideoParte como Linguagem</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Os vídeos de skate registram a evolução técnica e criativa dos skatistas e desempenham um papel central na construção de sua identidade cultural. A VideoParte destaca não apenas as habilidades dos skatistas, mas também a integração entre seus movimentos e o ambiente urbano. A VideoParte é linguagem estética em movimento, expressão que transforma a paisagem urbana em território simbólico. O corpo e a cidade dialogam em fricção constante, produzindo imagens que são ao mesmo tempo documento e ficção.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-base font-bold">The VideoPart as Language</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Skateboarding videos record the technical and creative evolution of skaters and play a central role in constructing their cultural identity. The VideoPart highlights not only the skaters' skills, but also the integration between their movements and the urban environment. The VideoPart is aesthetic language in movement, expression that transforms the urban landscape into symbolic territory. Body and city dialogue in constant friction, producing images that are simultaneously document and fiction.
                </p>
              </>
            }
          />
        </BilingualSection>

        {/* Character Sheet - Three Views */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-[3/4] overflow-hidden border border-border rounded-lg">
                <img src={conceptFront} alt="Front View" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden border border-border rounded-lg">
                <img src={conceptSide} alt="Side View" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden border border-border rounded-lg">
                <img src={conceptBack} alt="Back View" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-base font-bold">Corpo e Cidade</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  A cidade se apresenta como campo de criação no entre: entre corpo e espaço, manobra e erro, presença e imagem. No percurso de criação do LowMovie™ emergiu organicamente o conceito de Lowbyrinth™, uma imagem simbólica que expressa caminhos improvisados, não lineares e rizomáticos do fazer coletivo. Essa metáfora orienta a estrutura metodológica do estudo, traçando um percurso que se desdobra em dobra, escuta e desvio. O labirinto não é obstáculo, mas campo de possibilidades criativas e narrativas.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-base font-bold">Body and City</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  The city presents itself as a field of creation in the between: between body and space, maneuver and error, presence and image. In the creation process of LowMovie™, the concept of Lowbyrinth™ emerged organically, a symbolic image that expresses improvised, non-linear and rhizomatic paths of collective making. This metaphor guides the methodological structure of the study, tracing a path that unfolds in fold, listening and deviation. The labyrinth is not an obstacle, but a field of creative and narrative possibilities.
                </p>
              </>
            }
          />
        </BilingualSection>


        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-base font-bold">Mestrado em Cinema e Artes do Vídeo</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Dissertação apresentada ao Programa de Pós-Graduação em Cinema e Artes do Vídeo da Universidade Estadual do Paraná, Linha de Pesquisa (2) Processos de Criação no Cinema e nas Artes do Vídeo, como requisito parcial para a obtenção do título de Mestre em Cinema e Artes do Vídeo.
                </p>
                <p className="text-base text-justify leading-relaxed font-medium mt-6">
                  Orientador: Prof. Dr. Fábio Jabur de Noronha
                </p>
                <p className="text-base text-justify leading-relaxed font-medium">
                  Universidade Estadual do Paraná (UNESPAR)
                </p>
                <p className="text-base text-justify leading-relaxed font-medium">
                  Curitiba, 2025
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-base font-bold">Master's in Cinema and Video Arts</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Dissertation presented to the Graduate Program in Cinema and Video Arts at Paraná State University, Research Line (2) Creation Processes in Cinema and Video Arts, as a partial requirement for obtaining the Master's degree in Cinema and Video Arts.
                </p>
                <p className="text-base text-justify leading-relaxed font-medium mt-6">
                  Advisor: Prof. Dr. Fábio Jabur de Noronha
                </p>
                <p className="text-base text-justify leading-relaxed font-medium">
                  Paraná State University (UNESPAR)
                </p>
                <p className="text-base text-justify leading-relaxed font-medium">
                  Curitiba, 2025
                </p>
              </>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={roughs000} alt="Sketches" className="w-full h-full object-contain" />
        </section>

        <section className="w-full h-screen overflow-hidden">
          <img src={roughs001} alt="Sketches" className="w-full h-full object-contain" />
        </section>

        <section className="w-full h-screen overflow-hidden">
          <img src={conceptSide} alt="Concept" className="w-full h-full object-contain" />
        </section>

        {/* Documentation Section */}
        <BilingualSection bgClassName="bg-card/50">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Documentation</h2>
              <h3 className="text-xl text-primary">Documentos de Pesquisa / Research Documents</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold">LowPressure™</h4>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Brandbook LowPressure™</p>
                <a 
                  href="https://castropizzano.com/lowpressure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Case Study
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold">LowMovie™</h4>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Brandbook LowMovie™</p>
                <a 
                  href="https://youtu.be/wcYBh6_DqO8?si=ioRD-YaWwjizwBg9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Full Video LowMovie™ (2023)
                </a>
              </div>
            </div>
          </div>
        </BilingualSection>
      </main>

      <Footer />
    </div>
  );
};

export default Dissertacao;
