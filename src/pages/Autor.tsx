import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import heroImage from "@/assets/castro-hero-new.png";
import antibrandImage from "@/assets/antibrand-hero.png";

const Autor = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero Image */}
        <section className="w-full h-screen overflow-hidden">
          <img src={heroImage} alt="CASTRO PIZZANO" className="w-full h-full object-contain" />
        </section>

        <BilingualSection className="py-8">
          <div className="space-y-4">
            <h1 className="text-sm font-medium tracking-wide uppercase">
              CASTRO PIZZANO
            </h1>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
              цастро™ / PUNK
            </p>
          </div>
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-sm font-medium tracking-wide uppercase">Quem Fala e De Onde Falo</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Profissional criativo multidisciplinar, atuo entre as artes visuais, o design e a produção audiovisual. Minha trajetória é guiada pela criação de identidades visuais e narrativas semióticas, explorando linguagens como fotografia, vídeo, design gráfico e multiartes digitais. Transito entre processos individuais e colaborações coletivas, com base em laboratórios criativos, imersões referenciais e desenvolvimento conceitual.
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Atualmente, mestrando em Cinema e Artes do Vídeo pelo PPG-CINEAV da Universidade Estadual do Paraná (Unespar – Curitiba II/FAP), na linha de pesquisa em Processos de Criação no Cinema e nas Artes do Vídeo. Integro o grupo de pesquisa CineCriare – Cinema: Criação e Reflexão (Unespar/CNPq).
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Graduado em Publicidade e Propaganda (Universidade Tuiuti do Paraná, 2010) e pós-graduado em Direção de Arte e Estratégias Criativas (Unicuritiba, 2016).
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Fundador da CasaTrezeStudio® (2008), coletivo criativo que funciona como laboratório independente de produção cultural, autoral e comercial, conectando pessoas, ideias e projetos. Entre 2017 e 2020, professor de Economia Criativa na Universidade Positivo; atualmente, docente nas disciplinas de Branding e Produção Audiovisual na Universidade Isulpar.
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Membro do LowPressure™, coletivo de skatistas e produtores criativos que atuam nas interseções entre skate, cinema e videoarte contemporânea. Também colaboro com o TheWorkspace™, voltado à produção audiovisual colaborativa e independente. Navego por repertórios diversos, fluxos criativos múltiplos e práticas interdisciplinares, construindo minha bagagem intelectual a partir da prática, da escuta e da troca.
                </p>
                <div className="mt-12 space-y-8">
                  <h3 className="text-sm font-medium tracking-wide uppercase">Habilidades Técnicas / Technical Skills</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-wide mb-3 text-foreground/80">[DESIGN&ARTE]</h4>
                      <ul className="space-y-1">
                        <li className="text-base">• Adobe Illustrator</li>
                        <li className="text-base">• Adobe InDesign</li>
                        <li className="text-base">• Adobe Fresco</li>
                        <li className="text-base">• Procreate</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-wide mb-3 text-foreground/80">[FOTO&EDIÇÃO]</h4>
                      <ul className="space-y-1">
                        <li className="text-base">• Adobe Photoshop</li>
                        <li className="text-base">• Adobe Lightroom</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-wide mb-3 text-foreground/80">[VÍDEO&PÓS PRODUÇÃO]</h4>
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
                    <p className="text-base">Português (nativo) • Espanhol (intermediário) • Inglês (intermediário)</p>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <h4 className="text-xs uppercase tracking-wide mb-3 text-foreground/80">Referencial / References</h4>
                    <p className="text-base">Minimalista/Experimentação • Futurista/Construtivismo • Cibercultura/Semiótica • Tipografia/Infografia • Economia Criativa • Underground • Op-Art</p>
                  </div>
                </div>
                
                <div className="mt-12 pl-6 border-l-2 border-primary">
                  <h3 className="text-sm font-medium tracking-wide uppercase mb-4">HYBRID PRAXIS / PRÁXIS HÍBRIDA</h3>
                  <p className="text-base text-justify leading-relaxed mb-4">
                    Metodologia processual, experimental e reflexiva do projeto THEVOIDN13. Um ciclo contínuo de cinco etapas:
                  </p>
                  <div className="space-y-2 text-base">
                    <p><span className="font-medium">Observação:</span> Análise do fluxo criativo e documentação de padrões.</p>
                    <p><span className="font-medium">Cocriação:</span> Interação com IAs (Claude, Gemini, Midjourney) como extensões simbólicas.</p>
                    <p><span className="font-medium">Documentação:</span> Registro contínuo de camadas, decisões e estados mentais.</p>
                    <p><span className="font-medium">Reflexão:</span> Transformação dos registros em narrativas estéticas, filosóficas e técnicas.</p>
                    <p><span className="font-medium">Expansão:</span> Compartilhamento de aprendizados através de arte, código e metodologia.</p>
                  </div>
                  <p className="text-base text-justify leading-relaxed mt-4">
                    Transparência radical. Autoria compartilhada mas assinada. Pesquisa como criação.
                  </p>
                </div>

                <div className="mt-16 space-y-6">
                  <h3 className="text-sm font-medium tracking-wide uppercase text-primary">Trajetória / Journey</h3>
                  
                  <div className="space-y-6 text-base leading-relaxed">
                    <p className="text-justify">
                      A jornada começa no skate. Não como esporte, mas como modo de habitar o mundo. O corpo em movimento pelo espaço urbano. A apropriação criativa da cidade. Das manobras na rua às manobras no vídeo. Da câmera VHS à edição digital.
                    </p>
                    
                    <p className="text-justify">
                      2008: Funda CasaTrezeStudio. Começa a construir sua própria infraestrutura criativa. Design, vídeo, direção de arte. O coletivo como espaço de experimentação. 2014-2016: UDNFS no MuMA — primeira exposição institucional, democratização audiovisual DIY. 2019: Subtropikal Festival — criação de ID Visual do zero aplicando processos criativos ao vivo. 2020: LowPressure crew se formaliza. O skate ganha forma de movimento cultural. 2019-2022: Produção de LowMovie. O processo como obra.
                    </p>
                    
                    <p className="text-justify">
                      2023: Estreia de LowMovie no Cine Passeio. Do underground à tela grande. Ingresso no mestrado em Cinema e Artes do Vídeo (UNESPAR). A prática vira pesquisa. A pesquisa alimenta a prática. 2024: ⊂ødx — videoarte e instalação urbana sobre resistência e apagamento. 2024-2025: THE VOID N.13 emerge. A anti-marca que condensa tudo que veio antes.
                    </p>
                  </div>
                </div>

                <div className="mt-16 space-y-8">
                  <h3 className="text-sm font-medium tracking-wide uppercase text-primary">Formação Acadêmica / Academic Background</h3>
                  
                  <div className="space-y-8">
                    <div className="border-l-2 border-primary pl-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2023-2025 (em curso)</p>
                      <h4 className="text-base font-bold mb-2">Mestrado em Cinema e Artes do Vídeo</h4>
                      <p className="text-base mb-3">UNESPAR - Universidade Estadual do Paraná</p>
                      <p className="text-sm text-muted-foreground mb-4">
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
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2014</p>
                      <h4 className="text-base font-bold mb-2">
                        Pós-Graduado em Direção de Arte e<br/>
                        Estratégias Criativas
                      </h4>
                      <p className="text-base">Unicuritiba</p>
                    </div>

                    <div className="border-l-2 border-muted pl-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2005</p>
                      <h4 className="text-base font-bold mb-2">
                        Graduado em Comunicação Social —<br/>
                        Publicidade e Propaganda
                      </h4>
                      <p className="text-base">UTP - Universidade Tuiuti do Paraná</p>
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
                <h2 className="text-sm font-medium tracking-wide uppercase">Who Speaks and From Where</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Multidisciplinary creative professional, I work between visual arts, design and audiovisual production. My trajectory is guided by the creation of visual identities and semiotic narratives, exploring languages such as photography, video, graphic design and digital multi-arts. I move between individual processes and collective collaborations, based on creative laboratories, referential immersions and conceptual development.
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Currently, master's student in Cinema and Video Arts at PPG-CINEAV of Paraná State University (Unespar – Curitiba II/FAP), in the research line on Creation Processes in Cinema and Video Arts. I am part of the CineCriare research group – Cinema: Creation and Reflection (Unespar/CNPq).
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Bachelor's degree in Advertising (Tuiuti University of Paraná, 2010) and postgraduate degree in Art Direction and Creative Strategies (Unicuritiba, 2016).
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Founder of CasaTrezeStudio® (2008), a creative collective that works as an independent laboratory for cultural, authorial and commercial production, connecting people, ideas and projects. Between 2017 and 2020, professor of Creative Economy at Positivo University; currently, professor in the subjects of Branding and Audiovisual Production at Isulpar University.
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
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
              <div className="space-y-6">
                <h2 className="text-sm font-medium tracking-wide uppercase text-primary">Anti-brand: ЦЦАСТРО™</h2>
                
                <p className="text-base leading-relaxed text-justify">
                  <span className="font-medium">ЦЦАСТРО™</span> (LLACTPO) é uma identidade que rejeita a lógica publicitária da autopromoção. O uso do Cirílico (ЦЦАСТРО) e da fonte Journalist quebra distância e estranhamento, forçando a decodificação e o consumo consciente. É um manifesto a favor da autoria e da produção local.
                </p>
                
                <p className="text-base leading-relaxed text-justify">
                  Não é expansão de marca — é condensação de essência. Não busca visibilidade — busca ressonância. A anti-marca que emerge quando você abandona a performance identitária e habita o incômodo criativo. Um nome que força o espectador a desacelerar, questionar, decifrar.
                </p>
                
                <p className="text-base leading-relaxed text-justify">
                  Visual arts researcher, graphic designer, art direction, videomaker. Skate and underground culture. Aesthetic minimalist & op-art. Founder of CasaTrezeStudio and creative collaborator in LowPressure. Portfolio: Branding, films, video/cinema/experimentação.
                </p>
              </div>
            }
            englishContent={
              <div className="space-y-6">
                <h2 className="text-sm font-medium tracking-wide uppercase text-primary">Anti-brand: ЦЦАСТРО™</h2>
                
                <p className="text-base leading-relaxed text-justify">
                  <span className="font-medium">ЦЦАСТРО™</span> (LLACTPO) is an identity that rejects the advertising logic of self-promotion. The use of Cyrillic (ЦЦАСТРО) and the Journalist font creates distance and strangeness, forcing conscious decoding and consumption. It's a manifesto in favor of authorship and local production.
                </p>
                
                <p className="text-base leading-relaxed text-justify">
                  It's not brand expansion — it's essence condensation. It doesn't seek visibility — it seeks resonance. The anti-brand that emerges when you abandon identity performance and inhabit creative discomfort. A name that forces the viewer to slow down, question, decipher.
                </p>
                
                <p className="text-base leading-relaxed text-justify">
                  Visual arts researcher, graphic designer, art direction, videomaker. Skate and underground culture. Aesthetic minimalist & op-art. Founder of CasaTrezeStudio and creative collaborator in LowPressure. Portfolio: Branding, films, video/cinema/experimentation.
                </p>
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

        {/* Portfolio & Links */}
        <BilingualSection>
          <div className="space-y-8">
            <h2 className="text-sm font-medium tracking-wide uppercase text-primary">Portfolio & Links</h2>
            
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
        </BilingualSection>

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
                  href="/documents/Memorial_Academico.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block"
                >
                  Memorial Acadêmico / Academic Memorial
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
