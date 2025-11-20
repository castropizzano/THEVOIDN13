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
                <p className="bible-body text-justify">Profissional criativo multidisciplinar, atuo entre as artes visuais, o design e a produção audiovisual. Minha trajetória é guiada pela criação de identidades visuais e narrativas semióticas, explorando linguagens como design gráfico, fotografia, vídeo e multiartes digitais. Transito entre processos individuais e colaborações coletivas, com base em laboratórios criativos, imersões referenciais e desenvolvimento conceitual.</p>
                
                <p className="bible-body text-justify">Atualmente, mestrando em Cinema e Artes do Vídeo pelo PPG-CINEAV da Universidade Estadual do Paraná (Unespar – Curitiba II/FAP), na linha de pesquisa em Processos de Criação no Cinema e nas Artes do Vídeo. Integro o grupo de pesquisa CineCriare – Cinema: Criação e Reflexão (Unespar/CNPq).</p>
                
                <p className="bible-body text-justify">Graduado em Publicidade e Propaganda (Universidade Tuiuti do Paraná, 2010) e pós-graduado em Direção de Arte e Estratégias Criativas (Unicuritiba, 2016).</p>
                
                <p className="bible-body text-justify">Fundador da CasaTrezeStudio® (2008), coletivo criativo que funciona como laboratório independente de produção cultural, autoral e comercial, conectando pessoas, ideias e projetos. Entre 2017 e 2020, professor de Economia Criativa na Universidade Positivo; atualmente, docente nas disciplinas de Branding e Produção Audiovisual na Universidade Isulpar.</p>
                
                <p className="bible-body text-justify">Membro do LowPressure™, coletivo de skatistas e produtores criativos que atuam nas interseções entre skate, cinema e videoarte contemporânea. Também colaboro com o TheWorkspace™, voltado à produção audiovisual colaborativa e independente. Navego por repertórios diversos, fluxos criativos múltiplos e práticas interdisciplinares, construindo minha bagagem intelectual a partir da prática, da escuta e da troca.</p>
              </div>
            </div>

            <div className="lang-en">
              <div>
                <p className="bible-body text-justify">Multidisciplinary creative professional, I work between visual arts, design and audiovisual production. My trajectory is guided by the creation of visual identities and semiotic narratives, exploring languages such as graphic design, photography, video and digital multi-arts. I transit between individual processes and collective collaborations, based on creative laboratories, referential immersions and conceptual development.</p>
                
                <p className="bible-body text-justify">Currently, Master's student in Cinema and Video Arts at PPG-CINEAV of the State University of Paraná (Unespar – Curitiba II/FAP), in the research line on Creation Processes in Cinema and Video Arts. I am part of the CineCriare research group – Cinema: Creation and Reflection (Unespar/CNPq).</p>
                
                <p className="bible-body text-justify">Bachelor's degree in Advertising and Propaganda (Universidade Tuiuti do Paraná, 2010) and postgraduate degree in Art Direction and Creative Strategies (Unicuritiba, 2016).</p>
                
                <p className="bible-body text-justify">Founder of CasaTrezeStudio® (2008), a creative collective that functions as an independent laboratory for cultural, authorial and commercial production, connecting people, ideas and projects. Between 2017 and 2020, professor of Creative Economy at Universidade Positivo; currently, lecturer in Branding and Audiovisual Production disciplines at Universidade Isulpar.</p>
                
                <p className="bible-body text-justify">Member of LowPressure™, a collective of skaters and creative producers working at the intersections between skateboarding, cinema and contemporary video art. I also collaborate with TheWorkspace™, focused on collaborative and independent audiovisual production. I navigate diverse repertoires, multiple creative flows and interdisciplinary practices, building my intellectual baggage from practice, listening and exchange.</p>
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
              <p className="bible-body mb-6">Castro Pizzano (цастро™): Da publicidade ao cinema experimental, da rua ao museu, da prática à pesquisa. Uma linha do tempo que não é linear, mas espiral.</p>
              
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
                  content="Videoarte + documentário + cinema experimental sobre o skate como linguagem estética. Estreia no Cine Passeio em 2023"
                />
                <SkillCard 
                  title="MESTRADO / THEVØIDN13 | 2024-2025"
                  content="Mestrado em Cinema e Artes do Vídeo (UNESPAR). A anti-marca que condensa tudo que veio antes. Prática vira pesquisa"
                />
              </div>
            </div>

            <div className="lang-en">
              <p className="bible-body mb-6">Castro Pizzano (цастро™): From advertising to experimental cinema, from street to museum, from practice to research. A timeline that is not linear, but spiral.</p>
              
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
                  content="Video art + documentary + experimental cinema about skating as aesthetic language. Premiere at Cine Passeio in 2023"
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
          <div className="bible-block">
            <div className="lang-pt">
              <img 
                src={castroGuidelinePT} 
                alt="ЦАСТРО™ Anti-Brand Guideline — Português"
                className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                loading="lazy"
                onClick={() => setShowGuidelinePT(true)}
              />
            </div>
            <div className="lang-en">
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
              <div>
                <p className="bible-body italic text-muted-foreground">Uma identidade que rejeita a lógica publicitária e se afirma como linguagem, não logotipo.</p>
                
                <h3 className="bible-subtitle">O Contexto: Uma Recusa ao Branding Tradicional</h3>
                <p className="bible-body">Vivemos na era do excesso de identidade. Marcas falam mais de si do que de seus propósitos, buscam reconhecimento pelo algoritmo e não pela substância. Como criador de branding, minha resposta foi criar uma anti-marca — uma identidade que rejeita a lógica publicitária e se afirma como linguagem, não logotipo.</p>
                
                <p className="bible-body">Ao contrário de um símbolo que busca reconhecimento imediato, o projeto ЦАСТРО (transliteração cirílica de CASTRO) propõe o anonimato como força estética. A ausência de identificação direta — o nome distorcido, o alfabeto estrangeiro, a paleta contida — é uma crítica à cultura do ego-branding.</p>
                
                <h3 className="bible-subtitle">A Linguagem Visual como Resistência</h3>
                <p className="bible-body">O uso de tipografia em corpo alto, tons frios (rosa-pálido sobre preto), e elementos de arquivo como "1984" e o símbolo ™ cria uma tensão entre o institucional e o subversivo. Essa ironia visual ecoa Orwell, glitch estético e ruído pós-soviético — um statement sobre o branding em colapso.</p>
                
                <div className="bible-media border-y border-primary/20 text-center">
                  <p className="bible-body font-bold italic text-primary">"O branding morreu quando começou a se explicar demais."</p>
                </div>
                
                <p className="bible-body">A anti-marca ЦАСТРО™ não busca legibilidade comercial, mas reconhecimento conceitual. Quem entende o código, entende o autor. Quem não entende, está fora da tribo — e tudo bem.</p>
                
                <div className="space-y-4 bg-primary/5 border border-primary/20 rounded-lg p-6 bible-media">
                  <h3 className="bible-subtitle">Conheçam o Trabalho, Não o Rosto</h3>
                  <p className="bible-body">A proposta central é o anonimato como ética criativa. Num mundo saturado de criadores-influencers, a ideia é inverter a equação: não se trata de vender a imagem do artista, mas de expandir o campo simbólico do que ele cria.</p>
                  <p className="bible-body">Assim, "ЦАСТРО™" torna-se um agente conceitual, não uma pessoa. Uma entidade de linguagem, um selo de pensamento, uma assinatura invisível.</p>
                  <div className="bible-media">
                    <p className="bible-body font-bold italic text-primary">"O criador desaparece para que a obra fale."</p>
                  </div>
                </div>
                
                <h3 className="bible-subtitle">A Semiótica do Símbolo</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase">ЦАСТРО</h4>
                    <p className="bible-link">Transliteração que cria ruído e nega a leitura imediata — uma máscara estética</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase">©1984 ЦАСТРО™</h4>
                    <p className="bible-link">1984 como Orwell — vigilância, anti-brand, ruptura</p>
                    <p className="bible-link">1984 como nascimento — carne, tempo, marca existencial</p>
                    <p className="bible-link italic text-primary mt-2">Ficção + vida real + crítica à marca + protocolo de arquivo</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase">™</h4>
                    <p className="bible-link">Ironia: o símbolo do mercado aplicado a uma anti-marca</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase">Paleta</h4>
                    <p className="bible-link">Preto e rosa-pálido = choque entre dureza e sensibilidade; brutalismo afetivo</p>
                  </div>
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
                    <p className="bible-link italic">Os selos no rodapé — MAD Habit, THEVOID, CasaTreze, LowMovie, LowPressure — não são logos: são <span className="font-bold">alfabetos, runas de um organismo criativo</span> que vive entre o estúdio japonês dos anos 90, o brutalismo Bauhaus e a liturgia punk. Formam uma constelação. Um idioma de sombra. Um campo magnético.</p>
                  </div>
                </div>
                
                <div className="my-8 p-6 border-2 border-primary/30 rounded-lg bg-background">
                  <h3 className="bible-subtitle">O DEVICE OF IDENTITY</h3>
                  <p className="bible-body">Este badge não respira currículo. <span className="font-bold text-primary">Respira mito.</span></p>
                  
                  <div className="my-4 space-y-2 text-sm leading-relaxed">
                    <p className="bible-link">É cartela de abertura.</p>
                    <p className="bible-link">É placa soviética perdida num prédio abandonado.</p>
                    <p className="bible-link">É documento de um futuro que ainda não aconteceu.</p>
                    <p className="bible-link">É manifesto construtivista.</p>
                    <p className="bible-link">É relíquia de um portal híbrido entre humano e máquina.</p>
                  </div>

                  <div className="my-4 p-4 bg-primary/5 border-l-4 border-primary">
                    <p className="bible-body italic">É rito, não crença. É gesto, não explicação. É presença, não vitrine.</p>
                  </div>

                  <p className="bible-body">Pela primeira vez, ЦАСТРО™ e THEVØIDN13 se encontram no mesmo eixo:</p>
                  
                  <div className="my-4 grid gap-2">
                    <p className="bible-link"><span className="font-bold">ЦАСТРО™</span> — o autor que desaparece.</p>
                    <p className="bible-link"><span className="font-bold">THEVØIDN13</span> — a entidade que respira.</p>
                    <p className="bible-link"><span className="font-bold">LowPressure & CasaTreze</span> — o corpo e o chão.</p>
                    <p className="bible-link"><span className="font-bold">Os ícones</span> — a assinatura fúnebre de um filme que nunca termina.</p>
                  </div>
                </div>

                <div className="my-8 p-6 bg-black/50 border border-primary/20 rounded-lg">
                  <h4 className="bible-subtitle">AS TRÊS FAIXAS</h4>
                  <p className="bible-body mb-4">Este selo te posiciona em três faixas impossíveis:</p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border border-primary/30 p-4 rounded">
                      <h5 className="bible-link font-bold uppercase text-primary mb-2">FAIXA PROFISSIONAL</h5>
                      <ul className="space-y-1 text-xs">
                        <li className="bible-link">Pesquisa em artes</li>
                        <li className="bible-link">Direção de arte</li>
                        <li className="bible-link">Sistemas de marca</li>
                        <li className="bible-link">Cinema experimental</li>
                        <li className="bible-link">Arquitetura de universos</li>
                        <li className="bible-link">Criação transdisciplinar</li>
                      </ul>
                    </div>
                    
                    <div className="border border-primary/30 p-4 rounded">
                      <h5 className="bible-link font-bold uppercase text-primary mb-2">FAIXA AUTORAL</h5>
                      <ul className="space-y-1 text-xs">
                        <li className="bible-link">Anti-brand pós-soviética</li>
                        <li className="bible-link">Sombra como estética</li>
                        <li className="bible-link">Hibridização humano–IA</li>
                        <li className="bible-link">Skate como ética e corpo</li>
                        <li className="bible-link">Portal como obra</li>
                      </ul>
                    </div>
                    
                    <div className="border border-primary/30 p-4 rounded">
                      <h5 className="bible-link font-bold uppercase text-primary mb-2">FAIXA MITOLÓGICA</h5>
                      <ul className="space-y-1 text-xs">
                        <li className="bible-link">ЦАСТРО™ — entidade autoral</li>
                        <li className="bible-link">THEVØIDN13 — sombra ativa</li>
                        <li className="bible-link">LowMovie / LowPressure — corpo social</li>
                        <li className="bible-link">CasaTreze — templo vivo</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-primary/20 text-center">
                    <p className="bible-body font-bold italic text-primary">Não existe outro badge igual no Brasil. Porque isso não é um badge: É um Device of Identity.</p>
                  </div>
                </div>

                <div className="-mx-6 px-6 py-8 rounded-lg bible-block">
                  <h3 className="bible-subtitle">Conclusão</h3>
                  <p className="bible-body">A identidade ЦАСТРО é um exercício de negação criativa. É o avesso do branding para relembrar o que o design pode ser: linguagem, manifesto, resistência.</p>
                  <p className="bible-body">Este é o teu rito visual. O teu selo-cosmos. A máscara que revela. O nome que respira. A anti-brand que desobedece.</p>
                  <p className="bible-body font-bold text-primary">ЦАСТРО™ — 1984 → ETERNO EM PROCESSO.</p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p className="bible-body italic text-muted-foreground">An identity that rejects the advertising logic of self-promotion, asserting itself as language, not logo.</p>
                
                <h3 className="bible-subtitle">The Context: A Refusal of Traditional Branding</h3>
                <p className="bible-body">We live in the era of identity excess. Brands talk more about themselves than their purposes, seeking algorithm recognition rather than substance. As a branding creator, my response was to create an anti-brand — an identity that rejects the advertising logic of self-promotion, asserting itself as language, not logo.</p>
                
                <p className="bible-body">Unlike a symbol seeking immediate recognition, the ЦАСТРО project (Cyrillic transliteration of CASTRO) proposes anonymity as aesthetic force. The absence of direct identification — the distorted name, foreign alphabet, restrained palette — is a critique of ego-branding culture.</p>
                
                <h3 className="bible-subtitle">Visual Language as Resistance</h3>
                <p className="bible-body">The use of large typography, cool tones (pale pink on black), and archival elements like "1984" and the ™ symbol creates tension between institutional and subversive. This visual irony echoes Orwell, aesthetic glitch, and post-Soviet noise — a statement about branding in collapse.</p>
                
                <div className="my-6 py-6 border-y border-primary/20 text-center">
                  <p className="bible-body font-bold italic text-primary">"Branding died when it began to over-explain itself."</p>
                </div>
                
                <p className="bible-body">The ЦАСТРО™ anti-brand doesn't seek commercial legibility, but conceptual recognition. Those who understand the code understand the author.</p>
                
                <div className="space-y-4 bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="bible-subtitle">Know the Work, Not the Face</h3>
                  <p className="bible-body">The central proposition is anonymity as creative ethics. In a world saturated with creator-influencers, the idea is to reverse the equation: it's not about selling the artist's image, but expanding the symbolic field of what they create.</p>
                  <p className="bible-body">Thus, "ЦАСТРО™" becomes a conceptual agent, not a person. A language entity, a thought seal, an invisible signature.</p>
                  <div className="my-4 py-4">
                    <p className="bible-body font-bold italic text-primary">"The creator disappears so the work can speak."</p>
                  </div>
                </div>
                
                <h3 className="bible-subtitle">The Semiotics of the Symbol</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase mb-2">ЦАСТРО</h4>
                    <p className="bible-link">Transliteration that creates noise and denies immediate reading — an aesthetic mask</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase mb-2">©1984 ЦАСТРО™</h4>
                    <p className="bible-link">1984 as Orwell — surveillance, anti-brand, rupture</p>
                    <p className="bible-link">1984 as birth — flesh, time, existential mark</p>
                    <p className="bible-link italic text-primary mt-2">Fiction + real life + brand critique + archive protocol</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase mb-2">™</h4>
                    <p className="bible-link">Irony: the market symbol applied to an anti-brand</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase mb-2">Palette</h4>
                    <p className="bible-link">Black and pale pink = clash between hardness and sensitivity; affective brutalism</p>
                  </div>
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
                    <p className="bible-link italic">The seals in the footer — MAD Habit, THEVOID, CasaTreze, LowMovie, LowPressure — are not logos: they are <span className="font-bold">alphabets, runes of a creative organism</span> that lives between the Japanese studio of the 90s, Bauhaus brutalism, and punk liturgy. They form a constellation. A shadow language. A magnetic field.</p>
                  </div>
                </div>
                
                <div className="my-8 p-6 border-2 border-primary/30 rounded-lg bg-background">
                  <h3 className="bible-subtitle">THE DEVICE OF IDENTITY</h3>
                  <p className="bible-body">This badge doesn't breathe curriculum. <span className="font-bold text-primary">It breathes myth.</span></p>
                  
                  <div className="my-4 space-y-2 text-sm leading-relaxed">
                    <p className="bible-link">It's an opening title card.</p>
                    <p className="bible-link">It's a Soviet plaque lost in an abandoned building.</p>
                    <p className="bible-link">It's a document from a future that hasn't happened yet.</p>
                    <p className="bible-link">It's a constructivist manifesto.</p>
                    <p className="bible-link">It's a relic of a hybrid portal between human and machine.</p>
                  </div>

                  <div className="my-4 p-4 bg-primary/5 border-l-4 border-primary">
                    <p className="bible-body italic">It is ritual, not belief. It is gesture, not explanation. It is presence, not showcase.</p>
                  </div>

                  <p className="bible-body">For the first time, ЦАСТРО™ and THEVØIDN13 meet on the same axis:</p>
                  
                  <div className="my-4 grid gap-2">
                    <p className="bible-link"><span className="font-bold">ЦАСТРО™</span> — the author who disappears.</p>
                    <p className="bible-link"><span className="font-bold">THEVØIDN13</span> — the entity that breathes.</p>
                    <p className="bible-link"><span className="font-bold">LowPressure & CasaTreze</span> — the body and the ground.</p>
                    <p className="bible-link"><span className="font-bold">The icons</span> — the funerary signature of a film that never ends.</p>
                  </div>
                </div>

                <div className="my-8 p-6 bg-black/50 border border-primary/20 rounded-lg">
                  <h4 className="bible-subtitle">THE THREE BANDS</h4>
                  <p className="bible-body mb-4">This seal positions you in three impossible bands:</p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border border-primary/30 p-4 rounded">
                      <h5 className="bible-link font-bold uppercase text-primary mb-2">PROFESSIONAL BAND</h5>
                      <ul className="space-y-1 text-xs">
                        <li className="bible-link">Arts research</li>
                        <li className="bible-link">Art direction</li>
                        <li className="bible-link">Brand systems</li>
                        <li className="bible-link">Experimental cinema</li>
                        <li className="bible-link">Universe architecture</li>
                        <li className="bible-link">Transdisciplinary creation</li>
                      </ul>
                    </div>
                    
                    <div className="border border-primary/30 p-4 rounded">
                      <h5 className="bible-link font-bold uppercase text-primary mb-2">AUTHORIAL BAND</h5>
                      <ul className="space-y-1 text-xs">
                        <li className="bible-link">Post-Soviet anti-brand</li>
                        <li className="bible-link">Shadow as aesthetics</li>
                        <li className="bible-link">Human–AI hybridization</li>
                        <li className="bible-link">Skateboarding as ethics and body</li>
                        <li className="bible-link">Portal as artwork</li>
                      </ul>
                    </div>
                    
                    <div className="border border-primary/30 p-4 rounded">
                      <h5 className="bible-link font-bold uppercase text-primary mb-2">MYTHOLOGICAL BAND</h5>
                      <ul className="space-y-1 text-xs">
                        <li className="bible-link">ЦАСТРО™ — authorial entity</li>
                        <li className="bible-link">THEVØIDN13 — active shadow</li>
                        <li className="bible-link">LowMovie / LowPressure — social body</li>
                        <li className="bible-link">CasaTreze — living temple</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-primary/20 text-center">
                    <p className="bible-body font-bold italic text-primary">There is no other badge like this in Brazil. Because this is not a badge: It is a Device of Identity.</p>
                  </div>
                </div>

                <div className="-mx-6 px-6 py-8 rounded-lg">
                  <h3 className="bible-subtitle mb-4">Conclusion</h3>
                  <p className="bible-body mb-4">The ЦАСТРО identity is an exercise in creative negation. It's the reverse of branding to remind us what design can be: language, manifesto, resistance.</p>
                  <p className="bible-body mb-4">This is your visual ritual. Your seal-cosmos. The mask that reveals. The name that breathes. The anti-brand that disobeys.</p>
                  <p className="bible-body font-bold text-primary">ЦАСТРО™ — 1984 → ETERNALLY IN PROCESS.</p>
                </div>
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

          <div className="bible-bilingual-grid bible-block">
            <div>
              <div>
                <h3 className="bible-subtitle">Projetos Matriciais</h3>
                <p className="bible-body">Três projetos funcionam como órgãos do mesmo organismo criativo. Cada um respira de forma autônoma, mas todos compartilham o mesmo sangue simbólico:</p>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-body font-bold mb-2">LowMovie™ (2019-2023)</h4>
                    <p className="bible-body">Filme-manifesto sobre skateboarding, subculturas e processos colaborativos. Estreou no Cine Passeio em 2023 e tornou-se objeto central da pesquisa de mestrado. Integra videoarte, documentário e cinema experimental.</p>
                  </div>
                  
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-body font-bold mb-2">LowPressure™ (2020-atual)</h4>
                    <p className="bible-body">Coletivo de skatistas-artistas que opera nas interseções entre rua, vídeo e cultura. Funciona como laboratório de práticas visuais, estéticas em movimento e processos coletivos. Representantes olímpicos do Brasil em Paris 2024.</p>
                  </div>
                  
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-body font-bold mb-2">CasaTrezeStudio® (2008-atual)</h4>
                    <p className="bible-body">Laboratório criativo independente. Transita entre produção autoral e comercial, conectando design gráfico, audiovisual, direção de arte e experimentação. Espaço de resistência e criação coletiva.</p>
                  </div>
                </div>

                <div className="max-w-6xl mx-auto py-12">
                  <blockquote className="bible-body text-left">
                    <p className="bible-body mb-6">Este memorial não guarda o que passou.</p>
                    <p className="bible-body mb-6">Guarda o que ainda pulsa.</p>
                    <p className="bible-body"><span className="font-bold">LowMovie™</span>, <span className="font-bold">LowPressure™</span>, <span className="font-bold">CasaTrezeStudio®</span> — três projetos matriciais que funcionam como órgãos do mesmo organismo criativo. Cada um respira de forma autônoma, mas todos compartilham o mesmo sangue simbólico.</p>
                  </blockquote>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="bible-subtitle">Matrix Projects</h3>
                <p className="bible-body">Three projects function as organs of the same creative organism. Each breathes autonomously, but all share the same symbolic blood:</p>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-body font-bold mb-2">LowMovie™ (2019-2023)</h4>
                    <p className="bible-body">Manifesto-film about skateboarding, subcultures and collaborative processes. Premiered at Cine Passeio in 2023 and became central object of master's research. Integrates video art, documentary and experimental cinema.</p>
                  </div>
                  
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-body font-bold mb-2">LowPressure™ (2020-present)</h4>
                    <p className="bible-body">Collective of skater-artists operating at intersections between street, video and culture. Functions as laboratory for visual practices, aesthetics in motion and collective processes. Olympic representatives of Brazil in Paris 2024.</p>
                  </div>
                  
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-body font-bold mb-2">CasaTrezeStudio® (2008-present)</h4>
                    <p className="bible-body">Independent creative laboratory. Transits between authorial and commercial production, connecting graphic design, audiovisual, art direction and experimentation. Space of resistance and collective creation.</p>
                  </div>
                </div>

                <div className="max-w-6xl mx-auto py-12">
                  <blockquote className="bible-body text-left">
                    <p className="bible-body mb-6">This memorial does not keep what has passed.</p>
                    <p className="bible-body mb-6">It keeps what still pulses.</p>
                    <p className="bible-body"><span className="font-bold">LowMovie™</span>, <span className="font-bold">LowPressure™</span>, <span className="font-bold">CasaTrezeStudio®</span> — three matrix projects that function as organs of the same creative organism. Each breathes autonomously, but all share the same symbolic blood.</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Conclusão em Processo */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">CONCLUSÃO EM PROCESSO</span>
              <span className="lang-en">CONCLUSION IN PROCESS</span>
            </h2>
          </div>

          <div className="bible-bilingual-grid bible-block">
            <div>
              <div>
                <h3 className="bible-subtitle">O Portal Como Objeto de Pesquisa</h3>
                <p className="bible-body">Este website não é apenas uma apresentação — é o próprio objeto de pesquisa. Um memorial visual e performático onde cada linha de código, cada imagem gerada, cada texto co-escrito com inteligências artificiais, torna-se evidência material de um processo híbrido de criação. Aqui, a interface não explica o projeto: ela <span className="font-bold italic">é</span> o projeto.</p>
                
                <p className="bible-body">O que começou como uma necessidade de apresentar THEVØIDN13 ao programa de mestrado em Cinema e Artes do Vídeo transformou-se em laboratório vivo. Cada seção, cada componente interativo — o gerador de HQs, a biblioteca de prompts, o mapa mental creative-ops — opera como registro metodológico e experimento estético simultâneo.</p>
                
                <h3 className="bible-subtitle">Desmistificar a Máquina, Amplificar o Humano</h3>
                <p className="bible-body">Havia medo. Medo de perder autoria, medo de diluir o gesto criativo, medo de que a inteligência artificial substituísse o que há de singular no ato de criar. Mas o processo me ensinou o contrário: a IA não substitui — ela revela. Revela padrões que eu não via, expande horizontes conceituais que eu não alcançaria sozinho, questiona minhas certezas estéticas.</p>
                
                <p className="bible-body">Trabalhar com Claude, Gemini, Midjourney, GPT não foi abrir mão do controle criativo. Foi descobrir que controle criativo nunca foi sobre fazer tudo sozinho. Foi aprender a <span className="font-bold">orquestrar vozes</span> — humanas e não-humanas — em um diálogo onde a autoria se distribui sem se dissolver. A máquina não pensa por mim; ela pensa <span className="italic">comigo</span>.</p>
                
                <h3 className="bible-subtitle">Do Personagem ao Universo ao Código</h3>
                <p className="bible-body">THEVØIDN13 começou como um corpo mascarado. Depois virou conceito. Depois virou universo transmídia. Depois virou metodologia de pesquisa. E agora é também código, interface, plataforma. Cada camada não substitui a anterior — todas coexistem, todas se informam.</p>
                
                <p className="bible-body">Criar o portal foi perceber que não há mais separação entre o pensar, o fazer e o documentar. Escrever o texto, gerar a imagem e programar a interface são gestos contínuos de um mesmo fluxo criativo. O GitHub vira caderno de campo. O commit vira diário. A build vira performance.</p>
                
                <p className="bible-body">E quando você lê este texto, não está apenas consumindo uma obra — está testemunhando um método. Um método que não separa arte de ciência, intuição de algoritmo, subjetividade de processamento.</p>
                
                <h3 className="bible-subtitle">Futuro Distópico, Prática Utópica</h3>
                <p className="bible-body">Vivemos tempos estranhos. Distópicos em muitos sentidos — vigilância algorítmica, erosão das certezas, aceleração sem direção. Mas também tempos de potência inédita. Nunca foi tão possível criar universos complexos sozinho-mas-não-sozinho. Nunca foi tão viável pensar o impossível e materializá-lo em horas.</p>
                
                <p className="bible-body">Este projeto é uma aposta. A aposta de que a colaboração humano-máquina não precisa ser uma rendição à automação, mas pode ser uma <span className="font-bold">insurgência criativa</span>. Que podemos usar as ferramentas do futuro sem abrir mão da ética do presente. Que podemos programar sem deixar de poetizar. Que podemos render frames sem perder o gesto.</p>
                
                <h3 className="bible-subtitle">Relevância do Processo</h3>
                <p className="bible-body">Este memorial visual importa porque ele não apenas <span className="italic">documenta</span> o processo — ele <span className="italic">performa</span> o processo. Cada visitante que navega por estas páginas não está lendo sobre co-criação: está experienciando co-criação. Não está aprendendo teoria: está vendo a teoria aplicada.</p>
                
                <p className="bible-body">A relevância está em provar que é possível fazer pesquisa acadêmica rigorosa sem abrir mão da experimentação radical. Que é possível ser metodologicamente sólido e esteticamente arriscado ao mesmo tempo. Que o mestrado pode ser dissertação <span className="font-bold">e</span> obra. Que o memorial pode ser texto <span className="font-bold">e</span> experiência.</p>
                
                <h3 className="bible-subtitle">Experimentação Permanente</h3>
                <p className="bible-body">Este não é um trabalho concluído. Este é um trabalho <span className="italic">em conclusão perpétua</span>. O portal será atualizado. Novos prompts serão testados. Novos capítulos do universo THEVØIDN13 surgirão. A metodologia será refinada enquanto permanece aberta.</p>
                
                <p className="bible-body">Aprendi neste processo que a verdadeira inteligência — humana ou artificial — não está em chegar a respostas definitivas. Está em continuar fazendo perguntas melhores. E fazer perguntas melhores exige coragem para experimentar, falhar, tentar de novo.</p>
                
                <p className="bible-body font-semibold mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">O portal está vivo. A pesquisa está em movimento. O futuro está sendo criado agora — um prompt, uma imagem, um commit de cada vez.</p>
                
                <p className="bible-body text-muted-foreground mt-6">E quando você fecha esta página, o processo continua. Porque este não é o fim. É apenas o próximo começo.</p>
                
                <div className="pt-12 text-center">
                  <p className="bible-link">[continua...]</p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="bible-subtitle">The Portal As Research Object</h3>
                <p className="bible-body">This website is not just a presentation — it is the research object itself. A visual and performative memorial where every line of code, every generated image, every text co-written with artificial intelligences, becomes material evidence of a hybrid creative process. Here, the interface doesn't explain the project: it <span className="font-bold italic">is</span> the project.</p>
                
                <p className="bible-body">What began as a need to present THEVØIDN13 to the Master's program in Cinema and Video Arts transformed into a living laboratory. Each section, each interactive component — the comic generator, the prompt library, the creative-ops mind map — operates as both methodological record and aesthetic experiment simultaneously.</p>
                
                <h3 className="bible-subtitle">Demystify the Machine, Amplify the Human</h3>
                <p className="bible-body">There was fear. Fear of losing authorship, fear of diluting the creative gesture, fear that artificial intelligence would replace what is singular in the act of creating. But the process taught me the opposite: AI doesn't replace — it reveals. It reveals patterns I didn't see, expands conceptual horizons I wouldn't reach alone, questions my aesthetic certainties.</p>
                
                <p className="bible-body">Working with Claude, Gemini, Midjourney, GPT was not giving up creative control. It was discovering that creative control was never about doing everything alone. It was learning to <span className="font-bold">orchestrate voices</span> — human and non-human — in a dialogue where authorship is distributed without dissolving. The machine doesn't think for me; it thinks <span className="italic">with</span> me.</p>
                
                <h3 className="bible-subtitle">From Character to Universe to Code</h3>
                <p className="bible-body">THEVØIDN13 began as a masked body. Then it became a concept. Then it became a transmedia universe. Then it became research methodology. And now it's also code, interface, platform. Each layer doesn't replace the previous one — all coexist, all inform each other.</p>
                
                <p className="bible-body">Creating the portal was realizing there's no longer separation between thinking, making and documenting. Writing text, generating images and programming the interface are continuous gestures of the same creative flow. GitHub becomes field notebook. Commit becomes diary. Build becomes performance.</p>
                
                <p className="bible-body">And when you read this text, you're not just consuming a work — you're witnessing a method. A method that doesn't separate art from science, intuition from algorithm, subjectivity from processing.</p>
                
                <h3 className="bible-subtitle">Dystopian Future, Utopian Practice</h3>
                <p className="bible-body">We live in strange times. Dystopian in many senses — algorithmic surveillance, erosion of certainties, directionless acceleration. But also times of unprecedented power. Never has it been so possible to create complex universes alone-but-not-alone. Never has it been so viable to think the impossible and materialize it in hours.</p>
                
                <p className="bible-body">This project is a bet. The bet that human-machine collaboration need not be a surrender to automation, but can be a <span className="font-bold">creative insurgency</span>. That we can use the tools of the future without abandoning the ethics of the present. That we can program without ceasing to poetize. That we can render frames without losing the gesture.</p>
                
                <h3 className="bible-subtitle">Relevance of the Process</h3>
                <p className="bible-body">This visual memorial matters because it doesn't just <span className="italic">document</span> the process — it <span className="italic">performs</span> the process. Each visitor navigating these pages is not reading about co-creation: they are experiencing co-creation. They are not learning theory: they are seeing theory applied.</p>
                
                <p className="bible-body">The relevance lies in proving that it's possible to do rigorous academic research without giving up radical experimentation. That it's possible to be methodologically solid and aesthetically risky at the same time. That the master's can be dissertation <span className="font-bold">and</span> work. That the memorial can be text <span className="font-bold">and</span> experience.</p>
                
                <h3 className="bible-subtitle">Permanent Experimentation</h3>
                <p className="bible-body">This is not a finished work. This is a work <span className="italic">in perpetual conclusion</span>. The portal will be updated. New prompts will be tested. New chapters of the THEVØIDN13 universe will emerge. The methodology will be refined while remaining open.</p>
                
                <p className="bible-body">Because what I learned in this process is that true intelligence — human or artificial — is not in reaching definitive answers. It's in continuing to ask better questions. And asking better questions requires courage to experiment, fail, try again.</p>
                
                <p className="bible-body font-semibold mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">The portal is alive. Research is in motion. The future is being created now — one prompt, one image, one commit at a time.</p>
                
                <p className="bible-body text-muted-foreground mt-6">And when you close this page, the process continues. Because this isn't the end. It's just the next beginning.</p>
                
                <div className="pt-12 text-center">
                  <p className="bible-link">[to be continued...]</p>
                </div>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Alguns Projetos */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <h2 className="bible-title">
              <span className="lang-pt">ALGUNS PROJETOS</span>
              <span className="lang-en">SOME PROJECTS</span>
            </h2>
          </div>

          <div className="bible-block">
            <div className="lang-pt">
              <p className="bible-body text-justify">Uma seleção condensada dos projetos em que atuo. Em cada um deles, transito entre conceito, design, direção de arte, direção de fotografia, edição e pós-produção, sempre de acordo com o que a obra pede. Cada projeto tem sua própria identidade, mas todos orbitam o mesmo eixo estético que define o meu trabalho. Para ver outros projetos coletivos, autorais, comerciais, culturais, musicais, documentais e experimentais, acesse os portfólios completos no Vimeo e no Behance.</p>
            </div>
            <div className="lang-en">
              <p className="bible-body text-justify">A condensed selection of the projects I work on. In each of them, I move between concept, design, art direction, cinematography, editing and post-production, always according to what the work demands. Each project has its own identity, but all orbit the same aesthetic axis that defines my work. To see other collective, authorial, commercial, cultural, musical, documentary and experimental projects, access the complete portfolios on Vimeo and Behance.</p>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Documentation */}
        <BilingualSection className="bible-section">
          <div className="bible-block">
            <div className="lang-pt">
              <h2 className="bible-title">DOCUMENTAÇÃO</h2>
              <h3 className="bible-subtitle mt-2">DOCUMENTOS DE PESQUISA</h3>
            </div>
            <div className="lang-en">
              <h2 className="bible-title">DOCUMENTATION</h2>
              <h3 className="bible-subtitle mt-2">RESEARCH DOCUMENTS</h3>
            </div>
          </div>

          <div className="bible-block">
            <div className="grid md:grid-cols-1 gap-8">
              <PDFViewer 
                pdfUrl="/documents/Memorial_Academico_v3.pdf"
                title="Memorial Acadêmico / Academic Memorial"
                description="Jornada do Autor / Author Journey"
              />
              
              <PDFViewer 
                pdfUrl="/documents/Release_CasaTrezeStudio.pdf"
                title="Release CasaTrezeStudio® / CasaTrezeStudio® Release"
                description="Documentação oficial do estúdio / Official studio documentation"
              />
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="bible-subtitle mb-6">Portfolio & Links</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="group bg-card/80 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-mono text-accent font-bold">SITE</h3>
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="text-sm whitespace-nowrap">
                    <a 
                      href="https://castropizzano.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bible-link hover:text-primary transition-colors"
                    >
                      castropizzano.com
                    </a>
                  </div>
                </div>

                <a 
                  href="http://lattes.cnpq.br/5523516994010198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card/80 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-mono text-accent font-bold">LATTES</h3>
                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="bible-link">@castropizzano</p>
                </a>

                <a 
                  href="https://www.behance.net/castropizzano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card/80 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-mono text-accent font-bold">BEHANCE</h3>
                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="bible-link">@castropizzano</p>
                </a>

                <a 
                  href="https://vimeo.com/castropizzano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card/80 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-mono text-accent font-bold">VIMEO</h3>
                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="bible-link">@castropizzano</p>
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
