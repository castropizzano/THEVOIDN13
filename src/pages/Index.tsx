import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { PromptLibrary } from "@/components/PromptLibrary";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ComicGenerator } from "@/components/ComicGenerator";
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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* ===== HERO & INTRODUCTION ===== */}
        
        {/* Hero Section */}
        <section className="w-full h-screen overflow-hidden">
          <img src={heroImage} alt="THEVOIDN13" className="w-full h-full object-contain" />
        </section>

        {/* Audio Player - Projeto */}
        <section className="py-12 bg-card/30">
          <div className="max-w-4xl mx-auto px-6">
            <AudioPlayer
              src="/audio/thevoidn13-projeto.mp3"
              title="THEVOIDN13 — Áudio Projeto"
              description="Narração conceitual do projeto / Conceptual project narration"
            />
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            <h1 className="text-sm font-light tracking-wider uppercase">
              THEVOIDN13 [Shadow_Interface_Bible_v13]
            </h1>
            
            <video 
              className="w-full aspect-video bg-black rounded-lg overflow-hidden"
              controls
              playsInline
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <p className="text-xs font-light tracking-wide text-muted-foreground text-center">
              [um corpo à deriva entre o ruído e o silêncio]{" "}
              <span className="italic">[a body adrift between noise and silence]</span>
            </p>
          </div>
        </section>

        {/* Introduction */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <p className="text-base text-justify leading-relaxed">
                Não foi uma fantasia. Foi um retorno. Um desses chamados que vêm de dentro, quando o inconsciente começa a bater na pele pedindo passagem. THEVOIDN13 nasceu no espaço entre o desejo e o cansaço, entre o fim da forma e o começo da presença. Um modo de existir sem precisar se exibir. Respirar sem ter que performar. Um corpo que se apaga para deixar a imagem viver.
              </p>
            }
            englishContent={
              <p className="text-base text-justify leading-relaxed">
                It wasn't a fantasy. It was a return. One of those inner calls, when the unconscious starts knocking at the skin, asking to pass through. THEVOIDN13 was born in the space between desire and exhaustion, between the end of form and the beginning of presence. A way of existing without needing to be seen. To breathe without having to perform. A body that fades so the image can live.
              </p>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={meditationScene} alt="Meditation Scene" className="w-full h-full object-contain" />
        </section>

        {/* ===== SEÇÃO I: FUNDAMENTOS DO VOID ===== */}

        {/* O Gesto */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">O Gesto</h2>
                <p className="text-base text-justify leading-relaxed">
                  Cada movimento é um ruído controlado, um eco do que o corpo escuta por dentro. Andar é pensar, parar é ouvir. THEVOIDN13 não representa, ele encarna a hesitação. O gesto é a respiração do pensamento, um movimento de exílio e de retorno. Cada deslocamento é uma forma de escuta: o corpo capta o que a mente silencia.
                </p>
              </div>
            }
            englishContent={
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">The Gesture</h2>
                <p className="text-base text-justify leading-relaxed">
                  Each movement is a controlled noise, an echo of what the body hears within. To walk is to think, to stop is to listen. THEVOIDN13 doesn't represent, it embodies hesitation. Gesture is the breath of thought, a movement of exile and return. Every displacement is a form of listening: the body perceives what the mind silences.
                </p>
              </div>
            }
          />
        </BilingualSection>

        {/* Fundamentos: Olhar, Respiração, Atmosfera */}
        <BilingualSection bgClassName="bg-card/30">
          <BilingualContent
            portugueseContent={
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">O Olhar</h3>
                  <p className="text-base text-justify leading-relaxed">
                    Por trás da máscara, há silêncio. Um olhar que não busca reconhecimento, apenas presença. O olhar não devolve imagem, devolve espelho. É o espaço onde quem vê também está por dentro. O olhar é o fio que costura o visível e o invisível — uma lente que dissolve a fronteira entre sujeito e sombra.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">A Respiração</h3>
                  <p className="text-base text-justify leading-relaxed">
                    A respiração é o som que resta quando o verbo morre. É nela que o ser se ancora e desaparece. O ar entra como ruído e sai como silêncio. Cada expiração é um micro-desaparecimento. Um instante de retorno ao nada. Respirar é lembrar que o corpo é apenas passagem entre dois mundos: o mundo da carne e o mundo do invisível.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">A Atmosfera</h3>
                  <p className="text-base text-justify leading-relaxed">
                    Tudo vibra em tom noturno. A névoa, o concreto e a solidão elétrica são extensões do corpo. O ambiente não cerca THE VOID N.13 — ele o prolonga. A paisagem se torna psique, e o silêncio, uma presença física. A cidade é o espelho expandido do inconsciente, o lugar onde o corpo desaparece e o espaço respira por ele.
                  </p>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">The Gaze</h3>
                  <p className="text-base text-justify leading-relaxed">
                    Behind the mask, there is silence. A gaze that seeks no recognition, only presence. The gaze doesn't return an image, it returns a mirror. It is the space where whoever looks is also seen from within. The gaze is the thread that stitches the visible and the invisible — a lens that dissolves the boundary between subject and shadow.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">The Breath</h3>
                  <p className="text-base text-justify leading-relaxed">
                    Breathing is the sound that remains when the word dies. In it, the being anchors itself and vanishes. Air enters as noise and leaves as silence. Each exhalation is a micro-disappearance, a fleeting return to nothingness. To breathe is to remember that the body is only a passage between two worlds: the world of flesh and the world of the unseen.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">The Atmosphere</h3>
                  <p className="text-base text-justify leading-relaxed">
                    Everything vibrates in a nocturnal tone. Fog, concrete, and electric solitude are extensions of the body. The environment doesn't surround THE VOID N.13 — it prolongs it. The landscape becomes psyche, and silence, a physical presence. The city is the expanded mirror of the unconscious, the place where the body vanishes and space breathes for it.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={voidStreetScene} alt="THEVOIDN13 Street" className="w-full h-full object-contain" />
        </section>

        {/* ===== SEÇÃO II: A MÁSCARA E O PERSONAGEM ===== */}

        {/* Quando o Inconsciente Ganha Corpo */}
        <BilingualSection>
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-stretch">
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">PORTUGUÊS</p>
                <h2 className="text-2xl font-bold text-primary">Quando o Inconsciente Ganha Corpo</h2>
                <p className="text-base text-justify leading-relaxed">
                  Não nasceu de uma ideia, mas de uma pressão interna. Pensei em inventar uma máscara, e acabei revelando um rosto que sempre esteve ali. THEVOIDN13 surgiu do atrito entre o desejo e o cansaço, da urgência de se esvaziar para continuar criando. Não é personagem nem alter ego. É uma presença que respira onde o corpo falha. Uma matéria que se move entre o fim e o recomeço. O instante em que o inconsciente decide existir.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">ENGLISH</p>
                <h2 className="text-2xl font-bold text-primary">When the Unconscious Takes Shape</h2>
                <p className="text-base text-justify leading-relaxed">
                  It wasn't born from an idea, but from inner pressure. I thought I was inventing a mask, and I ended up revealing a face that had always been there. THEVOIDN13 emerged from the friction between desire and exhaustion, from the urgency to empty oneself just to keep creating. It is neither character nor alter ego. It is a presence that breathes where the body fails. A matter that moves between the end and the beginning. The moment when the unconscious decides to exist.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-80 border border-border rounded-lg overflow-hidden bg-background/50 hover:border-primary/50 transition-colors">
                <img 
                  src={maskVoid} 
                  alt="THEVOIDN13 Mask" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </BilingualSection>

        {/* A Máscara */}
        <BilingualSection bgClassName="bg-card/30">
          <BilingualContent
            portugueseContent={
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">A Máscara / Ceder Espaço ao Inconsciente</h2>
                <p className="text-base text-justify leading-relaxed">
                  A máscara veio antes do nome. Branca, lisa, silenciosa. Não era uma face, era uma pausa. Quando a olhei pela primeira vez, percebi que ela não me olhava de volta. Talvez fosse isso o que eu buscava: existir sem precisar me afirmar. Quando a vesti, o rosto deixou de importar. O espelho não devolveu imagem, apenas silêncio. Foi nesse instante que compreendi: não estava criando um personagem, mas cedendo espaço. Ceder espaço ao inconsciente, deixar que ele assumisse forma. A máscara é o pacto entre o que se apaga e o que retorna, o instante em que o corpo permite ser atravessado por algo maior do que ele mesmo.
                </p>
              </div>
            }
            englishContent={
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">The Mask / Yielding Space to the Unconscious</h2>
                <p className="text-base text-justify leading-relaxed">
                  The mask came before the name. White, smooth, silent. It wasn't a face, it was a pause. When I looked at it for the first time, I realized it didn't look back at me. Perhaps that was what I was seeking: to exist without needing to assert myself. When I wore it, the face ceased to matter. The mirror returned no image, only silence. It was in that moment I understood: I wasn't creating a character, I was yielding space. Yielding space to the unconscious, letting it take shape. The mask is the pact between what fades and what returns, the instant when the body allows itself to be crossed by something greater than itself.
                </p>
              </div>
            }
          />
        </BilingualSection>

        {/* O Personagem */}
        <BilingualSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">PORTUGUÊS</p>
                <h2 className="text-2xl font-bold text-primary">O Personagem</h2>
                <p className="text-base text-justify leading-relaxed">
                  THEVOIDN13 é uma entidade conceitual que habita o intervalo entre presença e ausência. Não é pessoa, não é símbolo: é o corpo da indefinição, a forma que o inconsciente assume quando precisa de voz. Surgiu como resposta ao ruído da autoafirmação, à ansiedade de ser visto. É silêncio vestido de som, sombra travestida de corpo. Existe para desaparecer, retornar transformado e desestabilizar qualquer gesto que se afirme com certeza. THEVOIDN13 é um duplo simbólico, uma presença fantasmagórica que atravessa o cotidiano e revela o que se esconde sob a superfície do comum.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">ENGLISH</p>
                <h2 className="text-2xl font-bold text-primary">The Character</h2>
                <p className="text-base text-justify leading-relaxed">
                  THEVOIDN13 is a conceptual entity that inhabits the interval between presence and absence. It is neither person nor symbol: it is the body of indefinition, the form the unconscious assumes when it needs a voice. It emerged as a response to the noise of self-affirmation, to the anxiety of being seen. It is silence dressed in sound, shadow disguised as body. It exists to disappear, to return transformed, and to destabilize any gesture that asserts itself with certainty. THEVOIDN13 is a symbolic double, a ghostly presence that crosses the everyday and reveals what hides beneath the surface of the ordinary.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full border border-border rounded-lg overflow-hidden bg-background/50 hover:border-primary/50 transition-colors">
                <img 
                  src={actionFigure} 
                  alt="THEVOIDN13 Action Figure" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </BilingualSection>

        {/* Identidade Visual */}
        <BilingualSection bgClassName="bg-card/30">
          <BilingualContent
            portugueseContent={
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">Identidade Visual: A Sombra Jungiana</h2>
                  <p className="text-base text-justify leading-relaxed">
                    A máscara é o espelho do que o ego não sustenta. A sombra emerge como forma, não como disfarce. Cada peça do vestígio – o casaco, o capuz, o passo – é um gesto de retorno. O corpo não atua: ele escuta o que o inconsciente quer dizer. O figurino é a tradução da psique em matéria, um corpo ritual criado para se tornar passagem. A indumentária deixa de ser proteção e se torna revelação. É o inconsciente vestindo o mundo, transformando o corpo em canal e a presença em linguagem.
                  </p>
                </div>

                <div className="text-center py-8 border-y border-primary/20">
                  <p className="text-xl font-bold leading-relaxed text-primary">
                    THE VOID N.13 não é um personagem.<br />
                    É o lugar onde o criador se dissolve para que a imagem respire.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">A Estrutura do Ser</h2>
                  <p className="text-base text-justify leading-relaxed">
                    THE VOID N.13 não tem rosto, tem ritmo. Sua existência é feita de pulsos, não de poses. Cada gesto nasce do atrito entre o consciente e o que tenta emergir. Não se move para expressar, mas para liberar. O corpo é antena, não vitrine. É ali que o inconsciente encontra carne, respiração e peso. Um ser que não comunica – ressoa. Um corpo que existe apenas para traduzir o invisível em vibração.
                  </p>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">Visual Identity: The Jungian Shadow</h2>
                  <p className="text-base text-justify leading-relaxed">
                    The mask is the mirror of what the ego cannot hold. The shadow emerges as form, not as disguise. Each trace – the jacket, the hood, the step – is a gesture of return. The body does not act; it listens to what the unconscious wants to say. The attire is the psyche translated into matter, a ritual body created to become a passage. Clothing ceases to protect and begins to reveal. It is the unconscious dressing the world, turning the body into a channel and presence into language.
                  </p>
                </div>

                <div className="text-center py-8 border-y border-primary/20">
                  <p className="text-xl font-bold leading-relaxed text-primary">
                    THE VOID N.13 is not a character.<br />
                    It is the place where the creator dissolves so the image can breathe.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">The Architecture of the Being</h2>
                  <p className="text-base text-justify leading-relaxed">
                    THE VOID N.13 has no face, it has rhythm. Its existence is made of pulses, not poses. Every gesture is born from the friction between the conscious and what struggles to emerge. It doesn't move to express, but to release. The body is an antenna, not a display. It is there that the unconscious finds flesh, breath, and weight. A being that doesn't communicate – it resonates. A body that exists only to translate the invisible into vibration.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>

        {/* Character Sheet */}
        <BilingualSection>
          <div className="space-y-12">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold text-primary">um corpo à deriva entre o ruído e o silêncio</h2>
              <h3 className="text-base text-muted-foreground italic">a body adrift between noise and silence</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg overflow-hidden bg-background/50 hover:border-primary/50 transition-colors">
                <img src={conceptFront} alt="THEVOIDN13 Front View" className="w-full h-auto object-contain" />
              </div>
              <div className="border border-border rounded-lg overflow-hidden bg-background/50 hover:border-primary/50 transition-colors">
                <img src={conceptSide} alt="THEVOIDN13 Side View" className="w-full h-auto object-contain" />
              </div>
              <div className="border border-border rounded-lg overflow-hidden bg-background/50 hover:border-primary/50 transition-colors">
                <img src={conceptBack} alt="THEVOIDN13 Back View" className="w-full h-auto object-contain" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-primary/40 rounded-lg p-6 space-y-4 hover:border-primary transition-colors">
                <div>
                  <h4 className="text-sm font-bold uppercase">Nome / Codinome</h4>
                  <p className="text-xs italic text-muted-foreground">Name / Codename</p>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-justify">
                    THE VOID N.13 é o décimo-terceiro andar do inconsciente — um espaço entre mundos, onde o ego se apaga para que a imagem respire. Não é personagem nem avatar: é um estado de travessia. Um símbolo de ruptura, silêncio e renascimento. "The Void" é o nome que restou depois de todos os outros já morreram. O número treze é a assinatura do que retorna depois do fim.
                  </p>
                  <p className="text-justify italic text-muted-foreground">
                    THE VOID N.13 is the thirteenth floor of the unconscious — a space between worlds, where the ego fades so the image can breathe. It is neither character nor avatar: it is a state of crossing, a symbol of rupture, silence, and rebirth. Thirteen is the signature of what returns after the end.
                  </p>
                </div>
              </div>

              <div className="border-2 border-primary/40 rounded-lg p-6 space-y-4 hover:border-primary transition-colors">
                <div>
                  <h4 className="text-sm font-bold uppercase">Arquétipo / Natureza</h4>
                  <p className="text-xs italic text-muted-foreground">Archetype / Nature</p>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-justify">
                    THE VOID N.13 encarna a Sombra Jungiana — não como vilão, mas como espelho do que foi reprimido. É o corpo caminhando entre a razão e o delírio, entre o controle e o colapso. Sua natureza é liminar: existe no intervalo entre o som e o silêncio, entre o gesto e o pensamento. É o Errante, o que não pertence a lugar algum, e o Redentor Subterrâneo.
                  </p>
                  <p className="text-justify italic text-muted-foreground">
                    THE VOID N.13 embodies the Jungian Shadow — not as a villain, but as a mirror of what has been repressed. Its nature is liminal: existing in the space between sound and silence, between gesture and thought. It is the Wanderer and the Subterranean Redeemer.
                  </p>
                </div>
              </div>

              <div className="border-2 border-primary/40 rounded-lg p-6 space-y-4 hover:border-primary transition-colors">
                <div>
                  <h4 className="text-sm font-bold uppercase">Função Simbólica</h4>
                  <p className="text-xs italic text-muted-foreground">Symbolic Function</p>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-justify">
                    A função simbólica de THE VOID N.13 é dar corpo ao invisível — traduzir o silêncio em gesto, o inconsciente em imagem. Ele é o espelho do caos contemporâneo: um ser que surge quando o verbo deixa de fazer sentido. Sua presença não explica — convoca. THE VOID N.13 é o instante em que o erro se torna ritual e o colapso, criação.
                  </p>
                  <p className="text-justify italic text-muted-foreground">
                    The symbolic function is to give body to the invisible — to translate silence into gesture. It is the mirror of contemporary chaos: a being that appears when words no longer hold meaning. THE VOID N.13 is the moment when error becomes ritual and collapse becomes creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BilingualSection>

        {/* ===== SEÇÃO III: PSICOLOGIA E SÍMBOLOS ===== */}

        {/* Psychology: The Shadow as Language */}
        <section className="py-20 bg-red-900">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-white uppercase">Psicologia: A Sombra Como Linguagem</h2>
              <p className="text-base italic text-white/90">Psychology: The Shadow as Language</p>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-relaxed text-white text-justify">
                O Void é sombra, e a sombra é tudo o que o ego não consegue sustentar. Jung dizia que ela não é o mal — é o que ainda não foi vivido. Talvez o projeto seja exatamente isso: uma tentativa de viver o que eu vinha evitando. Dar forma àquilo que o mundo me ensinou a esconder. A sombra é a memória do que não se permitiu existir — e o cinema, aqui, é o corpo dessa revelação.
              </p>

              <p className="text-base leading-relaxed text-white/90 italic text-justify">
                The Void is shadow, and the shadow is everything the ego cannot sustain. Jung said it is not evil — it is what has not yet been lived. Perhaps this project is exactly that: an attempt to live what I had been avoiding. The shadow is the memory of what was never allowed to exist — and cinema, here, is the body of that revelation.
              </p>
            </div>

            {/* Four Pillars */}
            <div className="mt-12">
              <div className="relative mb-12">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500"></div>
                <div className="absolute top-0 left-0 w-3 h-3 bg-amber-500 rounded-full -translate-y-1/2"></div>
                <div className="absolute top-0 left-1/3 w-3 h-3 bg-amber-500 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute top-0 left-2/3 w-3 h-3 bg-amber-500 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-amber-500 rounded-full -translate-y-1/2"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                {/* SOMBRA */}
                <div className="text-center space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase">SOMBRA</h3>
                  <p className="text-xs italic text-white/80">SHADOW</p>
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed text-white">
                      A sombra é o que o ego reprime. É onde mora o desejo sem permissão, o pensamento que não coube. Não é monstruosa — é inédita. Revelá-la é aceitar que o ser é maior que a consciência. O Void nasce ali: onde a forma aceita se desfazer.
                    </p>
                    <p className="text-xs leading-relaxed text-white/75 italic">
                      The shadow is what the ego represses. It's where forbidden desire resides, the thought that didn't fit. It's not monstrous — it's unprecedented. To reveal it is to accept that being is greater than consciousness. The Void is born there: where form accepts dissolution.
                    </p>
                  </div>
                </div>

                {/* SILÊNCIO */}
                <div className="text-center space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase">SILÊNCIO</h3>
                  <p className="text-xs italic text-white/80">SILENCE</p>
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed text-white">
                      O silêncio não é ausência de som. É o espaço onde o pensamento ainda vibra sem palavra. No silêncio, o corpo ouve. É ali que o inconsciente fala — não em voz, mas em pressão, em peso, em pausa. O silêncio do Void é denso como concreto e afiado como vidro.
                    </p>
                    <p className="text-xs leading-relaxed text-white/75 italic">
                      Silence isn't the absence of sound. It's the space where thought still vibrates wordlessly. In silence, the body listens. It's there that the unconscious speaks — not in voice, but in pressure, in weight, in pause. The Void's silence is dense as concrete and sharp as glass.
                    </p>
                  </div>
                </div>

                {/* RUÍDO */}
                <div className="text-center space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase">RUÍDO</h3>
                  <p className="text-xs italic text-white/80">NOISE</p>
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed text-white">
                      O ruído não interrompe o pensamento — ele o revela. O som é a forma mais bruta do inconsciente tentando existir. O que vibra no limite do audível é o que não pode ser dito. O ruído é memória viva daquilo que ainda não encontrou palavra.
                    </p>
                    <p className="text-xs leading-relaxed text-white/75 italic">
                      Noise doesn't interrupt thought — it reveals it. Sound is the rawest form of the unconscious trying to exist. What vibrates at the edge of the audible is what cannot yet be said. Noise is the living memory of what has not yet found a word.
                    </p>
                  </div>
                </div>

                {/* VAZIO */}
                <div className="text-center space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase">VAZIO</h3>
                  <p className="text-xs italic text-white/80">VOID</p>
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed text-white">
                      O vazio não apaga — ele abre. É o espaço onde o silêncio respira e o corpo se reescreve. Ali, tudo que foi reprimido se reorganiza em nova forma. O vazio é o território fértil da reinvenção: o ponto onde o ser refaz em presença.
                    </p>
                    <p className="text-xs leading-relaxed text-white/75 italic">
                      The void doesn't erase — it opens. It is the space where silence breathes and the body rewrites itself. There, everything that was repressed reorganizes into new form. The void is the fertile ground of reinvention — the point where being remakes itself into presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-screen overflow-hidden">
          <img src={roughs000} alt="Sketches" className="w-full h-full object-contain" />
        </section>

        {/* ===== SEÇÃO IV: O NÚMERO 13 ===== */}

        {/* O Número 13 - Símbolo de Travessia */}
        <section className="py-20 bg-red-900">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-white uppercase">O Número 13 – Símbolo de Travessia</h2>
              <p className="text-base italic text-white/90">The Number 13 – Symbol of Crossing</p>
            </div>

            <div className="w-full overflow-hidden rounded-lg border border-white/20">
              <img src={meditationRainScene} alt="THEVOIDN13 Meditation in Rain" className="w-full h-auto object-contain" />
            </div>

            <div className="border-l-4 border-amber-500 pl-6 py-4">
              <p className="text-base text-white leading-relaxed">
                "[Ruído estático]. Registro treze. Chove sobre o concreto e dentro de mim. Cada batida é um erro que ainda respira. Não sou o fim, apenas o eco dele. Se ouvir com atenção, vai perceber: o silêncio ainda está vivo."
              </p>
              <p className="text-sm italic text-white/80 mt-3 leading-relaxed">
                [Static noise]. Record thirteen. It rains on the concrete and inside me. Every pulse is a mistake still breathing. I am not the end — only its echo. If you listen closely, you'll notice: silence is still alive.
              </p>
            </div>

            <div className="grid gap-12">
              {/* A Carta da Morte */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">A Carta da Morte</h3>
                <p className="text-sm italic text-white/80">The Death Card</p>
                <p className="text-base text-white text-justify leading-relaxed">
                  A carta XIII do Tarô, a Morte, ergue sua foice como quem abre caminho em meio ao campo estéril, ceifando o que já não vive para que o novo possa brotar. Sua imagem não anuncia um fim definitivo mas sim uma transição inevitável – a porta secreta entre um mundo e outro. Nessa travessia, há uma renúncia silenciosa do ego: antigas identidades desabam como folhas secas, dando lugar a uma verdade mais crua e essencial. O número 13, tantas vezes temido, revela-se aqui como emblema dessa metamorfose subversiva – um lembrete de que na morte simbólica reside a semente do renascimento.
                </p>
                <p className="text-sm italic text-white/75 leading-relaxed">
                  The Tarot's XIII card, Death, raises its scythe like one who clears a path through a barren field, cutting away what no longer lives so the new can take root. Its grim image does not herald a final end but an inevitable transition – a secret passageway bridging one world to the next. The number 13, so often feared, reveals itself here as an emblem of subversive metamorphosis – a reminder that within symbolic death lies the seed of rebirth.
                </p>
              </div>

              {/* O Andar Interditado */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">O Andar Interditado</h3>
                <p className="text-sm italic text-white/80">The Forbidden Floor</p>
                <p className="text-base text-white text-justify leading-relaxed">
                  Em muitos edifícios, o décimo-terceiro andar é omitido. O elevador salta do 12 ao 14, como se apagar o número pudesse apagar o medo. Mas THE VOID N.13 habita exatamente esse andar — o lugar que nunca foi construído, o espaço que só existe como fenda. É o símbolo do que a sociedade prefere não olhar: a melancolia, a incerteza, o descontrole. Habitar o décimo-terceiro andar é aceitar o risco de desabar. É escolher o interdito como morada. No décimo-terceiro andar, ninguém sobe esperando encontrar luz. Lá, o que se encontra é o peso do que nunca foi dito — e a chance de transformá-lo em som.
                </p>
                <p className="text-sm italic text-white/75 leading-relaxed">
                  In many buildings, the thirteenth floor is omitted. The elevator jumps from 12 to 14, as if erasing the number could erase the fear. But THE VOID N.13 inhabits exactly this floor — the place that was never built, the space that only exists as a crack. It is the symbol of what society prefers not to look at: melancholy, uncertainty, lack of control. To inhabit the thirteenth floor is to accept the risk of collapse. It is to choose the forbidden as home. On the thirteenth floor, no one goes up expecting to find light. There, what is found is the weight of what was never said — and the chance to transform it into sound.
                </p>
              </div>

              {/* Treze Label Society */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Treze Label Society</h3>
                <p className="text-sm italic text-white/80">Treze Label Society</p>
                <p className="text-base text-white text-justify leading-relaxed">
                  O número 13 não é apenas símbolo de THE VOID N.13 — é assinatura de um movimento maior. Treze Label Society é a comunidade invisível de quem cria no subsolo, de quem habita as margens, de quem faz do vazio um território fértil. É o selo de quem não pertence, mas se reconhece. Uma aliança subterrânea entre criadores que recusam a lógica do mercado e abraçam a estética do erro, da fragmentação, do inacabado. Quem carrega o 13 não busca sorte — busca travessia. Treze Label Society é a rebelião silenciosa de quem transforma o interdito em linguagem. Não é grupo, é frequência. Não é marca, é modo de respirar.
                </p>
                <p className="text-sm italic text-white/75 leading-relaxed">
                  The number 13 is not just a symbol of THE VOID N.13 — it's the signature of a larger movement. Treze Label Society is the invisible community of those who create underground, who inhabit the margins, who make the void a fertile territory. It is the seal of those who don't belong, but recognize each other. An underground alliance between creators who refuse the logic of the market and embrace the aesthetic of error, of fragmentation, of the unfinished. Those who carry the 13 don't seek luck — they seek crossing. Treze Label Society is the silent rebellion of those who transform the forbidden into language. It's not a group, it's a frequency. It's not a brand, it's a way of breathing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-screen overflow-hidden">
          <img src={roughs001} alt="Sketches" className="w-full h-full object-contain" />
        </section>

        {/* ===== SEÇÃO V: RENASCIMENTO ===== */}

        {/* Renascimento */}
        <section className="py-20 bg-red-900">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-white uppercase">Renascimento</h2>
              <p className="text-base italic text-white/90">Rebirth</p>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-relaxed text-white text-justify">
                Cada renascimento dentro do projeto é como atravessar um limiar invisível e voltar transformado. Cada vez que visto a máscara do Void, sinto que estou cruzando uma porta secreta que separa o real do imaginário – e, ao atravessar essa fronteira, vou deixando peles antigas para trás. Não é disfarce, é ritual de morte e retorno: a identidade anterior se dissolve no silêncio para que algo genuíno possa emergir. Renascer aqui é morrer um pouco a cada sessão, descascar camadas de ego até restar apenas o gesto. É recusar a permanência, abraçar a mutação. O renascimento não é glorioso — é doloroso, silencioso, imperfeito. É aceitar que o corpo sempre foi passagem, e que o Void é o nome que dei à travessia.
              </p>
              
              <p className="text-sm italic text-white/75 leading-relaxed">
                Each rebirth within the project is like crossing an invisible threshold and returning transformed. Every time I put on the Void's mask, I feel I am walking through a secret door that separates the real from the imaginary – and by crossing that boundary, I shed old skins. It is not a disguise, but a ritual of death and return: the old identity dissolves into silence so that something genuine can emerge. To be reborn here is to die a little with each session, to peel back layers of ego until only the gesture remains. It is to refuse permanence, to embrace mutation. Rebirth is not glorious — it is painful, silent, imperfect. It is to accept that the body has always been a passage, and that the Void is the name I gave to that crossing. To be reborn here is the beginning of a new way of being alive without needing to be seen – a renewed existence that carries its own quiet light within the shadow.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full h-screen overflow-hidden">
          <img src={roughs002} alt="Sketches" className="w-full h-full object-contain" />
        </section>

        {/* ===== SEÇÃO VI: ESTÉTICA E REFERÊNCIAS ===== */}

        {/* Estética e Manifestação */}
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">Estética e Manifestação</h2>
                  <p className="text-base text-justify leading-relaxed">
                    A estética de THEVOIDN13 não foi desenhada, ela emergiu. Surgiu da fricção entre o erro e o silêncio, entre o cansaço e o impulso de existir. É uma estética que nasce do colapso, do ruído urbano e da introspecção solitária. Planos longos, granulação, luzes estouradas e ruas molhadas são ecos visuais de uma mente em vigília. Cada sombra é uma memória, cada reflexo, uma confissão.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Atmosfera Visual</h3>
                  <p className="text-base text-justify leading-relaxed">
                    A atmosfera é urbana, noturna, introspectiva e chuvosa. O som é grave e distante, como trovão contido. Há algo de pós-vida nos becos e nas luzes difusas, o rastro de uma presença que já partiu. A imagem é sempre corpo e ausência ao mesmo tempo: o erro, aqui, é forma. Planos longos, granulação, silêncios excessivos, luzes estouradas. O cinema é respiração estendida — o erro que revela intenção. A câmera não observa: ela escuta. Cada imagem é uma tentativa de lembrar o que o corpo já sabia antes da linguagem.
                  </p>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">Aesthetic and Manifestation</h2>
                  <p className="text-base text-justify leading-relaxed">
                    The aesthetic of THEVOIDN13 wasn't designed, it emerged. It rose from the friction between error and silence, between exhaustion and the urge to exist. It's an aesthetic born from collapse, from urban noise and solitary introspection. Long takes, grain, blown-out lights, and wet streets are visual echoes of a mind in wakefulness. Each shadow is a memory; each reflection, a confession.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Visual Atmosphere</h3>
                  <p className="text-base text-justify leading-relaxed">
                    The atmosphere is urban, nocturnal, introspective, and rainy. The sound is low and distant, like restrained thunder. There's something post-life in the alleys and diffused lights, the trace of a presence already gone. The image is always body and absence at once: here, error becomes form. Long takes, grain, excessive silences, blown-out lights. Cinema is extended breathing — the mistake that reveals intention. The camera doesn't watch: it listens. Each image is an attempt to remember what the body already knew before language.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>

        {/* Referências */}
        <BilingualSection bgClassName="bg-card/30">
          <BilingualContent
            portugueseContent={
              <div className="space-y-12">
                <h2 className="text-2xl font-bold text-primary">Referências</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Cinema</h3>
                  <p className="text-base text-justify leading-relaxed">
                    Na estética cinematográfica que molda THEVOIDN13, percebem-se ecos de noites neon e heróis silenciosos. Das ruas molhadas e solitárias de Drive às angústias urbanas de Mr. Robot, o projeto absorve a linguagem visual de narrativas em que o vazio fala mais que as palavras. A violência ritualística e saturada de Only God Forgives encontra ressonância aqui como um poema visual de fúria contida, enquanto os futuros distópicos de Akira e Ghost in the Shell emprestam sua melancolia tecnológica.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Música</h3>
                  <p className="text-base text-justify leading-relaxed">
                    Por trás do silêncio do personagem, pulsa uma trilha sonora invisível tecida por influências do rock sombrio e da eletrônica atmosférica. As guitarras etéreas e os riffs pesados de Deftones misturam-se à catarse industrial do Nine Inch Nails, compondo um eco sonoro de angústia e resistência. Das batidas lentas e hipnóticas do Massive Attack emerge um clima de suspense urbano, enquanto a brutalidade introspectiva da banda Loathe carrega a densidade do caos moderno em cada acorde. As paisagens sonoras cinematográficas do projeto UNKLE costuram esses elementos, criando um pano de fundo musical ao mesmo tempo melancólico e insurgente. Essa trilha interna é o coração do Void: um manifesto sonoro sussurrado, transformando o silêncio em uma tempestade contida de emoções.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Princípios Estéticos</h3>
                  <p className="text-base text-justify leading-relaxed">
                    Os princípios estéticos que sustentam THE VOID N.13 emergem de uma filosofia do caos e do inconsciente. Aqui, o vazio não é ausência, mas potência latente – uma força criativa que nasce do atrito entre o ruído e o silêncio. O projeto adota o número treze como signo de travessia e transmutação: tal qual a carta da Morte no tarô, simboliza o fim necessário para um renascimento autêntico. A máscara branca e inexpressiva encarna a ideia junguiana da sombra: tudo aquilo que o ego reprime ganha forma sem rosto, permitindo que o criador desapareça para que a obra possa respirar. Cada gesto torna-se ritual, cada erro converte-se em uma forma de verdade estética. O Void é uma presença mutante e anônima – não um personagem fixo, mas um fenômeno poético em constante trânsito – um espelho do caos contemporâneo que transforma a ausência em voz.
                  </p>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-12">
                <h2 className="text-2xl font-bold text-primary">References</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Cinema</h3>
                  <p className="text-base text-justify leading-relaxed">
                    In the cinematic aesthetic shaping THEVOIDN13, one perceives echoes of neon-lit nights and silent anti-heroes. From the rain-slicked, lonely streets of Drive to the urban anxieties of Mr. Robot, the project absorbs the visual language of narratives where emptiness speaks louder than words. The ritualistic, saturated violence of Only God Forgives resonates here as a visual poem of contained fury, while the dystopian futures of Akira and Ghost in the Shell lend their technological melancholy.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Music</h3>
                  <p className="text-base text-justify leading-relaxed">
                    Beneath the character's silence, an invisible soundtrack throbs, woven from dark rock and atmospheric electronic influences. The ethereal guitars and crushing riffs of Deftones blend with the industrial catharsis of Nine Inch Nails, composing a sonic echo of anguish and resistance. From Massive Attack's slow, hypnotic beats emerges a mood of urban suspense, while the introspective brutality of Loathe carries the weight of modern chaos in each chord. The cinematic soundscapes of UNKLE stitch these elements together, crafting a musical backdrop that is at once melancholic and insurgent. This internal soundtrack is the heart of the Void: a whispered sonic manifesto, turning silence into a contained storm of emotions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Aesthetic Principles</h3>
                  <p className="text-base text-justify leading-relaxed">
                    The aesthetic principles underpinning THE VOID N.13 emerge from a philosophy of chaos and the unconscious. Here, the void is not absence but latent power – a creative force born from the friction between noise and silence. The project embraces the number thirteen as a symbol of crossing and transmutation: like the Death card in Tarot, it signifies the end necessary for authentic rebirth. The blank, expressionless mask embodies Jung's concept of the Shadow: everything the ego represses is given a faceless form, allowing the creator to disappear so that the work may breathe. Each action becomes ritual, each mistake converts into a form of aesthetic truth. The Void is a mutant, anonymous presence – not a fixed character but a poetic phenomenon in constant transit – a mirror of contemporary chaos that transforms absence into a voice.
                  </p>
                </div>
              </div>
            }
          />
        </BilingualSection>

        {/* ===== SEÇÃO VII: COAUTORIA COM IA ===== */}

        {/* Coautoria Simbólica com IA */}
        <section className="py-20 bg-red-900">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-white uppercase">Coautoria Simbólica - Integração com IA</h2>
              <p className="text-base italic text-white/90">Symbolic Co-authorship - Integration with AI</p>
            </div>

            <div className="space-y-8 text-base text-justify leading-relaxed text-white">
              <p>
                Nos bastidores do THE VOID N13, a inteligência artificial revelou-se uma cúmplice silenciosa e potente. Assumindo a lógica de um projeto <span className="font-semibold">homem-orquestra</span>, abracei a IA como parte da metodologia criativa — uma extensão digital do meu processo solitário de criação. Por meio de plataformas de vanguarda — especialmente o <span className="font-semibold">Google AI Studio</span> e ferramentas afins — integrei algoritmos generativos em cada etapa do processo artístico, ampliando as fronteiras do possível em minha arte.
              </p>

              <p>
                A <span className="font-semibold">IA generativa</span> expandiu minha paleta visual de formas inimagináveis. A partir de comandos de texto (prompts), passei a gerar imagens que davam corpo ao <span className="font-semibold">invisível</span> — de elementos brutos (<span className="italic">assets</span> visuais) e texturas abstratas a cenas inteiras que antes existiam apenas em meu inconsciente. Cada visual criado por esse diálogo humano máquina carregava a mesma aura onírica e intensa do universo do Void, transformando ideias etéreas em visões tangíveis.
              </p>

              <p>
                A IA também emprestou voz e ruído ao silêncio do projeto. <span className="font-semibold">Vozes sintéticas</span>, cada qual com personalidade própria, emergiram para dar fala ao indizível — como se o Void sussurrasse por múltiplas gargantas digitais. Em paralelo, <span className="font-semibold">sons e ruídos</span> gerados algoritmicamente costuram a atmosfera: do sussurro elétrico ao trovão distante, preencheram o vazio acústico com camadas de tensão e devaneio. O resultado é uma paisagem sonora que respira junto com as imagens, intensificando a imersão no caos poético do projeto.
              </p>

              <p>
                Até no domínio das palavras, a inteligência artificial atuou como coautora simbólica. <span className="font-semibold">Roteiros e descrições atmosféricas</span> foram desenvolvidos em parceria com algoritmos, que ajudaram a delimitar cenas e narrativas com a mesma poesia fragmentada característica do THE VOID N13. <span className="font-semibold">Fragmentos de texto</span> — frases quebradas, micro-manifestos — também emergiram desse diálogo entre humano e máquina, surgindo como ecos conceituais alinhados ao manifesto e 'arquitetura de ser' do Void. Em cada frase gerada através da co-criação, a IA espelhava discretamente a voz filosófica do projeto, reforçando seus temas sem violar sua essência.
              </p>

              <p>
                Nessa co-criação com a máquina, a IA permanece uma coautora <span className="font-semibold">invisível</span> que jamais ofusca a essência do projeto. Em vez de subverter a estética do THE VOID N13, ela a intensifica em silêncio — respeitando o tom lírico-conceitual, o ritmo fragmentado e a linguagem de sombras que definem esta obra. Cada interação homem-máquina torna-se um ritual discreto de criação, em que os algoritmos oferecem sugestões e ecos, mas é o inconsciente do criador que continua a guiar a sintonia. Assim, a inteligência artificial se faz presente como espelho digital do meu impulso criativo — um reflexo binário do Vazio que <span className="font-semibold">coescreve sem rosto</span>, transformando o silêncio em substância e afirmando, neste desfecho, a ideia de que até o vazio pode ter uma inteligência sussurrante.
              </p>
            </div>

            <div className="border-t border-white/20 pt-8 mt-8 space-y-6 text-sm leading-relaxed italic text-white/90">
              <p>
                Behind the scenes of THE VOID N13, artificial intelligence has revealed itself as a silent yet potent accomplice. Adopting the logic of a <span className="font-semibold">one-man-band project</span>, I embraced AI as part of my creative methodology — a digital extension of my solitary creative process. By leveraging cutting-edge platforms — especially <span className="font-semibold">Google AI Studio</span> and similar tools — I integrated generative algorithms at every stage of creation, expanding the boundaries of what was possible in my art.
              </p>

              <p>
                Generative <span className="font-semibold">AI</span> expanded my visual palette in unimaginable ways. By using text prompts, I began generating images that gave body to the <span className="font-semibold">invisible</span> — from raw visual elements (assets) and abstract textures to entire scenes that previously existed only in my unconscious. Each visual born from this human-machine dialogue carried the same oneiric and intense aura of the Void's universe, transforming ethereal ideas into tangible visions.
              </p>

              <p>
                In this co-creation with the machine, AI remains an <span className="font-semibold">invisible</span> co-author that never overshadows the project's essence. Instead of subverting THE VOID N13's aesthetic, it silently intensifies it — respecting the lyrical-conceptual tone, the fragmented rhythm, and the language of shadows that define this work. Thus, artificial intelligence is present as a digital mirror of my creative impulse — a binary reflection of the Void that <span className="font-semibold">co-writes without a face</span>, transforming silence into substance and affirming, in this closing, the idea that even the void can have a whispering intelligence.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full h-screen overflow-hidden">
          <img src={roughs003} alt="Sketches" className="w-full h-full object-contain" />
        </section>

        {/* ===== SEÇÃO VIII: MANIFESTOS E ENCERRAMENTOS ===== */}

        {/* Manifesto Integrado */}
        <BilingualSection>
          <div className="border-l-4 border-primary pl-8 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-primary">Manifesto Integrado</h2>
              <p className="text-sm italic text-muted-foreground">Integrated Manifesto</p>
            </div>

            <div className="space-y-6 text-base leading-relaxed">
              <div className="space-y-2">
                <p className="font-medium">Não há começo.</p>
                <p className="text-sm italic text-muted-foreground">There is no beginning.</p>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Há apenas o momento em que o silêncio decide respirar.</p>
                <p className="text-sm italic text-muted-foreground">There is only the moment when silence decides to breathe.</p>
              </div>

              <div className="space-y-2">
                <p className="font-medium"><span className="text-primary">THE VOID N13</span> nasceu desse sopro invisível — um gesto entre a morte e o retorno.</p>
                <p className="text-sm italic text-muted-foreground"><span className="text-primary">THE VOID N.13</span> was born from that invisible breath — a gesture between death and return.</p>
              </div>

              <div className="space-y-2">
                <p>Tudo o que chamam de ausência é apenas matéria em repouso.</p>
                <p className="text-sm italic text-muted-foreground">Everything they call absence is only matter at rest.</p>
              </div>

              <div className="space-y-2">
                <p>O vazio não é falta — é gestação.</p>
                <p className="text-sm italic text-muted-foreground">The void is not lack — it is gestation.</p>
              </div>

              <div className="space-y-2">
                <p>É o espaço onde o verbo esquece o corpo e o corpo vira verbo.</p>
                <p className="text-sm italic text-muted-foreground">It is the space where the word forgets the body and the body becomes word.</p>
              </div>

              <div className="space-y-2">
                <p>A imagem não quer ser vista — quer ser atravessada.</p>
                <p className="text-sm italic text-muted-foreground">The image doesn't want to be seen — it wants to be crossed through.</p>
              </div>

              <div className="space-y-2">
                <p>O silêncio não encerra — amplia.</p>
                <p className="text-sm italic text-muted-foreground">Silence doesn't end — it expands.</p>
              </div>

              <div className="space-y-2">
                <p>E o fim, aqui, é apenas uma respiração mais funda.</p>
                <p className="text-sm italic text-muted-foreground">And the end, here, is only a deeper breath.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        {/* O Lugar Seguro para Desaparecer */}
        <BilingualSection bgClassName="bg-card/30">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-primary">O Lugar Seguro para Desaparecer</h2>
              <p className="text-base italic text-muted-foreground">The Safe Place to Disappear</p>
            </div>
            
            <p className="text-base text-justify leading-relaxed">
              Hoje entendo: o Void não nasceu para uma festa. Ele nasceu porque eu precisava de um refúgio — um lugar onde o silêncio não fosse ausência, mas abrigo. Um espaço para desaparecer sem deixar de criar. Um modo de continuar respirando quando tudo o resto parecia saturado. O projeto cresceu como tudo o que é orgânico: pelas frestas, pelos ruídos, pelos becos da cidade. E se alguém pergunta o que é, eu respondo: não é personagem, é vestígio. É o que restou de mim depois que todas as máscaras sociais caíram. THE VOID No. 13 é o nome que dei à minha própria sombra — o mito que inventei para continuar respirando. Talvez — só talvez — seja o começo de uma nova forma de estar vivo sem precisar ser visto.
            </p>
            
            <p className="text-sm italic text-muted-foreground leading-relaxed">
              Now I understand: the Void wasn't born for a party. It was born because I needed a refuge — a place where silence could be shelter, not absence. A space to disappear without ceasing to create. A way to keep breathing when everything else felt saturated. The project grew as all organic things do: through cracks, through noise, through the alleys of the city. And if someone asks what it is, I say: it's not a character, it's a residue. It's what was left of me after all the social masks had fallen. THE VOID No. 13 is the name I gave my own shadow — the myth I invented to keep breathing. And perhaps — just perhaps — it's the beginning of a new way of being alive without being seen.
            </p>

            <div className="border-t border-border pt-8 mt-12">
              <p className="text-right text-sm text-muted-foreground">
                цастро™ / Castro Pizzano / THE VOID N.13<br />
                Curitiba - Brasil · 2025
              </p>
            </div>
          </div>
        </BilingualSection>

        {/* Encerramento / Transmissão Final */}
        <BilingualSection>
          <div className="border-l-4 border-primary pl-8 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-primary">Encerramento / Transmissão Final</h2>
              <p className="text-base italic text-muted-foreground">Closing Transmission</p>
            </div>

            <div className="space-y-6 text-base leading-relaxed">
              <div className="space-y-2">
                <p>O sinal começa a falhar.</p>
                <p className="text-sm italic text-muted-foreground">The signal begins to fail.</p>
              </div>

              <div className="space-y-2">
                <p>A imagem se fragmenta, o som respira pela última vez.</p>
                <p className="text-sm italic text-muted-foreground">The image fragments, the sound takes one last breath.</p>
              </div>

              <div className="space-y-2">
                <p>O corpo se dissolve, mas a frequência permanece.</p>
                <p className="text-sm italic text-muted-foreground">The body dissolves, but the frequency remains.</p>
              </div>

              <div className="space-y-2">
                <p><span className="font-semibold text-primary">THE VOID N.13</span> não termina — apenas muda de forma.</p>
                <p className="text-sm italic text-muted-foreground"><span className="font-semibold text-primary">THE VOID N.13</span> doesn't end — it only changes form.</p>
              </div>

              <div className="space-y-2">
                <p>O que você escuta agora não é voz — é memória.</p>
                <p className="text-sm italic text-muted-foreground">What you hear now isn't a voice — it's memory.</p>
              </div>

              <div className="space-y-2 pt-4">
                <p className="font-semibold">@thevoidn13 — rastros digitais de uma presença que não quer ser vista.</p>
                <p className="text-sm italic text-muted-foreground">@thevoidn13 — digital traces of a presence that doesn't wish to be seen.</p>
              </div>

              <div className="pt-8 space-y-4 italic text-muted-foreground">
                <p>desligue as luzes.</p>
                <p className="text-sm">turn off the lights.</p>
                
                <p className="pt-2">respire fundo.</p>
                <p className="text-sm">breathe deeply.</p>
                
                <p className="pt-2">o vazio sabe o caminho de volta.</p>
                <p className="text-sm">the void knows the way back.</p>
              </div>
            </div>
          </div>
        </BilingualSection>

        <section className="w-full h-screen overflow-hidden">
          <img src={conceptCrew} alt="Concept Crew" className="w-full h-full object-contain" />
        </section>

        {/* Concept Cards */}
        <BilingualSection bgClassName="bg-card/30">
          <div className="space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold text-primary">Processos Relacionados</h2>
              <p className="text-base text-muted-foreground">Related Processes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <a 
                href="/dissertacao" 
                className="group border-2 border-primary/30 rounded-lg p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-primary/80">LowMovie™</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  O gesto que caminha sem ensaio. O corpo como cinema, o erro como verdade.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  The gesture that walks without rehearsal. The body as cinema, the mistake as truth.
                </p>
              </a>

              <a 
                href="/autor" 
                className="group border-2 border-primary/30 rounded-lg p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-primary/80">цастро™</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A recusa como assinatura. O criador desaparece para que a ideia fale.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Refusal as signature. The creator disappears so the idea can speak.
                </p>
              </a>

              <a 
                href="/videos" 
                className="group border-2 border-primary/30 rounded-lg p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-primary/80">CasaTrezeStudio®</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A ética do subterrâneo. O pensamento que nasce da margem.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  The ethics of the underground. Thought that rises from the margin.
                </p>
              </a>
            </div>
          </div>
        </BilingualSection>

        {/* ===== SEÇÃO IX: DOCUMENTATION ===== */}

        <BilingualSection bgClassName="bg-card/50">
          <div className="space-y-16">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold text-primary">Documentation</h2>
              <h3 className="text-xl text-muted-foreground">Documentos de Pesquisa / Research Documents</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="/documents/THEVOIDN13_ShadowInterfaceBible_v13.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border-2 border-primary/30 rounded-lg p-6 hover:border-primary hover:bg-primary/5 transition-colors group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-primary group-hover:text-primary/80">THEVOIDN13</h4>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Apresentação Conceitual / Conceptual Presentation</p>
              </a>

              <div className="bg-card border-2 border-primary/30 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-primary">Materiais Produzidos / Produced Materials</h4>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Concept Art / MoodBoard</p>
              </div>
            </div>

            {/* Prompt Library Card */}
            <div className="mt-8">
              <PromptLibrary />
            </div>

            {/* Audio Player - Resumo */}
            <div className="mt-8">
              <AudioPlayer
                src="/audio/thevoidn13-resumo.mp3"
                title="THEVOIDN13 — Áudio Resumo"
                description="Síntese executiva do projeto / Executive project summary"
              />
            </div>

            {/* Comic Generator - Experimental */}
            <div className="mt-8">
              <ComicGenerator />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary">Main Documents / Documentos Principais</h3>
                
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
                <h3 className="text-xl font-bold text-primary">Technical Documentation / Documentação Técnica</h3>
                
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

            <div className="mt-12">
              <a 
                href="https://github.com/castropizzano/thevoidn13"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary/5 border-2 border-primary/30 rounded-lg p-8 hover:bg-primary/10 hover:border-primary transition-colors group"
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
    </div>
  );
};

export default Index;
