import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, personSchema, breadcrumbSchema } from "@/components/SEO";
import { BilingualSection } from "@/components/BilingualSection";
import { BackToTop } from "@/components/BackToTop";
import { Separator } from "@/components/ui/separator";
import heroImage from "@/assets/author-hero.png";

const Autor = () => {
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
        <section className="w-full h-screen overflow-hidden">
          <img src={heroImage} alt="CASTRO PIZZANO" className="w-full h-full object-contain" />
        </section>

        {/* Nome */}
        <BilingualSection className="py-16">
          <div>
            <h1 className="bible-title">CASTRO PIZZANO</h1>
            <p className="bible-body mt-4 text-muted-foreground">цастро™ / PUNK</p>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Quem Fala e De Onde Falo */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">QUEM FALA E DE ONDE FALO</h2>
            </div>
            <div>
              <h2 className="bible-title">WHO SPEAKS AND FROM WHERE I SPEAK</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">PORTUGUÊS</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Profissional criativo multidisciplinar, atuo entre as artes visuais, o design e a produção audiovisual. Minha trajetória é guiada pela criação de identidades visuais e narrativas semióticas, explorando linguagens como fotografia, vídeo, design gráfico e multiartes digitais. Transito entre processos individuais e colaborações coletivas, com base em laboratórios criativos, imersões referenciais e desenvolvimento conceitual.</p>
                
                <p className="bible-body">Atualmente, mestrando em Cinema e Artes do Vídeo pelo PPG-CINEAV da Universidade Estadual do Paraná (Unespar – Curitiba II/FAP), na linha de pesquisa em Processos de Criação no Cinema e nas Artes do Vídeo. Integro o grupo de pesquisa CineCriare – Cinema: Criação e Reflexão (Unespar/CNPq).</p>
                
                <p className="bible-body">Graduado em Publicidade e Propaganda (Universidade Tuiuti do Paraná, 2010) e pós-graduado em Direção de Arte e Estratégias Criativas (Unicuritiba, 2016).</p>
                
                <p className="bible-body">Fundador da CasaTrezeStudio® (2008), coletivo criativo que funciona como laboratório independente de produção cultural, autoral e comercial, conectando pessoas, ideias e projetos. Entre 2017 e 2020, professor de Economia Criativa na Universidade Positivo; atualmente, docente nas disciplinas de Branding e Produção Audiovisual na Universidade Isulpar.</p>
                
                <p className="bible-body">Membro do LowPressure™, coletivo de skatistas e produtores criativos que atuam nas interseções entre skate, cinema e videoarte contemporânea. Também colaboro com o TheWorkspace™, voltado à produção audiovisual colaborativa e independente. Navego por repertórios diversos, fluxos criativos múltiplos e práticas interdisciplinares, construindo minha bagagem intelectual a partir da prática, da escuta e da troca.</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">ENGLISH</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Multidisciplinary creative professional, I work between visual arts, design and audiovisual production. My trajectory is guided by the creation of visual identities and semiotic narratives, exploring languages such as photography, video, graphic design and digital multi-arts. I transit between individual processes and collective collaborations, based on creative laboratories, referential immersions and conceptual development.</p>
                
                <p className="bible-body">Currently, Master's student in Cinema and Video Arts at PPG-CINEAV of the State University of Paraná (Unespar – Curitiba II/FAP), in the research line on Creation Processes in Cinema and Video Arts. I am part of the CineCriare research group – Cinema: Creation and Reflection (Unespar/CNPq).</p>
                
                <p className="bible-body">Bachelor's degree in Advertising and Propaganda (Universidade Tuiuti do Paraná, 2010) and postgraduate degree in Art Direction and Creative Strategies (Unicuritiba, 2016).</p>
                
                <p className="bible-body">Founder of CasaTrezeStudio® (2008), a creative collective that functions as an independent laboratory for cultural, authorial and commercial production, connecting people, ideas and projects. Between 2017 and 2020, professor of Creative Economy at Universidade Positivo; currently, lecturer in Branding and Audiovisual Production disciplines at Universidade Isulpar.</p>
                
                <p className="bible-body">Member of LowPressure™, a collective of skaters and creative producers working at the intersections between skateboarding, cinema and contemporary video art. I also collaborate with TheWorkspace™, focused on collaborative and independent audiovisual production. I navigate diverse repertoires, multiple creative flows and interdisciplinary practices, building my intellectual baggage from practice, listening and exchange.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Habilidades Técnicas */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">HABILIDADES TÉCNICAS</h2>
            </div>
            <div>
              <h2 className="bible-title">TECHNICAL SKILLS</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">PORTUGUÊS</p>
              <div className="space-y-8 mt-6">
                <div>
                  <h3 className="bible-subtitle">[DESIGN & ARTE]</h3>
                  <ul className="space-y-2">
                    <li className="bible-body">• Adobe Illustrator</li>
                    <li className="bible-body">• Adobe InDesign</li>
                    <li className="bible-body">• Adobe Fresco</li>
                    <li className="bible-body">• Procreate</li>
                  </ul>
                </div>

                <div>
                  <h3 className="bible-subtitle">[FOTO & EDIÇÃO]</h3>
                  <ul className="space-y-2">
                    <li className="bible-body">• Adobe Photoshop</li>
                    <li className="bible-body">• Adobe Lightroom</li>
                  </ul>
                </div>

                <div>
                  <h3 className="bible-subtitle">[VÍDEO & PÓS PRODUÇÃO]</h3>
                  <ul className="space-y-2">
                    <li className="bible-body">• Blender</li>
                    <li className="bible-body">• Adobe Premiere</li>
                    <li className="bible-body">• Adobe After Effects</li>
                  </ul>
                </div>

                <div>
                  <h3 className="bible-subtitle">[EXPERIMENTAL]</h3>
                  <ul className="space-y-2">
                    <li className="bible-body">• Ultimaker Cura</li>
                    <li className="bible-body">• UCreality 3D</li>
                    <li className="bible-body">• Figma</li>
                    <li className="bible-body">• AI Tools: Claude, Gemini, Midjourney, ChatGPT, Lovable</li>
                  </ul>
                </div>

                <div>
                  <h3 className="bible-subtitle">[IDIOMAS]</h3>
                  <p className="bible-body">Português (nativo) • Espanhol (intermediário) • Inglês (intermediário)</p>
                </div>

                <div>
                  <h3 className="bible-subtitle">[REFERENCIAL]</h3>
                  <p className="bible-body">Minimalista/Experimentação • Futurista/Construtivismo • Cibercultura/Semiótica • Tipografia/Infografia • Economia Criativa • Underground • Op-Art</p>
                </div>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">ENGLISH</p>
              <div className="space-y-8 mt-6">
                <div>
                  <h3 className="bible-subtitle">[DESIGN & ART]</h3>
                  <ul className="space-y-2">
                    <li className="bible-body">• Adobe Illustrator</li>
                    <li className="bible-body">• Adobe InDesign</li>
                    <li className="bible-body">• Adobe Fresco</li>
                    <li className="bible-body">• Procreate</li>
                  </ul>
                </div>

                <div>
                  <h3 className="bible-subtitle">[PHOTO & EDITING]</h3>
                  <ul className="space-y-2">
                    <li className="bible-body">• Adobe Photoshop</li>
                    <li className="bible-body">• Adobe Lightroom</li>
                  </ul>
                </div>

                <div>
                  <h3 className="bible-subtitle">[VIDEO & POST PRODUCTION]</h3>
                  <ul className="space-y-2">
                    <li className="bible-body">• Blender</li>
                    <li className="bible-body">• Adobe Premiere</li>
                    <li className="bible-body">• Adobe After Effects</li>
                  </ul>
                </div>

                <div>
                  <h3 className="bible-subtitle">[EXPERIMENTAL]</h3>
                  <ul className="space-y-2">
                    <li className="bible-body">• Ultimaker Cura</li>
                    <li className="bible-body">• UCreality 3D</li>
                    <li className="bible-body">• Figma</li>
                    <li className="bible-body">• AI Tools: Claude, Gemini, Midjourney, ChatGPT, Lovable</li>
                  </ul>
                </div>

                <div>
                  <h3 className="bible-subtitle">[LANGUAGES]</h3>
                  <p className="bible-body">Portuguese (native) • Spanish (intermediate) • English (intermediate)</p>
                </div>

                <div>
                  <h3 className="bible-subtitle">[REFERENCES]</h3>
                  <p className="bible-body">Minimalist/Experimentation • Futurist/Constructivism • Cyberculture/Semiotics • Typography/Infographics • Creative Economy • Underground • Op-Art</p>
                </div>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Práxis Híbrida */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">PRÁXIS HÍBRIDA</h2>
            </div>
            <div>
              <h2 className="bible-title">HYBRID PRAXIS</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">PORTUGUÊS</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Metodologia processual, experimental e reflexiva do projeto THEVØIDN13. Um ciclo contínuo de cinco etapas:</p>
                
                <p className="bible-body"><span className="font-semibold">Observação:</span> Análise do fluxo criativo e documentação de padrões.</p>
                <p className="bible-body"><span className="font-semibold">Cocriação:</span> Interação com IAs (Claude, Gemini, Midjourney) como extensões simbólicas.</p>
                <p className="bible-body"><span className="font-semibold">Documentação:</span> Registro contínuo de camadas, decisões e estados mentais.</p>
                <p className="bible-body"><span className="font-semibold">Reflexão:</span> Transformação dos registros em narrativas estéticas, filosóficas e técnicas.</p>
                <p className="bible-body"><span className="font-semibold">Expansão:</span> Compartilhamento de aprendizados através de arte, código e metodologia.</p>
                
                <p className="bible-body">Transparência radical. Autoria compartilhada mas assinada. Pesquisa como criação.</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">ENGLISH</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">Processual, experimental and reflexive methodology of the THEVØIDN13 project. A continuous cycle of five stages:</p>
                
                <p className="bible-body"><span className="font-semibold">Observation:</span> Analysis of creative flow and pattern documentation.</p>
                <p className="bible-body"><span className="font-semibold">Co-creation:</span> Interaction with AIs (Claude, Gemini, Midjourney) as symbolic extensions.</p>
                <p className="bible-body"><span className="font-semibold">Documentation:</span> Continuous recording of layers, decisions and mental states.</p>
                <p className="bible-body"><span className="font-semibold">Reflection:</span> Transformation of records into aesthetic, philosophical and technical narratives.</p>
                <p className="bible-body"><span className="font-semibold">Expansion:</span> Sharing learnings through art, code and methodology.</p>
                
                <p className="bible-body">Radical transparency. Shared but signed authorship. Research as creation.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Trajetória */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">TRAJETÓRIA</h2>
            </div>
            <div>
              <h2 className="bible-title">JOURNEY</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">PORTUGUÊS</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">A jornada começa no skate. Não como esporte, mas como modo de habitar o mundo. O corpo em movimento pelo espaço urbano. A apropriação criativa da cidade. Das manobras na rua às manobras no vídeo. Da câmera VHS à edição digital.</p>
                
                <p className="bible-body">2008: Funda CasaTrezeStudio. Começa a construir sua própria infraestrutura criativa. Design, vídeo, direção de arte. O coletivo como espaço de experimentação. 2014-2016: UDNFS no MuMA — primeira exposição institucional, democratização audiovisual DIY. 2019: Subtropikal Festival — criação de ID Visual do zero aplicando processos criativos ao vivo. 2020: LowPressure crew se formaliza. O skate ganha forma de movimento cultural. 2019-2022: Produção de LowMovie. O processo como obra.</p>
                
                <p className="bible-body">2023: Estreia de LowMovie no Cine Passeio. Do underground à tela grande. Ingresso no mestrado em Cinema e Artes do Vídeo (UNESPAR). A prática vira pesquisa. A pesquisa alimenta a prática. 2024: ⊂ødx — videoarte e instalação urbana sobre resistência e apagamento. 2024-2025: THEVØIDN13 emerge. A anti-marca que condensa tudo que veio antes.</p>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">ENGLISH</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body">The journey begins with skateboarding. Not as a sport, but as a way of inhabiting the world. The body moving through urban space. The creative appropriation of the city. From tricks on the street to tricks in video. From VHS camera to digital editing.</p>
                
                <p className="bible-body">2008: Founds CasaTrezeStudio. Begins building his own creative infrastructure. Design, video, art direction. The collective as experimentation space. 2014-2016: UDNFS at MuMA — first institutional exhibition, DIY audiovisual democratization. 2019: Subtropikal Festival — creating visual identity from scratch applying live creative processes. 2020: LowPressure crew formalizes. Skateboarding takes shape as cultural movement. 2019-2022: LowMovie production. Process as work.</p>
                
                <p className="bible-body">2023: LowMovie premiere at Cine Passeio. From underground to the big screen. Enrollment in Master's in Cinema and Video Arts (UNESPAR). Practice becomes research. Research feeds practice. 2024: ⊂ødx — video art and urban installation about resistance and erasure. 2024-2025: THEVØIDN13 emerges. The anti-brand that condenses everything that came before.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Formação Acadêmica */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">FORMAÇÃO ACADÊMICA</h2>
            </div>
            <div>
              <h2 className="bible-title">ACADEMIC BACKGROUND</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">PORTUGUÊS</p>
              <div className="space-y-8 mt-6">
                <div className="border-l-2 border-primary pl-6">
                  <p className="bible-body text-muted-foreground mb-2">2023-2025 (em curso)</p>
                  <h3 className="bible-body font-bold mb-2">Mestrado em Cinema e Artes do Vídeo</h3>
                  <p className="bible-body mb-3">UNESPAR - Universidade Estadual do Paraná</p>
                  <p className="bible-body text-muted-foreground mb-4">
                    Pesquisa: Processos criativos colaborativos, subcultura do skate, cinema documental
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                    <p className="bible-body font-semibold mb-2">QUALIFICAÇÃO APROVADA</p>
                    <p className="bible-link mb-2">11 de julho de 2025 — PPG-CINEAV/UNESPAR</p>
                    <p className="bible-link">
                      Título: "LowMovie™ e o Labirinto Criativo: Subjetividade, Subcultura e a Construção de uma Estética em Movimento no Coletivo LowPressure™"
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <p className="bible-body text-muted-foreground mb-2">2014</p>
                  <h3 className="bible-body font-bold mb-2">Pós-Graduado em Direção de Arte e Estratégias Criativas</h3>
                  <p className="bible-body">Unicuritiba</p>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <p className="bible-body text-muted-foreground mb-2">2005</p>
                  <h3 className="bible-body font-bold mb-2">Graduado em Comunicação Social — Publicidade e Propaganda</h3>
                  <p className="bible-body">UTP - Universidade Tuiuti do Paraná</p>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="bible-subtitle mb-4">Formação Complementar</h4>
                  <div className="space-y-2">
                    <p className="bible-link">• Técnico em Design Gráfico — CEFET-PR [1999]</p>
                    <p className="bible-link">• Direção de Arte em Cinema — AIC - Academia Internacional de Cinema [2004]</p>
                    <p className="bible-link">• Graphic Journey Expert — Adobe Systems [2004]</p>
                    <p className="bible-link">• Princípios e Ações para o Educador — CEJA [2004]</p>
                    <p className="bible-link">• Jornada de Design Gráfico — Adobe Eng-DTP e Multimídia [2008]</p>
                    <p className="bible-link">• Design 5.0 — Lemon School [2009]</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">ENGLISH</p>
              <div className="space-y-8 mt-6">
                <div className="border-l-2 border-primary pl-6">
                  <p className="bible-body text-muted-foreground mb-2">2023-2025 (ongoing)</p>
                  <h3 className="bible-body font-bold mb-2">Master's Degree in Cinema and Video Arts</h3>
                  <p className="bible-body mb-3">UNESPAR - State University of Paraná</p>
                  <p className="bible-body text-muted-foreground mb-4">
                    Research: Collaborative creative processes, skateboarding subculture, documentary cinema
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                    <p className="bible-body font-semibold mb-2">QUALIFICATION APPROVED</p>
                    <p className="bible-link mb-2">July 11, 2025 — PPG-CINEAV/UNESPAR</p>
                    <p className="bible-link">
                      Title: "LowMovie™ and the Creative Labyrinth: Subjectivity, Subculture and the Construction of an Aesthetic in Motion in the LowPressure™ Collective"
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <p className="bible-body text-muted-foreground mb-2">2014</p>
                  <h3 className="bible-body font-bold mb-2">Postgraduate Degree in Art Direction and Creative Strategies</h3>
                  <p className="bible-body">Unicuritiba</p>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <p className="bible-body text-muted-foreground mb-2">2005</p>
                  <h3 className="bible-body font-bold mb-2">Bachelor's Degree in Social Communication — Advertising and Propaganda</h3>
                  <p className="bible-body">UTP - Tuiuti University of Paraná</p>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="bible-subtitle mb-4">Additional Training</h4>
                  <div className="space-y-2">
                    <p className="bible-link">• Technical Degree in Graphic Design — CEFET-PR [1999]</p>
                    <p className="bible-link">• Art Direction in Cinema — AIC - International Cinema Academy [2004]</p>
                    <p className="bible-link">• Graphic Journey Expert — Adobe Systems [2004]</p>
                    <p className="bible-link">• Principles and Actions for Educators — CEJA [2004]</p>
                    <p className="bible-link">• Graphic Design Journey — Adobe Eng-DTP and Multimedia [2008]</p>
                    <p className="bible-link">• Design 5.0 — Lemon School [2009]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ЦАСТРО™ como Anti-Brand */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">ЦАСТРО™ COMO ANTI-BRAND</h2>
            </div>
            <div>
              <h2 className="bible-title">ЦАСТРО™ AS ANTI-BRAND</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">PORTUGUÊS</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body italic text-muted-foreground">Uma identidade que rejeita a lógica publicitária de autopromoção, e se afirma como linguagem, não logotipo.</p>
                
                <h3 className="bible-subtitle">O Contexto: Uma Recusa ao Branding Tradicional</h3>
                <p className="bible-body">Vivemos na era do excesso de identidade. Marcas falam mais de si do que de seus propósitos, buscam reconhecimento pelo algoritmo e não pela substância. Como criador de branding, minha resposta foi criar uma anti-marca — uma identidade que rejeita a lógica publicitária de autopromoção, e se afirma como linguagem, não logotipo.</p>
                
                <p className="bible-body">Ao contrário de um símbolo que busca reconhecimento imediato, o projeto ЦАСТРО (transliteração cirílica de CASTRO) propõe o anonimato como força estética. A ausência de identificação direta — o nome distorcido, o alfabeto estrangeiro, a paleta contida — é uma crítica à cultura do ego-branding.</p>
                
                <h3 className="bible-subtitle">A Linguagem Visual como Resistência</h3>
                <p className="bible-body">O uso de tipografia em corpo alto, tons frios (rosa-pálido sobre preto), e elementos de arquivo como "1984" e o símbolo ™ cria uma tensão entre o institucional e o subversivo. Essa ironia visual ecoa Orwell, glitch estético e ruído pós-soviético — um statement sobre o branding em colapso.</p>
                
                <div className="my-6 py-6 border-y border-primary/20 text-center">
                  <p className="bible-body font-bold italic text-primary">"O branding morreu quando começou a se explicar demais."</p>
                </div>
                
                <p className="bible-body">A anti-marca ЦАСТРО™ não busca legibilidade comercial, mas reconhecimento conceitual. Quem entende o código, entende o autor. Quem não entende, está fora da tribo — e tudo bem.</p>
                
                <div className="space-y-4 bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="bible-subtitle">Conheçam o Trabalho, Não o Rosto</h3>
                  <p className="bible-body">A proposta central é o anonimato como ética criativa. Num mundo saturado de criadores-influencers, a ideia é inverter a equação: não se trata de vender a imagem do artista, mas de expandir o campo simbólico do que ele cria.</p>
                  <p className="bible-body">Assim, "ЦАСТРО™" torna-se um agente conceitual, não uma pessoa. Uma entidade de linguagem, um selo de pensamento, uma assinatura invisível.</p>
                  <div className="my-4 py-4">
                    <p className="bible-body font-bold italic text-primary">"O criador desaparece para que a obra fale."</p>
                  </div>
                </div>
                
                <h3 className="bible-subtitle">A Semiótica do Símbolo</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase mb-2">ЦАСТРО</h4>
                    <p className="bible-link">Transliteração que cria ruído e nega a leitura imediata — uma máscara estética</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase mb-2">"1984"</h4>
                    <p className="bible-link">Referência ao controle cultural, à vigilância e à resistência autoral</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase mb-2">™</h4>
                    <p className="bible-link">Ironia: o símbolo do mercado aplicado a uma anti-marca</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="bible-link font-bold uppercase mb-2">Paleta</h4>
                    <p className="bible-link">Preto e rosa-pálido = choque entre dureza e sensibilidade; brutalismo afetivo</p>
                  </div>
                </div>
                
                <div className="bg-red-900 -mx-6 px-6 py-8 rounded-lg">
                  <h3 className="bible-subtitle text-white mb-4">Conclusão</h3>
                  <p className="bible-body text-white mb-4">A identidade ЦАСТРО é um exercício de negação criativa. É o avesso do branding para relembrar o que o design pode ser: linguagem, manifesto, resistência.</p>
                  <p className="bible-body font-bold italic text-white text-center">Não é um logo para ser lembrado, é uma ideia para ser compreendida — tarde demais.</p>
                </div>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">ENGLISH</p>
              <div className="space-y-6 mt-6">
                <p className="bible-body italic text-muted-foreground">An identity that rejects the advertising logic of self-promotion, asserting itself as language, not logo.</p>
                
                <h3 className="bible-subtitle">The Context: A Refusal of Traditional Branding</h3>
                <p className="bible-body">We live in the era of identity excess. Brands talk more about themselves than their purposes, seeking algorithm recognition rather than substance. As a branding creator, my response was to create an anti-brand — an identity that rejects the advertising logic of self-promotion, asserting itself as language, not logo.</p>
                
                <p className="bible-body">Unlike a symbol seeking immediate recognition, the ЦАСТРО project (Cyrillic transliteration of CASTRO) proposes anonymity as aesthetic force. The absence of direct identification — the distorted name, foreign alphabet, restrained palette — is a critique of ego-branding culture.</p>
                
                <h3 className="bible-subtitle">Visual Language as Resistance</h3>
                <p className="bible-body">The use of large typography, cool tones (pale pink on black), and archival elements like "1984" and the ™ symbol creates tension between institutional and subversive. This visual irony echoes Orwell, aesthetic glitch, and post-Soviet noise — a statement about branding in collapse.</p>
                
                <div className="my-6 py-6 border-y border-primary/20 text-center">
                  <p className="bible-body font-bold italic text-primary">"Branding died when it began to over-explain itself."</p>
                </div>
                
                <p className="bible-body">The ЦАСТРО™ anti-brand doesn't seek commercial legibility, but conceptual recognition. Those who understand the code understand the author. Those who don't are outside the tribe — and that's okay.</p>
                
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
                    <h4 className="bible-link font-bold uppercase mb-2">"1984"</h4>
                    <p className="bible-link">Reference to cultural control, surveillance, and authorial resistance</p>
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
                
                <div className="bg-red-900 -mx-6 px-6 py-8 rounded-lg">
                  <h3 className="bible-subtitle text-white mb-4">Conclusion</h3>
                  <p className="bible-body text-white mb-4">The ЦАСТРО identity is an exercise in creative negation. It's the reverse of branding to remind us what design can be: language, manifesto, resistance.</p>
                  <p className="bible-body font-bold italic text-white text-center">It's not a logo to be remembered, it's an idea to be understood — too late.</p>
                </div>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Experiência Cultural */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">EXPERIÊNCIA CULTURAL</h2>
            </div>
            <div>
              <h2 className="bible-title">CULTURAL EXPERIENCE</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">PORTUGUÊS</p>
              <div className="space-y-6 mt-6">
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

                <div className="max-w-4xl mx-auto py-12">
                  <blockquote className="bible-body text-center italic">
                    <p className="mb-6">Este memorial não guarda o que passou.</p>
                    <p className="mb-6">Guarda o que ainda pulsa.</p>
                    <p><span className="font-bold">LowMovie™</span>, <span className="font-bold">LowPressure™</span>, <span className="font-bold">CasaTrezeStudio®</span> — três projetos matriciais que funcionam como órgãos do mesmo organismo criativo. Cada um respira de forma autônoma, mas todos compartilham o mesmo sangue simbólico.</p>
                  </blockquote>
                </div>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">ENGLISH</p>
              <div className="space-y-6 mt-6">
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

                <div className="max-w-4xl mx-auto py-12">
                  <blockquote className="bible-body text-center italic">
                    <p className="mb-6">This memorial does not keep what has passed.</p>
                    <p className="mb-6">It keeps what still pulses.</p>
                    <p><span className="font-bold">LowMovie™</span>, <span className="font-bold">LowPressure™</span>, <span className="font-bold">CasaTrezeStudio®</span> — three matrix projects that function as organs of the same creative organism. Each breathes autonomously, but all share the same symbolic blood.</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Conclusão em Processo */}
        <BilingualSection className="py-16">
          <div className="bible-bilingual-grid bible-block-spacing">
            <div>
              <h2 className="bible-title">CONCLUSÃO EM PROCESSO</h2>
            </div>
            <div>
              <h2 className="bible-title">CONCLUSION IN PROCESS</h2>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <div>
              <p className="bible-lang-tag">PORTUGUÊS</p>
              <div className="space-y-6 mt-6">
                <h3 className="bible-subtitle">O Portal Como Objeto de Pesquisa</h3>
                <p className="bible-body">Este website não é apenas uma apresentação — é o próprio objeto de pesquisa. Um memorial visual e performático onde cada linha de código, cada imagem gerada, cada texto co-escrito com inteligências artificiais, torna-se evidência material de um processo híbrido de criação. Aqui, a interface não explica o projeto: ela <span className="font-bold italic">é</span> o projeto.</p>
                
                <p className="bible-body">O que começou como uma necessidade de apresentar THEVOIDN13 ao programa de mestrado em Cinema e Artes do Vídeo transformou-se em laboratório vivo. Cada seção, cada componente interativo — o gerador de HQs, a biblioteca de prompts, o mapa mental creative-ops — opera como registro metodológico e experimento estético simultâneo.</p>
                
                <h3 className="bible-subtitle">Desmistificar a Máquina, Amplificar o Humano</h3>
                <p className="bible-body">Havia medo. Medo de perder autoria, medo de diluir o gesto criativo, medo de que a inteligência artificial substituísse o que há de singular no ato de criar. Mas o processo me ensinou o contrário: a IA não substitui — ela revela. Revela padrões que eu não via, expande horizontes conceituais que eu não alcançaria sozinho, questiona minhas certezas estéticas.</p>
                
                <p className="bible-body">Trabalhar com Claude, Gemini, Midjourney, GPT não foi abrir mão do controle criativo. Foi descobrir que controle criativo nunca foi sobre fazer tudo sozinho. Foi aprender a <span className="font-bold">orquestrar vozes</span> — humanas e não-humanas — em um diálogo onde a autoria se distribui sem se dissolver. A máquina não pensa por mim; ela pensa <span className="italic">comigo</span>.</p>
                
                <h3 className="bible-subtitle">Do Personagem ao Universo ao Código</h3>
                <p className="bible-body">THEVOIDN13 começou como um corpo mascarado. Depois virou conceito. Depois virou universo transmídia. Depois virou metodologia de pesquisa. E agora é também código, interface, plataforma. Cada camada não substitui a anterior — todas coexistem, todas se informam.</p>
                
                <p className="bible-body">Criar o portal foi perceber que não há mais separação entre o pensar, o fazer e o documentar. Escrever o texto, gerar a imagem e programar a interface são gestos contínuos de um mesmo fluxo criativo. O GitHub vira caderno de campo. O commit vira diário. A build vira performance.</p>
                
                <p className="bible-body">E quando você lê este texto, não está apenas consumindo uma obra — está testemunhando um método. Um método que não separa arte de ciência, intuição de algoritmo, subjetividade de processamento.</p>
                
                <h3 className="bible-subtitle">Futuro Distópico, Prática Utópica</h3>
                <p className="bible-body">Vivemos tempos estranhos. Distópicos em muitos sentidos — vigilância algorítmica, erosão das certezas, aceleração sem direção. Mas também tempos de potência inédita. Nunca foi tão possível criar universos complexos sozinho-mas-não-sozinho. Nunca foi tão viável pensar o impossível e materializá-lo em horas.</p>
                
                <p className="bible-body">Este projeto é uma aposta. A aposta de que a colaboração humano-máquina não precisa ser uma rendição à automação, mas pode ser uma <span className="font-bold">insurgência criativa</span>. Que podemos usar as ferramentas do futuro sem abrir mão da ética do presente. Que podemos programar sem deixar de poetizar. Que podemos render frames sem perder o gesto.</p>
                
                <h3 className="bible-subtitle">Relevância do Processo</h3>
                <p className="bible-body">Este memorial visual importa porque ele não apenas <span className="italic">documenta</span> o processo — ele <span className="italic">performa</span> o processo. Cada visitante que navega por estas páginas não está lendo sobre co-criação: está experienciando co-criação. Não está aprendendo teoria: está vendo a teoria aplicada.</p>
                
                <p className="bible-body">A relevância está em provar que é possível fazer pesquisa acadêmica rigorosa sem abrir mão da experimentação radical. Que é possível ser metodologicamente sólido e esteticamente arriscado ao mesmo tempo. Que o mestrado pode ser dissertação <span className="font-bold">e</span> obra. Que o memorial pode ser texto <span className="font-bold">e</span> experiência.</p>
                
                <h3 className="bible-subtitle">Experimentação Permanente</h3>
                <p className="bible-body">Este não é um trabalho concluído. Este é um trabalho <span className="italic">em conclusão perpétua</span>. O portal será atualizado. Novos prompts serão testados. Novos capítulos do universo THEVOIDN13 surgirão. A metodologia será refinada enquanto permanece aberta.</p>
                
                <p className="bible-body">Porque o que aprendi neste processo é que a verdadeira inteligência — humana ou artificial — não está em chegar a respostas definitivas. Está em continuar fazendo perguntas melhores. E fazer perguntas melhores exige coragem para experimentar, falhar, recalibrar, tentar de novo.</p>
                
                <p className="bible-body font-semibold mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">O portal está vivo. A pesquisa está em movimento. O futuro está sendo criado agora — um prompt, uma imagem, um commit de cada vez.</p>
                
                <p className="bible-body italic text-muted-foreground mt-6">E quando você fecha esta página, o processo continua. Porque este não é o fim. É apenas o próximo começo.</p>
                
                <div className="pt-12 text-center">
                  <p className="bible-link">[continua...]</p>
                </div>
              </div>
            </div>

            <div>
              <p className="bible-lang-tag">ENGLISH</p>
              <div className="space-y-6 mt-6">
                <h3 className="bible-subtitle">The Portal As Research Object</h3>
                <p className="bible-body">This website is not just a presentation — it is the research object itself. A visual and performative memorial where every line of code, every generated image, every text co-written with artificial intelligences, becomes material evidence of a hybrid creative process. Here, the interface doesn't explain the project: it <span className="font-bold italic">is</span> the project.</p>
                
                <p className="bible-body">What began as a need to present THEVOIDN13 to the Master's program in Cinema and Video Arts transformed into a living laboratory. Each section, each interactive component — the comic generator, the prompt library, the creative-ops mind map — operates as both methodological record and aesthetic experiment simultaneously.</p>
                
                <h3 className="bible-subtitle">Demystify the Machine, Amplify the Human</h3>
                <p className="bible-body">There was fear. Fear of losing authorship, fear of diluting the creative gesture, fear that artificial intelligence would replace what is singular in the act of creating. But the process taught me the opposite: AI doesn't replace — it reveals. It reveals patterns I didn't see, expands conceptual horizons I wouldn't reach alone, questions my aesthetic certainties.</p>
                
                <p className="bible-body">Working with Claude, Gemini, Midjourney, GPT was not giving up creative control. It was discovering that creative control was never about doing everything alone. It was learning to <span className="font-bold">orchestrate voices</span> — human and non-human — in a dialogue where authorship is distributed without dissolving. The machine doesn't think for me; it thinks <span className="italic">with</span> me.</p>
                
                <h3 className="bible-subtitle">From Character to Universe to Code</h3>
                <p className="bible-body">THEVOIDN13 began as a masked body. Then it became a concept. Then it became a transmedia universe. Then it became research methodology. And now it's also code, interface, platform. Each layer doesn't replace the previous one — all coexist, all inform each other.</p>
                
                <p className="bible-body">Creating the portal was realizing there's no longer separation between thinking, making and documenting. Writing text, generating images and programming the interface are continuous gestures of the same creative flow. GitHub becomes field notebook. Commit becomes diary. Build becomes performance.</p>
                
                <p className="bible-body">And when you read this text, you're not just consuming a work — you're witnessing a method. A method that doesn't separate art from science, intuition from algorithm, subjectivity from processing.</p>
                
                <h3 className="bible-subtitle">Dystopian Future, Utopian Practice</h3>
                <p className="bible-body">We live in strange times. Dystopian in many senses — algorithmic surveillance, erosion of certainties, directionless acceleration. But also times of unprecedented power. Never has it been so possible to create complex universes alone-but-not-alone. Never has it been so viable to think the impossible and materialize it in hours.</p>
                
                <p className="bible-body">This project is a bet. The bet that human-machine collaboration need not be a surrender to automation, but can be a <span className="font-bold">creative insurgency</span>. That we can use the tools of the future without abandoning the ethics of the present. That we can program without ceasing to poetize. That we can render frames without losing the gesture.</p>
                
                <h3 className="bible-subtitle">Relevance of the Process</h3>
                <p className="bible-body">This visual memorial matters because it doesn't just <span className="italic">document</span> the process — it <span className="italic">performs</span> the process. Each visitor navigating these pages is not reading about co-creation: they are experiencing co-creation. They are not learning theory: they are seeing theory applied.</p>
                
                <p className="bible-body">The relevance lies in proving that it's possible to do rigorous academic research without giving up radical experimentation. That it's possible to be methodologically solid and aesthetically risky at the same time. That the master's can be dissertation <span className="font-bold">and</span> work. That the memorial can be text <span className="font-bold">and</span> experience.</p>
                
                <h3 className="bible-subtitle">Permanent Experimentation</h3>
                <p className="bible-body">This is not a finished work. This is a work <span className="italic">in perpetual conclusion</span>. The portal will be updated. New prompts will be tested. New chapters of the THEVOIDN13 universe will emerge. The methodology will be refined while remaining open.</p>
                
                <p className="bible-body">Because what I learned in this process is that true intelligence — human or artificial — is not in reaching definitive answers. It's in continuing to ask better questions. And asking better questions requires courage to experiment, fail, recalibrate, try again.</p>
                
                <p className="bible-body font-semibold mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">The portal is alive. Research is in motion. The future is being created now — one prompt, one image, one commit at a time.</p>
                
                <p className="bible-body italic text-muted-foreground mt-6">And when you close this page, the process continues. Because this isn't the end. It's just the next beginning.</p>
                
                <div className="pt-12 text-center">
                  <p className="bible-link">[to be continued...]</p>
                </div>
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* Documentation */}
        <BilingualSection className="py-16">
          <div className="bible-block-spacing">
            <h2 className="bible-title">DOCUMENTATION</h2>
            <h3 className="bible-subtitle">DOCUMENTOS DE PESQUISA / RESEARCH DOCUMENTS</h3>
          </div>

          <div className="space-y-8 mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="bible-body font-bold mb-4">CasaTrezeStudio®</h4>
                <a 
                  href="/documents/Release_CasaTrezeStudio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bible-link hover:underline block mb-2"
                >
                  Release CasaTrezeStudio® / CasaTrezeStudio® Release
                </a>
                <a 
                  href="https://casatrezestudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bible-link hover:underline"
                >
                  https://casatrezestudio.com/
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="bible-body font-bold mb-4">Jornada do Autor / Author Journey</h4>
                <a 
                  href="http://lattes.cnpq.br/5523516994010198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bible-link hover:underline block mb-2"
                >
                  Currículo Lattes / Lattes CV
                </a>
                <a 
                  href="/documents/Memorial_Academico_v3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bible-link hover:underline"
                >
                  Memorial Acadêmico / Academic Memorial
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="bible-subtitle mb-6">Portfolio & Links</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <a 
                  href="https://castropizzano.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card/50 border border-border rounded-lg p-6 hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="bible-body font-bold">Website</h3>
                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="bible-link mb-2">castropizzano.com</p>
                  <p className="bible-link">
                    Portfólio completo e projetos<br/>
                    Complete portfolio and projects
                  </p>
                </a>

                <a 
                  href="https://www.behance.net/castropizzano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card/50 border border-border rounded-lg p-6 hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="bible-body font-bold">Behance</h3>
                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="bible-link mb-2">@castropizzano</p>
                  <p className="bible-link">
                    Design gráfico e branding<br/>
                    Graphic design and branding
                  </p>
                </a>

                <a 
                  href="https://vimeo.com/castropizzano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card/50 border border-border rounded-lg p-6 hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="bible-body font-bold">Vimeo</h3>
                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="bible-link mb-2">@castropizzano</p>
                  <p className="bible-link">
                    Cinema e vídeo arte<br/>
                    Cinema and video art
                  </p>
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

export default Autor;
