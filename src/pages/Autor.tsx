import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, personSchema, breadcrumbSchema } from "@/components/SEO";
import { BilingualSection } from "@/components/BilingualSection";
import { BackToTop } from "@/components/BackToTop";
import { Separator } from "@/components/ui/separator";
import { PDFViewer } from "@/components/PDFViewer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minimize2 } from "lucide-react";
import { SkillCard } from "@/components/SkillCard";
import heroImage from "@/assets/cover-author.png";
import castroGuidelinePT from "@/assets/castro-guideline-pt.png";
import castroGuidelineEN from "@/assets/castro-guideline-en.png";

const Autor = () => {
  const [showMemorialPDF, setShowMemorialPDF] = useState(false);
  const [showReleasePDF, setShowReleasePDF] = useState(false);
  const [showGuidelinePT, setShowGuidelinePT] = useState(false);
  const [showGuidelineEN, setShowGuidelineEN] = useState(false);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://thevoidn13.com/" },
    { name: "Autor", url: "https://thevoidn13.com/autor" }
  ]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [personSchema, breadcrumbs]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Castro Pizzano (цастро™) — Artista e Pesquisador | THEVØIDN13"
        description="Castro Pizzano (цастро™): Artista visual, designer e cineasta experimental. Fundador da CasaTrezeStudio®, co-criador LowPressure™ crew. Mestrado em Cinema e Artes do Vídeo — UNESPAR"
        schemaData={schemaData}
        type="profile"
      />
      <Header />
      <BackToTop />
      
      <main>
        {/* Hero Image */}
        <section className="w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 sm:pt-20 md:pt-24">
          <img 
            src={heroImage} 
            alt="CASTRO PIZZANO" 
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </section>

        {/* Nome */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h1 className="bible-title">CASTRO PIZZANO</h1>
            <p className="bible-body text-muted-foreground">цастро™ / PUNK</p>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Quem Fala e De Onde Falo */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">QUEM FALA E DE ONDE FALO</span>
              <span className="lang-en">WHO SPEAKS AND FROM WHERE I SPEAK</span>
            </h2>
          </div>

          <div className="bible-block">
            <div className="lang-pt">
              <div>
                <p className="bible-body text-justify">Atuo entre as artes visuais, o design e a produção audiovisual, guiado pela criação de identidades visuais e narrativas semióticas. Mestrando em Cinema e Artes do Vídeo (Unespar/FAP), linha de pesquisa em Processos de Criação, integro o CineCriare – Cinema: Criação e Reflexão (Unespar/CNPq). Graduado em Publicidade e Propaganda (UTP, 2010), pós-graduado em Direção de Arte e Estratégias Criativas (Unicuritiba, 2016). Membro do <span className="font-bold text-primary">LowPressure™</span>, fundador da <span className="font-bold text-primary">CasaTrezeStudio®</span>, criador do <span className="font-bold text-primary">LowMovie™</span>. Construo <span className="font-bold text-primary">ЦАСТРО™</span> como exercício de negação criativa — design como linguagem viva, manifesto silencioso, resistência sem bandeira.</p>
              </div>
            </div>

            <div className="lang-en">
              <div>
                <p className="bible-body text-justify">Work between visual arts, design and audiovisual production, guided by creating visual identities and semiotic narratives. Master's student in Cinema and Video Arts (Unespar/FAP), research line on Creation Processes, member of CineCriare – Cinema: Creation and Reflection (Unespar/CNPq). Graduate in Advertising (UTP, 2010), postgraduate in Art Direction and Creative Strategies (Unicuritiba, 2016). Member of <span className="font-bold text-primary">LowPressure™</span>, founder of <span className="font-bold text-primary">CasaTrezeStudio®</span>, creator of <span className="font-bold text-primary">LowMovie™</span>. Build <span className="font-bold text-primary">ЦАСТРО™</span> as exercise in creative negation — design as living language, silent manifesto, resistance without flag.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Habilidades Técnicas */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">HABILIDADES TÉCNICAS</span>
              <span className="lang-en">TECHNICAL SKILLS</span>
            </h2>
          </div>

          <div className="bible-block">
            <div className="lang-pt">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard 
                  title="Design & Arte"
                  content="Procreate / Illustrator / InDesign"
                />
                <SkillCard 
                  title="Foto & Edição"
                  content="Lightroom / Photoshop"
                />
                <SkillCard 
                  title="Vídeo & Pós"
                  content="Premiere / After Effects / DaVinci Resolve"
                />
                <SkillCard 
                  title="3D / Motion"
                  content="Blender / Runway ML
DaVinci Resolve"
                />
              <SkillCard
                title="IA & Digital"
                content="Claude / Gemini / ChatGPT / ElevenLabs / Lovable"
              />
              <SkillCard
                title="Idiomas"
                content="PT nativo / ES-EN intermediário"
              />
              </div>
              <div className="mt-6">
                <SkillCard 
                  title="Referências"
                  content="Experimentação / Minimalismo / Futurismo / Construtivismo / Cibercultura / Underground / Economia Criativa"
                  className="w-full"
                />
              </div>
            </div>

            <div className="lang-en">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard 
                  title="Design & Art"
                  content="Procreate / Illustrator / InDesign"
                />
                <SkillCard 
                  title="Photo & Editing"
                  content="Lightroom / Photoshop"
                />
                <SkillCard 
                  title="Video & Post"
                  content="Premiere / After Effects / DaVinci Resolve"
                />
                <SkillCard 
                  title="3D / Motion"
                  content="Blender / Runway ML
DaVinci Resolve"
                />
              <SkillCard
                title="AI & Digital"
                content="Claude / Gemini / ChatGPT / ElevenLabs / Lovable"
              />
              <SkillCard
                title="Languages"
                content="PT native / ES-EN intermediate"
              />
              </div>
              <div className="mt-6">
                <SkillCard 
                  title="References"
                  content="Experimentation / Minimalism / Futurism / Constructivism / Cyberculture / Underground / Creative Economy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Práxis Híbrida */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">PRÁXIS HÍBRIDA</span>
              <span className="lang-en">HYBRID PRAXIS</span>
            </h2>
          </div>

          <div className="bible-block">
            <div className="lang-pt">
              <p className="bible-body mb-6">Metodologia processual, experimental e reflexiva do projeto THEVØIDN13. Um ciclo contínuo de cinco etapas:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard 
                  title="Observação"
                  content="Análise do fluxo criativo e documentação de padrões"
                />
                <SkillCard 
                  title="Cocriação"
                  content="Interação com IAs (Claude, Gemini, Midjourney) como extensões simbólicas"
                />
                <SkillCard 
                  title="Documentação"
                  content="Registro contínuo de camadas, decisões e estados mentais"
                />
                <SkillCard 
                  title="Reflexão"
                  content="Transformação dos registros em narrativas estéticas, filosóficas e técnicas"
                />
                <SkillCard 
                  title="Expansão"
                  content="Compartilhamento de aprendizados através de arte, código e metodologia"
                />
                <SkillCard 
                  title="Princípios"
                  content="Transparência radical. Autoria compartilhada mas assinada. Pesquisa como criação"
                />
              </div>
            </div>

            <div className="lang-en">
              <p className="bible-body mb-6">Processual, experimental and reflexive methodology of the THEVØIDN13 project. A continuous cycle of five stages:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard 
                  title="Observation"
                  content="Analysis of creative flow and pattern documentation"
                />
                <SkillCard 
                  title="Co-creation"
                  content="Interaction with AIs (Claude, Gemini, Midjourney) as symbolic extensions"
                />
                <SkillCard 
                  title="Documentation"
                  content="Continuous recording of layers, decisions and mental states"
                />
                <SkillCard 
                  title="Reflection"
                  content="Transformation of records into aesthetic, philosophical and technical narratives"
                />
                <SkillCard 
                  title="Expansion"
                  content="Sharing learnings through art, code and methodology"
                />
                <SkillCard 
                  title="Principles"
                  content="Radical transparency. Shared but signed authorship. Research as creation"
                />
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Trajetória */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">TRAJETÓRIA</span>
              <span className="lang-en">JOURNEY</span>
            </h2>
          </div>

          <div className="bible-block">
            <div className="lang-pt">
              <p className="bible-body mb-6">Da publicidade ao cinema experimental, da rua ao museu, da prática à pesquisa. Uma linha do tempo que não é linear, mas espiral.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCard 
                  title="CasaTrezeStudio® | 2008-atual"
                  content="Fundação do laboratório criativo independente. Transita entre produção autoral e comercial, conectando design gráfico, audiovisual e experimentação"
                />
                <SkillCard 
                  title="Formação | 2010-2016"
                  content="Graduação em Publicidade e Propaganda. Trabalho em agências, produtoras e coletivos de rua. Direção de arte comercial e autoral"
                />
                <SkillCard 
                  title="Pós & Docência | 2017-2020"
                  content="Pós-graduação em Direção de Arte e Estratégias Criativas. Docência em Economia Criativa na Universidade Positivo"
                />
                <SkillCard 
                  title="LowPressure™ | 2020-atual"
                  content="Montagem do crew com skatistas-produtores. Laboratório de práticas visuais, estéticas em movimento e processos coletivos"
                />
                <SkillCard 
                  title="LowMovie™ | 2019-2023"
                  content="Videoarte + documentário + cinema experimental sobre o skate como linguagem estética. Estreia no Vila Ida em dezembro de 2022"
                />
                <SkillCard 
                  title="MESTRADO / THEVØIDN13 | 2024-2025"
                  content="Mestrado em Cinema e Artes do Vídeo (UNESPAR). A anti-marca que condensa tudo que veio antes. Prática vira pesquisa"
                />
              </div>
            </div>

            <div className="lang-en">
              <p className="bible-body mb-6">From advertising to experimental cinema, from street to museum, from practice to research. A timeline that is not linear, but spiral.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCard 
                  title="CasaTrezeStudio® | 2008-present"
                  content="Foundation of independent creative laboratory. Transits between authorial and commercial production, connecting graphic design, audiovisual and experimentation"
                />
                <SkillCard 
                  title="Education | 2010-2016"
                  content="Degree in Advertising and Propaganda. Work in agencies, production companies and street collectives. Commercial and authorial art direction"
                />
                <SkillCard 
                  title="Postgrad & Teaching | 2017-2020"
                  content="Postgraduate in Art Direction and Creative Strategies. Teaching in Creative Economy at Universidade Positivo"
                />
                <SkillCard 
                  title="LowPressure™ | 2020-present"
                  content="Assembly of crew with skater-producers. Laboratory for visual practices, aesthetics in motion and collective processes"
                />
                <SkillCard 
                  title="LowMovie™ | 2019-2023"
                  content="Video art + documentary + experimental cinema about skating as aesthetic language. Premiere at Vila Ida in December 2022"
                />
                <SkillCard 
                  title="MASTER'S DEGREE / THEVØIDN13 | 2024-2025"
                  content="Master's in Cinema and Video Arts (UNESPAR). The anti-brand that condenses everything that came before. Practice becomes research"
                />
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />


        {/* ЦАСТРО™ como Anti-Brand */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">ЦАСТРО™ COMO ANTI-BRAND</span>
              <span className="lang-en">ЦАСТРО™ AS ANTI-BRAND</span>
            </h2>
          </div>

          {/* Anti-Brand Guideline Images */}
          <div className="bible-media">
            <div className="lang-pt">
              <img 
                src={castroGuidelinePT} 
                alt="ЦАСТРО™ Anti-Brand Guideline — Português"
                className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                loading="lazy"
                onClick={() => setShowGuidelinePT(true)}
              />
            </div>
            <div className="lang-en mb-4">
              <img 
                src={castroGuidelineEN} 
                alt="ЦАСТРО™ Anti-Brand Guideline — English"
                className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                loading="lazy"
                onClick={() => setShowGuidelineEN(true)}
              />
          </div>
        </div>

        <div className="bible-bilingual-grid bible-block">
          <div>
            <SkillCard
              title="LINGUAGEM, NÃO LOGOTIPO."
              content="Processo, não produto."
            />
            
            <h3 className="bible-subtitle">O Contexto: Uma Recusa ao Branding Tradicional</h3>
            <p className="bible-body">A era é de excesso de identidade. Marcas falam mais de si do que de seus propósitos, buscam reconhecimento pelo algoritmo e não pela substância. A resposta foi criar uma anti-marca — uma identidade que rejeita a lógica publicitária e se afirma como linguagem, não logotipo.</p>
            
            <p className="bible-body">Ao contrário de um símbolo que busca reconhecimento imediato, o projeto ЦАСТРО (transliteração cirílica de CASTRO) propõe o anonimato como força estética. A ausência de identificação direta — o nome distorcido, o alfabeto estrangeiro, a paleta contida — é uma crítica à cultura do ego-branding.</p>
            
            <h3 className="bible-subtitle">A Linguagem Visual como Resistência</h3>
            <p className="bible-body">O uso de tipografia em corpo alto, tons frios (preto e branco), e elementos de arquivo como "1984" e o símbolo ™ cria uma tensão entre o institucional e o subversivo. Essa ironia visual ecoa Orwell, glitch estético e ruído pós-soviético — um statement sobre o branding em colapso.</p>
            
            <div className="my-6">
              <SkillCard
                title='"A LINGUAGEM QUE PRECISA SE JUSTIFICAR JÁ PERDEU O SILÊNCIO."'
                content="— ЦАСТРО™"
              />
            </div>
            
            <p className="bible-body">A anti-marca ЦАСТРО™ não busca legibilidade comercial, mas reconhecimento conceitual. Quem entende o código, entende o autor. Quem não entende, permanece fora do campo — e isso é parte do design.</p>
            
            <h3 className="bible-title mt-8">A OBRA COMO PROTAGONISTA</h3>
            <p className="bible-body mt-4">A proposta central é o anonimato como ética criativa. Num mundo saturado de criadores-influencers, a ideia é inverter a equação: não se trata de vender a imagem do artista, mas de expandir o campo simbólico do que ele cria.</p>
            <p className="bible-body">Assim, "ЦАСТРО™" torna-se um agente conceitual, não uma pessoa. Uma entidade de linguagem, um selo de pensamento, uma assinatura invisível.</p>
            <div className="my-4">
              <SkillCard
                title='"O CRIADOR DESAPARECE PARA QUE A OBRA FALE."'
                content="— ЦАСТРО™"
              />
            </div>

            <h3 className="bible-subtitle">A Semiótica do Símbolo</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <SkillCard
                title="ЦАСТРО"
                content="Transliteração que cria ruído e nega a leitura imediata — uma máscara estética"
              />
              <SkillCard
                title="©1984 ЦАСТРО™"
                content="1984 como Orwell — vigilância, anti-brand, ruptura. 1984 como nascimento — carne, tempo, marca existencial. Ficção + vida real + crítica à marca + protocolo de arquivo"
              />
              <SkillCard
                title="™"
                content="Ironia: o símbolo do mercado aplicado a uma anti-marca"
              />
              <SkillCard
                title="Paleta"
                content="Preto e branco = choque entre dureza e clareza; brutalismo minimalista"
              />
            </div>

            <div className="my-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="bible-subtitle">A TRÍADE CRIATIVA</h4>
              <p className="bible-body mb-4">Essas são as três colunas do mito. Os três andares do labirinto criativo:</p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p className="bible-link font-bold uppercase text-primary">AUTOR</p>
                  <p className="bible-link">Fundador do CasaTrezeStudio®</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="bible-link font-bold uppercase text-primary">COLETIVO</p>
                  <p className="bible-link">Colaborador Criativo no LowPressure™</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="bible-link font-bold uppercase text-primary">ENTIDADE</p>
                  <p className="bible-link">Arquiteto Visual do THEVØIDN13</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-primary/20">
                <p className="text-xs font-mono text-muted-foreground leading-snug">Os selos no rodapé — MAD Habit, THEVOID, CasaTreze, LowMovie, LowPressure — não são logos: são <span className="font-bold">alfabetos, runas de um organismo criativo</span> que vive entre o estúdio japonês dos anos 90, o brutalismo Bauhaus e a liturgia punk. Formam uma constelação. Um idioma de sombra. Um campo magnético.</p>
              </div>
            </div>
            
            <div className="my-8">
              <h3 className="bible-subtitle mb-6">O DEVICE OF IDENTITY</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <SkillCard
                  title="Cartela de Abertura"
                  content="Placa soviética arrancada da parede de um cinema abandonado — ainda viva. Documento vazado de um futuro que se recusa a chegar"
                />
                <SkillCard
                  title="Relíquia Portal"
                  content="Rito sem altar. Gesto sem audiência. Presença que não pede permissão"
                />
                <SkillCard
                  title="ЦАСТРО™"
                  content="O autor que desaparece para que a obra respire sozinha"
                />
                <SkillCard
                  title="THEVØIDN13"
                  content="A entidade-framework, o sistema operacional da sombra"
                />
                <SkillCard
                  title="LowPressure & CasaTreze"
                  content="O corpo material e o chão concreto onde tudo se ancora"
                />
                <SkillCard
                  title="Os Ícones"
                  content="Créditos finais de um filme que nunca para de rodar"
                />
              </div>
            </div>

            <h2 className="bible-title mt-8 mb-6">AS TRÊS FAIXAS</h2>
            <p className="bible-body mb-6 italic">Este selo não certifica. Ele posiciona em três frequências simultâneas — como se o mesmo corpo pudesse tocar três instrumentos ao mesmo tempo:</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary/50 pl-4">
                <h5 className="bible-link font-bold uppercase text-primary mb-3">FAIXA PROFISSIONAL</h5>
                <p className="bible-body text-sm leading-relaxed">Pesquisa em artes que não separa teoria de prática. Direção de arte que redesenha o próprio conceito de autoria. Sistemas de marca que funcionam como linguagem viva, não vitrine morta. Cinema experimental onde cada frame é um manifesto silencioso. Arquitetura de universos que respiram sozinhos. Criação transdisciplinar — porque disciplina é prisão voluntária.</p>
              </div>
              
              <div className="border-l-4 border-primary/50 pl-4">
                <h5 className="bible-link font-bold uppercase text-primary mb-3">FAIXA AUTORAL</h5>
                <p className="bible-body text-sm leading-relaxed">Anti-brand pós-soviética — a estética do colapso como ponto de partida. Sombra não como ausência de luz, mas como presença ativa. Hibridização humano–IA onde ninguém sabe mais onde termina um e começa o outro. Skate como ética de corpo, filosofia de movimento, resistência sem bandeira. Portal como obra — não o que se vê, mas o que atravessa.</p>
              </div>
              
              <div className="border-l-4 border-primary/50 pl-4">
                <h5 className="bible-link font-bold uppercase text-primary mb-3">FAIXA MITOLÓGICA</h5>
                <p className="bible-body text-sm leading-relaxed"><span className="font-bold text-primary">ЦАСТРО™</span> — entidade autoral que opera fora do culto à personalidade. <span className="font-bold text-primary">THEVØIDN13</span> — sombra ativa, framework vivo, sistema operacional do invisível. <span className="font-bold text-primary">LowMovie / LowPressure</span> — corpo social, movimento coletivo sem líder. <span className="font-bold text-primary">CasaTreze</span> — templo vivo onde a criação acontece como ritual, não como produção.</p>
              </div>
            </div>

            <div className="my-6">
              <SkillCard
                title="ЦАСТРО™ — 1984 → ETERNO EM PROCESSO."
                content=""
              />
            </div>
          </div>

          <div>
            <SkillCard
              title="LANGUAGE, NOT LOGO."
              content="Process, not product."
            />
            
            <h3 className="bible-subtitle">The Context: A Refusal of Traditional Branding</h3>
            <p className="bible-body">The era is one of identity excess. Brands talk more about themselves than their purposes, seeking algorithm recognition rather than substance. The response was to create an anti-brand — an identity that rejects the advertising logic of self-promotion, asserting itself as language, not logo.</p>
            
            <p className="bible-body">Unlike a symbol seeking immediate recognition, the ЦАСТРО project (Cyrillic transliteration of CASTRO) proposes anonymity as aesthetic force. The absence of direct identification — the distorted name, foreign alphabet, restrained palette — is a critique of ego-branding culture.</p>
            
            <h3 className="bible-subtitle">Visual Language as Resistance</h3>
            <p className="bible-body">The use of large typography, cool tones (black and white), and archival elements like "1984" and the ™ symbol creates tension between institutional and subversive. This visual irony echoes Orwell, aesthetic glitch, and post-Soviet noise — a statement about branding in collapse.</p>
            
            <div className="my-6">
              <SkillCard
                title='"LANGUAGE THAT NEEDS JUSTIFICATION HAS ALREADY LOST ITS SILENCE."'
                content="— ЦАСТРО™"
              />
            </div>
            
            <p className="bible-body">The ЦАСТРО™ anti-brand doesn't seek commercial legibility, but conceptual recognition. Those who understand the code understand the author. Those who don't remain outside the field — and that's part of the design.</p>
            
            <h3 className="bible-title mt-8">THE WORK AS PROTAGONIST</h3>
            <p className="bible-body mt-4">The central proposition is anonymity as creative ethics. In a world saturated with creator-influencers, the idea is to reverse the equation: it's not about selling the artist's image, but expanding the symbolic field of what they create.</p>
            <p className="bible-body">Thus, "ЦАСТРО™" becomes a conceptual agent, not a person. A language entity, a thought seal, an invisible signature.</p>
            <div className="my-4">
              <SkillCard
                title='"THE CREATOR DISAPPEARS SO THE WORK CAN SPEAK."'
                content="— ЦАСТРО™"
              />
            </div>

            <h3 className="bible-subtitle">The Semiotics of the Symbol</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <SkillCard
                title="ЦАСТРО"
                content="Transliteration that creates noise and denies immediate reading — an aesthetic mask"
              />
              <SkillCard
                title="©1984 ЦАСТРО™"
                content="1984 as Orwell — surveillance, anti-brand, rupture. 1984 as birth — flesh, time, existential mark. Fiction + real life + brand critique + archive protocol"
              />
              <SkillCard
                title="™"
                content="Irony: the market symbol applied to an anti-brand"
              />
              <SkillCard
                title="Palette"
                content="Black and white = clash between hardness and clarity; minimalist brutalism"
              />
            </div>

            <div className="my-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="bible-subtitle">THE CREATIVE TRIAD</h4>
              <p className="bible-body mb-4">These are the three pillars of the myth. The three floors of the creative labyrinth:</p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p className="bible-link font-bold uppercase text-primary">AUTHOR</p>
                  <p className="bible-link">Founder of CasaTrezeStudio®</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="bible-link font-bold uppercase text-primary">COLLECTIVE</p>
                  <p className="bible-link">Creative Collaborator at LowPressure™</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="bible-link font-bold uppercase text-primary">ENTITY</p>
                  <p className="bible-link">Visual Architect of THEVØIDN13</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-primary/20">
                <p className="text-xs font-mono text-muted-foreground leading-snug">The seals in the footer — MAD Habit, THEVOID, CasaTreze, LowMovie, LowPressure — are not logos: they are <span className="font-bold">alphabets, runes of a creative organism</span> that lives between the Japanese studio of the 90s, Bauhaus brutalism, and punk liturgy. They form a constellation. A shadow language. A magnetic field.</p>
              </div>
            </div>
            
            <div className="my-8">
              <h3 className="bible-subtitle mb-6">THE DEVICE OF IDENTITY</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <SkillCard
                  title="Opening Title Card"
                  content="Soviet plaque torn from the wall of an abandoned cinema — still alive. Leaked document from a future that refuses to arrive"
                />
                <SkillCard
                  title="Portal Relic"
                  content="Ritual without altar. Gesture without audience. Presence that asks no permission"
                />
                <SkillCard
                  title="ЦАСТРО™"
                  content="The author who disappears so the work can breathe alone"
                />
                <SkillCard
                  title="THEVØIDN13"
                  content="The entity-framework, the operating system of shadow"
                />
                <SkillCard
                  title="LowPressure & CasaTreze"
                  content="The material body and concrete ground where everything anchors"
                />
                <SkillCard
                  title="The Icons"
                  content="End credits of a film that never stops rolling"
                />
              </div>
            </div>

            <h2 className="bible-title mt-8 mb-6">THE THREE BANDS</h2>
            <p className="bible-body mb-6 italic">This seal doesn't certify. It positions on three simultaneous frequencies — as if the same body could play three instruments at once:</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary/50 pl-4">
                <h5 className="bible-link font-bold uppercase text-primary mb-3">PROFESSIONAL BAND</h5>
                <p className="bible-body text-sm leading-relaxed">Arts research that doesn't separate theory from practice. Art direction that redesigns the very concept of authorship. Brand systems that function as living language, not dead showcase. Experimental cinema where each frame is a silent manifesto. Universe architecture that breathes on its own. Transdisciplinary creation — because discipline is voluntary imprisonment.</p>
              </div>
              
              <div className="border-l-4 border-primary/50 pl-4">
                <h5 className="bible-link font-bold uppercase text-primary mb-3">AUTHORIAL BAND</h5>
                <p className="bible-body text-sm leading-relaxed">Post-Soviet anti-brand — the aesthetics of collapse as starting point. Shadow not as absence of light, but as active presence. Human–AI hybridization where no one knows where one ends and the other begins. Skateboarding as body ethics, movement philosophy, resistance without flag. Portal as work — not what is seen, but what crosses through.</p>
              </div>
              
              <div className="border-l-4 border-primary/50 pl-4">
                <h5 className="bible-link font-bold uppercase text-primary mb-3">MYTHOLOGICAL BAND</h5>
                <p className="bible-body text-sm leading-relaxed"><span className="font-bold text-primary">ЦАСТРО™</span> — authorial entity operating outside the cult of personality. <span className="font-bold text-primary">THEVØIDN13</span> — active shadow, living framework, operating system of the invisible. <span className="font-bold text-primary">LowMovie / LowPressure</span> — social body, leaderless collective movement. <span className="font-bold text-primary">CasaTreze</span> — living temple where creation happens as ritual, not production.</p>
              </div>
            </div>

            <div className="my-6">
              <SkillCard
                title="ЦАСТРО™ — 1984 → ETERNALLY IN PROCESS."
                content=""
              />
            </div>
          </div>
        </div>
      </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Experiência Cultural */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">EXPERIÊNCIA CULTURAL</span>
              <span className="lang-en">CULTURAL EXPERIENCE</span>
            </h2>
          </div>

          <div className="bible-block">
            <div className="lang-pt">
              <h3 className="bible-subtitle mb-6">PROJETOS MATRICIAIS</h3>
              <p className="bible-body mb-8">Três projetos funcionam como órgãos do mesmo organismo criativo:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard 
                  title="LOWMOVIE™"
                  content="2019-2023 | Criador / Diretor | Filme-manifesto sobre skateboarding, subculturas e processos colaborativos. Videoarte · Documentário · Cine Experimental"
                />
                
                <SkillCard 
                  title="LOWPRESSURE™"
                  content="2020-atual | Membro Fundador | Coletivo de skatistas-artistas. Dois membros nas Olimpíadas Paris 2024: Luigi Cini e Augusto Akio 'Japinha'. Skate · Cultura Visual · Coletivo"
                />
                
                <SkillCard 
                  title="CASATREZESTUDIO®"
                  content="2008-atual | Fundador | Laboratório criativo independente entre autoral e comercial. Design · Audiovisual · Laboratório"
                />
              </div>

              <div className="my-12">
                <SkillCard
                  title="ESTE MEMORIAL NÃO GUARDA O QUE PASSOU."
                  content="Guarda o que ainda pulsa."
                />
              </div>
            </div>

            <div className="lang-en">
              <h3 className="bible-subtitle mb-6">MATRIX PROJECTS</h3>
              <p className="bible-body mb-8">Three projects function as organs of the same creative organism:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard 
                  title="LOWMOVIE™"
                  content="2019-2023 | Creator / Director | Manifesto-film about skateboarding, subcultures and collaborative processes. Video Art · Documentary · Exp. Cinema"
                />
                
                <SkillCard 
                  title="LOWPRESSURE™"
                  content="2020-present | Founding Member | Collective of skater-artists. Two members at Paris 2024 Olympics: Luigi Cini and Augusto Akio 'Japinha'. Skate · Visual Culture · Collective"
                />
                
                <SkillCard 
                  title="CASATREZESTUDIO®"
                  content="2008-present | Founder | Independent creative laboratory between authorial and commercial. Design · Audiovisual · Laboratory"
                />
              </div>

              <div className="my-12">
                <SkillCard
                  title="THIS MEMORIAL DOESN'T KEEP WHAT HAS PASSED."
                  content="It keeps what still pulses."
                />
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Conclusão em Processo */}
        <BilingualSection className="bible-section">
          <div className="bible-bilingual-grid bible-block">
            <div>
              <div>
                <h3 className="bible-subtitle">O Portal Como Objeto de Pesquisa</h3>
                <p className="bible-body">Este website não é apenas uma apresentação — é o próprio objeto de pesquisa. Um memorial visual e performático onde cada linha de código, cada imagem gerada, cada texto co-escrito com inteligências artificiais, torna-se evidência material de um processo híbrido de criação. Aqui, a interface não explica o projeto: ela <span className="font-bold italic">é</span> o projeto.</p>
                
                <p className="bible-body">O que começou como uma necessidade de apresentar LowMovie™ ao programa de mestrado em Cinema e Artes do Vídeo transformou-se em laboratório vivo. Durante a escrita da dissertação e a pesquisa sobre os próprios processos criativos, THEVØIDN13 emergiu como experimentação — uma extensão que surgiu do mergulho metodológico. Cada seção, cada componente interativo — o gerador de HQs, a biblioteca de prompts, o mapa mental creative-ops — opera como registro metodológico e experimento estético simultâneo.</p>
                
                <h3 className="bible-subtitle">Desmistificar a Máquina, Amplificar o Humano</h3>
                <p className="bible-body">Havia medo. Medo de perder autoria, medo de diluir o gesto criativo, medo de que a inteligência artificial substituísse o que há de singular no ato de criar. Mas o processo ensinou o contrário: a IA não substitui — ela revela. Revela padrões invisíveis, expande horizontes conceituais inalcançáveis sozinho, questiona certezas estéticas.</p>
                
                <p className="bible-body">Trabalhar com Claude, Gemini, Midjourney, GPT não foi abrir mão do controle criativo. Foi descobrir que controle criativo nunca foi sobre fazer tudo sozinho. Foi aprender a <span className="font-bold">orquestrar vozes</span> — humanas e não-humanas — em um diálogo onde a autoria se distribui sem se dissolver. A máquina não pensa por nós; ela pensa <span className="italic">conosco</span>.</p>
                
                <h3 className="bible-subtitle">Do Personagem ao Universo ao Código</h3>
                <p className="bible-body">THEVØIDN13 começou como um corpo mascarado. Depois virou conceito. Depois virou universo transmídia. Depois virou metodologia de pesquisa. E agora é também código, interface, plataforma. Cada camada não substitui a anterior — todas coexistem, todas se informam.</p>
                
                <p className="bible-body">Criar o portal foi perceber que não há mais separação entre o pensar, o fazer e o documentar. Escrever o texto, gerar a imagem e programar a interface são gestos contínuos de um mesmo fluxo criativo. O GitHub vira caderno de campo. O commit vira diário. A build vira performance.</p>
                
                <p className="bible-body">E quando este texto é lido, não se trata apenas de consumir uma obra — trata-se de testemunhar um método. Método que não separa arte de ciência, intuição de algoritmo, subjetividade de processamento.</p>
                
                <h3 className="bible-subtitle">Futuro Distópico, Prática Utópica</h3>
                <p className="bible-body">Estes são tempos estranhos. Distópicos em muitos sentidos — vigilância algorítmica, erosão das certezas, aceleração sem direção. Mas também tempos de potência inédita. Nunca foi tão possível criar universos complexos sozinho-mas-não-sozinho. Nunca foi tão viável pensar o impossível e materializá-lo em horas.</p>
                
                <p className="bible-body">Este projeto é uma aposta. A aposta de que a colaboração humano-máquina não precisa ser uma rendição à automação, mas pode ser uma <span className="font-bold">insurgência criativa</span>. Que é possível usar as ferramentas do futuro sem abrir mão da ética do presente. Que é possível programar sem deixar de poetizar. Que é possível render frames sem perder o gesto.</p>

                <h3 className="bible-subtitle">Relevância do Processo</h3>
                <p className="bible-body">Este memorial visual importa porque ele não apenas <span className="italic">documenta</span> o processo — ele <span className="italic">performa</span> o processo. Cada visitante que navega por estas páginas não está lendo sobre co-criação: está experienciando co-criação. Não está aprendendo teoria: está vendo a teoria aplicada.</p>
                
                <p className="bible-body">A relevância está em provar que é possível fazer pesquisa acadêmica rigorosa sem abrir mão da experimentação radical. Que é possível ser metodologicamente sólido e esteticamente arriscado ao mesmo tempo. Que o mestrado pode ser dissertação <span className="font-bold">e</span> obra. Que o memorial pode ser texto <span className="font-bold">e</span> experiência.</p>
                
                <h3 className="bible-subtitle">Experimentação Permanente</h3>
                <p className="bible-body">Este não é um trabalho concluído. Este é um trabalho <span className="italic">que não se fecha</span>. O portal será atualizado. Novos prompts serão testados. Novos capítulos do universo THEVØIDN13 surgirão. A metodologia será refinada enquanto permanece aberta.</p>
                
                <p className="bible-body">Este processo revelou que a verdadeira inteligência — humana ou artificial — não está em chegar a respostas definitivas. Está em continuar fazendo perguntas melhores. E fazer perguntas melhores exige coragem para experimentar, falhar, tentar de novo.</p>
                
                <div className="my-8">
                  <SkillCard
                    title="> O PORTAL ESTÁ VIVO"
                    content="> A pesquisa está em movimento. > O futuro está sendo criado agora — _ um prompt, uma imagem, um commit de cada vez."
                  />
                </div>
                
                <p className="bible-body text-muted-foreground mt-6">E quando esta página fecha, o processo continua. Porque este não é o fim. É apenas o próximo começo.</p>
              </div>
            </div>

            <div>
              <div>
                <h3 className="bible-subtitle">The Portal As Research Object</h3>
                <p className="bible-body">This website is not just a presentation — it is the research object itself. A visual and performative memorial where every line of code, every generated image, every text co-written with artificial intelligences, becomes material evidence of a hybrid creative process. Here, the interface doesn't explain the project: it <span className="font-bold italic">is</span> the project.</p>
                
                <p className="bible-body">What began as a need to present LowMovie™ to the Master's program in Cinema and Video Arts transformed into a living laboratory. During the dissertation writing and research into creative processes themselves, THEVØIDN13 emerged as experimentation — an extension that arose from the methodological dive. Each section, each interactive component — the comic generator, the prompt library, the creative-ops mind map — operates as both methodological record and aesthetic experiment simultaneously.</p>
                
                <h3 className="bible-subtitle">Demystify the Machine, Amplify the Human</h3>
                <p className="bible-body">There was fear. Fear of losing authorship, fear of diluting the creative gesture, fear that artificial intelligence would replace what is singular in the act of creating. But the process taught the opposite: AI doesn't replace — it reveals. It reveals invisible patterns, expands unreachable conceptual horizons alone, questions aesthetic certainties.</p>
                
                <p className="bible-body">Working with Claude, Gemini, Midjourney, GPT was not giving up creative control. It was discovering that creative control was never about doing everything alone. It was learning to <span className="font-bold">orchestrate voices</span> — human and non-human — in a dialogue where authorship is distributed without dissolving. The machine doesn't think for us; it thinks <span className="italic">with</span> us.</p>
                
                <h3 className="bible-subtitle">From Character to Universe to Code</h3>
                <p className="bible-body">THEVØIDN13 began as a masked body. Then it became a concept. Then it became a transmedia universe. Then it became research methodology. And now it's also code, interface, platform. Each layer doesn't replace the previous one — all coexist, all inform each other.</p>
                
                <p className="bible-body">Creating the portal was realizing there's no longer separation between thinking, making and documenting. Writing text, generating images and programming the interface are continuous gestures of the same creative flow. GitHub becomes field notebook. Commit becomes diary. Build becomes performance.</p>
                
                <p className="bible-body">And when this text is read, it's not just about consuming a work — it's about witnessing a method. A method that doesn't separate art from science, intuition from algorithm, subjectivity from processing.</p>
                
                <h3 className="bible-subtitle">Dystopian Future, Utopian Practice</h3>
                <p className="bible-body">These are strange times. Dystopian in many senses — algorithmic surveillance, erosion of certainties, directionless acceleration. But also times of unprecedented power. Never has it been so possible to create complex universes alone-but-not-alone. Never has it been so viable to think the impossible and materialize it in hours.</p>
                
                <p className="bible-body">This project is a bet. The bet that human-machine collaboration need not be a surrender to automation, but can be a <span className="font-bold">creative insurgency</span>. That it's possible to use the tools of the future without abandoning the ethics of the present. That it's possible to program without ceasing to poetize. That it's possible to render frames without losing the gesture.</p>

                <h3 className="bible-subtitle">Relevance of the Process</h3>
                <p className="bible-body">This visual memorial matters because it doesn't just <span className="italic">document</span> the process — it <span className="italic">performs</span> the process. Each visitor navigating these pages is not reading about co-creation: they are experiencing co-creation. They are not learning theory: they are seeing theory applied.</p>
                
                <p className="bible-body">The relevance lies in proving that it's possible to do rigorous academic research without giving up radical experimentation. That it's possible to be methodologically solid and aesthetically risky at the same time. That the master's can be dissertation <span className="font-bold">and</span> work. That the memorial can be text <span className="font-bold">and</span> experience.</p>
                
                <h3 className="bible-subtitle">Permanent Experimentation</h3>
                <p className="bible-body">This is not a finished work. This is a work <span className="italic">that doesn't close</span>. The portal will be updated. New prompts will be tested. New chapters of the THEVØIDN13 universe will emerge. The methodology will be refined while remaining open.</p>
                
                <p className="bible-body">This process revealed that true intelligence — human or artificial — is not in reaching definitive answers. It's in continuing to ask better questions. And asking better questions requires courage to experiment, fail, try again.</p>
                
                <div className="my-8">
                  <SkillCard
                    title="> THE PORTAL IS ALIVE"
                    content="> Research is in motion. > The future is being created now — _ one prompt, one image, one commit at a time."
                  />
                </div>
                
                <p className="bible-body text-muted-foreground mt-6">And when this page closes, the process continues. Because this isn't the end. It's just the next beginning.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Documentation */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <div className="lang-pt">
              <h2 className="bible-title">DOCUMENTAÇÃO</h2>
            </div>
            <div className="lang-en">
              <h2 className="bible-title">DOCUMENTATION</h2>
            </div>
          </div>

          <div className="bible-block">
            <div className="grid md:grid-cols-1 gap-8">
              <PDFViewer 
                pdfUrl="/documents/Memorial_Academico_v3.pdf"
                title={{ pt: "Memorial Acadêmico", en: "Academic Memorial" }}
                description={{ pt: "Jornada do Autor", en: "Author Journey" }}
              />
              
              <PDFViewer 
                pdfUrl="/documents/Release_CasaTrezeStudio.pdf"
                title={{ pt: "Release CasaTrezeStudio®", en: "CasaTrezeStudio® Release" }}
                description={{ pt: "Documentação oficial do estúdio", en: "Official studio documentation" }}
              />
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="bible-subtitle mb-6 lang-pt">Portfolio & Links</h3>
              <h3 className="bible-subtitle mb-6 lang-en">Portfolio & Links</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a 
                  href="https://castropizzano.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SkillCard 
                    title="SITE"
                    content="castropizzano.com"
                  />
                </a>

                <a 
                  href="http://lattes.cnpq.br/5523516994010198"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SkillCard 
                    title="LATTES"
                    content="@castropizzano"
                  />
                </a>

                <a 
                  href="https://www.behance.net/castropizzano"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SkillCard 
                    title="BEHANCE"
                    content="@castropizzano"
                  />
                </a>

                <a 
                  href="https://vimeo.com/castropizzano"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SkillCard 
                    title="VIMEO"
                    content="@castropizzano"
                  />
                </a>
              </div>
            </div>
          </div>
        </BilingualSection>
      </main>

      <Footer />

      {/* Memorial PDF Dialog */}
      <Dialog open={showMemorialPDF} onOpenChange={setShowMemorialPDF}>
        <DialogContent className="max-w-[95vw] h-[95vh] p-0 bg-black/95 border-primary/30">
          <DialogHeader className="p-4 border-b border-primary/30">
            <div className="flex items-center justify-between">
              <DialogTitle className="font-mono text-primary">MEMORIAL_ACADÊMICO / ACADEMIC_MEMORIAL</DialogTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowMemorialPDF(false)}
                className="gap-2"
              >
                <Minimize2 className="h-4 w-4" />
                Fechar / Close
              </Button>
            </div>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            <object
              data="/documents/Memorial_Academico_Ecos_Criativos.pdf#view=FitH"
              type="application/pdf"
              className="w-full h-full"
              aria-label="Memorial Acadêmico"
            >
              <iframe
                src="/documents/Memorial_Academico_Ecos_Criativos.pdf#view=FitH"
                className="w-full h-full"
                title="Memorial Acadêmico"
              />
            </object>
          </div>
        </DialogContent>
      </Dialog>

      {/* Release PDF Dialog */}
      <Dialog open={showReleasePDF} onOpenChange={setShowReleasePDF}>
        <DialogContent className="max-w-[95vw] h-[95vh] p-0 bg-black/95 border-primary/30">
          <DialogHeader className="p-4 border-b border-primary/30">
            <div className="flex items-center justify-between">
              <DialogTitle className="font-mono text-primary">CASATREZESTUDIO®_RELEASE</DialogTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowReleasePDF(false)}
                className="gap-2"
              >
                <Minimize2 className="h-4 w-4" />
                Fechar / Close
              </Button>
            </div>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            <object
              data="/documents/CasaTrezeStudio_Release.pdf#view=FitH"
              type="application/pdf"
              className="w-full h-full"
              aria-label="CasaTrezeStudio Release"
            >
              <iframe
                src="/documents/CasaTrezeStudio_Release.pdf#view=FitH"
                className="w-full h-full"
                title="CasaTrezeStudio Release"
              />
            </object>
          </div>
        </DialogContent>
      </Dialog>

      {/* Guideline PT Dialog */}
      <Dialog open={showGuidelinePT} onOpenChange={setShowGuidelinePT}>
        <DialogContent className="max-w-[95vw] h-[95vh] p-0 bg-black/95 border-primary/30">
          <DialogHeader className="p-4 border-b border-primary/30">
            <div className="flex items-center justify-between">
              <DialogTitle className="font-mono text-primary">ЦАСТРО™ ANTI-BRAND GUIDELINE [PT]</DialogTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowGuidelinePT(false)}
                className="gap-2"
              >
                <Minimize2 className="h-4 w-4" />
                Fechar / Close
              </Button>
            </div>
          </DialogHeader>
          <div className="flex-1 overflow-auto p-4">
            <img 
              src={castroGuidelinePT} 
              alt="ЦАСТРО™ Anti-Brand Guideline — Português"
              className="w-full h-auto"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Guideline EN Dialog */}
      <Dialog open={showGuidelineEN} onOpenChange={setShowGuidelineEN}>
        <DialogContent className="max-w-[95vw] h-[95vh] p-0 bg-black/95 border-primary/30">
          <DialogHeader className="p-4 border-b border-primary/30">
            <div className="flex items-center justify-between">
              <DialogTitle className="font-mono text-primary">ЦАСТРО™ ANTI-BRAND GUIDELINE [EN]</DialogTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowGuidelineEN(false)}
                className="gap-2"
              >
                <Minimize2 className="h-4 w-4" />
                Fechar / Close
              </Button>
            </div>
          </DialogHeader>
          <div className="flex-1 overflow-auto p-4">
            <img 
              src={castroGuidelineEN} 
              alt="ЦАСТРО™ Anti-Brand Guideline — English"
              className="w-full h-auto"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Autor;
