import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { Separator } from "@/components/ui/separator";
import { BackToTop } from "@/components/BackToTop";
import { MusicPlayer } from "@/components/MusicPlayer";
import { PodcastPlayer } from "@/components/PodcastPlayer";
import { Timeline } from "@/components/Timeline";
import { PDFViewer } from "@/components/PDFViewer";
import { CasaTrezeBlock } from "@/components/dissertation/CasaTrezeBlock";
import { LowPressureBlock } from "@/components/dissertation/LowPressureBlock";
import { InterviewsTabs } from "@/components/dissertation/InterviewsTabs";
import { VideoPlayer } from "@/components/VideoPlayer";
import { LowMovieBlock } from "@/components/dissertation/LowMovieBlock";
import { SkillCard } from "@/components/SkillCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/cover-lowmovie.png";

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
        <section className="w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 sm:pt-20 md:pt-24">
          <img 
            src={heroImage} 
            alt="LOWMOVIE™ E O LABIRINTO CRIATIVO" 
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </section>

        {/* Título */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h1 className="bible-title">
              <span className="lang-pt">LOWMOVIE™ E O LABIRINTO CRIATIVO</span>
              <span className="lang-en">LOWMOVIE™ AND THE CREATIVE LABYRINTH</span>
            </h1>
            <p className="bible-body">
              <span className="lang-pt">Subjetividade, Subcultura e a Construção de uma Estética em Movimento no Coletivo LowPressure™</span>
              <span className="lang-en">Subjectivity, Subculture and the Construction of an Aesthetic in Motion in the LowPressure™ Collective</span>
            </p>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Processos Matriciais */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">PROCESSOS MATRICIAIS</span>
              <span className="lang-en">MATRIX PROCESSES</span>
            </h2>
          </div>
          
          <div className="bible-block">
            <p className="bible-subtitle">
              <span className="lang-pt">PROJETOS QUE ORIGINARAM ESTA DISSERTAÇÃO</span>
              <span className="lang-en">PROJECTS THAT ORIGINATED THIS DISSERTATION</span>
            </p>
          </div>

          <div className="bible-block">
            <p className="bible-body text-muted-foreground">
              <span className="lang-pt">Processos criativos que se entrelaçam e formam a base do Labirinto Criativo.</span>
              <span className="lang-en">Creative processes that intertwine and form the basis of the Creative Labyrinth.</span>
            </p>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* CasaTrezeStudio */}
        <BilingualSection className="bible-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Principal */}
            <Card className="md:col-span-2 bg-card/50 border-2 border-primary hover:border-primary/80 transition-all duration-300">
              <CardHeader>
                <CardTitle className="bible-title text-primary">CASATREZESTUDIO®</CardTitle>
                <p className="bible-subtitle text-muted-foreground mt-2">
                  <span className="lang-pt">2008-Presente</span>
                  <span className="lang-en">2008-Present</span>
                </p>
                <p className="bible-subtitle text-primary mt-2 uppercase tracking-wide font-mono text-sm">
                  <span className="lang-pt">Coletivo Criativo</span>
                  <span className="lang-en">Creative Lab</span>
                </p>
              </CardHeader>
              <CardContent>
                <p className="bible-body text-muted-foreground">
                  <span className="lang-pt">Coletivo Criativo fundado em 2008. Estúdio pós-contemporâneo de design e vídeo. Associação de produtores criativos independentes que opera como laboratório de criação autoral, cultural e comercial, conectando pessoas, ideias e projetos.</span>
                  <span className="lang-en">Creative Collective founded in 2008. Post-contemporary studio of design and video. Association of independent creative producers operating as a laboratory of authorial, cultural and commercial creation, connecting people, ideas and projects.</span>
                </p>
              </CardContent>
            </Card>

            {/* Card Concept */}
            <Card className="bg-card/50 border-2 border-primary/50 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="bible-subtitle text-primary uppercase">
                  <span className="lang-pt">Conceito</span>
                  <span className="lang-en">Concept</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="bible-body text-muted-foreground leading-relaxed">
                  <span className="lang-pt">CasaTrezeStudio não é empresa. É <span className="text-primary font-semibold">organismo vivo</span>. Laboratório onde criadores independentes se encontram para transformar ideias em matéria. Nasceu da necessidade de criar fora dos sistemas tradicionais, construindo infraestrutura criativa própria. <span className="text-primary font-semibold">17 anos de resistência e reinvenção</span>.</span>
                  <span className="lang-en">CasaTrezeStudio isn't a company. It's a <span className="text-primary font-semibold">living organism</span>. Laboratory where independent creators meet to transform ideas into matter. Born from the need to create outside traditional systems, building its own creative infrastructure. <span className="text-primary font-semibold">17 years of resistance and reinvention</span>.</span>
                </p>
              </CardContent>
            </Card>

            {/* Card Services */}
            <Card className="bg-card/50 border-2 border-primary/50 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="bible-subtitle text-primary uppercase">
                  <span className="lang-pt">Serviços</span>
                  <span className="lang-en">Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="lang-pt">
                    <p className="bible-body text-muted-foreground"><span className="text-primary font-semibold">Design Gráfico:</span> Identidades visuais, branding, editorial</p>
                    <p className="bible-body text-muted-foreground"><span className="text-primary font-semibold">Vídeo:</span> Documentários, videoclipes, conteúdo digital</p>
                    <p className="bible-body text-muted-foreground"><span className="text-primary font-semibold">Direção de Arte:</span> Projetos culturais, campanhas, eventos</p>
                    <p className="bible-body text-muted-foreground"><span className="text-primary font-semibold">Curadoria:</span> Projetos experimentais e autorais</p>
                  </div>
                  <div className="lang-en">
                    <p className="bible-body text-muted-foreground"><span className="text-primary font-semibold">Graphic Design:</span> Visual identities, branding, editorial</p>
                    <p className="bible-body text-muted-foreground"><span className="text-primary font-semibold">Video:</span> Documentaries, music videos, digital content</p>
                    <p className="bible-body text-muted-foreground"><span className="text-primary font-semibold">Art Direction:</span> Cultural projects, campaigns, events</p>
                    <p className="bible-body text-muted-foreground"><span className="text-primary font-semibold">Curation:</span> Experimental and authorial projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card Philosophy */}
            <Card className="md:col-span-2 bg-card/50 border-2 border-primary/50 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="bible-subtitle text-primary uppercase">
                  <span className="lang-pt">Filosofia</span>
                  <span className="lang-en">Philosophy</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="bible-body text-muted-foreground leading-relaxed">
                  <span className="lang-pt">A casa número 13 como símbolo de resistência ao convencional. <span className="text-primary font-semibold">O estigma transformado em potência criativa</span>. O estúdio opera na fronteira entre o comercial e o experimental, sem hierarquia entre ambos. Cada projeto — seja uma identidade visual para um cliente ou um filme autoral — recebe o mesmo rigor criativo.</span>
                  <span className="lang-en">House number 13 as a symbol of resistance to the conventional. <span className="text-primary font-semibold">The stigma transformed into creative power</span>. The studio operates on the border between commercial and experimental, without hierarchy between them. Each project — whether a visual identity for a client or an authorial film — receives the same creative rigor.</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Vimeo Reel */}
          <div className="bible-media w-full">
            <VideoPlayer 
              vimeoId="698870212"
              title="CasaTrezeStudio Reel"
            />
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* LowPressure */}
        <BilingualSection className="bible-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Principal */}
            <Card className="md:col-span-2 bg-card/50 border-2 border-primary hover:border-primary/80 transition-all duration-300">
              <CardHeader>
                <CardTitle className="bible-title text-primary">LOWPRESSURE™</CardTitle>
                <p className="bible-subtitle text-muted-foreground mt-2">
                  <span className="lang-pt">2020-Presente</span>
                  <span className="lang-en">2020-Present</span>
                </p>
                <p className="bible-subtitle text-primary mt-2 uppercase tracking-wide font-mono text-sm">
                  <span className="lang-pt">Movimento Cultural</span>
                  <span className="lang-en">Skate Crew</span>
                </p>
              </CardHeader>
              <CardContent>
                <p className="bible-body text-muted-foreground">
                  <span className="lang-pt">Crew de skate @lowpressure.fam estabelecida nas transições e ruas de Curitiba. Movimento que valoriza o skateboard e seu universo cultural. Uma crew de skatistas, músicos e artistas com diferentes visões e um mesmo ideal. <span className="text-primary font-semibold">A ética do subterrâneo. O pensamento que nasce da margem.</span></span>
                  <span className="lang-en">Skate crew @lowpressure.fam established in the transitions and streets of Curitiba. Movement that values skateboarding and its cultural universe. A crew of skaters, musicians and artists with different visions and the same ideal. <span className="text-primary font-semibold">The ethics of the underground. Thought that rises from the margin.</span></span>
                </p>
              </CardContent>
            </Card>

            {/* Card Purpose */}
            <Card className="md:col-span-2 bg-card/50 border-2 border-primary/50 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="bible-subtitle text-primary uppercase">
                  <span className="lang-pt">Propósito</span>
                  <span className="lang-en">Purpose</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="bible-body text-muted-foreground leading-relaxed">
                  <span className="lang-pt">Não é sobre patrocínio. Não é sobre likes. É sobre <span className="text-primary font-semibold">manter viva a chama do skate como expressão genuína</span>. Resistir à espetacularização. Preservar a autonomia criativa. Ser crew é ser família escolhida. É saber que, não importa o spot, sempre tem alguém que vai te buscar quando você cair.</span>
                  <span className="lang-en">It's not about sponsorship. It's not about likes. It's about <span className="text-primary font-semibold">keeping alive the flame of skateboarding as genuine expression</span>. Resisting spectacularization. Preserving creative autonomy. Being crew is being chosen family. It's knowing that, no matter the spot, there's always someone who'll pick you up when you fall.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* LowMovie */}
        <BilingualSection className="bible-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Principal */}
            <Card className="md:col-span-2 bg-card/50 border-2 border-primary hover:border-primary/80 transition-all duration-300">
              <CardHeader>
                <CardTitle className="bible-title text-primary">LOWMOVIE™</CardTitle>
                <p className="bible-subtitle text-muted-foreground mt-2">
                  <span className="lang-pt">2019-Presente</span>
                  <span className="lang-en">2019-Present</span>
                </p>
                <p className="bible-subtitle text-primary mt-2 uppercase tracking-wide font-mono text-sm">
                  <span className="lang-pt">Filme-Processo</span>
                  <span className="lang-en">Full Video</span>
                </p>
              </CardHeader>
              <CardContent>
                <p className="bible-body text-muted-foreground">
                  <span className="lang-pt">Full Video da crew LowPressure. Um <span className="text-primary font-semibold">filme-processo</span> que documenta as vivências e o legado de uma crew de skatistas pelos spots de Curitiba. Obra produzida de maneira totalmente autoral, através de vídeo, design e trilhas sonoras únicas. <span className="text-primary font-semibold">Objeto central da pesquisa de mestrado em Cinema e Artes do Vídeo.</span></span>
                  <span className="lang-en">LowPressure crew's Full Video. A <span className="text-primary font-semibold">process-film</span> documenting the experiences and legacy of a skate crew through Curitiba's spots. Work produced entirely independently, through video, design and unique soundtracks. <span className="text-primary font-semibold">Central object of master's research in Cinema and Video Arts.</span></span>
                </p>
              </CardContent>
            </Card>

            {/* Card Concept */}
            <Card className="bg-card/50 border-2 border-primary/50 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="bible-subtitle text-primary uppercase">
                  <span className="lang-pt">Conceito</span>
                  <span className="lang-en">Concept</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="bible-body text-muted-foreground leading-relaxed">
                  <span className="lang-pt">LowMovie não é só um vídeo de skate. É um <span className="text-primary font-semibold">artefato cultural</span> que cristaliza memória, identidade e resistência subcultural. Um documento vivo que captura o ethos de uma crew que fez do skate um modo de existir. Produzido entre 2019-2022.</span>
                  <span className="lang-en">LowMovie isn't just a skate video. It's a <span className="text-primary font-semibold">cultural artifact</span> that crystallizes memory, identity and subcultural resistance. A living document that captures the ethos of a crew that made skateboarding a way of existing. Produced between 2019-2022.</span>
                </p>
              </CardContent>
            </Card>

            {/* Card Symbolism */}
            <Card className="bg-card/50 border-2 border-primary/50 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="bible-subtitle text-primary uppercase">
                  <span className="lang-pt">Simbolismo</span>
                  <span className="lang-en">Symbolism</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="bible-body text-muted-foreground leading-relaxed">
                  <span className="lang-pt">O filme opera como <span className="text-primary font-semibold">labirinto criativo</span> onde subjetividade e subcultura se encontram. Cada manobra é gesto simbólico. Cada spot é território de afeto. A estética DIY não é limitação — <span className="text-primary font-semibold">é escolha ética</span>. LowMovie materializa a filosofia punk do "faça você mesmo" aplicada ao cinema de skate.</span>
                  <span className="lang-en">The film operates as a <span className="text-primary font-semibold">creative labyrinth</span> where subjectivity and subculture meet. Each trick is symbolic gesture. Each spot is a territory of affection. The DIY aesthetic isn't a limitation — <span className="text-primary font-semibold">it's an ethical choice</span>. LowMovie materializes the punk philosophy of "do it yourself" applied to skate cinema.</span>
                </p>
              </CardContent>
            </Card>

            {/* Card Premiere */}
            <Card className="bg-card/50 border-2 border-primary/50 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="bible-subtitle text-primary uppercase">
                  <span className="lang-pt">Premiére</span>
                  <span className="lang-en">Premiere</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="bible-body text-muted-foreground leading-relaxed">
                  <span className="lang-pt"><span className="text-primary font-semibold">16 de dezembro de 2022. Vila Ida, Curitiba.</span> Evento presencial que resgatou a essência do skate e seu universo. Encontro multicultural com exibição de skate videos, pocket show, exposição de fotografias, feira de produtos e galeria de arte. A estreia do LowMovie™ finalizou em uma celebração SkateParty. <span className="text-primary font-semibold">Do underground ao evento cultural. Da margem ao centro simbólico da cidade.</span></span>
                  <span className="lang-en"><span className="text-primary font-semibold">December 16, 2022. Vila Ida, Curitiba.</span> In-person event that rescued the essence of skateboarding and its universe. Multicultural gathering featuring skate video screenings, pocket show, photo exhibition, product fair and art gallery. The LowMovie™ premiere culminated in a SkateParty celebration. <span className="text-primary font-semibold">From underground to cultural event. From margin to the symbolic center of the city.</span></span>
                </p>
              </CardContent>
            </Card>

            {/* Card Lowbyrinth */}
            <Card className="bg-card/50 border-2 border-primary/50 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="bible-subtitle text-primary uppercase">Lowbyrinth™</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="bible-body text-muted-foreground leading-relaxed">
                    <span className="lang-pt">O símbolo central de LowMovie. Um labirinto inspirado em <span className="text-primary font-semibold">geometria sagrada e princípios herméticos</span>. Baseado na filosofia de Hermes Trismegistus, o Lowbyrinth™ materializa a ideia de que princípios organizam toda vida e criação no universo.</span>
                    <span className="lang-en">The central symbol of LowMovie. A labyrinth inspired by <span className="text-primary font-semibold">sacred geometry and hermetic principles</span>. Based on Hermes Trismegistus' philosophy, the Lowbyrinth™ materializes the idea that principles organize all life and creation in the universe.</span>
                  </p>
                  <p className="bible-body text-muted-foreground leading-relaxed">
                    <span className="lang-pt">O labirinto é a vida em seus encontros, transformações e realizações. <span className="text-primary font-semibold">Percursos colaborativos, improvisados e não-lineares.</span> Cada volta representa a jornada da crew pelos picos de Curitiba. Cada linha é uma manobra, um gesto compartilhado. O centro é o encontro — onde todos os caminhos convergem.</span>
                    <span className="lang-en">The labyrinth is life in its encounters, transformations, and realizations. <span className="text-primary font-semibold">Collaborative, improvised, and non-linear paths.</span> Each turn represents the crew's journey through Curitiba's spots. Each line is a trick, a shared gesture. The center is the meeting point — where all paths converge.</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Introdução - Rastros nas Ruas */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">INTRODUÇÃO — RASTROS NAS RUAS</span>
              <span className="lang-en">INTRODUCTION — TRACES IN THE STREETS</span>
            </h2>
          </div>

          <div className="bible-block">
            <div className="lang-pt">
              <div>
                <p className="bible-body">Esta pesquisa se constrói como travessia em primeira pessoa, um deslizamento entre o skate, o vídeo e a escrita, ativando formas de escuta, presença e invenção. O ato de escrever aqui é corpo em movimento, gesto que se arrisca, que se lança como quem dropa uma borda, um corrimão, uma escada. Drop é esse instante inaugural em que o skatista se projeta de um ponto mais alto e inicia o percurso com risco e intuição, abrindo caminho no concreto.</p>
                
                <p className="bible-body">O processo criativo delineado neste trabalho emerge da convivência com o coletivo LowPressure™, organismo em vibração, movido por sintonia estética e prática. No vocabulário do skate, trata-se de uma crew, mas também de uma forma de vida em rede, em que o pertencimento se inscreve nos gestos, nas imagens e nos vínculos forjados em movimento. É nesse território que nasce o LowMovie™, dispositivo audiovisual de criação partilhada que atravessa toda esta pesquisa.</p>
              </div>
            </div>

            <div className="lang-en">
              <div>
                <p className="bible-body">This research is constructed as a first-person journey, a drift between skateboarding, video and writing, activating forms of listening, presence and invention. The act of writing here is body in movement, gesture that takes risks, that launches itself like someone dropping a ledge, a handrail, a staircase. Drop is that inaugural instant in which the skater projects themselves from a higher point and begins the course with risk and intuition, opening a path in the concrete.</p>
                
                <p className="bible-body">The creative process outlined in this work emerges from coexistence with the LowPressure™ collective, an organism in vibration, moved by aesthetic and practical syntony. In skateboarding vocabulary, it is a crew, but also a networked form of life, in which belonging is inscribed in gestures, images and bonds forged in movement. It is in this territory that LowMovie™ is born, an audiovisual device of shared creation that runs through all this research.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* A VideoParte como Linguagem */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">A VIDEOPARTE COMO LINGUAGEM</span>
              <span className="lang-en">THE VIDEOPART AS LANGUAGE</span>
            </h2>
          </div>

          <div className="bible-block">
            <div className="lang-pt">
              <div>
                <p className="bible-body">Os vídeos de skate registram a evolução técnica e criativa dos skatistas e desempenham um papel central na construção de sua identidade cultural. A VideoParte destaca não apenas as habilidades dos skatistas, mas também a integração entre seus movimentos e o ambiente urbano. A VideoParte é linguagem estética em movimento, expressão que transforma a paisagem urbana em território simbólico.</p>
              </div>
            </div>

            <div className="lang-en">
              <div>
                <p className="bible-body">Skateboarding videos record the technical and creative evolution of skaters and play a central role in constructing their cultural identity. The VideoPart highlights not only the skaters' skills, but also the integration between their movements and the urban environment. The VideoPart is aesthetic language in movement, expression that transforms the urban landscape into symbolic territory.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Metodologia - Lowbyrinth™ como Método */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">METODOLOGIA [LOWBYRINTH™ COMO MÉTODO]</span>
              <span className="lang-en">METHODOLOGY [LOWBYRINTH™ AS METHOD]</span>
            </h2>
          </div>

          <div className="bible-bilingual-grid bible-block">
            <div>
              <div>
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
                    <p className="bible-body">Analisa o LowMovie™ como dispositivo audiovisual que transborda o formato convencional em outras materialidades.</p>
                  </div>
                </div>
                
                <h3 className="bible-subtitle">O Labirinto como Orientação Metodológica</h3>
                <p className="bible-body">O conceito de Lowbyrinth™ emerge organicamente do processo criativo e atua como orientador metodológico desta pesquisa. Trata-se de uma imagem simbólica que expressa caminhos improvisados, não lineares e rizomáticos do fazer coletivo. O labirinto não é obstáculo, mas campo de possibilidades criativas que se desdobra em dobra, escuta e desvio. Uma travessia espiralada que acolhe o erro e o improviso.</p>
                
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
                <p className="bible-body">A metodologia ancora-se na escuta como operação epistemológica e no afeto como vibração criadora. Uma presença encarnada que produz conhecimento em relação. Os afetos atuam como forças relacionais e mobilizadoras, deslocam certezas, ativam perguntas, redesenham caminhos. O ser afetado move a pesquisa, emergindo na vulnerabilidade partilhada, na escuta que acolhe o outro e o espaço.</p>
                
                <h3 className="bible-subtitle">Criação como Pesquisa</h3>
                <p className="bible-body">Toda ação praticada numa experiência modifica quem a pratica e quem a sofre. Pesquisar arte é também um momento de criação. LowMovie™ atua como força propulsora, convocando outra escuta, outro modo de olhar, escrever e intervir. Um gesto comprometido com o risco, com o desconhecido e com as intensidades que apenas o encontro ativa. Pesquisa e criação acontecem em simultaneidade, como modos de olhar, agir e transformar o mundo.</p>
              </div>
            </div>

            <div>
              <div>
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
                    <p className="bible-body">Analyzes LowMovie™ as an audiovisual device that overflows the conventional format into other materialities.</p>
                  </div>
                </div>
                
                <h3 className="bible-subtitle">The Labyrinth as Methodological Orientation</h3>
                <p className="bible-body">The concept of Lowbyrinth™ emerges organically from the creative process and acts as methodological guide for this research. It is a symbolic image that expresses improvised, non-linear and rhizomatic paths of collective making. The labyrinth is not an obstacle, but a field of creative possibilities that unfolds in fold, listening and deviation. A spiral crossing that welcomes error and improvisation.</p>
                
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

        {/* Conceitos-Chave */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">CONCEITOS-CHAVE</span>
              <span className="lang-en">KEY CONCEPTS</span>
            </h2>
          </div>

          <div className="bible-block">
            <div className="lang-pt grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard
                title="CINE-TRANSE"
                content="Montagem rítmica que dissolve narrativa linear em experiência sensorial. O filme como portal de imersão no universo LowPressure™."
              />
              <SkillCard
                title="ESTÉTICA RELACIONAL"
                content="Arte como encontro e produção de vínculos. Processos criativos que emergem da convivência, do afeto e da colaboração entre corpos em movimento."
              />
              <SkillCard
                title="ARQUIVO VIVO"
                content="Memória em constante transformação. Registros audiovisuais que não apenas documentam, mas ativam e recriam experiências coletivas."
              />
              <SkillCard
                title="VIDEOPARTE"
                content="Linguagem híbrida: documentário experimental + filme de skate. Cada skatista é protagonista de sua própria narrativa visual."
              />
              <SkillCard
                title="LOWBYRINTH™ — O LABIRINTO CRIATIVO"
                content="LowMovie™ materializa o conceito de Lowbyrinth™: percursos criativos não-lineares, processos em deriva, método como wandering. O filme é o eixo sensível da defesa—não ilustração da teoria, mas teoria incorporada."
              />
            </div>

            <div className="lang-en grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard
                title="CINE-TRANCE"
                content="Rhythmic montage that dissolves linear narrative into sensorial experience. The film as an immersion portal into the LowPressure™ universe."
              />
              <SkillCard
                title="RELATIONAL AESTHETICS"
                content="Art as encounter and bond production. Creative processes that emerge from coexistence, affection and collaboration between bodies in movement."
              />
              <SkillCard
                title="LIVING ARCHIVE"
                content="Memory in constant transformation. Audiovisual records that not only document, but activate and recreate collective experiences."
              />
              <SkillCard
                title="VIDEOPART"
                content="Hybrid language: experimental documentary + skate film. Each skater is the protagonist of their own visual narrative."
              />
              <SkillCard
                title="LOWBYRINTH™ — THE CREATIVE LABYRINTH"
                content="LowMovie™ materializes the concept of Lowbyrinth™: non-linear creative paths, processes in drift, method as wandering. The film is the sensitive axis of the defense—not theory illustration, but embodied theory."
              />
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Interviews and LowZine Tabs */}
        <InterviewsTabs />

        <Separator className="bg-border/30" />

        {/* Informação Acadêmica */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">MESTRADO EM CINEMA E ARTES DO VÍDEO</span>
              <span className="lang-en">MASTER'S IN CINEMA AND VIDEO ARTS</span>
            </h2>
          </div>

          <div className="bible-bilingual-grid bible-block">
            <div>
              <div>
                <p className="bible-body">Programa de Pós-Graduação em Cinema e Artes do Vídeo da Universidade Estadual do Paraná, Linha de Pesquisa (2) Processos de Criação no Cinema e nas Artes do Vídeo, como requisito parcial para a obtenção do grau de Mestre em Cinema e Artes do Vídeo.</p>
                <p className="bible-body font-semibold">Orientador: Prof. Dr. Fábio Jabur de Noronha</p>
                <p className="bible-body font-semibold">Universidade Estadual do Paraná (UNESPAR)</p>
                <p className="bible-body font-semibold">Curitiba, 2025</p>
              </div>
            </div>

            <div>
              <div>
                <p className="bible-body">Graduate Program in Cinema and Video Arts at Paraná State University, Research Line (2) Creation Processes in Cinema and Video Arts, as a partial requirement for obtaining the Master's degree in Cinema and Video Arts.</p>
                <p className="bible-body font-semibold">Advisor: Prof. Dr. Fábio Jabur de Noronha</p>
                <p className="bible-body font-semibold">Paraná State University (UNESPAR)</p>
                <p className="bible-body font-semibold">Curitiba, 2025</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Pesquisa Acadêmica */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">PESQUISA ACADÊMICA</span>
              <span className="lang-en">ACADEMIC RESEARCH</span>
            </h2>
          </div>

          <div className="bible-block">
            <div className="lang-pt">
              <div>
                <p className="bible-body">A pesquisa investiga processos criativos colaborativos a partir da produção de LowMovie. Como uma crew de skate se torna coletivo criativo? Como a subcultura do skate gera modos específicos de fazer cinema? Como documentar sem domesticar?</p>
                <p className="bible-body">Metodologia autoetnográfica. Análise fílmica. Entrevistas em profundidade. Diário de campo. Skate sessions como coleta de dados. Edição de vídeo como análise.</p>
              </div>
            </div>

            <div className="lang-en">
              <div>
                <p className="bible-body">The research investigates collaborative creative processes from LowMovie's production. How does a skate crew become a creative collective? How does skate subculture generate specific ways of making cinema? How to document without domesticating?</p>
                <p className="bible-body">Autoethnographic methodology. Film analysis. In-depth interviews. Field diary. Skate sessions as data collection. Video editing as analysis.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Colaboração e Coletivos */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">COLABORAÇÃO E COLETIVOS</span>
              <span className="lang-en">COLLABORATION AND COLLECTIVES</span>
            </h2>
          </div>

          <div className="bible-block">
            <div className="lang-pt">
              <div>
                <p className="bible-body">Criação sempre foi coletiva. CasaTrezeStudio (desde 2008), LowPressure (desde 2020), colaborações com músicos, skatistas, designers. Mas a práxis híbrida expande o conceito de coletivo: agora inclui agentes não-humanos. IA como colaboradora, não como ferramenta.</p>
                <p className="bible-body">O coletivo não é soma de indivíduos — é campo de forças. Cada projeto gera sua própria configuração colaborativa. Algumas permanentes (crew), outras efêmeras (projetos específicos). Mas todas compartilham da mesma ética: autonomia criativa, transparência radical, autoria compartilhada mas assinada.</p>
              </div>
            </div>

            <div className="lang-en">
              <div>
                <p className="bible-body">Creation has always been collective. CasaTrezeStudio (since 2008), LowPressure (since 2020), collaborations with musicians, skaters, designers. But hybrid praxis expands the concept of collective: now it includes non-human agents. AI as collaborator, not as tool.</p>
                <p className="bible-body">The collective isn't a sum of individuals — it's a force field. Each project generates its own collaborative configuration. Some permanent (crew), others ephemeral (specific projects). But all share the same ethics: creative autonomy, radical transparency, shared but signed authorship.</p>
              </div>
            </div>
          </div>
        </BilingualSection>


        {/* Music Player - Componente Standalone */}
        <MusicPlayer />

        <Separator className="bg-border/30" />

        {/* Timeline */}
        <BilingualSection className="bible-section">
          <div className="max-w-6xl mx-auto">
            <div className="bible-media">
              <Timeline />
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ASSISTIR LOWMOVIE - SEÇÃO ANTES DA DOCUMENTAÇÃO */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">ASSISTIR LOWMOVIE™</span>
              <span className="lang-en">WATCH LOWMOVIE™</span>
            </h2>
          </div>

          <div className="bible-block">
            <VideoPlayer 
              vimeoId="819353942"
              title="LOWMOVIE™ Full Video"
            />
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Documentation - ÚLTIMA SEÇÃO */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">DOCUMENTAÇÃO</span>
              <span className="lang-en">DOCUMENTATION</span>
            </h2>
          </div>

          <div className="bible-block">
            {/* Brandbooks */}
            <div className="grid md:grid-cols-1 gap-8">
              <PDFViewer 
                pdfUrl="/documents/LowPressure_brandbook.pdf"
                title="Brandbook LowPressure™"
                description=""
              />
              
              <PDFViewer 
                pdfUrl="/documents/LowMovie_brandbook.pdf"
                title="Brandbook LowMovie™"
                description=""
              />
            </div>

            {/* Case Studies and Videos */}
            <div className="bg-card/80 border-2 border-primary/30 rounded-lg p-8 hover:border-primary/50 transition-colors">
              <h4 className="font-mono text-primary font-bold mb-4">
                [LOWPRESSURE™]
              </h4>
              <a 
                href="https://castropizzano.com/lowpressure" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bible-link hover:underline block font-mono text-sm"
              >
                <span className="lang-pt">// Estudo de Caso</span>
                <span className="lang-en">// Case Study</span>
              </a>
            </div>

            {/* Dissertação - Coming Soon */}
            <div className="bg-card/80 border-2 border-primary/30 rounded-lg p-8 hover:border-primary/50 transition-colors">
              <h4 className="font-mono text-primary font-bold mb-4">
                <span className="lang-pt">[DISSERTAÇÃO_DE_MESTRADO]</span>
                <span className="lang-en">[MASTER'S_DISSERTATION]</span>
              </h4>
              <p className="font-mono text-sm text-muted-foreground">
                <span className="lang-pt">Depósito da dissertação de mestrado em breve.</span>
                <span className="lang-en">Master's dissertation deposit coming soon.</span>
              </p>
            </div>
          </div>
        </BilingualSection>
      </main>

      <Footer />
    </div>
  );
};

export default Dissertacao;
