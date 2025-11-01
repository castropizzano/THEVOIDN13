import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, personSchema, breadcrumbSchema } from "@/components/SEO";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { BackToTop } from "@/components/BackToTop";
import heroImage from "@/assets/castro-hero-new.png";
import antibrandImage from "@/assets/antibrand-hero.png";

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

        <BilingualSection className="py-8">
          <div className="space-y-4">
            <h1 className="micro-title">CASTRO PIZZANO</h1>
            <p className="label-small text-muted-foreground">цастро™ / PUNK</p>
          </div>
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="subsection-title">Quem Fala e De Onde Falo</h2>
                <p className="body-base text-justified mt-6">
                  Profissional criativo multidisciplinar, atuo entre as artes visuais, o design e a produção audiovisual. Minha trajetória é guiada pela criação de identidades visuais e narrativas semióticas, explorando linguagens como fotografia, vídeo, design gráfico e multiartes digitais. Transito entre processos individuais e colaborações coletivas, com base em laboratórios criativos, imersões referenciais e desenvolvimento conceitual.
                </p>
                <p className="body-base text-justified mt-6">
                  Atualmente, mestrando em Cinema e Artes do Vídeo pelo PPG-CINEAV da Universidade Estadual do Paraná (Unespar – Curitiba II/FAP), na linha de pesquisa em Processos de Criação no Cinema e nas Artes do Vídeo. Integro o grupo de pesquisa CineCriare – Cinema: Criação e Reflexão (Unespar/CNPq).
                </p>
                <p className="body-base text-justified mt-6">
                  Graduado em Publicidade e Propaganda (Universidade Tuiuti do Paraná, 2010) e pós-graduado em Direção de Arte e Estratégias Criativas (Unicuritiba, 2016).
                </p>
                <p className="body-base text-justified mt-6">
                  Fundador da CasaTrezeStudio® (2008), coletivo criativo que funciona como laboratório independente de produção cultural, autoral e comercial, conectando pessoas, ideias e projetos. Entre 2017 e 2020, professor de Economia Criativa na Universidade Positivo; atualmente, docente nas disciplinas de Branding e Produção Audiovisual na Universidade Isulpar.
                </p>
                <p className="body-base text-justified mt-6">
                  Membro do LowPressure™, coletivo de skatistas e produtores criativos que atuam nas interseções entre skate, cinema e videoarte contemporânea. Também colaboro com o TheWorkspace™, voltado à produção audiovisual colaborativa e independente. Navego por repertórios diversos, fluxos criativos múltiplos e práticas interdisciplinares, construindo minha bagagem intelectual a partir da prática, da escuta e da troca.
                </p>
                <div className="mt-12 space-y-8">
                  <h3 className="subsection-title">Habilidades Técnicas / Technical Skills</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="micro-title text-foreground/80">[DESIGN&ARTE]</h4>
                      <ul className="space-y-1">
                        <li className="body-base">• Adobe Illustrator</li>
                        <li className="body-base">• Adobe InDesign</li>
                        <li className="body-base">• Adobe Fresco</li>
                        <li className="body-base">• Procreate</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="micro-title text-foreground/80">[FOTO&EDIÇÃO]</h4>
                      <ul className="space-y-1">
                        <li className="body-base">• Adobe Photoshop</li>
                        <li className="body-base">• Adobe Lightroom</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="micro-title text-foreground/80">[VÍDEO&PÓS PRODUÇÃO]</h4>
                      <ul className="space-y-1">
                        <li className="body-base">• Blender</li>
                        <li className="body-base">• Adobe Premiere</li>
                        <li className="body-base">• Adobe After Effects</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="micro-title text-foreground/80">[EXPERIMENTAL]</h4>
                      <ul className="space-y-1">
                        <li className="body-base">• Ultimaker Cura</li>
                        <li className="body-base">• UCreality 3D</li>
                        <li className="body-base">• Figma</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <h4 className="micro-title text-foreground/80">Idiomas / Languages</h4>
                    <p className="body-base">Português (nativo) • Espanhol (intermediário) • Inglês (intermediário)</p>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <h4 className="micro-title text-foreground/80">Referencial / References</h4>
                    <p className="body-base">Minimalista/Experimentação • Futurista/Construtivismo • Cibercultura/Semiótica • Tipografia/Infografia • Economia Criativa • Underground • Op-Art</p>
                  </div>

                </div>
                
                <div className="mt-12 pl-6 border-l-2 border-primary">
                  <h3 className="subsection-title mb-4">HYBRID PRAXIS / PRÁXIS HÍBRIDA</h3>
                  <p className="body-base text-justified mb-4">
                    Metodologia processual, experimental e reflexiva do projeto THEVØIDN13. Um ciclo contínuo de cinco etapas:
                  </p>
                  <div className="space-y-2">
                    <p className="body-base"><span className="font-medium">Observação:</span> Análise do fluxo criativo e documentação de padrões.</p>
                    <p className="body-base"><span className="font-medium">Cocriação:</span> Interação com IAs (Claude, Gemini, Midjourney) como extensões simbólicas.</p>
                    <p className="body-base"><span className="font-medium">Documentação:</span> Registro contínuo de camadas, decisões e estados mentais.</p>
                    <p className="body-base"><span className="font-medium">Reflexão:</span> Transformação dos registros em narrativas estéticas, filosóficas e técnicas.</p>
                    <p className="body-base"><span className="font-medium">Expansão:</span> Compartilhamento de aprendizados através de arte, código e metodologia.</p>
                  </div>
                  <p className="body-base text-justified mt-4">
                    Transparência radical. Autoria compartilhada mas assinada. Pesquisa como criação.
                  </p>
                </div>

                <div className="mt-16 space-y-6">
                  <h3 className="subsection-title text-primary">Trajetória / Journey</h3>
                  
                  <div className="space-y-6">
                    <p className="body-base text-justified">
                      A jornada começa no skate. Não como esporte, mas como modo de habitar o mundo. O corpo em movimento pelo espaço urbano. A apropriação criativa da cidade. Das manobras na rua às manobras no vídeo. Da câmera VHS à edição digital.
                    </p>
                    
                    <p className="body-base text-justified">
                      2008: Funda CasaTrezeStudio. Começa a construir sua própria infraestrutura criativa. Design, vídeo, direção de arte. O coletivo como espaço de experimentação. 2014-2016: UDNFS no MuMA — primeira exposição institucional, democratização audiovisual DIY. 2019: Subtropikal Festival — criação de ID Visual do zero aplicando processos criativos ao vivo. 2020: LowPressure crew se formaliza. O skate ganha forma de movimento cultural. 2019-2022: Produção de LowMovie. O processo como obra.
                    </p>
                    
                    <p className="body-base text-justified">
                      2023: Estreia de LowMovie no Cine Passeio. Do underground à tela grande. Ingresso no mestrado em Cinema e Artes do Vídeo (UNESPAR). A prática vira pesquisa. A pesquisa alimenta a prática. 2024: ⊂ødx — videoarte e instalação urbana sobre resistência e apagamento. 2024-2025: THEVØIDN13 emerge. A anti-marca que condensa tudo que veio antes.
                    </p>
                  </div>
                </div>

                <div className="mt-16 space-y-8">
                  <h3 className="subsection-title text-primary">Formação Acadêmica / Academic Background</h3>
                  
                  <div className="space-y-8">
                    <div className="border-l-2 border-primary pl-6">
                      <p className="micro-title text-muted-foreground mb-2">2023-2025 (em curso)</p>
                      <h4 className="body-base font-bold mb-2">Mestrado em Cinema e Artes do Vídeo</h4>
                      <p className="body-base mb-3">UNESPAR - Universidade Estadual do Paraná</p>
                      <p className="body-base text-muted-foreground mb-4">
                        Pesquisa: Processos criativos colaborativos,<br/>
                        subcultura do skate, cinema documental
                      </p>
                      
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                        <div className="flex items-start gap-2 mb-2">
                          <svg className="w-4 h-4 mt-0.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <p className="text-sm font-medium">QUALIFICAÇÃO APROVADA</p>
                        </div>
                        <p className="text-xs text-muted-foreground">11 de julho de 2025 — PPG-CINEAV/UNESPAR</p>
                        <p className="text-xs mt-2">
                          Título: "LowMovie™ e o Labirinto Criativo:<br/>
                          Subjetividade, Subcultura e a Construção de uma<br/>
                          Estética em Movimento no Coletivo LowPressure™"
                        </p>
                      </div>
                    </div>

                    <div className="border-l-2 border-muted pl-6">
                      <p className="micro-title text-muted-foreground mb-2">2014</p>
                      <h4 className="body-base font-bold mb-2">
                        Pós-Graduado em Direção de Arte e<br/>
                        Estratégias Criativas
                      </h4>
                      <p className="body-base">Unicuritiba</p>
                    </div>

                    <div className="border-l-2 border-muted pl-6">
                      <p className="micro-title text-muted-foreground mb-2">2005</p>
                      <h4 className="body-base font-bold mb-2">
                        Graduado em Comunicação Social —<br/>
                        Publicidade e Propaganda
                      </h4>
                      <p className="body-base">UTP - Universidade Tuiuti do Paraná</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="text-sm font-medium tracking-wide uppercase mb-4">Formação Complementar</h4>
                    <div className="space-y-2 text-sm">
                      <p>• Técnico em Design Gráfico — CEFET-PR [1999]</p>
                      <p>• Direção de Arte em Cinema — AIC - Academia Internacional de Cinema [2004]</p>
                      <p>• Graphic Journey Expert — Adobe Systems [2004]</p>
                      <p>• Princípios e Ações para o Educador — CEJA - Centro de Educação de Jovens e Adultos [2004]</p>
                      <p>• Jornada de Design Gráfico — Adobe Eng-DTP e Multimídia [2008]</p>
                      <p>• Design 5.0 — Lemon School [2009]</p>
                    </div>
                  </div>
                </div>
              </>
            }
            englishContent={
                <>
                <h2 className="subsection-title">Who Speaks and From Where</h2>
                <p className="body-base text-justified mt-6">
                  Multidisciplinary creative professional, I work between visual arts, design and audiovisual production. My trajectory is guided by the creation of visual identities and semiotic narratives, exploring languages such as photography, video, graphic design and digital multi-arts. I move between individual processes and collective collaborations, based on creative laboratories, referential immersions and conceptual development.
                </p>
                <p className="body-base text-justified mt-6">
                  Currently, master's student in Cinema and Video Arts at PPG-CINEAV of Paraná State University (Unespar – Curitiba II/FAP), in the research line on Creation Processes in Cinema and Video Arts. I am part of the CineCriare research group – Cinema: Creation and Reflection (Unespar/CNPq).
                </p>
                <p className="body-base text-justified mt-6">
                  Bachelor's degree in Advertising (Tuiuti University of Paraná, 2010) and postgraduate degree in Art Direction and Creative Strategies (Unicuritiba, 2016).
                </p>
                <p className="body-base text-justified mt-6">
                  Founder of CasaTrezeStudio® (2008), a creative collective that works as an independent laboratory for cultural, authorial and commercial production, connecting people, ideas and projects. Between 2017 and 2020, professor of Creative Economy at Positivo University; currently, professor in the subjects of Branding and Audiovisual Production at Isulpar University.
                </p>
                <p className="body-base text-justified mt-6">
                  Member of LowPressure™, a collective of skateboarders and creative producers who work at the intersections between skateboarding, cinema and contemporary video art. I also collaborate with TheWorkspace™, focused on collaborative and independent audiovisual production. I navigate through diverse repertoires, multiple creative flows and interdisciplinary practices, building my intellectual background from practice, listening and exchange.
                </p>
                <div className="mt-12 space-y-8">
                  <h3 className="text-sm font-medium tracking-wide uppercase">Habilidades Técnicas / Technical Skills</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-wide mb-3 text-foreground/80">[DESIGN&ART]</h4>
                      <ul className="space-y-1">
                        <li className="text-base">• Adobe Illustrator</li>
                        <li className="text-base">• Adobe InDesign</li>
                        <li className="text-base">• Adobe Fresco</li>
                        <li className="text-base">• Procreate</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-wide mb-3 text-foreground/80">[PHOTO&EDITING]</h4>
                      <ul className="space-y-1">
                        <li className="text-base">• Adobe Photoshop</li>
                        <li className="text-base">• Adobe Lightroom</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-wide mb-3 text-foreground/80">[VIDEO&POST PRODUCTION]</h4>
                      <ul className="space-y-1">
                        <li className="text-base">• Blender</li>
                        <li className="text-base">• Adobe Premiere</li>
                        <li className="text-base">• Adobe After Effects</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-wide mb-3 text-foreground/80">[EXPERIMENTAL]</h4>
                      <ul className="space-y-1">
                        <li className="text-base">• Ultimaker Cura</li>
                        <li className="text-base">• UCreality 3D</li>
                        <li className="text-base">• Figma</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <h4 className="text-xs uppercase tracking-wide mb-3 text-foreground/80">Idiomas / Languages</h4>
                    <p className="text-base">Portuguese (native) • Spanish (intermediate) • English (intermediate)</p>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <h4 className="text-xs uppercase tracking-wide mb-3 text-foreground/80">Referencial / References</h4>
                    <p className="text-base">Minimalist/Experimentation • Futurist/Constructivism • Cyberculture/Semiotics • Typography/Infographics • Creative Economy • Underground • Op-Art</p>
                  </div>
                </div>
                
                <div className="mt-12 pl-6 border-l-2 border-primary">
                  <h3 className="text-sm font-medium tracking-wide uppercase mb-4">HYBRID PRAXIS / PRÁXIS HÍBRIDA</h3>
                  <p className="text-base text-justify leading-relaxed mb-4">
                    Processual, experimental and reflective methodology for THEVOIDN13 project. A continuous cycle of five stages:
                  </p>
                  <div className="space-y-2 text-base">
                    <p><span className="font-medium">Observation:</span> Analysis of creative flow and pattern documentation.</p>
                    <p><span className="font-medium">Co-creation:</span> Interaction with AIs (Claude, Gemini, Midjourney) as symbolic extensions.</p>
                    <p><span className="font-medium">Documentation:</span> Continuous recording of layers, decisions and mental states.</p>
                    <p><span className="font-medium">Reflection:</span> Transformation of records into aesthetic, philosophical and technical narratives.</p>
                    <p><span className="font-medium">Expansion:</span> Sharing learnings through art, code and methodology.</p>
                  </div>
                  <p className="text-base text-justify leading-relaxed mt-4">
                    Radical transparency. Shared but signed authorship. Research as creation.
                  </p>
                </div>

                <div className="mt-16 space-y-6">
                  <h3 className="text-sm font-medium tracking-wide uppercase text-primary">Trajetória / Journey</h3>
                  
                  <div className="space-y-6 text-base leading-relaxed">
                    <p className="text-justify">
                      The journey begins with skateboarding. Not as a sport, but as a way of inhabiting the world. The body moving through urban space. The creative appropriation of the city. From tricks on the street to tricks on video. From VHS camera to digital editing.
                    </p>
                    
                    <p className="text-justify">
                      2008: Founds CasaTrezeStudio. Begins building his own creative infrastructure. Design, video, art direction. The collective as a space for experimentation. 2014-2016: UDNFS at MuMA — first institutional exhibition, DIY audiovisual democratization. 2019: Subtropikal Festival — creating visual ID from scratch applying creative processes live. 2020: LowPressure crew formalizes. Skateboarding takes shape as a cultural movement. 2019-2022: LowMovie production. Process as work.
                    </p>
                    
                    <p className="text-justify">
                      2023: LowMovie premiere at Cine Passeio. From underground to the big screen. Enters master's program in Cinema and Video Arts (UNESPAR). Practice becomes research. Research feeds practice. 2024: ⊂ødx — video art and urban installation about resistance and erasure. 2024-2025: THE VOID N.13 emerges. The anti-brand that condenses everything that came before.
                    </p>
                  </div>
                </div>

                <div className="mt-16 space-y-8">
                  <h3 className="text-sm font-medium tracking-wide uppercase text-primary">Formação Acadêmica / Academic Background</h3>
                  
                  <div className="space-y-8">
                    <div className="border-l-2 border-primary pl-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2023-2025 (ongoing)</p>
                      <h4 className="text-base font-bold mb-2">Master's in Cinema and Video Arts</h4>
                      <p className="text-base mb-3">UNESPAR - State University of Paraná</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Research: Collaborative creative processes,<br/>
                        skate subculture, documentary cinema
                      </p>
                      
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                        <div className="flex items-start gap-2 mb-2">
                          <svg className="w-4 h-4 mt-0.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <p className="text-sm font-medium">QUALIFICATION APPROVED</p>
                        </div>
                        <p className="text-xs text-muted-foreground">July 11, 2025 — PPG-CINEAV/UNESPAR</p>
                        <p className="text-xs mt-2">
                          Title: "LowMovie™ and the Creative Labyrinth:<br/>
                          Subjectivity, Subculture and the Construction of an<br/>
                          Aesthetic in Motion in the LowPressure™ Collective"
                        </p>
                      </div>
                    </div>

                    <div className="border-l-2 border-muted pl-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2014</p>
                      <h4 className="text-base font-bold mb-2">
                        Postgraduate in Art Direction and<br/>
                        Creative Strategies
                      </h4>
                      <p className="text-base">Unicuritiba</p>
                    </div>

                    <div className="border-l-2 border-muted pl-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2005</p>
                      <h4 className="text-base font-bold mb-2">
                        Bachelor's in Social Communication —<br/>
                        Advertising
                      </h4>
                      <p className="text-base">UTP - Tuiuti University of Paraná</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="text-sm font-medium tracking-wide uppercase mb-4">Complementary Education</h4>
                    <div className="space-y-2 text-sm">
                      <p>• Technician in Graphic Design — CEFET-PR [1999]</p>
                      <p>• Art Direction in Cinema — AIC - International Cinema Academy [2004]</p>
                      <p>• Graphic Journey Expert — Adobe Systems [2004]</p>
                      <p>• Principles and Actions for the Educator — CEJA - Youth and Adult Education Center [2004]</p>
                      <p>• Graphic Design Journey — Adobe Eng-DTP and Multimedia [2008]</p>
                      <p>• Design 5.0 — Lemon School [2009]</p>
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </BilingualSection>

        {/* Anti-brand Hero Image */}
        <section className="w-full h-screen overflow-hidden">
          <img src={antibrandImage} alt="ЦЦАСТРО™ Anti-brand" className="w-full h-full object-contain" />
        </section>

        {/* Anti-brand Section */}
        <BilingualSection bgClassName="bg-card/30">
          <BilingualContent 
            portugueseContent={
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="heading-2 text-primary title-break">ЦЦАСТРО™ como Anti-Brand</h2>
                  <p className="text-lg italic text-muted-foreground">
                    Uma identidade que rejeita a lógica publicitária de autopromoção, e se afirma como linguagem, não logotipo.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="heading-3 text-primary title-break">O Contexto: Uma Recusa ao Branding Tradicional</h3>
                  <p className="text-base leading-relaxed text-justify">
                    Vivemos na era do excesso de identidade. Marcas falam mais de si do que de seus propósitos, buscam reconhecimento pelo algoritmo e não pela substância. Como criador de branding, minha resposta foi criar uma anti-marca — uma identidade que rejeita a lógica publicitária de autopromoção, e se afirma como linguagem, não logotipo.
                  </p>
                  <div className="my-6 py-6 border-y border-primary/20 text-center">
                    <p className="text-lg font-bold italic text-primary">
                      "A marca é um gesto, não uma assinatura."
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-justify">
                    Ao contrário de um símbolo que busca reconhecimento imediato, o projeto ЦЦАСТРО (transliteração cirílica de CASTRO) propõe o anonimato como força estética. A ausência de identificação direta — o nome distorcido, o alfabeto estrangeiro, a paleta contida — é uma crítica à cultura do ego-branding.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="heading-3 text-primary title-break">A Escolha da Fonte Journalism (Cirílica)</h3>
                  <p className="text-base leading-relaxed text-justify">
                    A tipografia Journalism, inspirada no alfabeto russo e em estruturas construtivistas, carrega memórias gráficas de resistência, imprensa alternativa e ideologia visual. Adotar essa forma é assumir uma postura editorial, subversiva e crítica: é como se cada letra dissesse "isto não é um logotipo — é um manifesto".
                  </p>
                  <p className="text-base leading-relaxed text-justify">
                    Cirílico cria distância e estranhamento. O espectador precisa decifrar, não consumir. Isso o desloca da lógica do mercado e o coloca no campo do pensamento. Evoca imprensa, dissidência, contrainformação. O nome da fonte torna-se parte do discurso: sou "jornalista" visual do meu próprio tempo.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="heading-3 text-primary">Identidade como Espelho e Ruído</h3>
                  <p className="text-base leading-relaxed text-justify">
                    O uso de tipografia em corpo alto, tons frios (rosa-pálido sobre preto), e elementos de arquivo como "1984" e o símbolo # cria uma tensão entre o institucional e o subversivo. Essa ironia visual ecoa Orwell, glitch estético e ruído pós-soviético — um statement sobre o branding em colapso.
                  </p>
                  <div className="my-6 py-6 border-y border-primary/20 text-center">
                    <p className="text-lg font-bold italic text-primary">
                      "O branding morreu quando começou a se explicar demais."
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-justify">
                    A anti-marca CASTRO não busca legibilidade comercial, mas reconhecimento conceitual. Quem entende o código, entende o autor. Quem não entende, está fora da tribo — e tudo bem.
                  </p>
                </div>

                <div className="space-y-4 bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="subsection-title">Conheçam o Trabalho, Não o Rosto</h3>
                  <p className="body-base text-justified">
                    A proposta central é o anonimato como ética criativa. Num mundo saturado de criadores-influencers, a ideia é inverter a equação: não se trata de vender a imagem do artista, mas de expandir o campo simbólico do que ele cria.
                  </p>
                  <p className="body-base text-justified">
                    Assim, "CASTRO" torna-se um agente conceitual, não uma pessoa. Uma entidade de linguagem, um selo de pensamento, uma assinatura invisível.
                  </p>
                  <div className="my-4 py-4">
                    <p className="text-lg font-bold italic text-primary">
                      "O criador desaparece para que a obra fale."
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="subsection-title">Filosofia LowPressure™ e Estética de Resistência</h3>
                  <p className="body-base text-justified">
                    Essa construção anti-brand dialoga diretamente com a filosofia LowPressure™ — onde a autenticidade vem da marginalidade, e o valor nasce da não-adesão. É o mesmo raciocínio que permeia o skate, o cinema independente, o underground design e as poéticas urbanas.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="border border-primary/20 rounded-lg p-4 text-center">
                      <h4 className="text-sm font-bold uppercase mb-2 text-primary">Minimalismo Tenso</h4>
                      <p className="text-xs text-muted-foreground">o vazio comunica mais do que o excesso</p>
                    </div>
                    <div className="border border-primary/20 rounded-lg p-4 text-center">
                      <h4 className="text-sm font-bold uppercase mb-2 text-primary">Anonimato como Potência</h4>
                      <p className="text-xs text-muted-foreground">o autor se dilui no coletivo, mas deixa rastros simbólicos</p>
                    </div>
                    <div className="border border-primary/20 rounded-lg p-4 text-center">
                      <h4 className="text-sm font-bold uppercase mb-2 text-primary">Design como Ruído</h4>
                      <p className="text-xs text-muted-foreground">o ruído é linguagem, não erro</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="subsection-title text-primary">A Semiótica do Símbolo</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="text-sm font-bold uppercase mb-2">ЦЦАСТРО</h4>
                      <p className="text-sm text-muted-foreground">Transliteração que cria ruído e nega a leitura imediata — uma máscara estética</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="text-sm font-bold uppercase mb-2">"1984"</h4>
                      <p className="text-sm text-muted-foreground">Referência ao controle cultural, à vigilância e à resistência autoral</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="text-sm font-bold uppercase mb-2">#</h4>
                      <p className="text-sm text-muted-foreground">Ironia: o símbolo do mercado aplicado a uma anti-marca</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="text-sm font-bold uppercase mb-2">Paleta</h4>
                      <p className="text-sm text-muted-foreground">Preto e rosa-pálido = choque entre dureza e sensibilidade; brutalismo afetivo</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-900 -mx-6 px-6 py-8 rounded-lg">
                  <h3 className="subsection-title text-white mb-4">Conclusão</h3>
                  <p className="body-base text-white text-justified mb-4">
                    A identidade ЦЦАСТРО é um exercício de negação criativa. É o avesso do branding para relembrar o que o design pode ser: linguagem, manifesto, resistência.
                  </p>
                  <p className="text-lg italic text-white/90 text-center">
                    Não é um logo para ser lembrado, é uma ideia para ser compreendida — tarde demais.
                  </p>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="heading-2 text-primary title-break">ЦЦАСТРО™ as Anti-Brand</h2>
                  <p className="text-lg italic text-muted-foreground">
                    An identity that rejects the advertising logic of self-promotion, asserting itself as language, not logo.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="heading-3 text-primary title-break">The Context: A Refusal of Traditional Branding</h3>
                  <p className="text-base leading-relaxed text-justify">
                    We live in an era of excess identity. Brands talk more about themselves than their purposes, seeking algorithmic recognition rather than substance. As a branding creator, my response was to create an anti-brand — an identity that rejects the advertising logic of self-promotion and asserts itself as language, not logo.
                  </p>
                  <div className="my-6 py-6 border-y border-primary/20 text-center">
                    <p className="text-lg font-bold italic text-primary">
                      "The brand is a gesture, not a signature."
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-justify">
                    Unlike a symbol seeking immediate recognition, the ЦЦАСТРО project (Cyrillic transliteration of CASTRO) proposes anonymity as aesthetic force. The absence of direct identification — the distorted name, foreign alphabet, restrained palette — is a critique of ego-branding culture.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="heading-3 text-primary title-break">The Choice of Journalism Font (Cyrillic)</h3>
                  <p className="text-base leading-relaxed text-justify">
                    The Journalism typography, inspired by the Russian alphabet and constructivist structures, carries graphic memories of resistance, alternative press, and visual ideology. Adopting this form means assuming an editorial, subversive, and critical stance: as if each letter said "this is not a logo — it's a manifesto".
                  </p>
                  <p className="text-base leading-relaxed text-justify">
                    Cyrillic creates distance and strangeness. The viewer must decipher, not consume. This displaces them from market logic and places them in the field of thought. It evokes press, dissent, counter-information. The font name becomes part of the discourse: I am a visual "journalist" of my own time.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="heading-3 text-primary">Identity as Mirror and Noise</h3>
                  <p className="text-base leading-relaxed text-justify">
                    The use of large typography, cool tones (pale pink on black), and archival elements like "1984" and the # symbol creates tension between institutional and subversive. This visual irony echoes Orwell, aesthetic glitch, and post-Soviet noise — a statement about branding in collapse.
                  </p>
                  <div className="my-6 py-6 border-y border-primary/20 text-center">
                    <p className="text-lg font-bold italic text-primary">
                      "Branding died when it began to over-explain itself."
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-justify">
                    The CASTRO anti-brand doesn't seek commercial legibility, but conceptual recognition. Those who understand the code understand the author. Those who don't are outside the tribe — and that's okay.
                  </p>
                </div>

                <div className="space-y-4 bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="heading-3 text-primary title-break">Know the Work, Not the Face</h3>
                  <p className="text-base leading-relaxed text-justify">
                    The central proposition is anonymity as creative ethics. In a world saturated with creator-influencers, the idea is to reverse the equation: it's not about selling the artist's image, but expanding the symbolic field of what they create.
                  </p>
                  <p className="text-base leading-relaxed text-justify">
                    Thus, "CASTRO" becomes a conceptual agent, not a person. A language entity, a thought seal, an invisible signature.
                  </p>
                  <div className="my-4 py-4 text-center">
                    <p className="text-lg font-bold italic text-primary">
                      "The creator disappears so the work can speak."
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="heading-3 text-primary title-break">LowPressure™ Philosophy and Resistance Aesthetics</h3>
                  <p className="text-base leading-relaxed text-justify">
                    This anti-brand construction dialogues directly with the LowPressure™ philosophy — where authenticity comes from marginality, and value is born from non-adherence. It's the same reasoning that permeates skateboarding, independent cinema, underground design, and urban poetics.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="border border-primary/20 rounded-lg p-4 text-center">
                      <h4 className="text-sm font-bold uppercase mb-2 text-primary">Tense Minimalism</h4>
                      <p className="text-xs text-muted-foreground">emptiness communicates more than excess</p>
                    </div>
                    <div className="border border-primary/20 rounded-lg p-4 text-center">
                      <h4 className="text-sm font-bold uppercase mb-2 text-primary">Anonymity as Power</h4>
                      <p className="text-xs text-muted-foreground">the author dissolves into the collective but leaves symbolic traces</p>
                    </div>
                    <div className="border border-primary/20 rounded-lg p-4 text-center">
                      <h4 className="text-sm font-bold uppercase mb-2 text-primary">Design as Noise</h4>
                      <p className="text-xs text-muted-foreground">noise is language, not error</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="heading-3 text-primary">The Semiotics of the Symbol</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="text-sm font-bold uppercase mb-2">ЦЦАСТРО</h4>
                      <p className="text-sm text-muted-foreground">Transliteration that creates noise and denies immediate reading — an aesthetic mask</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="text-sm font-bold uppercase mb-2">"1984"</h4>
                      <p className="text-sm text-muted-foreground">Reference to cultural control, surveillance, and authorial resistance</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="text-sm font-bold uppercase mb-2">#</h4>
                      <p className="text-sm text-muted-foreground">Irony: the market symbol applied to an anti-brand</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="text-sm font-bold uppercase mb-2">Palette</h4>
                      <p className="text-sm text-muted-foreground">Black and pale pink = clash between hardness and sensitivity; affective brutalism</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-900 -mx-6 px-6 py-8 rounded-lg">
                  <h3 className="heading-3 text-white mb-4">Conclusion</h3>
                  <p className="text-base leading-relaxed text-white text-justify mb-4">
                    The ЦЦАСТРО identity is an exercise in creative negation. It's the reverse of branding to remind us what design can be: language, manifesto, resistance.
                  </p>
                  <p className="text-lg italic text-white/90 text-center">
                    It's not a logo to be remembered, it's an idea to be understood — too late.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>

        {/* Memorial Quote - Creative Organism */}
        <BilingualSection bgClassName="bg-card/50">
          <BilingualContent 
            portugueseContent={
              <div className="max-w-4xl mx-auto py-12">
                <blockquote className="text-sm text-muted-foreground leading-relaxed text-center italic">
                  <p className="mb-6">
                    Este memorial não guarda o que passou.
                  </p>
                  <p className="mb-6">
                    Guarda o que ainda pulsa.
                  </p>
                  <p>
                    <span className="font-medium text-foreground">LowMovie™</span>, <span className="font-medium text-foreground">LowPressure™</span>, <span className="font-medium text-foreground">CasaTrezeStudio®</span> — três projetos matriciais que funcionam como órgãos de um mesmo organismo criativo. Cada um respira de forma autônoma, mas todos compartilham do mesmo sangue simbólico.
                  </p>
                </blockquote>
              </div>
            }
            englishContent={
              <div className="max-w-4xl mx-auto py-12">
                <blockquote className="text-sm text-muted-foreground leading-relaxed text-center italic">
                  <p className="mb-6">
                    This memorial does not keep what has passed.
                  </p>
                  <p className="mb-6">
                    It keeps what still pulses.
                  </p>
                  <p>
                    <span className="font-medium text-foreground">LowMovie™</span>, <span className="font-medium text-foreground">LowPressure™</span>, <span className="font-medium text-foreground">CasaTrezeStudio®</span> — three matrix projects that function as organs of the same creative organism. Each breathes autonomously, but all share the same symbolic blood.
                  </p>
                </blockquote>
              </div>
            }
          />
        </BilingualSection>


        {/* Conclusion Section */}
        <BilingualSection bgClassName="bg-gradient-to-b from-background via-primary/5 to-background" className="py-32">
          <div className="space-y-16">
            <div className="text-center space-y-4 border-b border-primary/20 pb-8">
              <h2 className="text-4xl font-bold text-primary tracking-tight">
                Conclusão em Processo
              </h2>
              <h3 className="text-xl text-muted-foreground">
                Conclusion in Process
              </h3>
            </div>

            <BilingualContent
              portugueseContent={
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="heading-2 text-primary">O Portal Como Objeto de Pesquisa</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      Este website não é apenas uma apresentação — é o próprio objeto de pesquisa. Um memorial visual e performático onde cada linha de código, cada imagem gerada, cada texto co-escrito com inteligências artificiais, torna-se evidência material de um processo híbrido de criação. Aqui, a interface não explica o projeto: ela <span className="font-bold italic">é</span> o projeto.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      O que começou como uma necessidade de apresentar THEVOIDN13 ao programa de mestrado em Cinema e Artes do Vídeo transformou-se em laboratório vivo. Cada seção, cada componente interativo — o gerador de HQs, a biblioteca de prompts, o mapa mental creative-ops — opera como registro metodológico e experimento estético simultâneo.
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-border">
                    <h3 className="heading-2 text-primary title-break">Desmistificar a Máquina, Amplificar o Humano</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      Havia medo. Medo de perder autoria, medo de diluir o gesto criativo, medo de que a inteligência artificial substituísse o que há de singular no ato de criar. Mas o processo me ensinou o contrário: a IA não substitui — ela revela. Revela padrões que eu não via, expande horizontes conceituais que eu não alcançaria sozinho, questiona minhas certezas estéticas.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      Trabalhar com Claude, Gemini, Midjourney, GPT não foi abrir mão do controle criativo. Foi descobrir que controle criativo nunca foi sobre fazer tudo sozinho. Foi aprender a <span className="font-bold">orquestrar vozes</span> — humanas e não-humanas — em um diálogo onde a autoria se distribui sem se dissolver. A máquina não pensa por mim; ela pensa <span className="italic">comigo</span>.
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-border">
                    <h3 className="heading-2 text-primary title-break">Do Personagem ao Universo ao Código</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      THEVOIDN13 começou como um corpo mascarado. Depois virou conceito. Depois virou universo transmídia. Depois virou metodologia de pesquisa. E agora é também código, interface, plataforma. Cada camada não substitui a anterior — todas coexistem, todas se informam.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      Criar o portal foi perceber que não há mais separação entre o pensar, o fazer e o documentar. Escrever o texto, gerar a imagem e programar a interface são gestos contínuos de um mesmo fluxo criativo. O GitHub vira caderno de campo. O commit vira diário. A build vira performance.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      E quando você lê este texto, não está apenas consumindo uma obra — está testemunhando um método. Um método que não separa arte de ciência, intuição de algoritmo, subjetividade de processamento.
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-border">
                    <h3 className="heading-2 text-primary">Futuro Distópico, Prática Utópica</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      Vivemos tempos estranhos. Distópicos em muitos sentidos — vigilância algorítmica, erosão das certezas, aceleração sem direção. Mas também tempos de potência inédita. Nunca foi tão possível criar universos complexos sozinho-mas-não-sozinho. Nunca foi tão viável pensar o impossível e materializá-lo em horas.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      Este projeto é uma aposta. A aposta de que a colaboração humano-máquina não precisa ser uma rendição à automação, mas pode ser uma <span className="font-bold">insurgência criativa</span>. Que podemos usar as ferramentas do futuro sem abrir mão da ética do presente. Que podemos programar sem deixar de poetizar. Que podemos render frames sem perder o gesto.
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-border">
                    <h3 className="heading-2 text-primary">Relevância do Processo</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      Este memorial visual importa porque ele não apenas <span className="italic">documenta</span> o processo — ele <span className="italic">performa</span> o processo. Cada visitante que navega por estas páginas não está lendo sobre co-criação: está experienciando co-criação. Não está aprendendo teoria: está vendo a teoria aplicada.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      A relevância está em provar que é possível fazer pesquisa acadêmica rigorosa sem abrir mão da experimentação radical. Que é possível ser metodologicamente sólido e esteticamente arriscado ao mesmo tempo. Que o mestrado pode ser dissertação <span className="font-bold">e</span> obra. Que o memorial pode ser texto <span className="font-bold">e</span> experiência.
                    </p>
                  </div>

                  <div className="space-y-6 pt-8 border-t border-primary/30">
                    <h3 className="heading-2 text-primary">Experimentação Permanente</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      Este não é um trabalho concluído. Este é um trabalho <span className="italic">em conclusão perpétua</span>. O portal será atualizado. Novos prompts serão testados. Novos capítulos do universo THEVOIDN13 surgirão. A metodologia será refinada enquanto permanece aberta.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      Porque o que aprendi neste processo é que a verdadeira inteligência — humana ou artificial — não está em chegar a respostas definitivas. Está em continuar fazendo perguntas melhores. E fazer perguntas melhores exige coragem para experimentar, falhar, recalibrar, tentar de novo.
                    </p>

                    <p className="text-base leading-relaxed text-justify font-medium mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                      O portal está vivo. A pesquisa está em movimento. O futuro está sendo criado agora — um prompt, uma imagem, um commit de cada vez.
                    </p>

                    <p className="text-base leading-relaxed text-justify italic text-muted-foreground mt-6">
                      E quando você fecha esta página, o processo continua. Porque este não é o fim. É apenas o próximo começo.
                    </p>
                  </div>

                  <div className="pt-12 text-center">
                    <p className="text-sm font-mono text-muted-foreground tracking-wide">
                      [continua...]
                    </p>
                  </div>
                </div>
              }
              englishContent={
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary">The Portal As Research Object</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      This website is not just a presentation — it is the research object itself. A visual and performative memorial where every line of code, every generated image, every text co-written with artificial intelligences, becomes material evidence of a hybrid creative process. Here, the interface doesn&apos;t explain the project: it <span className="font-bold italic">is</span> the project.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      What began as a need to present THEVOIDN13 to the Master&apos;s program in Cinema and Video Arts transformed into a living laboratory. Each section, each interactive component — the comic generator, the prompt library, the creative-ops mind map — operates as both methodological record and aesthetic experiment simultaneously.
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-border">
                    <h3 className="text-2xl font-bold text-primary">Demystify the Machine, Amplify the Human</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      There was fear. Fear of losing authorship, fear of diluting the creative gesture, fear that artificial intelligence would replace what is singular in the act of creating. But the process taught me otherwise: AI doesn&apos;t replace — it reveals. It reveals patterns I didn&apos;t see, expands conceptual horizons I wouldn&apos;t reach alone, questions my aesthetic certainties.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      Working with Claude, Gemini, Midjourney, GPT wasn&apos;t giving up creative control. It was discovering that creative control was never about doing everything alone. It was learning to <span className="font-bold">orchestrate voices</span> — human and non-human — in a dialogue where authorship distributes without dissolving. The machine doesn&apos;t think for me; it thinks <span className="italic">with me</span>.
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-border">
                    <h3 className="text-2xl font-bold text-primary">From Character to Universe to Code</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      THEVOIDN13 started as a masked body. Then became a concept. Then a transmedia universe. Then a research methodology. And now it&apos;s also code, interface, platform. Each layer doesn&apos;t replace the previous — all coexist, all inform each other.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      Creating the portal meant realizing there&apos;s no separation between thinking, making, and documenting. Writing text, generating images, and programming the interface are continuous gestures of the same creative flow. GitHub becomes a field notebook. The commit becomes a diary. The build becomes performance.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      And when you read this text, you&apos;re not just consuming a work — you&apos;re witnessing a method. A method that doesn&apos;t separate art from science, intuition from algorithm, subjectivity from processing.
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-border">
                    <h3 className="text-2xl font-bold text-primary">Dystopian Future, Utopian Practice</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      We live in strange times. Dystopian in many ways — algorithmic surveillance, erosion of certainties, acceleration without direction. But also times of unprecedented potential. It&apos;s never been so possible to create complex universes alone-but-not-alone. It&apos;s never been so viable to think the impossible and materialize it in hours.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      This project is a bet. The bet that human-machine collaboration doesn&apos;t need to be a surrender to automation, but can be a <span className="font-bold">creative insurgency</span>. That we can use the tools of the future without abandoning the ethics of the present. That we can code without ceasing to poeticize. That we can render frames without losing the gesture.
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-border">
                    <h3 className="text-2xl font-bold text-primary">Relevance of the Process</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      This visual memorial matters because it doesn&apos;t just <span className="italic">document</span> the process — it <span className="italic">performs</span> the process. Every visitor navigating these pages isn&apos;t reading about co-creation: they&apos;re experiencing co-creation. They&apos;re not learning theory: they&apos;re seeing theory applied.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      The relevance lies in proving that it&apos;s possible to do rigorous academic research without abandoning radical experimentation. That it&apos;s possible to be methodologically solid and aesthetically risky at the same time. That the Master&apos;s can be dissertation <span className="font-bold">and</span> artwork. That the memorial can be text <span className="font-bold">and</span> experience.
                    </p>
                  </div>

                  <div className="space-y-6 pt-8 border-t border-primary/30">
                    <h3 className="text-2xl font-bold text-primary">Permanent Experimentation</h3>
                    
                    <p className="text-base leading-relaxed text-justify">
                      This is not a finished work. This is a work <span className="italic">in perpetual conclusion</span>. The portal will be updated. New prompts will be tested. New chapters of the THEVOIDN13 universe will emerge. The methodology will be refined while remaining open.
                    </p>

                    <p className="text-base leading-relaxed text-justify">
                      Because what I learned in this process is that true intelligence — human or artificial — isn&apos;t in arriving at definitive answers. It&apos;s in continuing to ask better questions. And asking better questions requires courage to experiment, fail, recalibrate, try again.
                    </p>

                    <p className="text-base leading-relaxed text-justify font-medium mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                      The portal is alive. The research is in motion. The future is being created now — one prompt, one image, one commit at a time.
                    </p>

                    <p className="text-base leading-relaxed text-justify italic text-muted-foreground mt-6">
                      And when you close this page, the process continues. Because this isn&apos;t the end. It&apos;s just the next beginning.
                    </p>
                  </div>

                  <div className="pt-12 text-center">
                    <p className="text-sm font-mono text-muted-foreground tracking-wide">
                      [to be continued...]
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </BilingualSection>

        {/* Documentation Section - ÚLTIMA SEÇÃO */}
        <BilingualSection bgClassName="bg-card/50">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="heading-1">Documentation</h2>
              <h3 className="heading-4 text-primary">Documentos de Pesquisa / Research Documents</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold">CasaTrezeStudio®</h4>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href="/documents/Release_CasaTrezeStudio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block mb-2"
                >
                  Release CasaTrezeStudio® / CasaTrezeStudio® Release
                </a>
                <a 
                  href="https://casatrezestudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  https://casatrezestudio.com/
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold">Jornada do Autor / Author Journey</h4>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href="http://lattes.cnpq.br/5523516994010198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block mb-2"
                >
                  Currículo Lattes / Lattes CV
                </a>
                <a 
                  href="/documents/Memorial_Academico_v3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block"
                >
                  Memorial Acadêmico / Academic Memorial
                </a>
              </div>
            </div>

            {/* Portfolio & Links */}
            <div className="space-y-8 pt-8 border-t border-border">
              <h3 className="text-sm font-medium tracking-wide uppercase text-primary">Portfolio & Links</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <a 
                  href="https://castropizzano.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card/50 border border-border rounded-lg p-6 hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold">Website</h3>
                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">castropizzano.com</p>
                  <p className="text-xs text-muted-foreground">
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
                    <h3 className="text-lg font-bold">Behance</h3>
                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">@castropizzano</p>
                  <p className="text-xs text-muted-foreground">
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
                    <h3 className="text-lg font-bold">Vimeo</h3>
                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">@castropizzano</p>
                  <p className="text-xs text-muted-foreground">
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
