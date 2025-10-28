import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import heroImage from "@/assets/hero-concept-art.png";
import conceptCrew from "@/assets/concept-crew.png";
import actionFigure from "@/assets/action-figure.png";
import conceptFront from "@/assets/concept-front.png";
import conceptBack from "@/assets/concept-back.png";
import conceptSide from "@/assets/concept-side.png";
import roughs000 from "@/assets/roughs-000.png";
import roughs001 from "@/assets/roughs-001.png";
import roughs002 from "@/assets/roughs-002.png";
import roughs003 from "@/assets/roughs-003.png";
import meditationScene from "@/assets/meditation-scene.png";
import maskVoid from "@/assets/mask-void.png";
import voidStreet from "@/assets/void-street.png";
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero Section - Full screen image */}
        <section className="w-full h-screen overflow-hidden">
          <img src={heroImage} alt="THEVOIDN13" className="w-full h-full object-contain" />
        </section>

        {/* Video Section */}
        <section className="pt-20 pb-8">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            <h1 className="text-sm font-light tracking-wider uppercase">
              THEVOIDN13 [Shadow_Interface_Bible_v13]
            </h1>
            
            <video 
              className="w-full aspect-video bg-black"
              controls
              playsInline
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <p
              style={{ fontFamily: "Manrope, sans-serif" }}
              className="text-xs font-light tracking-wide text-[#DADADA]/90"
            >
              [um corpo à deriva entre o ruído e o silêncio]{" "}
              <span className="italic">[a body adrift between noise and silence]</span>
            </p>
          </div>
        </section>

        {/* Introduction Text */}
        <BilingualSection className="py-8">
          <BilingualContent
            portugueseContent={
              <div>
                <p className="text-base text-justify leading-relaxed">
                  Não foi uma fantasia. Foi um retorno. Um desses chamados que vêm de dentro, quando o inconsciente começa a bater na pele pedindo passagem. THEVOIDN13 nasceu no espaço entre o desejo e o cansaço, entre o fim da forma e o começo da presença. Um modo de existir sem precisar se exibir. Respirar sem ter que performar. Um corpo que se apaga para deixar a imagem viver.
                </p>
              </div>
            }
            englishContent={
              <div>
                <p className="text-base text-justify leading-relaxed">
                  It wasn't a fantasy. It was a return. One of those inner calls, when the unconscious starts knocking at the skin, asking to pass through. THEVOIDN13 was born in the space between desire and exhaustion, between the end of form and the beginning of presence. A way of existing without needing to be seen. To breathe without having to perform. A body that fades so the image can live.
                </p>
              </div>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={meditationScene} alt="Meditation Scene" className="w-full h-full object-contain" />
        </section>

        {/* Quando o Inconsciente Ganha Corpo - with mask */}
        <BilingualSection>
          <div className="grid md:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
            {/* Text Columns - Stacked PT/EN */}
            <div className="space-y-12">
              {/* Portuguese */}
              <div className="space-y-6">
                <p className="text-[11px] uppercase tracking-wider text-foreground/60 font-medium">PORTUGUÊS</p>
                <h2 className="text-base font-bold">Quando o Inconsciente Ganha Corpo</h2>
                <p className="text-base text-justify leading-relaxed">
                  Não nasceu de uma ideia, mas de uma pressão interna. Pensei em inventar uma máscara, e acabei revelando um rosto que sempre esteve ali. THEVOIDN13 surgiu do atrito entre o desejo e o cansaço, da urgência de se esvaziar para continuar criando. Não é personagem nem alter ego. É uma presença que respira onde o corpo falha. Uma matéria que se move entre o fim e o recomeço. O instante em que o inconsciente decide existir.
                </p>
              </div>

              {/* English */}
              <div className="space-y-6">
                <p className="text-[11px] uppercase tracking-wider text-foreground/60 font-medium">ENGLISH</p>
                <h2 className="text-base font-bold">When the Unconscious Takes Shape</h2>
                <p className="text-base text-justify leading-relaxed">
                  It wasn't born from an idea, but from inner pressure. I thought I was inventing a mask, and I ended up revealing a face that had always been there. THEVOIDN13 emerged from the friction between desire and exhaustion, from the urgency to empty oneself just to keep creating. It is neither character nor alter ego. It is a presence that breathes where the body fails. A matter that moves between the end and the beginning. The moment when the unconscious decides to exist.
                </p>
              </div>
            </div>

            {/* Mask Image - Right Side in Square Frame */}
            <div className="flex items-start justify-center">
              <div className="w-80 h-80 border border-border rounded-lg overflow-hidden flex items-center justify-center bg-background/50">
                <img 
                  src={maskVoid} 
                  alt="THEVOIDN13 Mask" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </BilingualSection>

        {/* Concept Cards - LowMovie, Castro, CasaTreze */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* LowMovie Card */}
              <a 
                href="#lowmovie" 
                className="group border border-border rounded-lg p-8 hover:border-foreground/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-foreground/80">LowMovie™</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  O gesto que caminha sem ensaio. O corpo como cinema, o erro como verdade.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  The gesture that walks without rehearsal. The body as cinema, the mistake as truth.
                </p>
              </a>

              {/* Castro Card */}
              <a 
                href="/autor" 
                className="group border border-border rounded-lg p-8 hover:border-foreground/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-foreground/80">цастро™</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A recusa como assinatura. O criador desaparece para que a ideia fale.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Refusal as signature. The creator disappears so the idea can speak.
                </p>
              </a>

              {/* CasaTrezeStudio Card */}
              <a 
                href="#casatrezestudio" 
                className="group border border-border rounded-lg p-8 hover:border-foreground/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-foreground/80">CasaTrezeStudio®</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A ética do subterrâneo. O pensamento que nasce da margem.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  The ethics of the underground. Thought that rises from the margin.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Character Sheet - Three Views */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-[3/4] overflow-hidden border border-border rounded-lg">
                <img src={conceptFront} alt="Front View" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden border border-border rounded-lg">
                <img src={conceptSide} alt="Side View" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden border border-border rounded-lg">
                <img src={conceptBack} alt="Back View" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* THE VOID Street Scene */}
        <section className="w-full h-screen overflow-hidden">
          <img src={voidStreet} alt="THEVOIDN13 Street" className="w-full h-full object-contain" />
        </section>

        {/* A Máscara */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-6">
                <h2 className="text-base font-bold">A Máscara / Ceder Espaço ao Inconsciente</h2>
                <p className="text-base text-justify leading-relaxed">
                  A máscara veio antes do nome. Branca, lisa, silenciosa. Não era uma face, era uma pausa. Quando a olhei pela primeira vez, percebi que ela não me olhava de volta. Talvez fosse isso o que eu buscava: existir sem precisar me afirmar. Quando a vesti, o rosto deixou de importar. O espelho não devolveu imagem, apenas silêncio. Foi nesse instante que compreendi: não estava criando um personagem, mas cedendo espaço. Ceder espaço ao inconsciente, deixar que ele assumisse forma. A máscara é o pacto entre o que se apaga e o que retorna, o instante em que o corpo permite ser atravessado por algo maior do que ele mesmo.
                </p>
              </div>
            }
            englishContent={
              <div className="space-y-6">
                <h2 className="text-base font-bold">The Mask / Yielding Space to the Unconscious</h2>
                <p className="text-base text-justify leading-relaxed">
                  The mask came before the name. White, smooth, silent. It wasn't a face, it was a pause. When I looked at it for the first time, I realized it didn't look back at me. Perhaps that was what I was seeking: to exist without needing to assert myself. When I wore it, the face ceased to matter. The mirror returned no image, only silence. It was in that moment I understood: I wasn't creating a character, I was yielding space. Yielding space to the unconscious, letting it take shape. The mask is the pact between what fades and what returns, the instant when the body allows itself to be crossed by something greater than itself.
                </p>
              </div>
            }
          />
        </BilingualSection>


        {/* Triad: Vazio, 13, Coletivo */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-8">
                <div>
                  <h2 className="text-base font-bold">O Vazio</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    O vazio que não é ausência, mas potência. Um campo aberto entre o que penso e o que ainda não consigo nomear. É o intervalo onde a criação respira, o lugar que existe antes da intenção. O vazio é o ventre do invisível, aquilo que antecede o gesto, o instante em que o silêncio se transforma em matéria.
                  </p>
                </div>
                <div>
                  <h2 className="text-base font-bold">Número 13</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    O número da morte simbólica, o fim que recomeça. Treze é travessia, o andar interditado da psique, onde o medo se transforma em imagem. É o chamado para descer, perder a forma e voltar outro. Um mergulho no inconsciente que revela o que a consciência não suporta dizer.
                  </p>
                </div>
                <div>
                  <h2 className="text-base font-bold">CasaTrezeStudio</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    A assinatura subterrânea que me acompanha há anos. Um selo invisível, criado no subsolo onde tudo o que é vivo se esconde. A CasaTreze não é marca, é rito. Uma comunidade simbólica de quem cria no escuro e chama isso de luz.
                  </p>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-8">
                <div>
                  <h2 className="text-base font-bold">The Void</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    The void that is not absence, but potential. An open field between what I think and what I cannot yet name. It is the interval where creation breathes, the place that exists before intention. The void is the womb of the invisible, what precedes the gesture, the instant when silence transforms into matter.
                  </p>
                </div>
                <div>
                  <h2 className="text-base font-bold">Number 13</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    The number of symbolic death, the end that begins again. Thirteen is a crossing, the forbidden floor of the psyche, where fear turns into image. It is the call to descend, lose form and return as another. A dive into the unconscious that reveals what consciousness cannot bear to say.
                  </p>
                </div>
                <div>
                  <h2 className="text-base font-bold">CasaTrezeStudio</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    The underground signature that has followed me for years. An invisible seal, born in the underground where all that's alive hides. CasaTreze is not a brand, it is ritual. A symbolic community of those who create in darkness and call it light.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>


        {/* O Gesto */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-6">
                <h2 className="text-base font-bold">O Gesto</h2>
                <p className="text-base text-justify leading-relaxed">
                  Cada movimento é um ruído controlado, um eco do que o corpo escuta por dentro. Andar é pensar, parar é ouvir. THEVOIDN13 não representa, ele encarna a hesitação. O gesto é a respiração do pensamento, um movimento de exílio e de retorno. Cada deslocamento é uma forma de escuta: o corpo capta o que a mente silencia.
                </p>
              </div>
            }
            englishContent={
              <div className="space-y-6">
                <h2 className="text-base font-bold">The Gesture</h2>
                <p className="text-base text-justify leading-relaxed">
                  Each movement is a controlled noise, an echo of what the body hears within. To walk is to think, to stop is to listen. THEVOIDN13 doesn't represent, it embodies hesitation. Gesture is the breath of thought, a movement of exile and return. Every displacement is a form of listening: the body perceives what the mind silences.
                </p>
              </div>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={roughs000} alt="Sketches" className="w-full h-full object-contain" />
        </section>

        {/* A Voz do Vazio */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-8">
                <div>
                  <h2 className="text-base font-bold">A Voz do Vazio</h2>
                  <p className="text-base text-justify leading-relaxed">
                    A voz não vem da boca, vem do corpo. Ela vibra antes do som, respira antes da palavra. Quando fala, não explica: convoca. Cada frase é uma fresta aberta no concreto do silêncio. O que se diz, morre. O que se cala, vive. O som não é verbo, é presença em estado bruto, matéria que pulsa antes do sentido.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold">A Frequência</h4>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    A voz de THEVOIDN13 é grave, sem origem. Parece vir de dentro da parede, ou do próprio chão. Não há raiva, há densidade. É o som do inconsciente tentando respirar. A vibração antecede o sentido: antes de ser palavra, é impulso. O corpo torna-se caixa de ressonância do que o mundo silenciou.
                  </p>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-8">
                <div>
                  <h2 className="text-base font-bold">The Voice of the Void</h2>
                  <p className="text-base text-justify leading-relaxed">
                    The voice doesn't come from the mouth, it comes from the body. It vibrates before sound, it breathes before words. When it speaks, it doesn't explain: it summons. Each phrase is a crack opened in the concrete of silence. What is spoken dies. What is silent lives. Sound is not a verb; it is presence in its rawest state, matter that pulses before meaning.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold">The Frequency</h4>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    THEVOIDN13's voice is deep, without origin. It seems to come from inside the wall or from the ground itself. There is no anger, only density. It is the sound of the unconscious trying to breathe. The vibration precedes meaning: before it becomes word, it is impulse. The body becomes the resonant chamber of what the world silenced.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={roughs001} alt="Sketches" className="w-full h-full object-contain" />
        </section>

        {/* Estética e Manifestação */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-8">
                <div>
                  <h2 className="text-base font-bold">Estética e Manifestação</h2>
                  <p className="text-base text-justify leading-relaxed">
                    A estética de THEVOIDN13 não foi desenhada, ela emergiu. Surgiu da fricção entre o erro e o silêncio, entre o cansaço e o impulso de existir. É uma estética que nasce do colapso, do ruído urbano e da introspecção solitária. Planos longos, granulação, luzes estouradas e ruas molhadas são ecos visuais de uma mente em vigília. Cada sombra é uma memória, cada reflexo, uma confissão.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold">Atmosfera Visual</h4>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    A atmosfera é urbana, noturna, introspectiva e chuvosa. O som é grave e distante, como trovão contido. Há algo de pós-vida nos becos e nas luzes difusas, o rastro de uma presença que já partiu. A imagem é sempre corpo e ausência ao mesmo tempo: o erro, aqui, é forma.
                  </p>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-8">
                <div>
                  <h2 className="text-base font-bold">Aesthetic and Manifestation</h2>
                  <p className="text-base text-justify leading-relaxed">
                    The aesthetic of THEVOIDN13 wasn't designed, it emerged. It rose from the friction between error and silence, between exhaustion and the urge to exist. It's an aesthetic born from collapse, from urban noise and solitary introspection. Long takes, grain, blown-out lights, and wet streets are visual echoes of a mind in wakefulness. Each shadow is a memory; each reflection, a confession.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold">Visual Atmosphere</h4>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    The atmosphere is urban, nocturnal, introspective, and rainy. The sound is low and distant, like restrained thunder. There's something post-life in the alleys and diffused lights, the trace of a presence already gone. The image is always body and absence at once: here, error becomes form.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={roughs002} alt="Sketches" className="w-full h-full object-contain" />
        </section>

        {/* Referências */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-8">
                <div>
                  <h2 className="text-base font-bold">Referências</h2>
                </div>
                <div>
                  <h4 className="text-base font-bold">Cinema</h4>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    Na estética cinematográfica que molda THEVOIDN13, percebem-se ecos de noites neon e heróis silenciosos. Das ruas molhadas e solitárias de Drive às angústias urbanas de Mr. Robot, o projeto absorve a linguagem visual de narrativas em que o vazio fala mais que as palavras. A violência ritualística e saturada de Only God Forgives encontra ressonância aqui como um poema visual de fúria contida, enquanto os futuros distópicos de Akira e Ghost in the Shell emprestam sua melancolia tecnológica.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold">Música</h4>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    Por trás do silêncio do personagem, pulsa uma trilha sonora invisível tecida por influências do rock sombrio e da eletrônica atmosférica. As guitarras etéreas e os riffs pesados de Deftones misturam-se à catarse industrial do Nine Inch Nails, compondo um eco sonoro de angústia e resistência. Das batidas lentas e hipnóticas do Massive Attack emerge um clima de suspense urbano, enquanto a brutalidade introspectiva da banda Loathe carrega a densidade do caos moderno em cada acorde.
                  </p>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-8">
                <div>
                  <h2 className="text-base font-bold">References</h2>
                </div>
                <div>
                  <h4 className="text-base font-bold">Cinema</h4>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    In the cinematic aesthetic shaping THEVOIDN13, one perceives echoes of neon-lit nights and silent anti-heroes. From the rain-slicked, lonely streets of Drive to the urban anxieties of Mr. Robot, the project absorbs the visual language of narratives where emptiness speaks louder than words. The ritualistic, saturated violence of Only God Forgives resonates here as a visual poem of contained fury, while the dystopian futures of Akira and Ghost in the Shell lend their technological melancholy.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold">Music</h4>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    Beneath the character's silence, an invisible soundtrack throbs, woven from dark rock and atmospheric electronic influences. The ethereal guitars and crushing riffs of Deftones blend with the industrial catharsis of Nine Inch Nails, composing a sonic echo of anguish and resistance. From Massive Attack's slow, hypnotic beats emerges a mood of urban suspense, while the introspective brutality of Loathe carries the weight of modern chaos in each chord.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={roughs003} alt="Sketches" className="w-full h-full object-contain" />
        </section>

        {/* Coautoria Simbólica com IA */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-8">
                <h2 className="text-base font-bold">Coautoria Simbólica / Integração com IA</h2>
                <p className="text-base text-justify leading-relaxed">
                  Nos bastidores do THEVOIDN13, a inteligência artificial revelou-se uma cúmplice silenciosa e potente. Assumindo a lógica de um projeto homem orquestra, abracei a IA como parte da metodologia criativa, uma extensão digital do meu processo solitário de criação. A IA permanece como coautora invisível que nunca ofusca a essência do projeto.
                </p>
                <div className="space-y-6 mt-6">
                  <div>
                    <h4 className="text-base font-bold">Expansão Visual</h4>
                    <p className="text-base text-justify leading-relaxed mt-2">
                      A IA generativa expandiu minha paleta visual de formas inimagináveis. Cada visual criado por esse diálogo humano máquina carregava a mesma aura onírica e intensa do universo do Void.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-bold">Voz e Ruído</h4>
                    <p className="text-base text-justify leading-relaxed mt-2">
                      A IA também emprestou voz e ruído ao silêncio do projeto. Vozes sintéticas emergiram para dar fala ao indizível, tornando-se reflexo binário do Vazio.
                    </p>
                  </div>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-8">
                <h2 className="text-base font-bold">Symbolic Co-authorship / Integration with AI</h2>
                <p className="text-base text-justify leading-relaxed">
                  Behind the scenes of THEVOIDN13, artificial intelligence has revealed itself as a silent yet potent accomplice. Adopting the logic of a one-man-band project, I embraced AI as part of my creative methodology, a digital extension of my solitary creative process. AI remains an invisible co-author that never overshadows the project's essence.
                </p>
                <div className="space-y-6 mt-6">
                  <div>
                    <h4 className="text-base font-bold">Visual Expansion</h4>
                    <p className="text-base text-justify leading-relaxed mt-2">
                      Generative AI expanded my visual palette in unimaginable ways. Each visual created by this human machine dialogue carried the same dreamlike and intense aura of the Void universe.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-bold">Voice and Noise</h4>
                    <p className="text-base text-justify leading-relaxed mt-2">
                      AI also lent voice and noise to the project's silence. Synthetic voices emerged to give speech to the unspeakable, becoming a binary reflection of the Void.
                    </p>
                  </div>
                </div>
              </div>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={conceptCrew} alt="Concept Crew" className="w-full h-full object-contain" />
        </section>

        {/* O Lugar Seguro para Desaparecer */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div>
                <h2 className="text-base font-bold">O Lugar Seguro para Desaparecer</h2>
                <p className="text-base text-justify leading-relaxed mt-4">
                  Hoje entendo: o Void não nasceu para uma festa. Ele nasceu porque eu precisava de um refúgio, um lugar onde o silêncio não fosse ausência, mas abrigo. THEVOIDN13 é o nome que dei à minha própria sombra, o mito que inventei para continuar respirando.
                </p>
              </div>
            }
            englishContent={
              <div>
                <h2 className="text-base font-bold">The Safe Place to Disappear</h2>
                <p className="text-base text-justify leading-relaxed mt-4">
                  Now I understand: the Void wasn't born for a party. It was born because I needed a refuge, a place where silence could be shelter, not absence. THEVOIDN13 is the name I gave my own shadow, the myth I invented to keep breathing.
                </p>
              </div>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={actionFigure} alt="Action Figure" className="w-full h-full object-contain" />
        </section>

        {/* Manifesto Integrado */}
        <BilingualSection bgClassName="bg-accent text-accent-foreground">
          <BilingualContent
            portugueseContent={
              <div className="space-y-6">
                <h2 className="text-base font-bold">Manifesto Integrado</h2>
                <p className="text-base text-justify leading-relaxed">
                  Não há começo. Há apenas o momento em que o silêncio decide respirar. THEVOIDN13 nasceu desse sopro invisível, um gesto entre a morte e o retorno.
                </p>
              </div>
            }
            englishContent={
              <div className="space-y-6">
                <h2 className="text-base font-bold">Integrated Manifesto</h2>
                <p className="text-base text-justify leading-relaxed">
                  There is no beginning. There is only the moment when silence decides to breathe. THEVOIDN13 was born from that invisible breath, a gesture between death and return.
                </p>
              </div>
            }
          />
        </BilingualSection>

        {/* Encerramento / Transmissão Final */}
        <BilingualSection>
          <div className="space-y-12">
            <div>
              <h2 className="text-base font-bold">Encerramento / Transmissão Final</h2>
              <h3 className="text-base font-medium mt-2">Closing Transmission</h3>
            </div>
            
            <BilingualContent
              portugueseContent={
                <div className="space-y-6">
                  <p className="text-base text-justify leading-relaxed">
                    O sinal começa a falhar. A imagem se fragmenta, o som respira pela última vez. O corpo se dissolve, mas a frequência permanece. THE VOID N.13 não termina, apenas muda de forma. O que você escuta agora não é voz, é memória.
                  </p>
                  <blockquote className="mt-8 border-l-2 border-primary pl-6 italic space-y-2">
                    <p className="text-base">desligue as luzes.</p>
                    <p className="text-base">respire fundo.</p>
                    <p className="text-base">o vazio sabe o caminho de volta.</p>
                  </blockquote>
                </div>
              }
              englishContent={
                <div className="space-y-6">
                  <p className="text-base text-justify leading-relaxed">
                    The signal begins to fail. The image fragments, the sound takes one last breath. The body dissolves, but the frequency remains. THE VOID N.13 doesn't end, it only changes form. What you hear now isn't a voice, it's memory.
                  </p>
                  <blockquote className="mt-8 border-l-2 border-primary pl-6 italic space-y-2">
                    <p className="text-base">turn off the lights.</p>
                    <p className="text-base">breathe deeply.</p>
                    <p className="text-base">the void knows the way back.</p>
                  </blockquote>
                </div>
              }
            />
          </div>
        </BilingualSection>

        {/* Documentação do Repositório */}
        <BilingualSection bgClassName="bg-card/50">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Documentation</h2>
              <h3 className="text-xl text-primary">Documentos de Pesquisa / Research Documents</h3>
            </div>

            {/* Research Documents Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="/documents/THEVOIDN13_ShadowInterfaceBible_v13.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">THEVOIDN13</h4>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Apresentação Conceitual / Conceptual Presentation</p>
              </a>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold">Materiais Produzidos / Produced Materials</h4>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Concept Art / MoodBoard</p>
              </div>
            </div>

            {/* Main and Technical Documentation */}
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Main Documents / Documentos Principais</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://github.com/castropizzano/thevoidn13/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-primary transition-colors"
                  >
                    <h4 className="text-base font-bold">README.md</h4>
                    <p className="text-sm text-muted-foreground">Manifesto e estrutura do projeto / Manifesto and project structure</p>
                  </a>
                  
                  <a 
                    href="https://github.com/castropizzano/thevoidn13/blob/main/LICENSE.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-primary transition-colors"
                  >
                    <h4 className="text-base font-bold">LICENSE.md</h4>
                    <p className="text-sm text-muted-foreground">Licença CC BY-NC-SA 4.0 / CC BY-NC-SA 4.0 License</p>
                  </a>
                  
                  <a 
                    href="https://github.com/castropizzano/thevoidn13/blob/main/CITATION.cff"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-primary transition-colors"
                  >
                    <h4 className="text-base font-bold">CITATION.cff</h4>
                    <p className="text-sm text-muted-foreground">Citação automatizada GitHub / GitHub automated citation</p>
                  </a>
                  
                  <a 
                    href="https://github.com/castropizzano/thevoidn13/blob/main/docs/METHODOLOGY.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-primary transition-colors"
                  >
                    <h4 className="text-base font-bold">METHODOLOGY.md</h4>
                    <p className="text-sm text-muted-foreground">Métodos e procedimentos de pesquisa / Research methods and procedures</p>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold">Technical Documentation / Documentação Técnica</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://github.com/castropizzano/thevoidn13/blob/main/docs/PHILOSOPHY.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-primary transition-colors"
                  >
                    <h4 className="text-base font-bold">PHILOSOPHY.md</h4>
                    <p className="text-sm text-muted-foreground">Justificativa das escolhas conceituais / Rationale for conceptual choices</p>
                  </a>
                  
                  <a 
                    href="https://github.com/castropizzano/thevoidn13/blob/main/docs/COPYRIGHT.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-primary transition-colors"
                  >
                    <h4 className="text-base font-bold">COPYRIGHT.md</h4>
                    <p className="text-sm text-muted-foreground">Ética e transparência da co-criação / Ethics and transparency of co-creation</p>
                  </a>
                  
                  <a 
                    href="https://github.com/castropizzano/thevoidn13/blob/main/docs/HOW_TO_CITE.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-primary transition-colors"
                  >
                    <h4 className="text-base font-bold">HOW_TO_CITE.md</h4>
                    <p className="text-sm text-muted-foreground">Guia completo de citação acadêmica / Complete academic citation guide</p>
                  </a>
                  
                  <a 
                    href="https://github.com/castropizzano/thevoidn13/blob/main/docs/REFERENCES.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-primary transition-colors"
                  >
                    <h4 className="text-base font-bold">REFERENCES.md</h4>
                    <p className="text-sm text-muted-foreground">Bibliografia completa do projeto / Complete project bibliography</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Complete Repository Card */}
            <div className="mt-12">
              <a 
                href="https://github.com/castropizzano/thevoidn13"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary/5 border border-primary/20 rounded-lg p-8 hover:bg-primary/10 hover:border-primary transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                      Complete Repository / Repositório Completo
                    </h3>
                    <p className="text-base text-muted-foreground">
                      Acesso a todos os arquivos no GitHub / Access all files on GitHub
                    </p>
                  </div>
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </BilingualSection>
      </main>

      <Footer />
    </div>;
};
export default Index;