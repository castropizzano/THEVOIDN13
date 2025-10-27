import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";

const Dissertacao = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              LOWMOVIE™ E O LABIRINTO CRIATIVO
            </h1>
          </div>
        </section>

        <BilingualSection className="py-8">
          <BilingualContent 
            portugueseContent={
              <p className="text-xl leading-relaxed">
                Subjetividade, Subcultura e a Construção de uma Estética em Movimento no Coletivo LowPressure™
              </p>
            }
            englishContent={
              <p className="text-xl leading-relaxed">
                Subjectivity, Subculture and the Construction of an Aesthetic in Motion in the LowPressure™ Collective
              </p>
            }
          />
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-2xl font-bold">Introdução / Rastros nas Ruas</h2>
                <p className="text-justify leading-relaxed">
                  Esta pesquisa se constrói como travessia em primeira pessoa, um deslizamento entre o skate, o vídeo e a escrita, ativando formas de escuta, presença e invenção. O ato de escrever aqui é corpo em movimento, gesto que se arrisca, que se lança como quem dropa uma borda, um corrimão, uma escada. Drop é esse instante inaugural em que o skatista se projeta de um ponto mais alto e inicia o percurso com risco e intuição, abrindo caminho no concreto.
                </p>
                <p className="text-justify leading-relaxed">
                  O processo criativo delineado neste trabalho emerge da convivência com o coletivo LowPressure™, organismo em vibração, movido por sintonia estética e prática. No vocabulário do skate, trata-se de uma crew, mas também de uma forma de vida em rede, em que o pertencimento se inscreve nos gestos, nas imagens e nos vínculos forjados em movimento. É nesse território que nasce o LowMovie™, dispositivo audiovisual de criação partilhada que atravessa toda esta pesquisa.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-2xl font-bold">Introduction / Traces in the Streets</h2>
                <p className="text-justify leading-relaxed">
                  This research is constructed as a first-person journey, a drift between skateboarding, video and writing, activating forms of listening, presence and invention. The act of writing here is body in movement, gesture that takes risks, that launches itself like someone dropping a ledge, a handrail, a staircase. Drop is that inaugural instant in which the skater projects themselves from a higher point and begins the course with risk and intuition, opening a path in the concrete.
                </p>
                <p className="text-justify leading-relaxed">
                  The creative process outlined in this work emerges from coexistence with the LowPressure™ collective, an organism in vibration, moved by aesthetic and practical syntony. In skateboarding vocabulary, it is a crew, but also a networked form of life, in which belonging is inscribed in gestures, images and bonds forged in movement. It is in this territory that LowMovie™ is born, an audiovisual device of shared creation that runs through all this research.
                </p>
              </>
            }
          />
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-2xl font-bold">A VideoParte como Linguagem</h2>
                <p className="text-justify leading-relaxed">
                  Os vídeos de skate registram a evolução técnica e criativa dos skatistas e desempenham um papel central na construção de sua identidade cultural. A VideoParte destaca não apenas as habilidades dos skatistas, mas também a integração entre seus movimentos e o ambiente urbano. A VideoParte é linguagem estética em movimento, expressão que transforma a paisagem urbana em território simbólico. O corpo e a cidade dialogam em fricção constante, produzindo imagens que são ao mesmo tempo documento e ficção.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-2xl font-bold">The VideoPart as Language</h2>
                <p className="text-justify leading-relaxed">
                  Skateboarding videos record the technical and creative evolution of skaters and play a central role in constructing their cultural identity. The VideoPart highlights not only the skaters' skills, but also the integration between their movements and the urban environment. The VideoPart is aesthetic language in movement, expression that transforms the urban landscape into symbolic territory. Body and city dialogue in constant friction, producing images that are simultaneously document and fiction.
                </p>
              </>
            }
          />
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-2xl font-bold">Corpo e Cidade</h2>
                <p className="text-justify leading-relaxed">
                  A cidade se apresenta como campo de criação no entre: entre corpo e espaço, manobra e erro, presença e imagem. No percurso de criação do LowMovie™ emergiu organicamente o conceito de Lowbyrinth™, uma imagem simbólica que expressa caminhos improvisados, não lineares e rizomáticos do fazer coletivo. Essa metáfora orienta a estrutura metodológica do estudo, traçando um percurso que se desdobra em dobra, escuta e desvio. O labirinto não é obstáculo, mas campo de possibilidades criativas e narrativas.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-2xl font-bold">Body and City</h2>
                <p className="text-justify leading-relaxed">
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
                <h2 className="text-2xl font-bold">Mestrado em Cinema e Artes do Vídeo</h2>
                <p className="text-justify leading-relaxed">
                  Dissertação apresentada ao Programa de Pós-Graduação em Cinema e Artes do Vídeo da Universidade Estadual do Paraná, Linha de Pesquisa (2) Processos de Criação no Cinema e nas Artes do Vídeo, como requisito parcial para a obtenção do título de Mestre em Cinema e Artes do Vídeo.
                </p>
                <p className="text-justify leading-relaxed font-medium">
                  Orientador: Prof. Dr. Fábio Jabur de Noronha
                </p>
                <p className="text-justify leading-relaxed font-medium">
                  Universidade Estadual do Paraná (UNESPAR)
                </p>
                <p className="text-justify leading-relaxed font-medium">
                  Curitiba, 2025
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-2xl font-bold">Master's in Cinema and Video Arts</h2>
                <p className="text-justify leading-relaxed">
                  Dissertation presented to the Graduate Program in Cinema and Video Arts at Paraná State University, Research Line (2) Creation Processes in Cinema and Video Arts, as a partial requirement for obtaining the Master's degree in Cinema and Video Arts.
                </p>
                <p className="text-justify leading-relaxed font-medium">
                  Advisor: Prof. Dr. Fábio Jabur de Noronha
                </p>
                <p className="text-justify leading-relaxed font-medium">
                  Paraná State University (UNESPAR)
                </p>
                <p className="text-justify leading-relaxed font-medium">
                  Curitiba, 2025
                </p>
              </>
            }
          />
        </BilingualSection>
      </main>

      <Footer />
    </div>
  );
};

export default Dissertacao;
