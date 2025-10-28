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
import meditationRainScene from "@/assets/meditation-rain-scene.png";
import maskVoid from "@/assets/mask-void.png";
import voidStreetScene from "@/assets/void-street-scene.png";
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

        {/* Complete Voice and Being Section - Single Block */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-8">
                <div><h2 className="text-base font-bold">O Olhar</h2><p className="text-base text-justify leading-relaxed mt-2">Por trás da máscara, há silêncio. Um olhar que não busca reconhecimento, apenas presença. O olhar não devolve imagem, devolve espelho. É o espaço onde quem vê também está por dentro. O olhar é o fio que costura o visível e o invisível — uma lente que dissolve a fronteira entre sujeito e sombra.</p></div>
                <div><h2 className="text-base font-bold">A Respiração</h2><p className="text-base text-justify leading-relaxed mt-2">A respiração é o som que resta quando o verbo morre. É nela que o ser se ancora e desaparece. O ar entra como ruído e sai como silêncio. Cada expiração é um micro-desaparecimento. Um instante de retorno ao nada. Respirar é lembrar que o corpo é apenas passagem entre dois mundos: o mundo da carne e o mundo do invisível.</p></div>
                <div><h2 className="text-base font-bold">A Atmosfera</h2><p className="text-base text-justify leading-relaxed mt-2">Tudo vibra em tom noturno. A névoa, o concreto e a solidão elétrica são extensões do corpo. O ambiente não cerca THE VOID N.13 — ele o prolonga. A paisagem se torna psique, e o silêncio, uma presença física. A cidade é o espelho expandido do inconsciente, o lugar onde o corpo desaparece e o espaço respira por ele.</p></div>
                <div><h2 className="text-base font-bold">Síntese</h2><p className="text-base text-justify leading-relaxed mt-2">O ser é uma arquitetura invisível feita de gestos, ar e intenção. Nada é fixo; tudo é respiração. THE VOID N.13 não busca ser compreendido, mas sentido. Ele existe no limiar onde o som começa e a imagem começa — na fresta entre o que vibra e o que desaparece. É o instante em que o corpo se torna atmosfera, e o silêncio, presença.</p></div>
                <div><h2 className="text-base font-bold">A Voz do Vazio</h2><p className="text-base text-justify leading-relaxed mt-2">A voz não vem da boca — vem do corpo. Ela vibra antes do som, respira antes da palavra. Quando fala, não explica: convoca. Cada frase é uma fresta aberta no concreto do silêncio. O que se diz, morre. O que se cala, vive. O som não é verbo, é presença em estado bruto — matéria que pulsa antes do sentido.</p></div>
                <div><h4 className="text-base font-bold">A Frequência</h4><p className="text-base text-justify leading-relaxed mt-2">A voz de THE VOID N.13 é grave, sem origem. Parece vir de dentro da parede, ou do próprio chão. Não há raiva — há densidade. É o som do inconsciente tentando respirar. A vibração antecede o sentido: antes de ser palavra, é impulso. O corpo torna-se caixa de ressonância do que o mundo silenciou.</p></div>
                <div><h4 className="text-base font-bold">A Linguagem</h4><p className="text-base text-justify leading-relaxed mt-2">Fragmentos, pausas, ecos. A voz de THE VOID N.13 recusa gramática. Fala em intervalos, como quem se lembra do próprio esquecimento. Cada ruído é um vestígio de memória tentando se recompor. Não é verbo, é ruído consciente — um idioma feito de fendas e respirações.</p></div>
                <div><h4 className="text-base font-bold">O Silêncio</h4><p className="text-base text-justify leading-relaxed mt-2">O silêncio não é ausência de som, é som em repouso. O vazio fala sem precisar de voz. Quando THE VOID N.13 cala, o espaço continua vibrando por ele. O silêncio é o eco expandido do corpo — o intervalo onde o espectador escuta a si mesmo.</p></div>
                <div><h4 className="text-base font-bold">Fragmentos</h4><div className="space-y-2 mt-2"><p className="text-sm">"O silêncio fala mais alto que a sua voz."</p><p className="text-sm">"Respire, mas não diga."</p><p className="text-sm">"Toda ausência tem um som."</p><p className="text-sm">"O verbo morreu. Sobraram ecos."</p><p className="text-sm">"O vazio não é mudo, é paciente."</p><p className="text-sm">"Tudo o que cala, continua a vibrar."</p><p className="text-sm">"Não há fim no silêncio, apenas retorno."</p></div></div>
                <div><h2 className="text-base font-bold">Síntese</h2><p className="text-base text-justify leading-relaxed mt-2">A voz de THE VOID N.13 não busca convencer — busca atravessar. Fala em silêncio, move-se em pausa, respira no intervalo. É o eco do inconsciente transformado em frequência humana. O som não é mensagem, é travessia. THE VOID N.13 termina onde começa: no instante em que o silêncio ganha corpo.</p></div>
              </div>
            }
            englishContent={
              <div className="space-y-8">
                <div><h2 className="text-base font-bold">The Gaze</h2><p className="text-base text-justify leading-relaxed mt-2">Behind the mask, there is silence. A gaze that seeks no recognition, only presence. The gaze doesn't return an image, it returns a mirror. It is the space where whoever looks is also seen from within. The gaze is the thread that stitches the visible and the invisible — a lens that dissolves the boundary between subject and shadow.</p></div>
                <div><h2 className="text-base font-bold">The Breath</h2><p className="text-base text-justify leading-relaxed mt-2">Breathing is the sound that remains when the word dies. In it, the being anchors itself and vanishes. Air enters as noise and leaves as silence. Each exhalation is a micro-disappearance, a fleeting return to nothingness. To breathe is to remember that the body is only a passage between two worlds: the world of flesh and the world of the unseen.</p></div>
                <div><h2 className="text-base font-bold">The Atmosphere</h2><p className="text-base text-justify leading-relaxed mt-2">Everything vibrates in a nocturnal tone. Fog, concrete, and electric solitude are extensions of the body. The environment doesn't surround THE VOID N.13 — it prolongs it. The landscape becomes psyche, and silence, a physical presence. The city is the expanded mirror of the unconscious, the place where the body vanishes and space breathes for it.</p></div>
                <div><h2 className="text-base font-bold">Synthesis</h2><p className="text-base text-justify leading-relaxed mt-2">Being is an invisible architecture made of gestures, air, and intention. Nothing is fixed; everything is breath. THE VOID N.13 doesn't seek to be understood, but to be felt. It exists on the threshold where sound ends and image begins — in the slit between what vibrates and what vanishes. It is the moment when the body becomes atmosphere, and silence becomes presence.</p></div>
                <div><h2 className="text-base font-bold">The Voice of the Void</h2><p className="text-base text-justify leading-relaxed mt-2">The voice doesn't come from the mouth — it comes from the body. It vibrates before sound, it breathes before words. When it speaks, it doesn't explain: it summons. Each phrase is a crack opened in the concrete of silence. What is spoken dies. What is silent lives. Sound is not a verb; it is presence in its rawest state — matter that pulses before meaning.</p></div>
                <div><h4 className="text-base font-bold">The Frequency</h4><p className="text-base text-justify leading-relaxed mt-2">THE VOID N.13's voice is deep, without origin. It seems to come from inside the wall or from the ground itself. There is no anger — only density. It is the sound of the unconscious trying to breathe. The vibration precedes meaning: before it becomes word, it is impulse. The body becomes the resonant chamber of what the world silenced.</p></div>
                <div><h4 className="text-base font-bold">The Language</h4><p className="text-base text-justify leading-relaxed mt-2">Fragments, pauses, echoes. THE VOID N.13's voice refuses grammar. It speaks in intervals, like someone remembering their own forgetting. Each noise is a trace of memory trying to reassemble itself. It isn't verb, it's conscious noise — a language made of cracks and breaths.</p></div>
                <div><h4 className="text-base font-bold">The Silence</h4><p className="text-base text-justify leading-relaxed mt-2">Silence is not the absence of sound — it is sound at rest. The void speaks without needing a voice. When THE VOID N.13 falls silent, the space keeps vibrating for it. Silence is the body's expanded echo — the interval where the viewer hears themselves.</p></div>
                <div><h4 className="text-base font-bold">Fragments</h4><div className="space-y-2 mt-2"><p className="text-sm italic">"Silence speaks louder than your voice."</p><p className="text-sm italic">"Breathe, but don't tell."</p><p className="text-sm italic">"Every absence has a sound."</p><p className="text-sm italic">"The verb is dead. Only echoes remain."</p><p className="text-sm italic">"The void isn't mute, it's patient."</p><p className="text-sm italic">"Everything that is silent keeps vibrating."</p><p className="text-sm italic">"There is no end in silence, only return."</p></div></div>
                <div><h2 className="text-base font-bold">Synthesis</h2><p className="text-base text-justify leading-relaxed mt-2">The voice of THE VOID N.13 doesn't aim to convince — it aims to pierce through. It speaks in silence, moves in pause, breathes in between. It is the echo of the unconscious turned into human frequency. Sound is not message, it is passage. THE VOID N.13 ends where it begins: in the instant when silence takes form.</p></div>
              </div>
            }
          />
        </BilingualSection>

        {/* Quando o Inconsciente Ganha Corpo - with mask */}
        <BilingualSection>
          <div className="grid md:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-stretch">
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

            {/* Mask Image - Right Side Matching Text Height */}
            <div className="flex items-center justify-center">
              <div className="w-80 border border-border rounded-lg overflow-hidden flex items-center justify-center bg-background/50">
                <img 
                  src={maskVoid} 
                  alt="THEVOIDN13 Mask" 
                  className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
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
                href="/dissertacao" 
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
                href="/videos" 
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


        {/* THE VOID Street Scene */}
        <section className="w-full h-screen overflow-hidden">
          <img src={voidStreetScene} alt="THEVOIDN13 Street" className="w-full h-full object-contain" />
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

        {/* Character Section with Action Figure */}
        <BilingualSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-[11px] uppercase tracking-wider text-foreground/60 font-medium">PORTUGUÊS</p>
                <div>
                  <h2 className="text-base font-bold">O Personagem</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    THEVOIDN13 é uma entidade conceitual que habita o intervalo entre presença e ausência. Não é pessoa, não é símbolo: é o corpo da indefinição, a forma que o inconsciente assume quando precisa de voz. Surgiu como resposta ao ruído da autoafirmação, à ansiedade de ser visto. É silêncio vestido de som, sombra travestida de corpo. Existe para desaparecer, retornar transformado e desestabilizar qualquer gesto que se afirme com certeza. THEVOIDN13 é um duplo simbólico, uma presença fantasmagórica que atravessa o cotidiano e revela o que se esconde sob a superfície do comum.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-[11px] uppercase tracking-wider text-foreground/60 font-medium">ENGLISH</p>
                <div>
                  <h2 className="text-base font-bold">The Character</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    THEVOIDN13 is a conceptual entity that inhabits the interval between presence and absence. It is neither person nor symbol: it is the body of indefinition, the form the unconscious assumes when it needs a voice. It emerged as a response to the noise of self-affirmation, to the anxiety of being seen. It is silence dressed in sound, shadow disguised as body. It exists to disappear, to return transformed, and to destabilize any gesture that asserts itself with certainty. THEVOIDN13 is a symbolic double, a ghostly presence that crosses the everyday and reveals what hides beneath the surface of the ordinary.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Figure Image - Right Side */}
            <div className="flex items-center justify-center">
              <div className="w-full border border-border rounded-lg overflow-hidden bg-background/50">
                <img 
                  src={actionFigure} 
                  alt="THEVOIDN13 Action Figure" 
                  className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </BilingualSection>

        {/* Visual Identity and Being Structure */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-8">
                <div>
                  <h2 className="text-base font-bold">Identidade Visual: A Sombra Jungiana</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    A máscara é o espelho do que o ego não sustenta. A sombra emerge como forma, não como disfarce. Cada peça do vestígio – o casaco, o capuz, o passo – é um gesto de retorno. O corpo não atua: ele escuta o que o inconsciente quer dizer. O figurino é a tradução da psique em matéria, um corpo ritual criado para se tornar passagem. A indumentária deixa de ser proteção e se torna revelação. É o inconsciente vestindo o mundo, transformando o corpo em canal e a presença em linguagem.
                  </p>
                </div>
                <div className="text-center py-8">
                  <p className="text-lg font-bold leading-relaxed">
                    THE VOID N.13 não é um personagem.<br />
                    É o lugar onde o criador se dissolve para que a imagem respire.
                  </p>
                </div>
                <div>
                  <h2 className="text-base font-bold">A Estrutura do Ser</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    THE VOID N.13 não tem rosto, tem ritmo. Sua existência é feita de pulsos, não de poses. Cada gesto nasce do atrito entre o consciente e o que tenta emergir. Não se move para expressar, mas para liberar. O corpo é antena, não vitrine. É ali que o inconsciente encontra carne, respiração e peso. Um ser que não comunica – ressoa. Um corpo que existe apenas para traduzir o invisível em vibração.
                  </p>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-8">
                <div>
                  <h2 className="text-base font-bold">Visual Identity: The Jungian Shadow</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    The mask is the mirror of what the ego cannot hold. The shadow emerges as form, not as disguise. Each trace – the jacket, the hood, the step – is a gesture of return. The body does not act; it listens to what the unconscious wants to say. The attire is the psyche translated into matter, a ritual body created to become a passage. Clothing ceases to protect and begins to reveal. It is the unconscious dressing the world, turning the body into a channel and presence into language.
                  </p>
                </div>
                <div className="text-center py-8">
                  <p className="text-lg font-bold leading-relaxed">
                    THE VOID N.13 is not a character.<br />
                    It is the place where the creator dissolves so the image can breathe.
                  </p>
                </div>
                <div>
                  <h2 className="text-base font-bold">The Architecture of the Being</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    THE VOID N.13 has no face, it has rhythm. Its existence is made of pulses, not poses. Every gesture is born from the friction between the conscious and what struggles to emerge. It doesn't move to express, but to release. The body is an antenna, not a display. It is there that the unconscious finds flesh, breath, and weight. A being that doesn't communicate – it resonates. A body that exists only to translate the invisible into vibration.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>

        {/* Character Sheet Section */}
        <BilingualSection className="py-16">
          <div className="space-y-12">
            {/* Title */}
            <div className="space-y-1">
              <h2 className="text-base font-bold">um corpo à deriva entre o ruído e o silêncio</h2>
              <h3 className="text-sm font-medium text-foreground/80 italic">a body adrift between noise and silence</h3>
            </div>

            {/* Three Character Views */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg overflow-hidden bg-background/50">
                <img 
                  src={conceptFront} 
                  alt="THEVOIDN13 Front View" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="border border-border rounded-lg overflow-hidden bg-background/50">
                <img 
                  src={conceptSide} 
                  alt="THEVOIDN13 Side View" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="border border-border rounded-lg overflow-hidden bg-background/50">
                <img 
                  src={conceptBack} 
                  alt="THEVOIDN13 Back View" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Three Descriptive Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Column 1: Name/Codename */}
              <div className="border-2 border-primary/60 rounded-lg p-6 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold">Nome / Codinome</h4>
                  <p className="text-xs italic text-foreground/70">Name / Codename</p>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-justify">
                    THE VOID N.13 é o décimo-terceiro andar do inconsciente — um espaço entre mundos, onde o ego se apaga para que a imagem respire. Não é personagem nem avatar: é um estado de travessia. Um símbolo de ruptura, silêncio e renascimento. "The Void" é o nome que restou depois de todos os outros já morreram. O número treze é a assinatura do que retorna depois do fim. No décimo-terceiro andar, o corpo é só eco — e o eco, só memória.
                  </p>
                  <p className="text-justify italic text-foreground/80">
                    THE VOID N.13 is the thirteenth floor of the unconscious — a space between worlds, where the ego fades so the image can breathe. It is neither character nor avatar: it is a state of crossing, a symbol of rupture, silence, and rebirth. "The Void" is the name that remains after all others have died. Thirteen is the signature of what returns after the end. On the thirteenth floor, the body is only echo — and the echo, only memory.
                  </p>
                </div>
              </div>

              {/* Column 2: Archetype/Nature */}
              <div className="border-2 border-primary/60 rounded-lg p-6 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold">Arquétipo / Natureza</h4>
                  <p className="text-xs italic text-foreground/70">Archetype / Naturete</p>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-justify">
                    THE VOID N.13 encarna a Sombra Jungiana — não como vilão, mas como espelho do que foi reprimido. É o corpo caminhando entre a razão e o delírio, entre o controle e o colapso. Sua natureza é liminar: existe no intervalo entre o som e o silêncio, entre o gesto e o pensamento. É o Errante, o que não pertence a lugar algum, e o Redentor Subterrâneo, aquele que carrega a escuridão para devolvê-la transformada. Sua presença é ritual e resistência — um lembrete de que o inconsciente também cria, também respira, também grita.
                  </p>
                  <p className="text-justify italic text-foreground/80">
                    THE VOID N.13 embodies the Jungian Shadow — not as a villain, but as a mirror of what has been repressed. It is the body walking between reason and delirium, between control and collapse. Its nature is liminal: existing in the space between sound and silence, between gesture and thought. It is the Wanderer, belonging nowhere, and the Subterranean Redeemer, carrying darkness only to return it transformed. Its presence is ritual and resistance — a reminder that the unconscious also creates, also breathes, also screams.
                  </p>
                </div>
              </div>

              {/* Column 3: Symbolic Function */}
              <div className="border-2 border-primary/60 rounded-lg p-6 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold">Função Simbólica</h4>
                  <p className="text-xs italic text-foreground/70">Symbolic Function</p>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-justify">
                    A função simbólica de THE VOID N.13 é dar corpo ao invisível — traduzir o silêncio em gesto, o inconsciente em imagem. Ele é o espelho do caos contemporâneo: um ser que surge quando o verbo deixa de fazer sentido, quando a linguagem não sustenta mais o peso do real. Sua presença não explica — convoca. Cada aparição é um lembrete de que o vazio não é ausência, mas potência latente. Ele existe para revelar o que foi reprimido — devolver densidade ao que o mundo transformou em ruído. THE VOID N.13 é o instante em que o erro se torna ritual e o colapso, criação.
                  </p>
                  <p className="text-justify italic text-foreground/80">
                    The symbolic function of THE VOID N.13 is to give body to the invisible — to translate silence into gesture, the unconscious into image. It is the mirror of contemporary chaos: a being that appears when words no longer hold the weight of the real. Its presence does not explain — it summons. Each appearance is a reminder that the void is not absence, but latent power. It exists to reveal what has been repressed — to return density to what the world has turned into noise. THE VOID N.13 is the moment when error becomes ritual and collapse becomes creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BilingualSection>

        {/* Psychology: The Shadow as Language */}
        <section className="py-20 bg-red-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-8">
              {/* Title */}
              <div className="space-y-2">
                <h2 className="text-base font-bold text-white uppercase">Psicologia: A Sombra Como Linguagem</h2>
                <p className="text-sm italic text-white/90">Psychology: The Shadow as Language</p>
              </div>

              {/* Main Text - Portuguese */}
              <p className="text-base leading-relaxed text-white text-justify">
                O Void é sombra, e a sombra é tudo o que o ego não consegue sustentar. Jung dizia que ela não é o mal — é o que ainda não foi vivido. Talvez o projeto seja exatamente isso: uma tentativa de viver o que eu vinha evitando. Dar forma àquilo que o mundo me ensinou a esconder. A sombra é a memória do que não se permitiu existir — e o cinema, aqui, é o corpo dessa revelação.
              </p>

              {/* Main Text - English */}
              <p className="text-base leading-relaxed text-white/90 italic text-justify">
                The Void is shadow, and the shadow is everything the ego cannot sustain. Jung said it is not evil — it is what has not yet been lived. Perhaps this project is exactly that: an attempt to live what I had been avoiding. To give shape to what the world taught me to hide. The shadow is the memory of what was never allowed to exist — and cinema, here, is the body of that revelation.
              </p>

              {/* Four Columns with Icons */}
              <div className="pt-8">
                {/* Connection Line with Dots */}
                <div className="relative mb-12">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500"></div>
                  <div className="grid grid-cols-4 relative">
                    <div className="flex justify-center">
                      <div className="w-3 h-3 bg-amber-500 rounded-full -mt-[5px]"></div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-3 h-3 bg-amber-500 rounded-full -mt-[5px]"></div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-3 h-3 bg-amber-500 rounded-full -mt-[5px]"></div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-3 h-3 bg-amber-500 rounded-full -mt-[5px]"></div>
                    </div>
                  </div>
                </div>

                {/* Four Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Column 1: ESTILO */}
                  <div className="text-center space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-white uppercase">ESTILO</h3>
                      <p className="text-xs italic text-white/80">STYLE</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm leading-relaxed text-white">
                        Cada linha é um risco. Cada queda, uma confissão. Andar é uma forma de pensar. O movimento é pensamento bruto, impulso em estado de criação. O asfalto é o diário do corpo que insiste em continuar existindo.
                      </p>
                      <p className="text-xs leading-relaxed text-white/75 italic">
                        Each line is a risk. Each fall, a confession. To ride is to think. Movement is raw thought, impulse in a state of creation. The asphalt is the diary of a body that insists on existing.
                      </p>
                    </div>
                  </div>

                  {/* Column 2: PLANOS */}
                  <div className="text-center space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-white uppercase">PLANOS</h3>
                      <p className="text-xs italic text-white/80">SHOTS</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm leading-relaxed text-white">
                        Planos longos, granulação, silêncios excessivos, luzes estouradas. O cinema é respiração estendida — o cerco que revela intenção. A câmera não observa: ela escuta. Cada imagem é uma tentativa de lembrar o que o corpo já sabia antes da linguagem.
                      </p>
                      <p className="text-xs leading-relaxed text-white/75 italic">
                        Long takes, grain, excessive silences, blown-out lights. Cinema is extended breathing — the mistake that reveals intention. The camera doesn't watch: it listens. Each image is an attempt to remember what the body already knew before language.
                      </p>
                    </div>
                  </div>

                  {/* Column 3: RUÍDO */}
                  <div className="text-center space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-white uppercase">RUÍDO</h3>
                      <p className="text-xs italic text-white/80">NOISE</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm leading-relaxed text-white">
                        O ruído não interrompe o pensamento — ele o revela. O som é a forma mais bruta do inconsciente tentando existir. O que vibra no limite do audível é o que não pode ser dito. O ruído é memória viva daquilo que ainda não encontrou palavra.
                      </p>
                      <p className="text-xs leading-relaxed text-white/75 italic">
                        Noise doesn't interrupt thought — it reveals it. Sound is the rawest form of the unconscious trying to exist. What vibrates at the edge of the audible is what cannot yet be said. Noise is the living memory of what has not yet found a word.
                      </p>
                    </div>
                  </div>

                  {/* Column 4: VAZIO */}
                  <div className="text-center space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-white uppercase">VAZIO</h3>
                      <p className="text-xs italic text-white/80">VOID</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm leading-relaxed text-white">
                        O vazio não apaga — ele abre. É o espaço onde o silêncio respira e o corpo se reserva. Ali, tudo que foi reprimido se reorganiza em nova forma. O vazio é o território fértil da reinvenção: o ponto onde o ser refaz em presença.
                      </p>
                      <p className="text-xs leading-relaxed text-white/75 italic">
                        The void doesn't erase — it opens. It is the space where silence breathes and the body rewrites itself. There, everything that was repressed reorganizes into new form. The void is the fertile ground of reinvention — the point where being remakes itself into presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <h2 className="text-base font-bold">UNDERGROUND E INDEPENDENTE</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    A assinatura subterrânea que me acompanha há anos. Um selo invisível, criado no subsolo onde tudo o que é vivo se esconde. Uma comunidade simbólica de quem cria no escuro e chama isso de luz.
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
                  <h2 className="text-base font-bold">UNDERGROUND AND INDEPENDENT</h2>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    The underground signature that has followed me for years. An invisible seal, born in the underground where all that's alive hides. A symbolic community of those who create in darkness and call it light.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>

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
                    Por trás do silêncio do personagem, pulsa uma trilha sonora invisível tecida por influências do rock sombrio e da eletrônica atmosférica. As guitarras etéreas e os riffs pesados de Deftones misturam-se à catarse industrial do Nine Inch Nails, compondo um eco sonoro de angústia e resistência. Das batidas lentas e hipnóticas do Massive Attack emerge um clima de suspense urbano, enquanto a brutalidade introspectiva da banda Loathe carrega a densidade do caos moderno em cada acorde. As paisagens sonoras cinematográficas do projeto UNKLE costuram esses elementos, criando um pano de fundo musical ao mesmo tempo melancólico e insurgente. Essa trilha interna é o coração do Void: um manifesto sonoro sussurrado, transformando o silêncio em uma tempestade contida de emoções.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold">Princípios Estéticos</h4>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    Os princípios estéticos que sustentam THE VOID N.13 emergem de uma filosofia do caos e do inconsciente. Aqui, o vazio não é ausência, mas potência latente – uma força criativa que nasce do atrito entre o ruído e o silêncio. O projeto adota o número treze como signo de travessia e transmutação: tal qual a carta da Morte no tarô, simboliza o fim necessário para um renascimento autêntico. A máscara branca e inexpressiva encarna a ideia junguiana da sombra: tudo aquilo que o ego reprime ganha forma sem rosto, permitindo que o criador desapareça para que a obra possa respirar. Cada gesto torna-se ritual, cada erro converte-se em uma forma de verdade estética. Entre a luz estourada e o clichê da película analógica, entre a luz estourada e a escuridão, consolida-se uma linguagem própria. O Void é uma presença mutante e anônima – não um personagem fixo, mas um fenômeno poético em constante trânsito – um espelho do caos contemporâneo que transforma a ausência em voz.
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
                    Beneath the character's silence, an invisible soundtrack throbs, woven from dark rock and atmospheric electronic influences. The ethereal guitars and crushing riffs of Deftones blend with the industrial catharsis of Nine Inch Nails, composing a sonic echo of anguish and resistance. From Massive Attack's slow, hypnotic beats emerges a mood of urban suspense, while the introspective brutality of Loathe carries the weight of modern chaos in each chord. The cinematic soundscapes of UNKLE stitch these elements together, crafting a musical backdrop that is at once melancholic and insurgent. This internal soundtrack is the heart of the Void: a whispered sonic manifesto, turning silence into a contained storm of emotions.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold">Aesthetic Principles</h4>
                  <p className="text-base text-justify leading-relaxed mt-2">
                    The aesthetic principles underpinning THE VOID N.13 emerge from a philosophy of chaos and the unconscious. Here, the void is not absence but latent power – a creative force born from the friction between noise and silence. The project embraces the number thirteen as a symbol of crossing and transmutation: like the Death card in Tarot, it signifies the end necessary for authentic rebirth. The blank, expressionless mask embodies Jung's concept of the Shadow: everything the ego represses is given a faceless form, allowing the creator to disappear so that the work may breathe. Each action becomes ritual, each mistake converts into a form of aesthetic truth. Between overexposed light and darkness, a language of its own takes shape. The Void is a mutant, anonymous presence – not a fixed character but a poetic phenomenon in constant transit – a mirror of contemporary chaos that transforms absence into a voice.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>

        {/* O Número 13 - Símbolo de Travessia */}
        <section className="py-20 bg-red-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-8">
              {/* Title */}
              <div className="space-y-2">
                <h2 className="text-base font-bold text-white uppercase">O Número 13 – Símbolo de Travessia</h2>
                <p className="text-sm italic text-white/90">The Number 13 – Symbol of Crossing</p>
              </div>

              {/* Meditation Rain Scene Image */}
              <div className="w-full overflow-hidden rounded-lg border border-white/20">
                <img src={meditationRainScene} alt="THEVOIDN13 Meditation in Rain" className="w-full h-auto object-contain" />
              </div>

              {/* Quote */}
              <div className="border-l-4 border-amber-500 pl-6 py-2">
                <p className="text-base text-white">
                  "[Ruído estático]. Registro treze. Chove sobre o concreto e dentro de mim. Cada batida é um erro que ainda respira. Não sou o fim, apenas o eco dele. Se ouvir com atenção, vai perceber: o silêncio ainda está vivo."
                </p>
                <p className="text-sm italic text-white/80 mt-2">
                  [Static noise]. Record thirteen. It rains on the concrete and inside me. Every pulse is a mistake still breathing. I am not the end — only its echo. If you listen closely, you'll notice: silence is still alive.
                </p>
              </div>

              {/* Three Sections */}
              <div className="grid gap-8 mt-8">
                {/* A Carta da Morte */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white">A Carta da Morte</h3>
                  <p className="text-sm italic text-white/80">The Death Card</p>
                  <p className="text-base text-white text-justify leading-relaxed">
                    A carta XIII do Tarô, a Morte, ergue sua foice como quem abre caminho em meio ao campo estéril, ceifando o que já não vive para que o novo possa brotar. Sua imagem não anuncia um fim definitivo mas sim uma transição inevitável – a porta secreta entre um mundo e outro. Nessa travessia, há uma renúncia silenciosa do ego: antigas identidades desabam como folhas secas, dando lugar a uma verdade mais crua e essencial. O número 13, tantas vezes temido, revela-se aqui como emblema dessa metamorfose subversiva – um lembrete de que na morte simbólica reside a semente do renascimento.
                  </p>
                  <p className="text-sm italic text-white/75 leading-relaxed">
                    The Tarot's XIII card, Death, raises its scythe like one who clears a path through a barren field, cutting away what no longer lives so the new can take root. Its grim image does not herald a final end but an inevitable transition – a secret passageway bridging one world to the next. In that crossing, there is a silent renunciation of the ego: old identities crumble like dry leaves, making room for a more raw and essential truth. The number 13, so often feared, reveals itself here as an emblem of subversive metamorphosis – a reminder that within symbolic death lies the seed of rebirth.
                  </p>
                </div>

                {/* O Andar Interditado */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white">O Andar Interditado</h3>
                  <p className="text-sm italic text-white/80">The Forbidden Floor</p>
                  <p className="text-base text-white text-justify leading-relaxed">
                    Em muitos edifícios, o elevador salta do 12º para o 14º andar, deixando o 13º como um vazio fantasma – um andar interditado pela superstição. Na arquitetura da psique, porém, não há como pular essa dimensão oculta: o décimo-terceiro andar do meu inconsciente existe, ainda que não conste nos mapas oficiais de consciência. É ali, nesse pavimento silencioso e esquecido, que a psique se reúne e o silêncio finalmente ganha voz. Essa camada proibida de ser é uma arquitetura invisível da transformação – um espaço liminar onde a realidade cotidiana se dobra e onde verdades soterradas esperam a superfície.
                  </p>
                  <p className="text-sm italic text-white/75 leading-relaxed">
                    In many buildings, the elevator skips from the 12th to the 14th floor, leaving the 13th as a phantom void – a floor forbidden by superstition. In the architecture of the psyche, however, there is no way to bypass that hidden dimension: the thirteenth floor of my unconscious exists even if it appears on no official map of consciousness. It is there, on that silent, forsaken level, that the psyche congregates and silence at last finds a voice. This forbidden layer of being forms an invisible architecture of transformation – a liminal space where everyday reality folds in on itself and where buried truths wait to surface.
                  </p>
                </div>

                {/* Treze Label Society */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white">Treze Label Society</h3>
                  <p className="text-sm italic text-white/80">Treze Label Society</p>
                  <p className="text-base text-white text-justify leading-relaxed">
                    O termo Treze Label Society evoca uma espécie de irmandade subterrânea à qual pertenço – uma linhagem secreta costurada pelo fio invisível do número 13. Essa "sociedade" não se reúne em salas iluminadas, mas nas frestas e catacumbas do mundo, onde o que é vivo e autêntico prefere se esconder. É uma forma de coalizão no silêncio compartilhado, um pacto invisível de subversão e silêncio: treze como assinatura clandestina, sinalizando essa conexão silenciosa com todos que veem no oculto não uma ameaça, mas um refúgio de potência.
                  </p>
                  <p className="text-sm italic text-white/75 leading-relaxed">
                    The term Treze Label Society evokes a kind of underground brotherhood to which I belong – a secret lineage stitched together by the invisible thread of the number 13. This "society" does not meet in well-lit rooms but in the cracks and catacombs of the world, where whatever is alive and authentic prefers to hide. It is a form of coalition in shared subversion and silence: a pact in whispers. Thirteen as a clandestine signature, signaling this silent kinship with all who see in the hidden not an emptiness, but a refuge of potency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Renascimento / Rebirth */}
        <section className="py-20 bg-red-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-6">
              <h2 className="text-base font-bold text-white uppercase">Renascimento</h2>
              <p className="text-sm italic text-white/90">Rebirth</p>
              
              <p className="text-base text-white text-justify leading-relaxed">
                Cada renascimento dentro do projeto é como atravessar um limiar invisível e voltar transformado. Toda vez que coloco a máscara do Void, sinto que atravesso uma porta secreta que separa o real do imaginário – e ao transpor essa fronteira, deixo para trás velhas peles. Não se trata de um disfarce, é sim de um rito de morte e retorno: a identidade antiga se dissolve em silêncio para que algo genuíno possa emergir. Renascer, aqui, é o começo de uma nova forma de estar vivo sem precisar ser visto – uma existência renovada que carrega na sombra a sua própria luz quieta.
              </p>
              
              <p className="text-sm italic text-white/75 leading-relaxed">
                Each rebirth within the project is like crossing an invisible threshold and returning transformed. Every time I put on the Void's mask, I feel I am walking through a secret door that separates the real from the imaginary – and by crossing that boundary, I shed old skins. It is not a disguise, but a ritual of death and return: the old identity dissolves into silence so that something genuine can emerge. To be reborn here is the beginning of a new way of being alive without needing to be seen – a renewed existence that carries its own quiet light within the shadow.
              </p>
            </div>
          </div>
        </section>

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
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-base font-bold">O Lugar Seguro para Desaparecer</h2>
              <p className="text-sm italic text-foreground/80">The Safe Place to Disappear</p>
            </div>
            
            <p className="text-base text-justify leading-relaxed">
              Hoje entendo: o Void não nasceu para uma festa. Ele nasceu porque eu precisava de um refúgio — um lugar onde o silêncio não fosse ausência, mas abrigo. Um espaço para desaparecer sem deixar de criar. Um modo de continuar respirando quando tudo o resto parecia saturado. O projeto cresceu como tudo o que é orgânico: pelas frestas, pelos ruídos, pelos becos da cidade. E se alguém pergunta o que é, eu respondo: não é personagem, é vestígio. É o que restou de mim depois que todas as máscaras sociais caíram. THE VOID No. 13 é o nome que dei à minha própria sombra — o mito que inventei para continuar respirando. Talvez — só talvez — seja o começo de uma nova forma de estar vivo sem precisar ser visto.
            </p>
            
            <p className="text-sm italic text-foreground/70 leading-relaxed">
              Now I understand: the Void wasn't born for a party. It was born because I needed a refuge — a place where silence could be shelter, not absence. A space to disappear without ceasing to create. A way to keep breathing when everything else felt saturated. The project grew as all organic things do: through cracks, through noise, through the alleys of the city. And if someone asks what it is, I say: it's not a character, it's a residue. It's what was left of me after all the social masks had fallen. THE VOID No. 13 is the name I gave my own shadow — the myth I invented to keep breathing. And perhaps — just perhaps — it's the beginning of a new way of being alive without being seen.
            </p>

            <div className="border-t border-border pt-8 mt-12">
              <p className="text-right text-sm text-foreground/60">
                цастро™ / Castro Pizzano / THE VOID N.13<br />
                Curitiba - Brasil · 2025
              </p>
            </div>
          </div>
        </BilingualSection>

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