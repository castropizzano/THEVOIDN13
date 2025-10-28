import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { BackToTop } from "@/components/BackToTop";
import { MusicPlayer } from "@/components/MusicPlayer";
import { PodcastPlayer } from "@/components/PodcastPlayer";
import { Timeline } from "@/components/Timeline";
import heroImage from "@/assets/lowmovie-hero-new.png";
import conceptCrew from "@/assets/concept-crew.png";
import conceptFront from "@/assets/concept-front.png";
import conceptBack from "@/assets/concept-back.png";
import conceptSide from "@/assets/concept-side.png";
import roughs000 from "@/assets/roughs-000.png";
import roughs001 from "@/assets/roughs-001.png";
import meditationScene from "@/assets/meditation-scene.png";

const Dissertacao = () => {
  const thesisSchema = {
    "@context": "https://schema.org",
    "@type": "Thesis",
    "name": "LowMovie™ e o Labirinto Criativo: Subjetividade, Subcultura e a Construção de uma Estética em Movimento",
    "author": {
      "@type": "Person",
      "name": "Castro Pizzano"
    },
    "datePublished": "2025",
    "inLanguage": ["pt-BR", "en-US"],
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "UNESPAR",
      "department": "PPG-CINEAV"
    },
    "educationalLevel": "Master's Degree",
    "about": "Cinema Experimental, Skate Culture, Processos Criativos, Arte Audiovisual",
    "inSupportOf": "Cinema e Artes do Vídeo"
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://thevoidn13.lovableproject.com/" },
    { name: "LowMovie™ — Dissertação", url: "https://thevoidn13.lovableproject.com/dissertacao" }
  ]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [thesisSchema, breadcrumbs]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="LowMovie™ — Dissertação de Mestrado | THEVOIDN13"
        description="Dissertação de mestrado em Cinema e Artes do Vídeo explorando subjetividade, subcultura e processos criativos no skate através do filme LowMovie™. CasaTrezeStudio®, LowPressure™ crew por Castro Pizzano"
        schemaData={schemaData}
      />
      <Header />
      <BackToTop />
      
      <main>
        {/* Hero Image */}
        <section className="w-full h-screen overflow-hidden">
          <img src={heroImage} alt="LOWMOVIE™ E O LABIRINTO CRIATIVO" className="w-full h-full object-contain" />
        </section>

        <BilingualSection className="py-8">
          <div className="space-y-4">
            <h1 className="micro-title">
              LOWMOVIE™ E O LABIRINTO CRIATIVO
            </h1>
          </div>
        </BilingualSection>

        <BilingualSection className="py-8">
          <BilingualContent 
            portugueseContent={
              <p className="body-base text-justified">
                Subjetividade, Subcultura e a Construção de uma Estética em Movimento no Coletivo LowPressure™
              </p>
            }
            englishContent={
              <p className="body-base text-justified">
                Subjectivity, Subculture and the Construction of an Aesthetic in Motion in the LowPressure™ Collective
              </p>
            }
          />
        </BilingualSection>

        {/* Matrix Projects - Origins of the Dissertation */}
        <BilingualSection bgClassName="bg-card/50">
          <div className="space-y-4 mb-16">
            <h2 className="section-title">Processos Matriciais / Matrix Processes</h2>
            <BilingualContent 
              portugueseContent={
                <p className="body-base text-muted-foreground">
                  Três projetos que originaram esta dissertação. Processos criativos que se entrelaçam e formam a base do Labirinto Criativo.
                </p>
              }
              englishContent={
                <p className="body-base text-muted-foreground">
                  Three projects that originated this dissertation. Creative processes that intertwine and form the basis of the Creative Labyrinth.
                </p>
              }
            />
          </div>
        </BilingualSection>

        {/* CasaTrezeStudio Section */}
        <BilingualSection>
          <div className="border-l-4 border-primary pl-6 space-y-8">
            <div>
              <h2 className="section-title mb-2">CasaTrezeStudio</h2>
              <p className="text-sm text-muted-foreground mb-2">2008-Presente</p>
              <p className="text-sm text-primary font-medium">Coletivo Criativo / Creative Lab</p>
            </div>

            <BilingualContent 
              portugueseContent={
                <div className="space-y-6">
                  <p className="body-base text-justified">
                    Coletivo Criativo fundado em 2008. Estúdio pós-contemporâneo de design e vídeo. Associação de produtores criativos independentes que opera como laboratório de criação autoral, cultural e comercial, conectando pessoas, ideias e projetos. Onde o comercial e o experimental coexistem sob a persona цастро™.
                  </p>

                  <div className="space-y-4">
                    <h3 className="subsection-title text-primary">Conceito / Concept</h3>
                    <p className="body-base text-justified">
                      CasaTrezeStudio não é empresa. É organismo vivo. Laboratório onde criadores independentes se encontram para transformar ideias em matéria. Nasceu da necessidade de criar fora dos sistemas tradicionais, construindo sua própria infraestrutura criativa. 17 anos de resistência e reinvenção.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="subsection-title text-primary">Serviços / Services</h3>
                    <div className="space-y-2">
                      <p className="body-base"><span className="font-bold text-primary">Design Gráfico:</span> Identidades visuais, branding, editorial</p>
                      <p className="body-base"><span className="font-bold text-primary">Vídeo:</span> Documentários, videoclipes, conteúdo digital</p>
                      <p className="body-base"><span className="font-bold text-primary">Direção de Arte:</span> Projetos culturais, campanhas, eventos</p>
                      <p className="body-base"><span className="font-bold text-primary">Curadoria:</span> Projetos experimentais e autorais</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="subsection-title text-primary">Filosofia / Philosophy</h3>
                    <p className="body-base text-justified">
                      A casa número 13 como símbolo de resistência ao convencional. O azar transformado em potência criativa. O estúdio opera na fronteira entre o comercial e o experimental, sem hierarquia entre ambos. Cada projeto — seja uma identidade visual para um cliente ou um filme autoral — recebe o mesmo rigor criativo.
                    </p>
                  </div>
                </div>
              }
              englishContent={
                <div className="space-y-6">
                  <p className="body-base text-justified">
                    Creative Collective founded in 2008. Post-contemporary studio of design and video. Association of independent creative producers operating as a laboratory of authorial, cultural and commercial creation, connecting people, ideas and projects. Where commercial and experimental coexist under the persona цастро™.
                  </p>

                  <div className="space-y-4">
                    <h3 className="subsection-title text-primary">Conceito / Concept</h3>
                    <p className="body-base text-justified">
                      CasaTrezeStudio isn't a company. It's a living organism. Laboratory where independent creators meet to transform ideas into matter. Born from the need to create outside traditional systems, building its own creative infrastructure. 17 years of resistance and reinvention.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="subsection-title text-primary">Serviços / Services</h3>
                      <div className="space-y-2">
                        <p className="body-base"><span className="font-bold text-primary">Graphic Design:</span> Visual identities, branding, editorial</p>
                        <p className="body-base"><span className="font-bold text-primary">Video:</span> Documentaries, music videos, digital content</p>
                        <p className="body-base"><span className="font-bold text-primary">Art Direction:</span> Cultural projects, campaigns, events</p>
                        <p className="body-base"><span className="font-bold text-primary">Curation:</span> Experimental and authorial projects</p>
                      </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="subsection-title text-primary">Filosofia / Philosophy</h3>
                    <p className="body-base text-justified">
                      House number 13 as a symbol of resistance to the conventional. Bad luck transformed into creative power. The studio operates on the border between commercial and experimental, without hierarchy between them. Each project — whether a visual identity for a client or an authorial film — receives the same creative rigor.
                    </p>
                  </div>

                </div>
              }
            />
            
            {/* Vimeo Reel Player */}
            <div className="mt-8 w-full">
              <div className="aspect-video w-full">
                <iframe 
                  src="https://player.vimeo.com/video/698870212?title=0&byline=0&portrait=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="CasaTrezeStudio Reel"
                ></iframe>
              </div>
            </div>
          </div>
        </BilingualSection>

        {/* LowPressure Section */}
        <BilingualSection bgClassName="bg-card/30">
          <div className="border-l-4 border-primary pl-6 space-y-8">
              <div>
                <h2 className="section-title mb-2">LowPressure™</h2>
                <p className="micro-title text-muted-foreground mb-2">2020-Presente</p>
                <p className="micro-title text-primary">Skate Crew / Movimento Cultural</p>
              </div>

            <BilingualContent 
              portugueseContent={
                <div className="space-y-6">
                    <p className="body-base text-justified">
                    Crew de skate @lowpressure.fam estabelecida nas transições e ruas de Curitiba. Movimento que valoriza o skateboard e seu universo cultural. Uma crew de skatistas, músicos e artistas com diferentes visões e um mesmo ideal. A ética do subterrâneo. O pensamento que nasce da margem.
                  </p>

                  <div className="space-y-4">
                    <h3 className="subsection-title text-primary">Filosofia / Philosophy</h3>
                    <p className="body-base text-justified">
                      <span className="font-bold">LOW PRESSURE = BAIXA PRESSÃO.</span> Movimento atmosférico que precede tempestades. Instabilidade como potência. Tensão criativa que gera movimento. A crew não é grupo fechado — é campo de força que atrai quem vibra na mesma frequência.
                    </p>
                    <p className="body-base text-justified mt-4">
                      Skatistas, músicos, artistas, videomakers. Diferentes visões, mesmo ideal: fazer do skate um modo de vida autêntico, sem concessões ao mercado, sem domesticação da rebeldia. Punk ethics aplicada ao concreto urbano.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="subsection-title text-primary">História / History</h3>
                    <p className="body-base text-justified">
                      Fundada em 2020, mas suas raízes mergulham mais fundo. A crew cristaliza anos de sessões, amizades, quedas e quedas que viram manobras. Curitiba como território afetivo. Cada pico é memória viva. Cada sessão é ritual de pertencimento. O skate como linguagem que não precisa de tradução.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-primary">Propósito / Purpose</h3>
                    <p className="text-base leading-relaxed text-justify">
                      Não é sobre patrocínio. Não é sobre likes. É sobre manter viva a chama do skate como expressão genuína. Resistir à espetacularização. Preservar a autonomia criativa. Ser crew é ser família escolhida. É saber que, não importa o spot, sempre tem alguém que vai te buscar quando você cair.
                    </p>
                  </div>
                </div>
              }
              englishContent={
                <div className="space-y-6">
                    <p className="body-base text-justified">
                    Skate crew @lowpressure.fam established in the transitions and streets of Curitiba. Movement that values skateboarding and its cultural universe. A crew of skaters, musicians and artists with different visions and the same ideal. The ethics of the underground. Thought that rises from the margin.
                  </p>

                  <div className="space-y-4">
                    <h3 className="subsection-title text-primary">Filosofia / Philosophy</h3>
                    <p className="body-base text-justified">
                      <span className="font-bold">LOW PRESSURE.</span> Atmospheric movement that precedes storms. Instability as power. Creative tension that generates movement. The crew isn't a closed group — it's a force field that attracts those who vibrate at the same frequency.
                    </p>
                    <p className="body-base text-justified mt-4">
                      Skaters, musicians, artists, videomakers. Different visions, same ideal: making skateboarding an authentic way of life, without concessions to the market, without domestication of rebellion. Punk ethics applied to urban concrete.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="subsection-title text-primary">História / History</h3>
                    <p className="body-base text-justified">
                      Founded in 2020, but its roots run deeper. The crew crystallizes years of sessions, friendships, falls and falls that become tricks. Curitiba as affective territory. Each spot is living memory. Each session is a ritual of belonging. Skateboarding as a language that needs no translation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-primary">Propósito / Purpose</h3>
                    <p className="text-base leading-relaxed text-justify">
                      It's not about sponsorship. It's not about likes. It's about keeping alive the flame of skateboarding as genuine expression. Resisting spectacularization. Preserving creative autonomy. Being crew is being chosen family. It's knowing that, no matter the spot, there's always someone who'll pick you up when you fall.
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </BilingualSection>

        {/* LowMovie Section */}
        <BilingualSection>
          <div className="border-l-4 border-primary pl-6 space-y-8">
            <div>
              <h2 className="section-title mb-2">LowMovie</h2>
              <p className="text-sm text-muted-foreground mb-2">2019-Presente</p>
              <p className="text-sm text-primary font-medium">Full Video / Filme-Processo</p>
            </div>

            <BilingualContent 
              portugueseContent={
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-justify">
                    Full Video da crew LowPressure. Um filme-processo que documenta as vivências e o legado de uma crew de skatistas pelos spots de Curitiba. Obra produzida de maneira totalmente autoral, através de vídeo, design e trilhas sonoras únicas. Objeto central da pesquisa de mestrado em Cinema e Artes do Vídeo.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-primary">Conceito / Concept</h3>
                    <p className="text-base leading-relaxed text-justify">
                      LowMovie não é só um vídeo de skate. É um artefato cultural que cristaliza memória, identidade e resistência subcultural. Um documento vivo que captura o ethos de uma crew que fez do skate um modo de existir. Produzido entre 2019-2022, estreou em abril de 2023 no Cine Passeio em Curitiba.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-primary">Simbolismo / Symbolism</h3>
                    <p className="text-base leading-relaxed text-justify">
                      O filme opera como labirinto criativo onde subjetividade e subcultura se encontram. Cada manobra é gesto simbólico. Cada spot é território de afeto. A estética DIY não é limitação — é escolha ética. LowMovie materializa a filosofia punk do "faça você mesmo" aplicada ao cinema de skate.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-primary">Premiére / Premiere</h3>
                    <p className="text-base leading-relaxed text-justify">
                      07 de abril de 2023. Cine Passeio, Curitiba. Sessão lotada. Skatistas, amigos, família, pesquisadores. Do underground ao cinema. Da margem ao centro simbólico da cidade. Um momento de reconhecimento sem domesticação. A crew permanece crew, mas agora habita também a tela grande.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-primary">Lowbyrinth™</h3>
                    <p className="text-base leading-relaxed text-justify">
                      O símbolo central de LowMovie. Um labirinto inspirado em geometria sagrada e princípios herméticos. Baseado na filosofia de Hermes Trismegistus, o Lowbyrinth™ materializa a ideia de que princípios organizam toda vida e criação no universo.
                    </p>
                    <p className="text-base leading-relaxed text-justify mt-4">
                      O labirinto é a vida em seus encontros, transformações e realizações. Percursos colaborativos, improvisados e não-lineares. Cada volta representa a jornada da crew pelos picos de Curitiba. Cada linha é uma manobra, um gesto compartilhado. O centro é o encontro — onde todos os caminhos convergem.
                    </p>
                  </div>
                </div>
              }
              englishContent={
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-justify">
                    LowPressure crew's Full Video. A process-film documenting the experiences and legacy of a skate crew through Curitiba's spots. Work produced entirely independently, through video, design and unique soundtracks. Central object of master's research in Cinema and Video Arts.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-primary">Conceito / Concept</h3>
                    <p className="text-base leading-relaxed text-justify">
                      LowMovie isn't just a skate video. It's a cultural artifact that crystallizes memory, identity and subcultural resistance. A living document that captures the ethos of a crew that made skateboarding a way of existing. Produced between 2019-2022, premiered in April 2023 at Cine Passeio in Curitiba.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-primary">Simbolismo / Symbolism</h3>
                    <p className="text-base leading-relaxed text-justify">
                      The film operates as a creative labyrinth where subjectivity and subculture meet. Each trick is symbolic gesture. Each spot is a territory of affection. The DIY aesthetic isn't a limitation — it's an ethical choice. LowMovie materializes the punk philosophy of "do it yourself" applied to skate cinema.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-primary">Premiére / Premiere</h3>
                    <p className="text-base leading-relaxed text-justify">
                      April 7, 2023. Cine Passeio, Curitiba. Sold-out session. Skaters, friends, family, researchers. From underground to cinema. From margin to the symbolic center of the city. A moment of recognition without domestication. The crew remains a crew, but now also inhabits the big screen.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-primary">Lowbyrinth™</h3>
                    <p className="text-base leading-relaxed text-justify">
                      The central symbol of LowMovie. A labyrinth inspired by sacred geometry and hermetic principles. Based on Hermes Trismegistus' philosophy, the Lowbyrinth™ materializes the idea that principles organize all life and creation in the universe.
                    </p>
                    <p className="text-base leading-relaxed text-justify mt-4">
                      The labyrinth is life in its encounters, transformations, and realizations. Collaborative, improvised, and non-linear paths. Each turn represents the crew's journey through Curitiba's spots. Each line is a trick, a shared gesture. The center is the meeting point — where all paths converge.
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </BilingualSection>

        {/* Separator before dissertation content */}
        <BilingualSection bgClassName="bg-card/50">
          <div className="py-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </BilingualSection>

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

        {/* Methodology Section */}
        <BilingualSection bgClassName="bg-card/30">
          <BilingualContent 
            portugueseContent={
              <div className="space-y-8">
                <h2 className="text-base font-bold">Metodologia / Lowbyrinth™ como Método</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Pesquisa em Arte como Práxis Sensível</h3>
                    <p className="body-small text-justify leading-relaxed">
                      Esta pesquisa se configura como investigação artística situada e processual, em que criar e pesquisar operam em simultaneidade. O pesquisador está implicado nos modos de viver e criar que constituem o campo, atuando desde dentro dos fluxos da criação. Trata-se de uma práxis sensível que mobiliza o corpo em sua totalidade, articulando gesto, técnica, percepção e pensamento em uma ação simultaneamente material e reflexiva.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Estrutura em Três Movimentos</h3>
                    <p className="text-base text-justify leading-relaxed mb-4">
                      A dissertação organiza-se em três movimentos entrelaçados, em sintonia com os modos de fazer e pensar que atravessam o filme LowMovie™ e as práticas do coletivo LowPressure™. Uma lógica espiralada e fragmentária, afinada ao tempo das coisas:
                    </p>
                    <div className="pl-6 space-y-3">
                      <div className="border-l-2 border-primary pl-4">
                        <p className="body-base font-medium">Movimento I — Corpo em Deriva</p>
                        <p className="body-small text-muted-foreground">Investiga o corpo do skatista em relação ao espaço urbano, explorando a dimensão performática e sensível do gesto.</p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <p className="body-base font-medium">Movimento II — Coletivo em Baixo Relevo</p>
                        <p className="body-small text-muted-foreground">Examina as dinâmicas colaborativas da crew LowPressure™, seus modos de criação partilhada e pertencimento estético.</p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <p className="body-base font-medium">Movimento III — Obra em Expansão</p>
                        <p className="body-small text-muted-foreground">Analisa o LowMovie™ como dispositivo audiovisual que transborda o formato convencional e se desdobra em outras materialidades.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Lowbyrinth™: O Labirinto como Orientação Metodológica</h3>
                    <p className="text-base text-justify leading-relaxed">
                      O conceito de Lowbyrinth™ emerge organicamente do processo criativo e atua como orientador metodológico desta pesquisa. Trata-se de uma imagem simbólica que expressa caminhos improvisados, não lineares e rizomáticos do fazer coletivo. O labirinto não é obstáculo, mas campo de possibilidades criativas que se desdobra em dobra, escuta e desvio. Uma travessia espiralada que acolhe o erro, o improviso e a reconfiguração constante dos percursos.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Três Procedimentos Metodológicos</h3>
                    <div className="space-y-4">
                      <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                        <p className="text-base font-medium mb-2">1. Vivência Situada em Processos Coletivos</p>
                        <p className="text-base text-justify leading-relaxed text-muted-foreground">
                          Participação ativa nas dinâmicas que geram imagens, vínculos e registros. Inserção cotidiana que sustenta uma atenção contínua, em que corpo, escuta e presença operam em afinação constante.
                        </p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                        <p className="text-base font-medium mb-2">2. Convivência Criativa no Campo</p>
                        <p className="text-base text-justify leading-relaxed text-muted-foreground">
                          Acompanhamento dos ritmos e camadas do processo desde dentro, em escuta com as imagens, os sons da cidade e os encontros entre corpos e câmeras. Registro contínuo em diário digital atento às nuances do processo.
                        </p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                        <p className="text-base font-medium mb-2">3. Escuta Compartilhada</p>
                        <p className="text-base text-justify leading-relaxed text-muted-foreground">
                          Conversas abertas com integrantes do coletivo (skatistas, videomakers, colaboradores artísticos) como encontros de sintonia, em que o vínculo ativa sentidos e reverbera no percurso investigativo. Coleta de materiais produzidos pelo coletivo (vídeos, zines, áudios, imagens) sempre com consentimento informado.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Escuta como Operação Epistemológica</h3>
                    <p className="text-base text-justify leading-relaxed">
                      A metodologia ancora-se na escuta como operação epistemológica e no afeto como vibração criadora. Uma presença encarnada que produz conhecimento em relação. Os afetos atuam como forças relacionais e mobilizadoras, deslocam certezas, ativam perguntas, redesenham caminhos. É o ser afetado que move a pesquisa, emergindo na vulnerabilidade partilhada, na escuta que acolhe o outro e o espaço.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Criação como Pesquisa</h3>
                    <p className="text-base text-justify leading-relaxed">
                      Toda ação praticada numa experiência modifica quem a pratica e quem a sofre. Pesquisar arte é também um momento de criação. O LowMovie™ atua como força propulsora, convocando outra escuta, outro modo de olhar, escrever e intervir. Um gesto comprometido com o risco, com o desconhecido e com as intensidades que apenas o encontro ativa. Pesquisa e criação acontecem em simultaneidade, como modos de olhar, agir e transformar o mundo.
                    </p>
                  </div>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-8">
                <h2 className="text-base font-bold">Methodology / Lowbyrinth™ as Method</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Research in Art as Sensitive Praxis</h3>
                    <p className="text-base text-justify leading-relaxed">
                      This research is configured as situated and processual artistic investigation, in which creating and researching operate simultaneously. The researcher is implicated in the ways of living and creating that constitute the field, acting from within the flows of creation. It is a sensitive praxis that mobilizes the body in its totality, articulating gesture, technique, perception and thought in an action simultaneously material and reflective.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Structure in Three Movements</h3>
                    <p className="text-base text-justify leading-relaxed mb-4">
                      The dissertation is organized in three interwoven movements, in tune with the ways of doing and thinking that traverse the LowMovie™ film and the practices of the LowPressure™ collective. A spiral and fragmentary logic, tuned to the time of things:
                    </p>
                    <div className="pl-6 space-y-3">
                      <div className="border-l-2 border-primary pl-4">
                        <p className="body-base font-medium">Movement I — Body in Drift</p>
                        <p className="body-small text-muted-foreground">Investigates the skater's body in relation to urban space, exploring the performative and sensitive dimension of gesture.</p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <p className="body-base font-medium">Movement II — Collective in Low Relief</p>
                        <p className="body-small text-muted-foreground">Examines the collaborative dynamics of the LowPressure™ crew, their modes of shared creation and aesthetic belonging.</p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <p className="body-base font-medium">Movement III — Work in Expansion</p>
                        <p className="body-small text-muted-foreground">Analyzes LowMovie™ as an audiovisual device that overflows the conventional format and unfolds into other materialities.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Lowbyrinth™: The Labyrinth as Methodological Orientation</h3>
                    <p className="text-base text-justify leading-relaxed">
                      The concept of Lowbyrinth™ emerges organically from the creative process and acts as methodological guide for this research. It is a symbolic image that expresses improvised, non-linear and rhizomatic paths of collective making. The labyrinth is not an obstacle, but a field of creative possibilities that unfolds in fold, listening and deviation. A spiral crossing that welcomes error, improvisation and the constant reconfiguration of paths.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Three Methodological Procedures</h3>
                    <div className="space-y-4">
                      <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                        <p className="text-base font-medium mb-2">1. Situated Experience in Collective Processes</p>
                        <p className="text-base text-justify leading-relaxed text-muted-foreground">
                          Active participation in the dynamics that generate images, bonds and records. Daily insertion that sustains continuous attention, in which body, listening and presence operate in constant tuning.
                        </p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                        <p className="text-base font-medium mb-2">2. Creative Coexistence in the Field</p>
                        <p className="text-base text-justify leading-relaxed text-muted-foreground">
                          Following the rhythms and layers of the process from within, listening to images, city sounds and encounters between bodies and cameras. Continuous recording in digital diary attentive to the nuances of the process.
                        </p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                        <p className="text-base font-medium mb-2">3. Shared Listening</p>
                        <p className="text-base text-justify leading-relaxed text-muted-foreground">
                          Open conversations with collective members (skaters, videomakers, artistic collaborators) as tuning encounters, in which the bond activates meanings and reverberates in the investigative path. Collection of materials produced by the collective (videos, zines, audios, images) always with informed consent.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Listening as Epistemological Operation</h3>
                    <p className="text-base text-justify leading-relaxed">
                      The methodology is anchored in listening as an epistemological operation and in affect as creative vibration. An embodied presence that produces knowledge in relation. Affects act as relational and mobilizing forces, displace certainties, activate questions, redesign paths. It is being affected that moves research, emerging in shared vulnerability, in listening that welcomes the other and space.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Creation as Research</h3>
                    <p className="text-base text-justify leading-relaxed">
                      Every action practiced in an experience modifies both who practices it and who experiences it. Researching art is also a moment of creation. LowMovie™ acts as a propelling force, calling for another listening, another way of looking, writing and intervening. A gesture committed to risk, to the unknown and to the intensities that only the encounter activates. Research and creation happen simultaneously, as ways of looking, acting and transforming the world.
                    </p>
                  </div>
                </div>
              </div>
            }
          />
        </BilingualSection>

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

        {/* Documentation Section */}
        <BilingualSection bgClassName="bg-card/50">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="section-title">Documentation</h2>
              <h3 className="subsection-title text-primary">Documentos de Pesquisa / Research Documents</h3>
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
                  href="/documents/LowPressure_brandbook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block mb-2"
                >
                  Download Brandbook (PDF)
                </a>
                <a 
                  href="https://castropizzano.com/lowpressure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block"
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
                  href="/documents/LowMovie_brandbook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block mb-2"
                >
                  Download Brandbook (PDF)
                </a>
                <a 
                  href="https://youtu.be/wcYBh6_DqO8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block"
                >
                  Full Video LowMovie™ (2023)
                </a>
              </div>
            </div>

            {/* Master's Dissertation - Coming Soon */}
            <div className="mt-6">
              <div className="bg-card border-2 border-primary/50 rounded-lg p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-primary">Dissertação de Mestrado / Master's Dissertation</h4>
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <BilingualContent 
                  portugueseContent={
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Depósito da dissertação de mestrado após aprovação em breve.
                    </p>
                  }
                  englishContent={
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Master's dissertation deposit after approval coming soon.
                    </p>
                  }
                />
              </div>
            </div>
          </div>
        </BilingualSection>

        {/* Pesquisa Acadêmica / Academic Research */}
        <BilingualSection bgClassName="bg-primary/5">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="section-title">Pesquisa Acadêmica / Academic Research</h2>
            </div>

            <BilingualContent
              portugueseContent={
                <div className="space-y-6">
                  <p className="text-base text-justify leading-relaxed">
                    A pesquisa de mestrado investiga processos criativos colaborativos a partir da produção de LowMovie. Como uma crew de skate se torna coletivo criativo? Como a subcultura do skate gera modos específicos de fazer cinema? Como documentar sem domesticar?
                  </p>
                  <p className="text-base text-justify leading-relaxed">
                    Metodologia autoetnográfica. Análise fílmica. Entrevistas em profundidade. Diário de campo. Mas também: skate sessions como coleta de dados. Edição de vídeo como análise. Montagem como pensamento. A forma da dissertação questiona a forma acadêmica tradicional.
                  </p>
                </div>
              }
              englishContent={
                <div className="space-y-6">
                  <p className="text-base text-justify leading-relaxed">
                    The master's research investigates collaborative creative processes from LowMovie's production. How does a skate crew become a creative collective? How does skate subculture generate specific ways of making cinema? How to document without domesticating?
                  </p>
                  <p className="text-base text-justify leading-relaxed">
                    Autoethnographic methodology. Film analysis. In-depth interviews. Field diary. But also: skate sessions as data collection. Video editing as analysis. Montage as thought. The dissertation's form questions the traditional academic form.
                  </p>
                </div>
              }
            />
          </div>
        </BilingualSection>

        {/* Documentation Section - Soundtracks, Podcast, Timeline */}
        <BilingualSection bgClassName="bg-card/50">
          <div className="space-y-16">
            <div className="space-y-4 border-b border-border pb-8">
              <h2 className="section-title">Documentação do Processo / Process Documentation</h2>
              <p className="subsection-title text-muted-foreground">
                Trilhas sonoras, entrevistas e timeline da pesquisa / Soundtracks, interviews and research timeline
              </p>
            </div>

            {/* Music Player - LowMovie Soundtracks */}
            <div>
              <MusicPlayer />
            </div>

            {/* Podcast Player - Skate Punk Interview */}
            <div className="mt-8">
              <PodcastPlayer />
            </div>

            {/* Timeline - Creative Journey */}
            <div className="mt-8">
              <Timeline />
            </div>
          </div>
        </BilingualSection>


        {/* Colaboração e Coletivos / Collaboration and Collectives */}
        <BilingualSection>
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="section-title">Colaboração e Coletivos / Collaboration and Collectives</h2>
            </div>

            <BilingualContent
              portugueseContent={
                <div className="space-y-6">
                  <p className="text-base text-justify leading-relaxed">
                    Criação sempre foi coletiva. CasaTrezeStudio (desde 2008), LowPressure (desde 2020), colaborações com músicos, skatistas, designers. Mas a práxis híbrida expande o conceito de coletivo: agora inclui agentes não-humanos. IA como colaboradora, não como ferramenta.
                  </p>
                  <p className="text-base text-justify leading-relaxed">
                    O coletivo não é soma de indivíduos — é campo de forças. Cada projeto gera sua própria configuração colaborativa. Algumas permanentes (crew), outras efêmeras (projetos específicos). Mas todas compartilham da mesma ética: autonomia criativa, transparência radical, autoria compartilhada mas assinada.
                  </p>
                </div>
              }
              englishContent={
                <div className="space-y-6">
                  <p className="text-base text-justify leading-relaxed">
                    Creation has always been collective. CasaTrezeStudio (since 2008), LowPressure (since 2020), collaborations with musicians, skaters, designers. But hybrid praxis expands the concept of collective: now it includes non-human agents. AI as collaborator, not as tool.
                  </p>
                  <p className="text-base text-justify leading-relaxed">
                    The collective isn't a sum of individuals — it's a force field. Each project generates its own collaborative configuration. Some permanent (crew), others ephemeral (specific projects). But all share the same ethics: creative autonomy, radical transparency, shared but signed authorship.
                  </p>
                </div>
              }
            />
          </div>
        </BilingualSection>
      </main>

      <Footer />
    </div>
  );
};

export default Dissertacao;
