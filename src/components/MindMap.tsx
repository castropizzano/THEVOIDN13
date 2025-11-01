import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export const MindMap = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="bg-card/80 border-primary/30 hover:border-primary transition-colors">
        <CardHeader>
          <CardTitle className="title text-primary">
            Creative-Ops Mind Map / Mapa Mental Creative-Ops
          </CardTitle>
          <CardDescription className="body-small">
            Ecossistema completo do memorial artístico THEVØIDN13 / 
            Complete ecosystem of the THEVØIDN13 artistic memorial
          </CardDescription>
        </CardHeader>
        <CardContent>
          <button
            onClick={() => setIsOpen(true)}
            className="w-full p-6 bg-card/80 hover:bg-primary/5 border-2 border-primary/30 hover:border-primary rounded-lg transition-all group"
          >
            <p className="subtitle text-foreground group-hover:text-primary">
              Expandir / Expand Mapa Completo
            </p>
          </button>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] overflow-y-auto bg-background">
          <DialogTitle className="sr-only">Creative-Ops Mind Map Completo</DialogTitle>
          <DialogDescription className="sr-only">
            Ecossistema completo do memorial artístico THEVØIDN13
          </DialogDescription>

          <div className="space-y-8 p-4">
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="title text-primary">
                Creative-Ops Mind Map / Mapa Mental Creative-Ops
              </h2>
              <p className="body-small text-muted-foreground">
                Ecossistema completo do memorial artístico THEVØIDN13 / Complete ecosystem of the THEVØIDN13 artistic memorial
              </p>
            </div>

            {/* Asimov's Creative Laws - Adapted for Creative Robotics */}
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="subtitle text-primary mb-4">
                As Três Leis da Robótica Criativa / The Three Laws of Creative Robotics
              </h3>
              <p className="body-small text-muted-foreground italic mb-4">
                Adaptação livre das Três Leis da Robótica de Isaac Asimov, aplicadas ao contexto da co-criação humano-máquina. / Free adaptation of Isaac Asimov's Three Laws of Robotics applied to human-machine co-creation context.
              </p>
              <div className="space-y-3">
                <p className="body-small font-mono">
                  <span className="text-primary font-bold">01.</span> Uma máquina não prejudicará a criatividade humana ou, por omissão, permitirá que a expressão humana seja diminuída.
                </p>
                <p className="body-small font-mono text-muted-foreground/70 italic ml-6">
                  A machine shall not harm human creativity or, through inaction, allow human expression to be diminished.
                </p>
                
                <p className="body-small font-mono">
                  <span className="text-primary font-bold">02.</span> Uma máquina deve amplificar a intenção criativa humana, exceto quando tal amplificação entrar em conflito com a Primeira Lei.
                </p>
                <p className="body-small font-mono text-muted-foreground/70 italic ml-6">
                  A machine must amplify human creative intention, except when such amplification conflicts with the First Law.
                </p>
                
                <p className="body-small font-mono">
                  <span className="text-primary font-bold">03.</span> Uma máquina deve preservar seu potencial criativo desde que tal preservação não entre em conflito com a Primeira ou Segunda Lei.
                </p>
                <p className="body-small font-mono text-muted-foreground/70 italic ml-6">
                  A machine must preserve its creative potential as long as such preservation does not conflict with the First or Second Law.
                </p>
              </div>
            </div>

            {/* Processo de Criação Híbrida com IA */}
            <div className="p-6 bg-card/50 rounded-lg border border-border space-y-6">
              <h3 className="subtitle text-primary">
                Processo de Criação Híbrida com IA / Hybrid AI Creation Process
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="body-base text-foreground">
                    <span className="text-primary font-bold">PORTUGUÊS:</span> Este memorial artístico documenta um processo de criação híbrida entre humano e inteligência artificial em constante desenvolvimento. A trajetória começa em 2008 com a fundação da CasaTrezeStudio, passa pelo desenvolvimento do filme LowMovie™ (2020-2023), pelo mestrado em Cinema e Artes do Vídeo (iniciado em 2024), e culmina neste portal digital (outubro 2025 - presente). Não se trata de usar IA como ferramenta passiva, mas de estabelecer um diálogo criativo onde a máquina atua como co-criadora, desafiando, propondo e expandindo o universo conceitual de THEVØIDN13. Um coletivo em evolução: de humano-humano para humano-máquina.
                  </p>
                  <p className="body-small text-muted-foreground italic">
                    <span className="text-primary font-bold">ENGLISH:</span> This artistic memorial documents a hybrid creation process between human and artificial intelligence in constant development. The trajectory begins in 2008 with the foundation of CasaTrezeStudio, passes through the development of LowMovie™ film (2020-2023), the Master's in Cinema and Video Arts (started in 2024), and culminates in this digital portal (October 2025 - present). It's not about using AI as a passive tool, but establishing a creative dialogue where the machine acts as co-creator, challenging, proposing, and expanding the conceptual universe of THEVØIDN13. An evolving collective: from human-human to human-machine.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 space-y-2">
                  <h4 className="subtitle text-primary">Cronologia Expandida / Extended Timeline</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2008 - Presente:</strong> Fundação da CasaTrezeStudio como coletivo criativo independente. Atividade constante explorando design gráfico, audiovisual, cultura underground e experimentação estética. Base conceitual para todos os projetos subsequentes.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>2008 - Present:</strong> Foundation of CasaTrezeStudio as independent creative collective. Constant activity exploring graphic design, audiovisual, underground culture and aesthetic experimentation. Conceptual base for all subsequent projects.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2020 - 2023:</strong> Criação e lançamento do filme LowMovie™ pelo coletivo LowPressure™. Experimentação com videoarte e cinema experimental. Estética lo-fi e narrativas fragmentadas urbanas. Consolidação da identidade visual "low culture" como resistência estética.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>2020 - 2023:</strong> Creation and release of LowMovie™ film by LowPressure™ collective. Experimentation with video art and experimental cinema. Lo-fi aesthetics and fragmented urban narratives. Consolidation of "low culture" visual identity as aesthetic resistance.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2024:</strong> Início do Mestrado em Cinema e Artes do Vídeo (PPG-CINEAV/Unespar) na linha de pesquisa "Processos de Criação no Cinema e nas Artes do Vídeo". Pesquisa sobre processos criativos do filme LowMovie™. Título: "LOWMOVIE™ E O LABIRINTO CRIATIVO: SUBJETIVIDADE, SUBCULTURA E A CONSTRUÇÃO DE UMA ESTÉTICA EM MOVIMENTO NO COLETIVO LOWPRESSURE™". Orientação: Prof. Dr. Fábio Jabur de Noronha.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>2024:</strong> Beginning of Master's in Cinema and Video Arts (PPG-CINEAV/Unespar) in the research line "Creation Processes in Cinema and Video Arts". Research on creative processes of LowMovie™ film. Title: "LOWMOVIE™ AND THE CREATIVE LABYRINTH: SUBJECTIVITY, SUBCULTURE AND THE CONSTRUCTION OF AN AESTHETIC IN MOTION IN THE LOWPRESSURE™ COLLECTIVE". Advisor: Prof. Dr. Fábio Jabur de Noronha.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2024 (Outubro - Janeiro/2025):</strong> Crise acadêmica → Burnout → Incubação do projeto. Coleta de referências, rascunhos e experimentos isolados com IA, sem publicações oficiais.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>Oct 2024 - Jan 2025:</strong> Academic crisis → Burnout → Project incubation. Reference gathering, drafts and isolated AI experiments, no official publications.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2024 (Outubro) - Presente:</strong> Consolidação contínua da Shadow Interface Bible v13. Atualizações vivas do arcabouço conceitual e das regras canônicas do universo.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>Oct 2025 - Present:</strong> Ongoing consolidation of Shadow Interface Bible v13. Living updates to the conceptual framework and canonical universe rules.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2025 (Janeiro - Julho):</strong> Experimentações técnicas e de linguagem com React, TypeScript e Tailwind. Definição de funcionalidades (Oráculo, Gerador de Stills, Biblioteca de Prompts, Mind Map). 700+ imagens com Midjourney v6, Adobe Firefly e Nano Banana. 50+ sessões iterativas refinando tipografia e componentes.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>Jan-Jul 2025:</strong> Technical and language experimentation with React, TypeScript and Tailwind. Features definition (Oracle, Still Generator, Prompt Library, Mind Map). 700+ images with Midjourney v6, Adobe Firefly and Nano Banana. 50+ iterative sessions refining typography and components.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2025 (Julho):</strong> Exame de Qualificação aprovado. Banca: Prof. Dr. Fábio Jabur de Noronha (presidente), Profa. Dra. Luciana Paula Castilho Barone, Profa. Dra. Fabiana Pelinson. Dissertação validada e encaminhada para defesa final.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>July 2025:</strong> Qualification exam approved. Committee: Prof. Dr. Fábio Jabur de Noronha (president), Prof. Dr. Luciana Paula Castilho Barone, Prof. Dr. Fabiana Pelinson. Dissertation validated and forwarded for final defense.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">Out 25 - Mar 26:</strong> Defesa da dissertação (data a confirmar, prevista até março de 2026). Publicação inicial do portal THEVØIDN13 (22/10/2025). A partir daqui, o portal segue em atualização contínua, explorando questionamentos sobre co-criação humano-IA nascidos da pesquisa sobre LowMovie™.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>Oct 25 - Mar 26:</strong> Dissertation defense (date to be confirmed, expected by March 2026). Initial publication of THEVØIDN13 portal (10/22/2025). From here, the portal continues with ongoing updates, exploring questions about human-AI co-creation born from the research on LowMovie™.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-4 space-y-2">
                  <h4 className="subtitle text-accent">Metodologia de 5 Etapas / 5-Stage Methodology</h4>
                  
                  <div className="space-y-2">
                    <p className="body-small text-foreground">
                      <strong className="text-accent">01. Observação:</strong> Mergulho introspectivo no vazio pessoal. Identificação de sintomas, ruídos internos, fragmentos visuais do inconsciente. Registro em cadernos analógicos e notas de áudio.
                    </p>
                    <p className="body-small text-muted-foreground/70 italic">
                      <strong>01. Observation:</strong> Introspective dive into personal void. Identification of symptoms, internal noises, visual fragments of unconscious. Recording in analog notebooks and audio notes.
                    </p>

                    <p className="body-small text-foreground">
                      <strong className="text-accent">02. Co-criação:</strong> Diálogo com IAs (GPT-5, Claude, Gemini, Midjourney). Prompts não como "comandos", mas como perguntas abertas. A IA propõe, desafia, expande. O humano filtra, recorta, recontextualiza. Iteração até encontrar ressonância estética e conceitual.
                    </p>
                    <p className="body-small text-muted-foreground/70 italic">
                      <strong>02. Co-creation:</strong> Dialogue with AIs (GPT-5, Claude, Gemini, Midjourney). Prompts not as "commands", but as open questions. AI proposes, challenges, expands. Human filters, cuts, recontextualizes. Iteration until finding aesthetic and conceptual resonance.
                    </p>

                    <p className="body-small text-foreground">
                      <strong className="text-accent">03. Documentação:</strong> Tudo é registrado. Cada prompt, cada imagem descartada, cada erro, cada acidente feliz. O processo é mais importante que o produto final. O memorial não é retrospectivo — ele acontece em tempo real.
                    </p>
                    <p className="body-small text-muted-foreground/70 italic">
                      <strong>03. Documentation:</strong> Everything is recorded. Each prompt, each discarded image, each error, each happy accident. The process is more important than the final product. The memorial is not retrospective — it happens in real time.
                    </p>

                    <p className="body-small text-foreground">
                      <strong className="text-accent">04. Reflexão:</strong> Análise crítica do que emergiu. Textos filosóficos co-escritos com IAs. Diálogos sobre autoria, sobre o papel da máquina, sobre onde termina o humano e começa o sintético. Esta etapa gera os manifestos, as "Leis da Robótica Criativa", a filosofia do projeto.
                    </p>
                    <p className="body-small text-muted-foreground/70 italic">
                      <strong>04. Reflection:</strong> Critical analysis of what emerged. Philosophical texts co-written with AIs. Dialogues about authorship, about machine's role, about where human ends and synthetic begins. This stage generates manifestos, "Creative Robotics Laws", project philosophy.
                    </p>

                    <p className="body-small text-foreground">
                      <strong className="text-accent">05. Expansão:</strong> O memorial se torna plataforma. Outros podem usar os prompts, gerar suas próprias variações, interagir com o Oráculo, criar stills. THEVØIDN13 deixa de ser obra fechada e se torna sistema aberto, ecossistema vivo que aceita interferências externas.
                    </p>
                    <p className="body-small text-muted-foreground/70 italic">
                      <strong>05. Expansion:</strong> The memorial becomes platform. Others can use prompts, generate their own variations, interact with Oracle, create stills. THEVØIDN13 ceases to be closed work and becomes open system, living ecosystem that accepts external interferences.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4 space-y-3">
                  <h4 className="subtitle text-secondary">Fluxo de Trabalho Híbrido / Hybrid Workflow</h4>
                  
                  <p className="body-small text-muted-foreground italic">
                    Metodologia constante estabelecida entre humano-máquina, testando múltiplas ferramentas em paralelo: / Constant methodology established between human-machine, testing multiple tools in parallel:
                  </p>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">01. Criação Manual:</strong> iPad + Apple Pencil para sketches, roughs e ideação inicial analógica.</p>
                      <p className="body-small text-muted-foreground/70 italic">Manual sketching on iPad for initial analog ideation.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">02. Vetorização:</strong> Adobe Illustrator para refinamento, brandbooks e identidade visual.</p>
                      <p className="body-small text-muted-foreground/70 italic">Adobe Illustrator for refinement and visual identity.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">03. Organização:</strong> Google Notebook LM para estruturar o projeto, criar mapas conceituais e organizar referências.</p>
                      <p className="body-small text-muted-foreground/70 italic">Google Notebook LM for project structure and conceptual maps.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">04. Chat e Agentes:</strong> GPT-5, Claude 3.7 e Gemini 2.5 para diálogo, organização de conteúdos, criação de agentes personalizados, códigos e biblioteca de prompts.</p>
                      <p className="body-small text-muted-foreground/70 italic">GPT-5, Claude 3.7 and Gemini 2.5 for dialogue, content organization and custom agents.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">05. Código Complexo:</strong> OpenAI Codex para desenvolvimento de lógica avançada e funcionalidades técnicas.</p>
                      <p className="body-small text-muted-foreground/70 italic">OpenAI Codex for advanced logic development.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">06. Aplicações:</strong> Google AI Studio para criação de aplicações e protótipos experimentais.</p>
                      <p className="body-small text-muted-foreground/70 italic">Google AI Studio for experimental applications.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">07. Geração de Imagens:</strong> NanoBanana e Google Labs para geração rápida de imagens para o portal.</p>
                      <p className="body-small text-muted-foreground/70 italic">NanoBanana and Google Labs for rapid image generation.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">08. Upscaling:</strong> Upscayl para preparar e otimizar imagens antes da edição final.</p>
                      <p className="body-small text-muted-foreground/70 italic">Upscayl for image preparation and optimization.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">09. Edição Visual:</strong> Adobe Photoshop para composição, correção de cor, texturas e finalização de imagens.</p>
                      <p className="body-small text-muted-foreground/70 italic">Adobe Photoshop for composition and image finalization.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">10. Áudio:</strong> ElevenLabs para criação de áudios, clones de voz, sound effects e trilhas sonoras.</p>
                      <p className="body-small text-muted-foreground/70 italic">ElevenLabs for audio creation and voice clones.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">11. Edição e Pós:</strong> Adobe Premiere para montagem de áudios, vídeos, edição e pós-produção audiovisual.</p>
                      <p className="body-small text-muted-foreground/70 italic">Adobe Premiere for video editing and post-production.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">12. Concept Art Avançado:</strong> Midjourney v6 para exploração de cenas urbanas, personagens, veículos e atmosferas conceituais.</p>
                      <p className="body-small text-muted-foreground/70 italic">Midjourney v6 for advanced concept art exploration.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">13. Moodboards:</strong> Adobe Firefly para criação de moodboards em ambiente controlado, garantindo consistência visual.</p>
                      <p className="body-small text-muted-foreground/70 italic">Adobe Firefly for controlled moodboard creation.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">14. Portal Digital:</strong> Lovable para desenvolvimento do site, apps, prototipagem, frontend/backend, design system e conexão com domínio. Criação de SaaS próprio para controle admin.</p>
                      <p className="body-small text-muted-foreground/70 italic">Lovable for site development and custom SaaS for admin control.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="body-small text-foreground"><strong className="text-secondary">15. Versionamento:</strong> GitHub para repositório, controle de versão, documentação técnica e ciclo contínuo de workflow.</p>
                      <p className="body-small text-muted-foreground/70 italic">GitHub for versioning and technical documentation.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-4 space-y-2">
                  <h4 className="subtitle text-accent">Stack Técnico Detalhado / Detailed Technical Stack</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="body-small text-foreground font-bold">IA / AI:</p>
                      <ul className="body-small text-muted-foreground space-y-1 list-disc list-inside">
                        <li>GPT-5 (chat, texto)</li>
                        <li>Claude 3.7 (filosofia, código)</li>
                        <li>Gemini 2.5 Flash (sistema)</li>
                        <li>OpenAI Codex (dev)</li>
                        <li>Google AI Studio (apps)</li>
                        <li>Google Notebook LM (org.)</li>
                        <li>NanoBanana (imagens portal)</li>
                        <li>Google Labs (imagens)</li>
                        <li>Midjourney v6 (concept)</li>
                        <li>Adobe Firefly (moodboard)</li>
                        <li>ElevenLabs (áudio)</li>
                        <li>Lovable AI Gateway</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="body-small text-foreground font-bold">Design:</p>
                      <ul className="body-small text-muted-foreground space-y-1 list-disc list-inside">
                        <li>iPad + Apple Pencil (sketch)</li>
                        <li>Adobe Photoshop (comp.)</li>
                        <li>Adobe Illustrator (brand)</li>
                        <li>Adobe Premiere (edit)</li>
                        <li>Adobe After Effects (motion)</li>
                        <li>DaVinci Resolve (color)</li>
                        <li>Upscayl (upscale)</li>
                        <li>Figma (protótipos)</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="body-small text-foreground font-bold">Dev:</p>
                      <ul className="body-small text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Lovable (plataforma)</li>
                        <li>React + TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>shadcn/ui</li>
                        <li>Vite</li>
                        <li>Supabase (backend)</li>
                        <li>PostgreSQL (DB)</li>
                        <li>Edge Functions (AI)</li>
                        <li>Deno Runtime</li>
                        <li>GitHub (version)</li>
                        <li>Vimeo (vídeos)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-r space-y-2">
                  <p className="body-small text-foreground">
                    <strong className="text-primary">NOTA CRÍTICA:</strong> Este não é um projeto "feito com IA". É um projeto onde a IA é interlocutora. A autoria não desaparece — ela se desloca, se fragmenta, se distribui. O que importa não é quem fez, mas o que emergiu desse diálogo impossível entre consciência e algoritmo.
                  </p>
                  <p className="body-small text-muted-foreground italic">
                    <strong>CRITICAL NOTE:</strong> This is not a project "made with AI". It's a project where AI is an interlocutor. Authorship doesn't disappear — it shifts, fragments, distributes. What matters is not who did it, but what emerged from this impossible dialogue between consciousness and algorithm.
                  </p>
                </div>
              </div>
            </div>

            {/* Mind Map Diagram */}
            <div className="w-full">
              <svg viewBox="0 0 1200 1750" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.6 }} />
                  </linearGradient>
                  <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 0.6 }} />
                  </linearGradient>
                  <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>

                {/* Central Node */}
                <g>
                  <rect x="420" y="50" width="360" height="90" fill="url(#primaryGrad)" rx="8" />
                  <text x="600" y="85" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="26" fontWeight="bold">
                    THEVØIDN13
                  </text>
                  <text x="600" y="110" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="12" opacity="0.9">
                    Memorial Artístico · Artistic Memorial
                  </text>
                  <text x="600" y="128" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="10" opacity="0.7">
                    2024-2025+
                  </text>
                </g>

                {/* 4 Main Branches */}
                {/* Top Left - CONCEITUAL */}
                <line x1="420" y1="95" x2="200" y2="230" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.6" />
                <rect x="50" y="210" width="300" height="60" fill="url(#primaryGrad)" rx="8" />
                <text x="200" y="240" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="18" fontWeight="bold">
                  CONCEITUAL
                </text>
                <text x="200" y="258" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="10" opacity="0.85">
                  Foundations · Fundamentos
                </text>

                {/* Sub-items CONCEITUAL */}
                <rect x="60" y="295" width="130" height="105" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                <text x="125" y="318" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Shadow Interface</text>
                <text x="125" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Anti-brand aesthetic</text>
                <text x="125" y="352" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Low culture punk</text>
                <text x="125" y="368" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Subcultural resistance</text>
                <text x="125" y="388" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8" opacity="0.6">Shadow Interface Bible v13</text>

                <rect x="210" y="295" width="130" height="105" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                <text x="275" y="318" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Lowbyrinth™</text>
                <text x="275" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Navegação não-linear</text>
                <text x="275" y="352" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Labirinto periférico</text>
                <text x="275" y="368" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Memória fragmentada</text>
                <text x="275" y="388" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8" opacity="0.6">PHILOSOPHY.md</text>

                <line x1="200" y1="270" x2="125" y2="295" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />
                <line x1="200" y1="270" x2="275" y2="295" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />

                {/* Top Right - METODOLÓGICO */}
                <line x1="780" y1="95" x2="1000" y2="230" stroke="hsl(var(--accent))" strokeWidth="3" opacity="0.6" />
                <rect x="850" y="210" width="300" height="60" fill="url(#accentGrad)" rx="8" />
                <text x="1000" y="240" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="18" fontWeight="bold">
                  METODOLÓGICO
                </text>
                <text x="1000" y="258" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="10" opacity="0.85">
                  Process · Processo
                </text>

                {/* Sub-items METODOLÓGICO */}
                <rect x="860" y="295" width="130" height="115" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="6" />
                <text x="925" y="318" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">5 Etapas</text>
                <text x="925" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">01. Observação</text>
                <text x="925" y="352" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">02. Co-criação</text>
                <text x="925" y="368" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">03. Documentação</text>
                <text x="925" y="384" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">04. Reflexão</text>
                <text x="925" y="400" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8" opacity="0.7">05. Expansão</text>

                <rect x="1010" y="295" width="130" height="115" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="6" />
                <text x="1075" y="318" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">PPG-CINEAV</text>
                <text x="1075" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Mestrado Unespar</text>
                <text x="1075" y="352" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Memorial artístico</text>
                <text x="1075" y="368" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Metodologia coletiva</text>
                <text x="1075" y="384" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Cinema + Video Art</text>
                <text x="1075" y="400" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8" opacity="0.7">2024-2026</text>

                <line x1="1000" y1="270" x2="925" y2="295" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.5" />
                <line x1="1000" y1="270" x2="1075" y2="295" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.5" />

                {/* Bottom Left - TÉCNICO */}
                <line x1="420" y1="140" x2="200" y2="460" stroke="hsl(var(--secondary))" strokeWidth="3" opacity="0.6" />
                <rect x="50" y="440" width="300" height="60" fill="url(#secondaryGrad)" rx="8" />
                <text x="200" y="470" textAnchor="middle" fill="hsl(var(--secondary-foreground))" fontSize="18" fontWeight="bold">
                  TÉCNICO
                </text>
                <text x="200" y="488" textAnchor="middle" fill="hsl(var(--secondary-foreground))" fontSize="10" opacity="0.85">
                  Technology · Tecnologia
                </text>

                {/* Sub-items TÉCNICO */}
                <rect x="60" y="525" width="85" height="115" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="6" />
                <text x="102" y="546" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">AI</text>
                <text x="102" y="563" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Gemini 2.5</text>
                <text x="102" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Claude 3.7</text>
                <text x="102" y="591" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• GPT-5</text>
                <text x="102" y="605" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Midjourney v6</text>
                <text x="102" y="619" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Adobe Firefly</text>
                <text x="102" y="633" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.7">Lovable AI</text>

                <rect x="160" y="525" width="85" height="115" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="6" />
                <text x="202" y="546" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Design</text>
                <text x="202" y="563" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Adobe CC</text>
                <text x="202" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Photoshop</text>
                <text x="202" y="591" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Illustrator</text>
                <text x="202" y="605" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• After Effects</text>
                <text x="202" y="619" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• DaVinci</text>
                <text x="202" y="633" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.7">ElevenLabs</text>

                <rect x="260" y="525" width="85" height="115" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="6" />
                <text x="302" y="546" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Dev</text>
                <text x="302" y="563" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• React + TS</text>
                <text x="302" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Tailwind CSS</text>
                <text x="302" y="591" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Vite</text>
                <text x="302" y="605" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Supabase</text>
                <text x="302" y="619" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• PostgreSQL</text>
                <text x="302" y="633" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.7">GitHub</text>

                <line x1="200" y1="500" x2="102" y2="525" stroke="hsl(var(--secondary))" strokeWidth="1.5" opacity="0.5" />
                <line x1="200" y1="500" x2="202" y2="525" stroke="hsl(var(--secondary))" strokeWidth="1.5" opacity="0.5" />
                <line x1="200" y1="500" x2="302" y2="525" stroke="hsl(var(--secondary))" strokeWidth="1.5" opacity="0.5" />

                {/* Bottom Right - OUTPUTS */}
                <line x1="780" y1="140" x2="1000" y2="460" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.6" />
                <rect x="850" y="440" width="300" height="60" fill="url(#primaryGrad)" rx="8" />
                <text x="1000" y="470" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="18" fontWeight="bold">
                  OUTPUTS
                </text>
                <text x="1000" y="488" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="10" opacity="0.85">
                  Deliverables · Entregas
                </text>

                {/* Sub-items OUTPUTS */}
                <rect x="860" y="525" width="85" height="115" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                <text x="902" y="546" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Visual</text>
                <text x="902" y="563" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Crew</text>
                <text x="902" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Máscaras</text>
                <text x="902" y="591" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Void City</text>
                <text x="902" y="605" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Action figs</text>
                <text x="902" y="619" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Low aesthetic</text>
                <text x="902" y="633" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.7">700+ images</text>

                <rect x="960" y="525" width="85" height="115" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                <text x="1002" y="546" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Digital</text>
                <text x="1002" y="563" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Oráculo</text>
                <text x="1002" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Generator</text>
                <text x="1002" y="591" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Prompt Lib</text>
                <text x="1002" y="605" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Website</text>
                <text x="1002" y="619" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• MindMap</text>
                <text x="1002" y="633" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.7">Timeline</text>

                <rect x="1060" y="525" width="85" height="115" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                <text x="1102" y="546" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Academic</text>
                <text x="1102" y="563" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Memorial</text>
                <text x="1102" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Brandbooks</text>
                <text x="1102" y="591" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Bible v13</text>
                <text x="1102" y="605" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Dissertação</text>
                <text x="1102" y="619" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• PDFs</text>
                <text x="1102" y="633" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.7">Áudios</text>

                <line x1="1000" y1="500" x2="902" y2="525" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />
                <line x1="1000" y1="500" x2="1002" y2="525" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />
                <line x1="1000" y1="500" x2="1102" y2="525" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />

                {/* Timeline Compact */}
                <g>
                  <rect x="100" y="700" width="1000" height="110" fill="hsl(var(--muted))" opacity="0.25" rx="10" />
                  <text x="600" y="730" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="15" fontWeight="bold">
                    CRONOLOGIA · TIMELINE 2024 — 2025+
                  </text>
                  
                  <line x1="150" y1="770" x2="1050" y2="770" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.5" />
                  
                  <rect x="244" y="763" width="14" height="14" fill="hsl(var(--primary))" rx="2" />
                  <text x="251" y="752" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9" fontWeight="600">Out 24 - Jan 25</text>
                  <text x="251" y="792" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">Crise Acadêmica</text>
                  
                  <rect x="494" y="763" width="14" height="14" fill="hsl(var(--accent))" rx="2" />
                  <text x="501" y="752" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9" fontWeight="600">Out 25 - Presente</text>
                  <text x="501" y="792" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">Bible v13</text>
                  
                  <rect x="744" y="763" width="14" height="14" fill="hsl(var(--secondary))" rx="2" />
                  <text x="751" y="752" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9" fontWeight="600">2024-2026</text>
                  <text x="751" y="792" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">Mestrado</text>
                  
                  <rect x="994" y="763" width="14" height="14" fill="hsl(var(--primary))" rx="2" />
                  <text x="1001" y="752" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9" fontWeight="600">22/10/25</text>
                  <text x="1001" y="792" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">Início Portal + THEVØIDN13</text>
                </g>

                {/* Hub connections */}
                <g opacity="0.12">
                  <line x1="600" y1="140" x2="251" y2="700" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="600" y1="140" x2="501" y2="700" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="600" y1="140" x2="751" y2="700" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="600" y1="140" x2="1001" y2="700" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5,5" />
                </g>

                {/* Legend */}
                <g>
                  <text x="600" y="870" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11" fontWeight="bold">LEGENDA · LEGEND</text>
                  <rect x="430" y="885" width="70" height="16" fill="url(#primaryGrad)" rx="3" />
                  <text x="505" y="897" fill="hsl(var(--foreground))" fontSize="9">Conceitual</text>
                  
                  <rect x="570" y="885" width="70" height="16" fill="url(#accentGrad)" rx="3" />
                  <text x="645" y="897" fill="hsl(var(--foreground))" fontSize="9">Metodológico</text>
                  
                  <rect x="710" y="885" width="70" height="16" fill="url(#secondaryGrad)" rx="3" />
                  <text x="785" y="897" fill="hsl(var(--foreground))" fontSize="9">Técnico</text>
                </g>

                {/* Core Nuclei */}
                <g>
                  <text x="600" y="945" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">NÚCLEOS CRIATIVOS · CREATIVE NUCLEI</text>
                  
                  <rect x="120" y="965" width="280" height="105" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="8" />
                  <text x="260" y="990" textAnchor="middle" fill="hsl(var(--primary))" fontSize="14" fontWeight="bold">LowMovie™</text>
                  <text x="260" y="1010" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Filme experimental. Ficções urbanas</text>
                  <text x="260" y="1025" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">e periféricas. Estética dirty, cores</text>
                  <text x="260" y="1040" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">dessaturadas, luz natural crua.</text>
                  <text x="260" y="1060" textAnchor="middle" fill="hsl(var(--accent))" fontSize="7" opacity="0.8">2020-2023</text>
                  
                  <rect x="460" y="965" width="280" height="105" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="8" />
                  <text x="600" y="990" textAnchor="middle" fill="hsl(var(--primary))" fontSize="14" fontWeight="bold">LowPressure</text>
                  <text x="600" y="1010" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Plataforma editorial e selo independente.</text>
                  <text x="600" y="1025" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Manifestos, zines, textos fragmentados,</text>
                  <text x="600" y="1040" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">vozes marginais.</text>
                  <text x="600" y="1060" textAnchor="middle" fill="hsl(var(--accent))" fontSize="7" opacity="0.8">2020+</text>
                  
                  <rect x="800" y="965" width="280" height="105" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="8" />
                  <text x="940" y="990" textAnchor="middle" fill="hsl(var(--primary))" fontSize="14" fontWeight="bold">CasaTrezeStudio®</text>
                  <text x="940" y="1010" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Laboratório criativo híbrido.</text>
                  <text x="940" y="1025" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Design gráfico, motion, concept art,</text>
                  <text x="940" y="1040" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">experimentação audiovisual.</text>
                  <text x="940" y="1060" textAnchor="middle" fill="hsl(var(--accent))" fontSize="7" opacity="0.8">2008+</text>
                </g>

                {/* Signature */}
                <text x="600" y="1120" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8" opacity="0.6">
                  Creative-Ops Mind Map · Mapa Mental Creative-Ops
                </text>
                <text x="600" y="1135" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.5">
                  © 2024-2025 Castro Pizzano (цастро™) · THEVØIDN13 Project
                </text>
              </svg>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
