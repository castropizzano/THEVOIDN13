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
                    <span className="text-primary font-bold">PORTUGUÊS:</span> Este memorial artístico documenta um processo de criação híbrida entre humano e inteligência artificial em constante desenvolvimento. A trajetória começa em 2008 com a fundação da CasaTrezeStudio, passa pelo desenvolvimento do LOWMOVIE (2020-2023), pelo mestrado em Cinema e Artes do Vídeo (2024-2026), e culmina neste portal digital (outubro 2024 - presente). Não se trata de usar IA como ferramenta passiva, mas de estabelecer um diálogo criativo onde a máquina atua como co-criadora, desafiando, propondo e expandindo o universo conceitual de THEVØIDN13. Um coletivo em evolução: de humano-humano para humano-máquina.
                  </p>
                  <p className="body-small text-muted-foreground italic">
                    <span className="text-primary font-bold">ENGLISH:</span> This artistic memorial documents a hybrid creation process between human and artificial intelligence in constant development. The trajectory begins in 2008 with the foundation of CasaTrezeStudio, passes through the development of LOWMOVIE (2020-2023), the Master's in Cinema and Video Arts (2024-2026), and culminates in this digital portal (October 2024 - present). It's not about using AI as a passive tool, but establishing a creative dialogue where the machine acts as co-creator, challenging, proposing, and expanding the conceptual universe of THEVØIDN13. An evolving collective: from human-human to human-machine.
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
                        <strong className="text-primary">2020 - 2023:</strong> Desenvolvimento e lançamento do LOWMOVIE, projeto transmídia explorando narrativas fragmentadas e estética lo-fi. Experimentação com linguagem cinematográfica híbrida. Consolidação da identidade visual "low culture" como resistência estética.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>2020 - 2023:</strong> Development and launch of LOWMOVIE, transmedia project exploring fragmented narratives and lo-fi aesthetics. Experimentation with hybrid cinematographic language. Consolidation of "low culture" visual identity as aesthetic resistance.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2023 (Outubro - Dezembro):</strong> Crise no mestrado → Burnout acadêmico → Nascimento de THEVØIDN13 como resposta ao colapso. Primeiras experimentações com Midjourney v5 para gerar máscaras e personagens. Desenvolvimento da estética "low culture punk" através de prompts iterativos com GPT-4.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>Oct-Dec 2023:</strong> Master's crisis → Academic burnout → Birth of THEVØIDN13 as response to collapse. First experiments with Midjourney v5 for masks and characters. Development of "low culture punk" aesthetic through iterative prompts with GPT-4.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2024 - 2026:</strong> Mestrado em Cinema e Artes do Vídeo (PPG-CINEAV/Unespar). Pesquisa sobre co-criação humano-IA no campo das artes visuais e cinema experimental. THEVØIDN13 se torna objeto e método de investigação acadêmica. Desenvolvimento paralelo de prática artística e reflexão teórica.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>2024 - 2026:</strong> Master's in Cinema and Video Arts (PPG-CINEAV/Unespar). Research on human-AI co-creation in visual arts and experimental cinema. THEVØIDN13 becomes both object and method of academic investigation. Parallel development of artistic practice and theoretical reflection.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2024 (Janeiro - Junho):</strong> Consolidação da Shadow Interface Bible como documento canônico. Mais de 500 imagens geradas com Midjourney v6, explorando cenas urbanas, veículos vintage e atmosferas noturnas. Experimentação com Adobe Firefly para texturas analógicas. Co-escrita com Claude 3 Opus de textos filosóficos e manifestos conceituais.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>Jan-Jun 2024:</strong> Consolidation of Shadow Interface Bible as canonical document. 500+ images generated with Midjourney v6, exploring urban scenes, vintage vehicles, nocturnal atmospheres. Adobe Firefly experiments for analog textures. Co-writing with Claude 3 Opus of philosophical texts and conceptual manifestos.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2024 (Julho - Setembro):</strong> Criação dos brandbooks LowMovie e LowPressure com Adobe Illustrator + IA. Desenvolvimento do Memorial Acadêmico v3 em co-escrita com GPT-4o. Início da integração entre design manual (Photoshop, After Effects) e geração por IA. Estabelecimento de metodologia híbrida constante.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>Jul-Sep 2024:</strong> Creation of LowMovie and LowPressure brandbooks with Adobe Illustrator + AI. Development of Academic Memorial v3 in co-writing with GPT-4o. Beginning of integration between manual design (Photoshop, After Effects) and AI generation. Establishment of constant hybrid methodology.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2024 (Outubro) - 2025 (Janeiro):</strong> Início do desenvolvimento deste portal digital com Lovable. Primeira versão do website como "memorial portal". Experimentação com React, TypeScript, Tailwind. Design system baseado em tokens semânticos. Shadow Interface Bible v13 refinada com Gemini 2.5 Flash. Integração de áudio, vídeo e documentos PDF.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>Oct 2024 - Jan 2025:</strong> Beginning of this digital portal development with Lovable. First website version as "memorial portal". Experimentation with React, TypeScript, Tailwind. Design system based on semantic tokens. Shadow Interface Bible v13 refined with Gemini 2.5 Flash. Integration of audio, video and PDF documents.
                      </p>
                    </div>

                    <div>
                      <p className="body-small text-foreground">
                        <strong className="text-primary">2025 (Janeiro - Outubro):</strong> Expansão massiva do portal com Lovable AI + Claude 3.7 Sonnet. Desenvolvimento de funcionalidades interativas: Oráculo Criativo, Gerador de Stills (Nano Banana), Biblioteca de Prompts, Creative-Ops Mind Map. Edge functions em Supabase para integração com modelos de IA. Mais de 700 imagens geradas ao total. Mais de 50 sessões iterativas refinando tipografia, componentes UI e lógica de frontend/backend. Conexão com GitHub para versionamento e documentação técnica. Publicação final em 31/10/2025.
                      </p>
                      <p className="body-small text-muted-foreground/70 italic">
                        <strong>Jan - Oct 2025:</strong> Massive portal expansion with Lovable AI + Claude 3.7 Sonnet. Development of interactive features: Creative Oracle, Still Generator (Nano Banana), Prompt Library, Creative-Ops Mind Map. Edge functions in Supabase for AI model integration. 700+ images generated in total. 50+ iterative sessions refining typography, UI components and frontend/backend logic. GitHub connection for versioning and technical documentation. Final publication on 10/31/2025.
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
              <svg viewBox="0 0 1200 1600" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
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
                  <rect x="420" y="40" width="360" height="80" fill="url(#primaryGrad)" rx="6" />
                  <text x="600" y="75" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="22" fontWeight="bold">
                    THEVØIDN13
                  </text>
                  <text x="600" y="95" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="10" opacity="0.8">
                    Memorial Artístico • Artistic Memorial
                  </text>
                </g>

                {/* 4 Main Branches */}
                {/* Top Left - CONCEITUAL */}
                <line x1="420" y1="120" x2="200" y2="220" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                <rect x="50" y="200" width="300" height="55" fill="url(#primaryGrad)" rx="6" />
                <text x="200" y="225" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="16" fontWeight="bold">
                  CONCEITUAL
                </text>
                <text x="200" y="242" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="9" opacity="0.8">
                  Foundations • Fundamentos
                </text>

                {/* Sub-items CONCEITUAL */}
                <rect x="60" y="275" width="130" height="90" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="6" />
                <text x="125" y="295" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Shadow Interface</text>
                <text x="125" y="310" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Anti-brand aesthetic</text>
                <text x="125" y="323" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Low culture punk</text>
                <text x="125" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Subcultural resistance</text>
                <text x="125" y="349" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.6">Shadow Interface Bible</text>
                <text x="125" y="358" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.6">v13</text>

                <rect x="210" y="275" width="130" height="90" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="6" />
                <text x="275" y="295" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Lowbyrinth™</text>
                <text x="275" y="310" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Navegação não-linear</text>
                <text x="275" y="323" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Labirinto periférico</text>
                <text x="275" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Memória fragmentada</text>
                <text x="275" y="349" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.6">PHILOSOPHY.md</text>

                <line x1="200" y1="255" x2="125" y2="275" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
                <line x1="200" y1="255" x2="275" y2="275" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />

                {/* Top Right - METODOLÓGICO */}
                <line x1="780" y1="120" x2="1000" y2="220" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.5" />
                <rect x="850" y="200" width="300" height="55" fill="url(#accentGrad)" rx="6" />
                <text x="1000" y="225" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="16" fontWeight="bold">
                  METODOLÓGICO
                </text>
                <text x="1000" y="242" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="9" opacity="0.8">
                  Process • Processo
                </text>

                {/* Sub-items METODOLÓGICO */}
                <rect x="860" y="275" width="130" height="90" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="1.5" rx="6" />
                <text x="925" y="295" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">5 Etapas</text>
                <text x="925" y="310" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">01. Observação</text>
                <text x="925" y="323" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">02. Co-criação</text>
                <text x="925" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">03. Documentação</text>
                <text x="925" y="349" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">04. Reflexão</text>
                <text x="925" y="360" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.6">05. Expansão</text>

                <rect x="1010" y="275" width="130" height="90" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="1.5" rx="6" />
                <text x="1075" y="295" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">PPG-CINEAV</text>
                <text x="1075" y="310" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Mestrado UFF</text>
                <text x="1075" y="323" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Memorial artístico</text>
                <text x="1075" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Práxis híbrida</text>
                <text x="1075" y="349" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Cinema + Video Art</text>
                <text x="1075" y="360" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.6">2023-2025</text>

                <line x1="1000" y1="255" x2="925" y2="275" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />
                <line x1="1000" y1="255" x2="1075" y2="275" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />

                {/* Bottom Left - TÉCNICO */}
                <line x1="420" y1="120" x2="200" y2="430" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.5" />
                <rect x="50" y="410" width="300" height="55" fill="url(#secondaryGrad)" rx="6" />
                <text x="200" y="435" textAnchor="middle" fill="hsl(var(--secondary-foreground))" fontSize="16" fontWeight="bold">
                  TÉCNICO
                </text>
                <text x="200" y="452" textAnchor="middle" fill="hsl(var(--secondary-foreground))" fontSize="9" opacity="0.8">
                  Technology • Tecnologia
                </text>

                {/* Sub-items TÉCNICO - 3 boxes compactas */}
                <rect x="60" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="1.5" rx="6" />
                <text x="100" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">AI</text>
                <text x="100" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Gemini</text>
                <text x="100" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Claude</text>
                <text x="100" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• GPT-5</text>
                <text x="100" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Midjourney</text>
                <text x="100" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Firefly</text>
                <text x="100" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Lovable</text>

                <rect x="160" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="1.5" rx="6" />
                <text x="200" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">Design</text>
                <text x="200" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Adobe CC</text>
                <text x="200" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Photoshop</text>
                <text x="200" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Illustrator</text>
                <text x="200" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• After Effects</text>
                <text x="200" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• DaVinci</text>
                <text x="200" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Figma</text>

                <rect x="260" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="1.5" rx="6" />
                <text x="300" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">Dev</text>
                <text x="300" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• React</text>
                <text x="300" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• TypeScript</text>
                <text x="300" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Tailwind</text>
                <text x="300" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Supabase</text>
                <text x="300" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• PostgreSQL</text>
                <text x="300" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• GitHub</text>

                <line x1="200" y1="465" x2="100" y2="485" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.4" />
                <line x1="200" y1="465" x2="200" y2="485" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.4" />
                <line x1="200" y1="465" x2="300" y2="485" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.4" />

                {/* Bottom Right - OUTPUTS */}
                <line x1="780" y1="120" x2="1000" y2="430" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                <rect x="850" y="410" width="300" height="55" fill="url(#primaryGrad)" rx="6" />
                <text x="1000" y="435" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="16" fontWeight="bold">
                  OUTPUTS
                </text>
                <text x="1000" y="452" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="9" opacity="0.8">
                  Deliverables • Entregas
                </text>

                {/* Sub-items OUTPUTS - 3 boxes compactas */}
                <rect x="860" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="6" />
                <text x="900" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">Visual</text>
                <text x="900" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Crew</text>
                <text x="900" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Máscaras</text>
                <text x="900" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Void City</text>
                <text x="900" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Action figs</text>
                <text x="900" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Low aesthetic</text>
                <text x="900" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">700+ images</text>

                <rect x="960" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="6" />
                <text x="1000" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">Digital</text>
                <text x="1000" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Oráculo</text>
                <text x="1000" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Generator</text>
                <text x="1000" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Prompt Lib</text>
                <text x="1000" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Website</text>
                <text x="1000" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• MindMap</text>
                <text x="1000" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Timeline</text>

                <rect x="1060" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="6" />
                <text x="1100" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">Academic</text>
                <text x="1100" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Memorial</text>
                <text x="1100" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Brandbooks</text>
                <text x="1100" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Bible v13</text>
                <text x="1100" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Dissertação</text>
                <text x="1100" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• PDFs</text>
                <text x="1100" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Áudios</text>

                <line x1="1000" y1="465" x2="900" y2="485" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
                <line x1="1000" y1="465" x2="1000" y2="485" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
                <line x1="1000" y1="465" x2="1100" y2="485" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />

                {/* Timeline Compact */}
                <g>
                  <rect x="100" y="650" width="1000" height="90" fill="hsl(var(--muted))" opacity="0.2" rx="8" />
                  <text x="600" y="675" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">
                    CRONOLOGIA / TIMELINE 2023 — 2025+
                  </text>
                  
                  <line x1="150" y1="710" x2="1050" y2="710" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.4" />
                  
                  <rect x="194" y="704" width="12" height="12" fill="hsl(var(--primary))" />
                  <text x="200" y="695" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="8">Out-Dez 23</text>
                  <text x="200" y="728" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6">Burnout</text>
                  
                  <rect x="444" y="704" width="12" height="12" fill="hsl(var(--accent))" />
                  <text x="450" y="695" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="8">Jan-Jun 24</text>
                  <text x="450" y="728" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6">Bible v1</text>
                  
                  <rect x="694" y="704" width="12" height="12" fill="hsl(var(--secondary))" />
                  <text x="700" y="695" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="8">Jul-Dez 24</text>
                  <text x="700" y="728" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6">Brandbooks</text>
                  
                  <rect x="944" y="704" width="12" height="12" fill="hsl(var(--primary))" />
                  <text x="950" y="695" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="8">Jan 25+</text>
                  <text x="950" y="728" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6">Website</text>
                </g>

                {/* Hub connections */}
                <g opacity="0.15">
                  <line x1="600" y1="120" x2="200" y2="650" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="600" y1="120" x2="450" y2="650" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="600" y1="120" x2="700" y2="650" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="600" y1="120" x2="950" y2="650" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4,4" />
                </g>

                {/* Legend compacta */}
                <g>
                  <text x="600" y="820" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" fontWeight="bold">LEGENDA / LEGEND</text>
                  <rect x="450" y="830" width="60" height="12" fill="url(#primaryGrad)" rx="2" />
                  <text x="515" y="840" fill="hsl(var(--foreground))" fontSize="7">Conceitual</text>
                  
                  <rect x="590" y="830" width="60" height="12" fill="url(#accentGrad)" rx="2" />
                  <text x="655" y="840" fill="hsl(var(--foreground))" fontSize="7">Metodológico</text>
                  
                  <rect x="730" y="830" width="60" height="12" fill="url(#secondaryGrad)" rx="2" />
                  <text x="795" y="840" fill="hsl(var(--foreground))" fontSize="7">Técnico</text>
                </g>
              </svg>
            </div>

            {/* Core Nuclei */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3 p-4 bg-card rounded-lg border border-border">
                <h3 className="subtitle text-primary">LowMovie</h3>
                <p className="body-small text-muted-foreground">
                  Núcleo cinematográfico de ficções urbanas e periféricas. Estética dirty, cores dessaturadas, luz natural crua.
                </p>
              </div>
              <div className="space-y-3 p-4 bg-card rounded-lg border border-border">
                <h3 className="subtitle text-primary">LowPressure</h3>
                <p className="body-small text-muted-foreground">
                  Plataforma editorial e selo independente. Manifestos, zines, textos fragmentados, vozes marginais.
                </p>
              </div>
              <div className="space-y-3 p-4 bg-card rounded-lg border border-border">
                <h3 className="subtitle text-primary">CasaTrezeStudio</h3>
                <p className="body-small text-muted-foreground">
                  Laboratório criativo híbrido. Design gráfico, motion, concept art, experimentação audiovisual.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
