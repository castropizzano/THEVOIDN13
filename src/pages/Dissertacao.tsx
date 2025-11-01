import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { BilingualSection } from "@/components/BilingualSection";
import { Separator } from "@/components/ui/separator";
import { BackToTop } from "@/components/BackToTop";
import { MusicPlayer } from "@/components/MusicPlayer";
import { PodcastPlayer } from "@/components/PodcastPlayer";
import { Timeline } from "@/components/Timeline";
import heroImage from "@/assets/lowmovie-hero.png";

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
    { name: "Home", url: "https://thevoidn13.com/" },
    { name: "LowMovie™ — Dissertação", url: "https://thevoidn13.com/dissertacao" }
  ]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [thesisSchema, breadcrumbs]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="LowMovie™ — Dissertação de Mestrado | THEVØIDN13" 
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

        {/* Título */}
        <BilingualSection className="py-16">
          <div className="bilingual-grid">
            <div className="bilingual-col">
              <p className="lang-pill">&lt;PORTUGUÊS&gt;</p>
              <h1 className="bible-title mt-4">LOWMOVIE™ E O LABIRINTO CRIATIVO</h1>
              <p className="bible-body mt-6">
                Subjetividade, Subcultura e a Construção de uma Estética em Movimento no Coletivo LowPressure™
              </p>
            </div>
            <div className="bilingual-col">
              <p className="lang-pill">&lt;ENGLISH&gt;</p>
              <h1 className="bible-title mt-4">LOWMOVIE™ E O LABIRINTO CRIATIVO</h1>
              <p className="bible-body mt-6">
                Subjectivity, Subculture and the Construction of an Aesthetic in Motion in the LowPressure™ Collective
              </p>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Processos Matriciais */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">PROCESSOS MATRICIAIS</h2>
            </div>
            <div>
              <h2 className="bible-title">MATRIX PROCESSES</h2>
            </div>
          </div>
          <p className="bible-subtitle mt-4">Projetos que originaram esta dissertação / Projects that originated this dissertation</p>

          <div className="bible-section-spacing mt-8">
            <p className="bible-body text-muted-foreground">
              Processos criativos que se entrelaçam e formam a base do Labirinto Criativo. / 
              Creative processes that intertwine and form the basis of the Creative Labyrinth.
            </p>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* CasaTrezeStudio */}
        <BilingualSection className="py-16">
          <div className="bilingual-grid bible-block-spacing">
            <div className="bilingual-col border-l-4 border-primary pl-6">
              <h2 className="bible-title">CASATREZESTUDIO®</h2>
              <p className="bible-subtitle text-muted-foreground mt-2">2008-Presente</p>
              <p className="bible-subtitle text-primary mt-2">Coletivo Criativo</p>
            </div>
            <div className="bilingual-col border-l-4 border-primary pl-6">
              <h2 className="bible-title">CASATREZESTUDIO®</h2>
              <p className="bible-subtitle text-muted-foreground mt-2">2008-Present</p>
              <p className="bible-subtitle text-primary mt-2">Creative Lab</p>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing mt-8">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Coletivo Criativo fundado em 2008. Estúdio pós-contemporâneo de design e vídeo. Associação de produtores criativos independentes que opera como laboratório de criação autoral, cultural e comercial, conectando pessoas, ideias e projetos. Onde o comercial e o experimental coexistem sob a persona цастро™.</p>
                
                <h3 className="bible-subtitle">Conceito</h3>
                <p className="bible-body">CasaTrezeStudio não é empresa. É organismo vivo. Laboratório onde criadores independentes se encontram para transformar ideias em matéria. Nasceu da necessidade de criar fora dos sistemas tradicionais, construindo sua própria infraestrutura criativa. 17 anos de resistência e reinvenção.</p>
                
                <h3 className="bible-subtitle">Serviços</h3>
                <p className="bible-body"><span className="font-semibold">Design Gráfico:</span> Identidades visuais, branding, editorial</p>
                <p className="bible-body"><span className="font-semibold">Vídeo:</span> Documentários, videoclipes, conteúdo digital</p>
                <p className="bible-body"><span className="font-semibold">Direção de Arte:</span> Projetos culturais, campanhas, eventos</p>
                <p className="bible-body"><span className="font-semibold">Curadoria:</span> Projetos experimentais e autorais</p>
                
                <h3 className="bible-subtitle">Filosofia</h3>
                <p className="bible-body">A casa número 13 como símbolo de resistência ao convencional. O azar transformado em potência criativa. O estúdio opera na fronteira entre o comercial e o experimental, sem hierarquia entre ambos. Cada projeto — seja uma identidade visual para um cliente ou um filme autoral — recebe o mesmo rigor criativo.</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Creative Collective founded in 2008. Post-contemporary studio of design and video. Association of independent creative producers operating as a laboratory of authorial, cultural and commercial creation, connecting people, ideas and projects. Where commercial and experimental coexist under the persona цастро™.</p>
                
                <h3 className="bible-subtitle">Concept</h3>
                <p className="bible-body">CasaTrezeStudio isn't a company. It's a living organism. Laboratory where independent creators meet to transform ideas into matter. Born from the need to create outside traditional systems, building its own creative infrastructure. 17 years of resistance and reinvention.</p>
                
                <h3 className="bible-subtitle">Services</h3>
                <p className="bible-body"><span className="font-semibold">Graphic Design:</span> Visual identities, branding, editorial</p>
                <p className="bible-body"><span className="font-semibold">Video:</span> Documentaries, music videos, digital content</p>
                <p className="bible-body"><span className="font-semibold">Art Direction:</span> Cultural projects, campaigns, events</p>
                <p className="bible-body"><span className="font-semibold">Curation:</span> Experimental and authorial projects</p>
                
                <h3 className="bible-subtitle">Philosophy</h3>
                <p className="bible-body">House number 13 as a symbol of resistance to the conventional. Bad luck transformed into creative power. The studio operates on the border between commercial and experimental, without hierarchy between them. Each project — whether a visual identity for a client or an authorial film — receives the same creative rigor.</p>
              </div>
            </div>
          </div>

          {/* Vimeo Reel */}
          <div className="mt-8 w-full">
            <div className="aspect-video w-full">
              <iframe 
                src="https://player.vimeo.com/video/698870212?title=0&byline=0&portrait=0" 
                className="w-full h-full" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen 
                title="CasaTrezeStudio Reel"
              />
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* LowPressure */}
        <BilingualSection className="py-16">
          <div className="bible-block-spacing border-l-4 border-primary pl-6">
            <h2 className="bible-title">LOWPRESSURE™</h2>
            <p className="bible-subtitle text-muted-foreground mt-2">2020-Presente / 2020-Present</p>
            <p className="bible-subtitle text-primary mt-2">Skate Crew / Movimento Cultural</p>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing mt-8">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Crew de skate @lowpressure.fam estabelecida nas transições e ruas de Curitiba. Movimento que valoriza o skateboard e seu universo cultural. Uma crew de skatistas, músicos e artistas com diferentes visões e um mesmo ideal. A ética do subterrâneo. O pensamento que nasce da margem.</p>
                
                <h3 className="bible-subtitle">Filosofia</h3>
                <p className="bible-body"><span className="font-bold">LOW PRESSURE = BAIXA PRESSÃO.</span> Movimento atmosférico que precede tempestades. Instabilidade como potência. Tensão criativa que gera movimento. A crew não é grupo fechado — é campo de força que atrai quem vibra na mesma frequência.</p>
                <p className="bible-body">Skatistas, músicos, artistas, videomakers. Diferentes visões, mesmo ideal: fazer do skate um modo de vida autêntico, sem concessões ao mercado, sem domesticação da rebeldia. Punk ethics aplicada ao concreto urbano.</p>
                
                <h3 className="bible-subtitle">História</h3>
                <p className="bible-body">Fundada em 2020, mas suas raízes mergulham mais fundo. A crew cristaliza anos de sessões, amizades, quedas e quedas que viram manobras. Curitiba como território afetivo. Cada pico é memória viva. Cada sessão é ritual de pertencimento. O skate como linguagem que não precisa de tradução.</p>
                
                <h3 className="bible-subtitle">Propósito</h3>
                <p className="bible-body">Não é sobre patrocínio. Não é sobre likes. É sobre manter viva a chama do skate como expressão genuína. Resistir à espetacularização. Preservar a autonomia criativa. Ser crew é ser família escolhida. É saber que, não importa o spot, sempre tem alguém que vai te buscar quando você cair.</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Skate crew @lowpressure.fam established in the transitions and streets of Curitiba. Movement that values skateboarding and its cultural universe. A crew of skaters, musicians and artists with different visions and the same ideal. The ethics of the underground. Thought that rises from the margin.</p>
                
                <h3 className="bible-subtitle">Philosophy</h3>
                <p className="bible-body"><span className="font-bold">LOW PRESSURE.</span> Atmospheric movement that precedes storms. Instability as power. Creative tension that generates movement. The crew isn't a closed group — it's a force field that attracts those who vibrate at the same frequency.</p>
                <p className="bible-body">Skaters, musicians, artists, videomakers. Different visions, same ideal: making skateboarding an authentic way of life, without concessions to the market, without domestication of rebellion. Punk ethics applied to urban concrete.</p>
                
                <h3 className="bible-subtitle">History</h3>
                <p className="bible-body">Founded in 2020, but its roots run deeper. The crew crystallizes years of sessions, friendships, falls and falls that become tricks. Curitiba as affective territory. Each spot is living memory. Each session is a ritual of belonging. Skateboarding as a language that needs no translation.</p>
                
                <h3 className="bible-subtitle">Purpose</h3>
                <p className="bible-body">It's not about sponsorship. It's not about likes. It's about keeping alive the flame of skateboarding as genuine expression. Resisting spectacularization. Preserving creative autonomy. Being crew is being chosen family. It's knowing that, no matter the spot, there's always someone who'll pick you up when you fall.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* LowMovie */}
        <BilingualSection className="py-16">
          <div className="bible-block-spacing border-l-4 border-primary pl-6">
            <h2 className="bible-title">LOWMOVIE™</h2>
            <p className="bible-subtitle text-muted-foreground mt-2">2019-Presente / 2019-Present</p>
            <p className="bible-subtitle text-primary mt-2">Full Video / Filme-Processo</p>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing mt-8">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Full Video da crew LowPressure. Um filme-processo que documenta as vivências e o legado de uma crew de skatistas pelos spots de Curitiba. Obra produzida de maneira totalmente autoral, através de vídeo, design e trilhas sonoras únicas. Objeto central da pesquisa de mestrado em Cinema e Artes do Vídeo.</p>
                
                <h3 className="bible-subtitle">Conceito</h3>
                <p className="bible-body">LowMovie não é só um vídeo de skate. É um artefato cultural que cristaliza memória, identidade e resistência subcultural. Um documento vivo que captura o ethos de uma crew que fez do skate um modo de existir. Produzido entre 2019-2022, estreou em abril de 2023 no Cine Passeio em Curitiba.</p>
                
                <h3 className="bible-subtitle">Simbolismo</h3>
                <p className="bible-body">O filme opera como labirinto criativo onde subjetividade e subcultura se encontram. Cada manobra é gesto simbólico. Cada spot é território de afeto. A estética DIY não é limitação — é escolha ética. LowMovie materializa a filosofia punk do "faça você mesmo" aplicada ao cinema de skate.</p>
                
                <h3 className="bible-subtitle">Premiére</h3>
                <p className="bible-body">07 de abril de 2023. Cine Passeio, Curitiba. Sessão lotada. Skatistas, amigos, família, pesquisadores. Do underground ao cinema. Da margem ao centro simbólico da cidade. Um momento de reconhecimento sem domesticação. A crew permanece crew, mas agora habita também a tela grande.</p>
                
                <h3 className="bible-subtitle">Lowbyrinth™</h3>
                <p className="bible-body">O símbolo central de LowMovie. Um labirinto inspirado em geometria sagrada e princípios herméticos. Baseado na filosofia de Hermes Trismegistus, o Lowbyrinth™ materializa a ideia de que princípios organizam toda vida e criação no universo.</p>
                <p className="bible-body">O labirinto é a vida em seus encontros, transformações e realizações. Percursos colaborativos, improvisados e não-lineares. Cada volta representa a jornada da crew pelos picos de Curitiba. Cada linha é uma manobra, um gesto compartilhado. O centro é o encontro — onde todos os caminhos convergem.</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">LowPressure crew's Full Video. A process-film documenting the experiences and legacy of a skate crew through Curitiba's spots. Work produced entirely independently, through video, design and unique soundtracks. Central object of master's research in Cinema and Video Arts.</p>
                
                <h3 className="bible-subtitle">Concept</h3>
                <p className="bible-body">LowMovie isn't just a skate video. It's a cultural artifact that crystallizes memory, identity and subcultural resistance. A living document that captures the ethos of a crew that made skateboarding a way of existing. Produced between 2019-2022, premiered in April 2023 at Cine Passeio in Curitiba.</p>
                
                <h3 className="bible-subtitle">Symbolism</h3>
                <p className="bible-body">The film operates as a creative labyrinth where subjectivity and subculture meet. Each trick is symbolic gesture. Each spot is a territory of affection. The DIY aesthetic isn't a limitation — it's an ethical choice. LowMovie materializes the punk philosophy of "do it yourself" applied to skate cinema.</p>
                
                <h3 className="bible-subtitle">Premiere</h3>
                <p className="bible-body">April 7, 2023. Cine Passeio, Curitiba. Sold-out session. Skaters, friends, family, researchers. From underground to cinema. From margin to the symbolic center of the city. A moment of recognition without domestication. The crew remains a crew, but now also inhabits the big screen.</p>
                
                <h3 className="bible-subtitle">Lowbyrinth™</h3>
                <p className="bible-body">The central symbol of LowMovie. A labyrinth inspired by sacred geometry and hermetic principles. Based on Hermes Trismegistus' philosophy, the Lowbyrinth™ materializes the idea that principles organize all life and creation in the universe.</p>
                <p className="bible-body">The labyrinth is life in its encounters, transformations, and realizations. Collaborative, improvised, and non-linear paths. Each turn represents the crew's journey through Curitiba's spots. Each line is a trick, a shared gesture. The center is the meeting point — where all paths converge.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Introdução - Rastros nas Ruas */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">INTRODUÇÃO — RASTROS NAS RUAS</h2>
            </div>
            <div>
              <h2 className="bible-title">INTRODUCTION — TRACES IN THE STREETS</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Esta pesquisa se constrói como travessia em primeira pessoa, um deslizamento entre o skate, o vídeo e a escrita, ativando formas de escuta, presença e invenção. O ato de escrever aqui é corpo em movimento, gesto que se arrisca, que se lança como quem dropa uma borda, um corrimão, uma escada. Drop é esse instante inaugural em que o skatista se projeta de um ponto mais alto e inicia o percurso com risco e intuição, abrindo caminho no concreto.</p>
                
                <p className="bible-body">O processo criativo delineado neste trabalho emerge da convivência com o coletivo LowPressure™, organismo em vibração, movido por sintonia estética e prática. No vocabulário do skate, trata-se de uma crew, mas também de uma forma de vida em rede, em que o pertencimento se inscreve nos gestos, nas imagens e nos vínculos forjados em movimento. É nesse território que nasce o LowMovie™, dispositivo audiovisual de criação partilhada que atravessa toda esta pesquisa.</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">This research is constructed as a first-person journey, a drift between skateboarding, video and writing, activating forms of listening, presence and invention. The act of writing here is body in movement, gesture that takes risks, that launches itself like someone dropping a ledge, a handrail, a staircase. Drop is that inaugural instant in which the skater projects themselves from a higher point and begins the course with risk and intuition, opening a path in the concrete.</p>
                
                <p className="bible-body">The creative process outlined in this work emerges from coexistence with the LowPressure™ collective, an organism in vibration, moved by aesthetic and practical syntony. In skateboarding vocabulary, it is a crew, but also a networked form of life, in which belonging is inscribed in gestures, images and bonds forged in movement. It is in this territory that LowMovie™ is born, an audiovisual device of shared creation that runs through all this research.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* A VideoParte como Linguagem */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">A VIDEOPARTE COMO LINGUAGEM</h2>
            </div>
            <div>
              <h2 className="bible-title">THE VIDEOPART AS LANGUAGE</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Os vídeos de skate registram a evolução técnica e criativa dos skatistas e desempenham um papel central na construção de sua identidade cultural. A VideoParte destaca não apenas as habilidades dos skatistas, mas também a integração entre seus movimentos e o ambiente urbano. A VideoParte é linguagem estética em movimento, expressão que transforma a paisagem urbana em território simbólico. O corpo e a cidade dialogam em fricção constante, produzindo imagens que são ao mesmo tempo documento e ficção.</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Skateboarding videos record the technical and creative evolution of skaters and play a central role in constructing their cultural identity. The VideoPart highlights not only the skaters' skills, but also the integration between their movements and the urban environment. The VideoPart is aesthetic language in movement, expression that transforms the urban landscape into symbolic territory. Body and city dialogue in constant friction, producing images that are simultaneously document and fiction.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Metodologia - Lowbyrinth™ como Método */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">METODOLOGIA [LOWBYRINTH™ COMO MÉTODO]</h2>
            </div>
            <div>
              <h2 className="bible-title">METHODOLOGY [LOWBYRINTH™ AS METHOD]</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <div className="space-y-6 mt-6">
                <h3 className="bible-subtitle">Pesquisa em Arte como Práxis Sensível</h3>
                <p className="bible-body">Esta pesquisa se configura como investigação artística situada e processual, em que criar e pesquisar operam em simultaneidade. O pesquisador está implicado nos modos de viver e criar que constituem o campo, atuando desde dentro dos fluxos da criação. Trata-se de uma práxis sensível que mobiliza o corpo em sua totalidade, articulando gesto, técnica, percepção e pensamento em uma ação simultaneamente material e reflexiva.</p>
                
                <h3 className="bible-subtitle">Estrutura em Três Movimentos</h3>
                <p className="bible-body">A dissertação organiza-se em três movimentos entrelaçados, em sintonia com os modos de fazer e pensar que atravessam o filme LowMovie™ e as práticas do coletivo LowPressure™. Uma lógica espiralada e fragmentária, afinada ao tempo das coisas:</p>
                
                <div className="space-y-3 border-l-2 border-primary pl-4">
                  <div>
                    <p className="bible-body font-semibold">Movimento I — Corpo em Deriva</p>
                    <p className="bible-body">Investiga o corpo do skatista em relação ao espaço urbano, explorando a dimensão performática e sensível do gesto.</p>
                  </div>
                  <div>
                    <p className="bible-body font-semibold">Movimento II — Coletivo em Baixo Relevo</p>
                    <p className="bible-body">Examina as dinâmicas colaborativas da crew LowPressure™, seus modos de criação partilhada e pertencimento estético.</p>
                  </div>
                  <div>
                    <p className="bible-body font-semibold">Movimento III — Obra em Expansão</p>
                    <p className="bible-body">Analisa o LowMovie™ como dispositivo audiovisual que transborda o formato convencional e se desdobra em outras materialidades.</p>
                  </div>
                </div>
                
                <h3 className="bible-subtitle">O Labirinto como Orientação Metodológica</h3>
                <p className="bible-body">O conceito de Lowbyrinth™ emerge organicamente do processo criativo e atua como orientador metodológico desta pesquisa. Trata-se de uma imagem simbólica que expressa caminhos improvisados, não lineares e rizomáticos do fazer coletivo. O labirinto não é obstáculo, mas campo de possibilidades criativas que se desdobra em dobra, escuta e desvio. Uma travessia espiralada que acolhe o erro, o improviso e a reconfiguração constante dos percursos.</p>
                
                <h3 className="bible-subtitle">Três Procedimentos Metodológicos</h3>
                <div className="space-y-4">
                  <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                    <p className="bible-body font-semibold mb-2">1. Vivência Situada em Processos Coletivos</p>
                    <p className="bible-body">Participação ativa nas dinâmicas que geram imagens, vínculos e registros. Inserção cotidiana que sustenta uma atenção contínua, em que corpo, escuta e presença operam em afinação constante.</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                    <p className="bible-body font-semibold mb-2">2. Convivência Criativa no Campo</p>
                    <p className="bible-body">Acompanhamento dos ritmos e camadas do processo desde dentro, em escuta com as imagens, os sons da cidade e os encontros entre corpos e câmeras. Registro contínuo em diário digital atento às nuances do processo.</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                    <p className="bible-body font-semibold mb-2">3. Escuta Compartilhada</p>
                    <p className="bible-body">Conversas abertas com integrantes do coletivo (skatistas, videomakers, colaboradores artísticos) como encontros de sintonia, em que o vínculo ativa sentidos e reverbera no percurso investigativo. Coleta de materiais produzidos pelo coletivo (vídeos, zines, áudios, imagens) sempre com consentimento informado.</p>
                  </div>
                </div>
                
                <h3 className="bible-subtitle">Escuta como Operação Epistemológica</h3>
                <p className="bible-body">A metodologia ancora-se na escuta como operação epistemológica e no afeto como vibração criadora. Uma presença encarnada que produz conhecimento em relação. Os afetos atuam como forças relacionais e mobilizadoras, deslocam certezas, ativam perguntas, redesenham caminhos. É o ser afetado que move a pesquisa, emergindo na vulnerabilidade partilhada, na escuta que acolhe o outro e o espaço.</p>
                
                <h3 className="bible-subtitle">Criação como Pesquisa</h3>
                <p className="bible-body">Toda ação praticada numa experiência modifica quem a pratica e quem a sofre. Pesquisar arte é também um momento de criação. O LowMovie™ atua como força propulsora, convocando outra escuta, outro modo de olhar, escrever e intervir. Um gesto comprometido com o risco, com o desconhecido e com as intensidades que apenas o encontro ativa. Pesquisa e criação acontecem em simultaneidade, como modos de olhar, agir e transformar o mundo.</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <div className="space-y-6 mt-6">
                <h3 className="bible-subtitle">Research in Art as Sensitive Praxis</h3>
                <p className="bible-body">This research is configured as situated and processual artistic investigation, in which creating and researching operate simultaneously. The researcher is implicated in the ways of living and creating that constitute the field, acting from within the flows of creation. It is a sensitive praxis that mobilizes the body in its totality, articulating gesture, technique, perception and thought in an action simultaneously material and reflective.</p>
                
                <h3 className="bible-subtitle">Structure in Three Movements</h3>
                <p className="bible-body">The dissertation is organized in three interwoven movements, in tune with the ways of doing and thinking that traverse the LowMovie™ film and the practices of the LowPressure™ collective. A spiral and fragmentary logic, tuned to the time of things:</p>
                
                <div className="space-y-3 border-l-2 border-primary pl-4">
                  <div>
                    <p className="bible-body font-semibold">Movement I — Body in Drift</p>
                    <p className="bible-body">Investigates the skater's body in relation to urban space, exploring the performative and sensitive dimension of gesture.</p>
                  </div>
                  <div>
                    <p className="bible-body font-semibold">Movement II — Collective in Low Relief</p>
                    <p className="bible-body">Examines the collaborative dynamics of the LowPressure™ crew, their modes of shared creation and aesthetic belonging.</p>
                  </div>
                  <div>
                    <p className="bible-body font-semibold">Movement III — Work in Expansion</p>
                    <p className="bible-body">Analyzes LowMovie™ as an audiovisual device that overflows the conventional format and unfolds into other materialities.</p>
                  </div>
                </div>
                
                <h3 className="bible-subtitle">The Labyrinth as Methodological Orientation</h3>
                <p className="bible-body">The concept of Lowbyrinth™ emerges organically from the creative process and acts as methodological guide for this research. It is a symbolic image that expresses improvised, non-linear and rhizomatic paths of collective making. The labyrinth is not an obstacle, but a field of creative possibilities that unfolds in fold, listening and deviation. A spiral crossing that welcomes error, improvisation and the constant reconfiguration of paths.</p>
                
                <h3 className="bible-subtitle">Three Methodological Procedures</h3>
                <div className="space-y-4">
                  <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                    <p className="bible-body font-semibold mb-2">1. Situated Experience in Collective Processes</p>
                    <p className="bible-body">Active participation in the dynamics that generate images, bonds and records. Daily insertion that sustains continuous attention, in which body, listening and presence operate in constant tuning.</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                    <p className="bible-body font-semibold mb-2">2. Creative Coexistence in the Field</p>
                    <p className="bible-body">Following the rhythms and layers of the process from within, listening to images, city sounds and encounters between bodies and cameras. Continuous recording in digital diary attentive to the nuances of the process.</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                    <p className="bible-body font-semibold mb-2">3. Shared Listening</p>
                    <p className="bible-body">Open conversations with collective members (skaters, videomakers, artistic collaborators) as tuning encounters, in which the bond activates meanings and reverberates in the investigative path. Collection of materials produced by the collective (videos, zines, audios, images) always with informed consent.</p>
                  </div>
                </div>
                
                <h3 className="bible-subtitle">Listening as Epistemological Operation</h3>
                <p className="bible-body">The methodology is anchored in listening as an epistemological operation and in affect as creative vibration. An embodied presence that produces knowledge in relation. Affects act as relational and mobilizing forces, displace certainties, activate questions, redesign paths. It is being affected that moves research, emerging in shared vulnerability, in listening that welcomes the other and space.</p>
                
                <h3 className="bible-subtitle">Creation as Research</h3>
                <p className="bible-body">Every action practiced in an experience modifies both practitioner and sufferer. Researching art is also a moment of creation. LowMovie™ acts as driving force, summoning another listening, another way of looking, writing and intervening. A gesture committed to risk, to the unknown and to intensities that only encounter activates. Research and creation happen simultaneously, as ways of seeing, acting and transforming the world.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Informação Acadêmica */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">MESTRADO EM CINEMA E ARTES DO VÍDEO</h2>
            </div>
            <div>
              <h2 className="bible-title">MASTER'S IN CINEMA AND VIDEO ARTS</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Dissertação apresentada ao Programa de Pós-Graduação em Cinema e Artes do Vídeo da Universidade Estadual do Paraná, Linha de Pesquisa (2) Processos de Criação no Cinema e nas Artes do Vídeo, como requisito parcial para a obtenção do grau de Mestre em Cinema e Artes do Vídeo.</p>
                <p className="bible-body font-semibold">Orientador: Prof. Dr. Fábio Jabur de Noronha</p>
                <p className="bible-body font-semibold">Universidade Estadual do Paraná (UNESPAR)</p>
                <p className="bible-body font-semibold">Curitiba, 2025</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Dissertation presented to the Graduate Program in Cinema and Video Arts at Paraná State University, Research Line (2) Creation Processes in Cinema and Video Arts, as a partial requirement for obtaining the Master's degree in Cinema and Video Arts.</p>
                <p className="bible-body font-semibold">Advisor: Prof. Dr. Fábio Jabur de Noronha</p>
                <p className="bible-body font-semibold">Paraná State University (UNESPAR)</p>
                <p className="bible-body font-semibold">Curitiba, 2025</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Pesquisa Acadêmica */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">PESQUISA ACADÊMICA</h2>
            </div>
            <div>
              <h2 className="bible-title">ACADEMIC RESEARCH</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">A pesquisa de mestrado investiga processos criativos colaborativos a partir da produção de LowMovie. Como uma crew de skate se torna coletivo criativo? Como a subcultura do skate gera modos específicos de fazer cinema? Como documentar sem domesticar?</p>
                <p className="bible-body">Metodologia autoetnográfica. Análise fílmica. Entrevistas em profundidade. Diário de campo. Mas também: skate sessions como coleta de dados. Edição de vídeo como análise. Montagem como pensamento. A forma da dissertação questiona a forma acadêmica tradicional.</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">The master's research investigates collaborative creative processes from LowMovie's production. How does a skate crew become a creative collective? How does skate subculture generate specific ways of making cinema? How to document without domesticating?</p>
                <p className="bible-body">Autoethnographic methodology. Film analysis. In-depth interviews. Field diary. But also: skate sessions as data collection. Video editing as analysis. Montage as thought. The dissertation's form questions the traditional academic form.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Colaboração e Coletivos */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">COLABORAÇÃO E COLETIVOS</h2>
            </div>
            <div>
              <h2 className="bible-title">COLLABORATION AND COLLECTIVES</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Criação sempre foi coletiva. CasaTrezeStudio (desde 2008), LowPressure (desde 2020), colaborações com músicos, skatistas, designers. Mas a práxis híbrida expande o conceito de coletivo: agora inclui agentes não-humanos. IA como colaboradora, não como ferramenta.</p>
                <p className="bible-body">O coletivo não é soma de indivíduos — é campo de forças. Cada projeto gera sua própria configuração colaborativa. Algumas permanentes (crew), outras efêmeras (projetos específicos). Mas todas compartilham da mesma ética: autonomia criativa, transparência radical, autoria compartilhada mas assinada.</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Creation has always been collective. CasaTrezeStudio (since 2008), LowPressure (since 2020), collaborations with musicians, skaters, designers. But hybrid praxis expands the concept of collective: now it includes non-human agents. AI as collaborator, not as tool.</p>
                <p className="bible-body">The collective isn't a sum of individuals — it's a force field. Each project generates its own collaborative configuration. Some permanent (crew), others ephemeral (specific projects). But all share the same ethics: creative autonomy, radical transparency, shared but signed authorship.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Documentação do Processo */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">DOCUMENTAÇÃO DO PROCESSO</h2>
            </div>
            <div>
              <h2 className="bible-title">PROCESS DOCUMENTATION</h2>
            </div>
          </div>
          <p className="bible-subtitle mt-4">Trilhas sonoras, entrevistas e timeline da pesquisa / Soundtracks, interviews and research timeline</p>

          <div className="space-y-16 mt-8">
            {/* Music Player */}
            <div>
              <MusicPlayer />
            </div>

            {/* Podcast Player */}
            <div>
              <PodcastPlayer />
            </div>

            {/* Timeline */}
            <div>
              <Timeline />
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Documentation - ÚLTIMA SEÇÃO */}
        <BilingualSection className="py-16">
          <div className="bilingual-grid bible-block-spacing">
            <div className="bilingual-col">
              <h2 className="bible-title">DOCUMENTAÇÃO</h2>
            </div>
            <div className="bilingual-col">
              <h2 className="bible-title">DOCUMENTATION</h2>
            </div>
          </div>
          
          <div className="bilingual-grid mt-6">
            <div className="bilingual-col">
              <h3 className="bible-subtitle">DOCUMENTOS DE PESQUISA</h3>
            </div>
            <div className="bilingual-col">
              <h3 className="bible-subtitle">RESEARCH DOCUMENTS</h3>
            </div>
          </div>

          <div className="space-y-8 mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="bible-body font-bold mb-4">LowPressure™</h4>
                <p className="bible-link mb-2">Brandbook LowPressure™</p>
                <a 
                  href="/documents/LowPressure_brandbook.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bible-link hover:underline block mb-2"
                >
                  Download Brandbook (PDF)
                </a>
                <a 
                  href="https://castropizzano.com/lowpressure" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bible-link hover:underline"
                >
                  Case Study
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="bible-body font-bold mb-4">LowMovie™</h4>
                <p className="bible-link mb-2">Brandbook LowMovie™</p>
                <a 
                  href="/documents/LowMovie_brandbook.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bible-link hover:underline block mb-2"
                >
                  Download Brandbook (PDF)
                </a>
                <a 
                  href="https://youtu.be/wcYBh6_DqO8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bible-link hover:underline"
                >
                  Full Video LowMovie™ (2023)
                </a>
              </div>
            </div>

            {/* Dissertação - Coming Soon */}
            <div className="bg-card border-2 border-primary/50 rounded-lg p-8">
              <div className="bilingual-grid mb-4">
                <div className="bilingual-col">
                  <h4 className="bible-body font-bold text-primary">Dissertação de Mestrado</h4>
                </div>
                <div className="bilingual-col">
                  <h4 className="bible-body font-bold text-primary">Master's Dissertation</h4>
                </div>
              </div>
              <div className="bible-bilingual-grid">
                <div>
                  <p className="bible-body text-muted-foreground">Depósito da dissertação de mestrado após aprovação em breve.</p>
                </div>
                <div>
                  <p className="bible-body text-muted-foreground">Master's dissertation deposit after approval coming soon.</p>
                </div>
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
