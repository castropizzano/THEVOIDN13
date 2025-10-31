import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, creativeWorkSchema, personSchema, organizationSchema } from "@/components/SEO";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { PromptLibrary } from "@/components/PromptLibrary";
import { BilingualAudioPlayer } from "@/components/BilingualAudioPlayer";
import { ComicGenerator } from "@/components/ComicGenerator";
import { MindMap } from "@/components/MindMap";
import { CreativeOracle } from "@/components/CreativeOracle";
import { BackToTop } from "@/components/BackToTop";
import { AccessGate } from "@/components/AccessGate";
import { CookieConsent } from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-rain-wide.png";
import voidCityFront from "@/assets/void-city-front.png";
import conceptCrew from "@/assets/concept-crew.png";
import actionFigure from "@/assets/action-figure.png";
import conceptFront from "@/assets/concept-front.png";
import conceptBack from "@/assets/concept-back.png";
import conceptSide from "@/assets/concept-side.png";
import punkFront from "@/assets/punk-front.png";
import punkRear from "@/assets/punk-rear.png";
import punkSide from "@/assets/punk-side.png";
import giFront from "@/assets/gi-front.png";
import giRear from "@/assets/gi-rear.png";
import giSide from "@/assets/gi-side.png";
import voidFront from "@/assets/void-front.png";
import voidRear from "@/assets/void-rear.png";
import voidSide from "@/assets/void-side.png";
import buddyFront from "@/assets/buddy-front.png";
import buddyRear from "@/assets/buddy-rear.png";
import buddySide from "@/assets/buddy-side.png";
import vwgol87Front from "@/assets/vwgol87-front.png";
import vwgol87Rear from "@/assets/vwgol87-rear.png";
import vwgol87Side from "@/assets/vwgol87-side.png";
import roughs000 from "@/assets/roughs-000.png";
import roughs001 from "@/assets/roughs-001.png";
import roughs002 from "@/assets/roughs-002.png";
import roughs003 from "@/assets/roughs-003.png";
import meditationScene from "@/assets/meditation-scene.png";
import meditationRainScene from "@/assets/meditation-rain-scene.png";
import maskVoid from "@/assets/mask-void.png";
import voidStreetScene from "@/assets/void-street-scene.png";
import logoWhiteAlpha from "@/assets/logo-white-alpha.png";
import paradoxRender from "@/assets/paradox-render.png";
import fallRender from "@/assets/fall-render.png";
import maskStudy from "@/assets/mask-study.png";
import meditationRender from "@/assets/meditation-render.png";
import mirrorRender from "@/assets/mirror-render.png";
import thinkRender from "@/assets/think-render.png";
import maskVoidNew from "@/assets/mask-void-new.png";
import voidLogoVisual from "@/assets/void-logo-visual.png";
import golRender from "@/assets/gol-render.png";
import lovecityRender from "@/assets/lovecity-render.png";
import hotelRender from "@/assets/hotel-render.png";
import gol2Render from "@/assets/gol2-render.png";

const Index = () => {
  const [oracleOpen, setOracleOpen] = useState(false);
  const [hasAccess, setHasAccess] = useState(() => {
    return localStorage.getItem("thevoidn13_access_granted") === "true";
  });
  
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [creativeWorkSchema, personSchema, organizationSchema]
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* {!hasAccess && <AccessGate onAccessGranted={() => setHasAccess(true)} />} */}
      <CookieConsent />
      <SEO 
        title="THEVØIDN13 — Shadow Interface Bible v13 | Castro Pizzano"
        description="A Bíblia Definitiva — Um corpo à deriva entre o ruído e o silêncio. Práxis híbrida explorando sombra, silêncio, ruído e vazio através de co-criação humano-máquina."
        schemaData={schemaData}
      />
      <Header />
      <CreativeOracle open={oracleOpen} onOpenChange={setOracleOpen} />
      <BackToTop />
      
      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="w-full h-screen overflow-hidden">
          <img src={heroImage} alt="THEVØIDN13 — Shadow Interface Bible v13" className="w-full h-full object-contain" />
        </section>

        {/* ===== SUBTITLE ===== */}
        <BilingualSection className="py-12">
          <div className="text-center">
            <h2 className="subsection-title">
              [Um corpo à deriva entre o ruído e o silêncio]
            </h2>
            <h2 className="subsection-title mt-2">
              [A body adrift between noise and silence]
            </h2>
          </div>
        </BilingualSection>

        {/* ===== VIDEO SECTION ===== */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 space-y-6">
            <video 
              className="w-full aspect-video bg-black rounded-lg overflow-hidden"
              controls
              playsInline
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* ===== INÍCIO DA TRANSMISSÃO ===== */}
        <BilingualSection>
          <div className="text-center mb-16">
            <p className="micro-title">[INÍCIO DA TRANSMISSÃO]</p>
          </div>
        </BilingualSection>

        {/* ===== PARADOX RENDER ===== */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <img 
              src={paradoxRender} 
              alt="THEVØIDN13 — Paradox Render" 
              className="w-full rounded-lg"
            />
          </div>
        </section>

        {/* ===== AUDIO PLAYER ===== */}
        <section className="py-12 bg-card/30">
          <div className="max-w-6xl mx-auto px-6">
            <BilingualAudioPlayer
              srcPt="/audio/thevoidn13-manifesto-pt.mp3"
              srcEn="/audio/thevoidn13-manifesto-en.mp3"
              title="THEVØIDN13 | INTRO"
              description="Narração conceitual do projeto / Conceptual project narration"
            />
          </div>
        </section>

        {/* ===== MANIFESTO INTEGRADO ===== */}
        <BilingualSection>
          <h2 className="section-title mb-12">MANIFESTO INTEGRADO</h2>
          
          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Não há começo, há apenas o instante em que o silêncio decide respirar, THEVØIDN13 nasceu desse sopro invisível, um gesto entre a morte e o retorno, tudo o que chamam de ausência é apenas matéria em repouso, o vazio não é falta, é incubação de forma, é o espaço onde o verbo esquece o corpo e o corpo se converte em verbo, a imagem não quer ser vista, quer ser atravessada, o silêncio não encerra, expande, e o fim, aqui, é apenas uma respiração mais funda.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  There is no beginning, there is only the instant when silence decides to breathe, THEVØIDN13 was born from that invisible breath, a gesture between death and return, everything they call absence is only matter at rest, the void is not lack, it is incubation of form, it is the space where the word forgets the body and the body becomes word, the image doesn't want to be seen, it wants to be crossed through, silence doesn't end, it expands, and the end, here, is only a deeper breath.
                </p>
              </div>
            }
          />
        </BilingualSection>

        {/* ===== FALL RENDER ===== */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <img 
              src={fallRender} 
              alt="THEVØIDN13 — Fall Render" 
              className="w-full rounded-lg"
            />
          </div>
        </section>

        {/* ===== 1. ORIGEM E PROPÓSITO ===== */}
        <BilingualSection>
          <h2 className="section-title mb-12">1. ORIGEM E PROPÓSITO</h2>
          
          <h3 className="subsection-title mb-8">1.1 O LUGAR SEGURO PARA DESAPARECER</h3>
          <h3 className="subsection-title mb-8">1.1 THE SAFE PLACE TO DISAPPEAR</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Hoje entendo, o THEVØIDN13 não nasceu para uma festa, nasceu porque eu precisava de um refúgio, um lugar onde o silêncio não fosse ausência, mas abrigo, um espaço para desaparecer sem deixar de criar, um modo de continuar respirando quando tudo o resto parecia saturado, o projeto cresceu como tudo o que é orgânico, pelas frestas, pelos ruídos, pelos becos da cidade, e se alguém pergunta o que é, eu respondo, não é personagem, é vestígio, é o que restou de mim depois que todas as máscaras sociais caíram, THEVØIDN13 é o nome que dei à minha própria sombra, o mito que inventei para continuar respirando, talvez, só talvez, seja o começo de uma nova forma de estar vivo sem precisar ser visto.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Today I understand, THEVØIDN13 was not born for a party, it was born because I needed a refuge, a place where silence was not absence but shelter, a space to disappear without ceasing to create, a way to keep breathing when everything else seemed saturated, the project grew like everything organic, through cracks, through noise, through city alleys, and if someone asks what it is, I answer, it is not a character, it is a trace, it is what remained of me after all social masks fell, THEVØIDN13 is the name I gave to my own shadow, the myth I invented to keep breathing, perhaps, just perhaps, it is the beginning of a new way of being alive without needing to be seen.
                </p>
              </div>
            }
          />

          {/* ===== THINK RENDER ===== */}
          <div className="my-12">
            <img 
              src={thinkRender} 
              alt="THEVØIDN13 — Contemplation" 
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>

          <h3 className="subsection-title mt-12 mb-8">1.2 QUANDO O INCONSCIENTE GANHA CORPO</h3>
          <h3 className="subsection-title mb-8">1.2 WHEN THE UNCONSCIOUS GAINS BODY</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Não foi uma fantasia, foi um retorno, um desses chamados que vêm de dentro, quando o inconsciente começa a bater na pele pedindo passagem, pensei em inventar uma máscara e acabei revelando um rosto que sempre esteve ali, THEVØIDN13 surgiu do atrito entre o desejo e o cansaço, entre o fim da forma e o começo da presença, não é personagem nem alter ego, é uma presença que respira onde o corpo falha, um modo de existir sem precisar se exibir, respirar sem ter que performar, um corpo que se apaga para deixar a imagem viver, o instante em que o inconsciente decide existir.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  It was not a fantasy, it was a return, one of those calls that come from within, when the unconscious begins to knock on the skin asking for passage, I thought I was inventing a mask and ended up revealing a face that was always there, THEVØIDN13 emerged from the friction between desire and exhaustion, between the end of form and the beginning of presence, it is neither character nor alter ego, it is a presence that breathes where the body fails, a way of existing without needing to exhibit oneself, breathing without having to perform, a body that fades to let the image live, the instant when the unconscious decides to exist.
                </p>
              </div>
            }
          />

          {/* ===== MEDITATION RENDER ===== */}
          <div className="my-12">
            <img 
              src={meditationRender} 
              alt="THEVØIDN13 — Meditation Render" 
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>
        </BilingualSection>

        {/* ===== 2. FILOSOFIA CENTRAL ===== */}
        <BilingualSection>
          <h2 className="section-title mb-12">2. FILOSOFIA CENTRAL (A SOMBRA ENCARNADA)</h2>
          <h2 className="section-title mb-12">2. CENTRAL PHILOSOPHY (THE EMBODIED SHADOW)</h2>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  THEVØIDN13 é o décimo terceiro andar do inconsciente, um espaço entre mundos, onde o ego se apaga para que a imagem respire, não é personagem nem avatar, é um estado de travessia, não é um ser, é um ritmo, a forma que o inconsciente assume para respirar no ruído da cidade, existe para absorver, não para reagir, sua ética é a do silêncio, uma recusa ativa da autoafirmação, The Void é o nome que restou depois que todos os outros já morreram, o número treze é a assinatura do que retorna depois do fim.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  THEVØIDN13 is the thirteenth floor of the unconscious, a space between worlds, where the ego fades so the image can breathe, it is neither character nor avatar, it is a state of crossing, it is not a being, it is a rhythm, the form the unconscious assumes to breathe in the noise of the city, it exists to absorb, not to react, its ethic is that of silence, an active refusal of self-affirmation, The Void is the name that remained after all others had died, thirteen is the signature of what returns after the end.
                </p>
              </div>
            }
          />

          {/* ===== MIRROR RENDER ===== */}
          <div className="my-12">
            <img 
              src={mirrorRender} 
              alt="THEVØIDN13 — Mirror Reflection" 
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>
        </BilingualSection>

        {/* ===== 3. A ENTIDADE: THEVØIDN13 ===== */}
        <BilingualSection>
          <h2 className="section-title mb-12">3. A ENTIDADE: THEVØIDN13</h2>
          <h2 className="section-title mb-12">3. THE ENTITY: THEVØIDN13</h2>

          <h3 className="subsection-title mb-8">3.1 FUNÇÃO SIMBÓLICA</h3>
          <h3 className="subsection-title mb-8">3.1 SYMBOLIC FUNCTION</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  A função simbólica de THEVØIDN13 é dar corpo ao invisível, traduzir o silêncio em gesto, o inconsciente em imagem, ele é o espelho do caos contemporâneo, um ser que surge quando o verbo deixa de fazer sentido, sua presença não explica, convoca, THEVØIDN13 é o instante em que o erro se torna ritual e o colapso, criação.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  The symbolic function of THEVØIDN13 is to give body to the invisible, to translate silence into gesture, the unconscious into image, it is the mirror of contemporary chaos, a being that appears when the word ceases to make sense, its presence does not explain, it summons, THEVØIDN13 is the instant when error becomes ritual and collapse becomes creation.
                </p>
              </div>
            }
          />

          <h3 className="subsection-title mt-12 mb-8">3.2 ARQUÉTIPO E NATUREZA</h3>
          <h3 className="subsection-title mb-8">3.2 ARCHETYPE AND NATURE</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  THEVØIDN13 encarna a sombra junguiana, não como vilão, mas como espelho do que foi reprimido, é o corpo caminhando entre a razão e o delírio, entre o controle e o colapso, sua natureza é liminar, existe no intervalo entre o som e o silêncio, entre o gesto e o pensamento, é o errante, o que não pertence a lugar algum, e o redentor subterrâneo.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  THEVØIDN13 embodies the Jungian shadow, not as a villain, but as a mirror of what has been repressed, it is the body walking between reason and delirium, between control and collapse, its nature is liminal, existing in the interval between sound and silence, between gesture and thought, it is the wanderer, the one who belongs nowhere, and the subterranean redeemer.
                </p>
              </div>
            }
          />

          <h3 className="subsection-title mt-12 mb-8">3.3 A MÁSCARA | CEDER ESPAÇO AO INCONSCIENTE</h3>
          <h3 className="subsection-title mb-8">3.3 THE MASK | YIELDING SPACE TO THE UNCONSCIOUS</h3>

          <div className="my-12">
            <img 
              src={maskVoidNew} 
              alt="A máscara de THEVØIDN13 — The mask of THEVØIDN13" 
              className="w-full max-w-2xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  A máscara veio antes do nome, grafite, texturizada, silenciosa, não era uma face, era a topografia do silêncio, quando a olhei pela primeira vez percebi que ela não me olhava de volta, talvez fosse isso o que eu buscava, existir sem precisar me afirmar, quando a vesti o rosto deixou de importar, o espelho não devolveu imagem, apenas peso, foi nesse instante que compreendi, não estava criando um personagem, mas cedendo espaço, ceder espaço ao inconsciente, deixar que ele assumisse forma, a máscara é o pacto entre o que se apaga e o que retorna, o instante em que o corpo permite ser atravessado por algo maior do que ele mesmo.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  The mask came before the name, graphite, textured, silent, it was not a face, it was the topography of silence, when I looked at it for the first time I realized it did not look back at me, perhaps that was what I was seeking, to exist without needing to assert myself, when I wore it the face ceased to matter, the mirror returned no image, only weight, it was in that moment I understood, I was not creating a character, I was yielding space, yielding space to the unconscious, letting it take shape, the mask is the pact between what fades and what returns, the instant when the body allows itself to be crossed by something greater than itself.
                </p>
              </div>
            }
          />

          <h3 className="subsection-title mt-12 mb-8">3.4 O PERSONAGEM</h3>
          <h3 className="subsection-title mb-8">3.4 THE CHARACTER</h3>

          <div className="grid grid-cols-3 gap-6 my-12">
            <img src={conceptFront} alt="THEVØIDN13 Front View" className="w-full rounded-lg" />
            <img src={conceptBack} alt="THEVØIDN13 Back View" className="w-full rounded-lg" />
            <img src={conceptSide} alt="THEVØIDN13 Side View" className="w-full rounded-lg" />
          </div>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  THEVØIDN13 é uma entidade conceitual que habita o intervalo entre presença e ausência, não é pessoa, não é símbolo, é o corpo da indefinição, a forma que o inconsciente assume quando precisa de voz, surgiu como resposta ao ruído da autoafirmação, à ansiedade de ser visto, é silêncio vestido de som, sombra travestida de corpo, existe para desaparecer, retornar transformado e desestabilizar qualquer gesto que se afirme com certeza, THEVØIDN13 é um duplo simbólico, uma presença fantasmagórica que atravessa o cotidiano e revela o que se esconde sob a superfície do comum.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  THEVØIDN13 is a conceptual entity that inhabits the interval between presence and absence, it is neither person nor symbol, it is the body of indefinition, the form the unconscious assumes when it needs a voice, it emerged as a response to the noise of self-affirmation, to the anxiety of being seen, it is silence dressed in sound, shadow disguised as body, it exists to disappear, to return transformed and to destabilize any gesture that asserts itself with certainty, THEVØIDN13 is a symbolic double, a ghostly presence that crosses the everyday and reveals what hides beneath the surface of the ordinary.
                </p>
              </div>
            }
          />

          <h3 className="subsection-title mt-12 mb-8">3.5 IDENTIDADE VISUAL: A SOMBRA JUNGUIANA</h3>
          <h3 className="subsection-title mb-8">3.5 VISUAL IDENTITY: THE JUNGIAN SHADOW</h3>

          {/* ===== VOID LOGO VISUAL ===== */}
          <div className="my-12">
            <img 
              src={voidLogoVisual} 
              alt="THEVØIDN13 — Visual Identity" 
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  A máscara é o espelho do que o ego não sustenta, a sombra emerge como forma, não como disfarce, cada peça do vestígio, o casaco, o capuz, o passo, é um gesto de retorno, o corpo não atua, ele escuta o que o inconsciente quer dizer, o figurino é a tradução da psique em matéria, um corpo ritual criado para se tornar passagem, a indumentária deixa de ser proteção e se torna revelação, é o inconsciente vestindo o mundo, transformando o corpo em canal e a presença em linguagem, THEVØIDN13 não é um personagem, é o lugar onde o criador se dissolve para que a imagem respire.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  The mask is the mirror of what the ego cannot hold, the shadow emerges as form, not as disguise, each trace, the jacket, the hood, the step, is a gesture of return, the body does not act, it listens to what the unconscious wants to say, the attire is the psyche translated into matter, a ritual body created to become a passage, clothing ceases to protect and begins to reveal, it is the unconscious dressing the world, turning the body into a channel and presence into language, THEVØIDN13 is not a character, it is the place where the creator dissolves so the image can breathe.
                </p>
              </div>
            }
          />
        </BilingualSection>

        {/* ===== 4. A PSIQUE | ARQUITETURA DO SER ===== */}
        <BilingualSection>
          <h2 className="section-title mb-12">4. A PSIQUE | ARQUITETURA DO SER</h2>
          <h2 className="section-title mb-12">4. THE PSYCHE | ARCHITECTURE OF BEING</h2>

          {/* ===== GOL RENDER ===== */}
          <div className="my-12">
            <img 
              src={golRender} 
              alt="THEVØIDN13 — VW GOL 87 Render" 
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>

          <h3 className="subsection-title mb-8">4.1 A ESTRUTURA DO SER</h3>
          <h3 className="subsection-title mb-8">4.1 THE STRUCTURE OF BEING</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  THEVØIDN13 não tem rosto, tem ritmo, sua existência é feita de pulsos, não de poses, cada gesto nasce do atrito entre o consciente e o que tenta emergir, não se move para expressar, mas para liberar, o corpo é antena, não vitrine, é ali que o inconsciente encontra carne, respiração e peso, um ser que não comunica, ressoa, um corpo que existe apenas para traduzir o invisível em vibração.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  THEVØIDN13 has no face, only rhythm, its existence is made of pulses, not poses, each gesture is born from the friction between the conscious and what tries to emerge, it does not move to express but to release, the body is an antenna, not a showcase, there the unconscious finds flesh, breath and weight, a being that does not communicate, it resonates, a body that exists only to translate the invisible into vibration.
                </p>
              </div>
            }
          />

          <h3 className="subsection-title mt-12 mb-8">4.2 O MANIFESTO DO CORPO</h3>
          <h3 className="subsection-title mb-8">4.2 THE BODY'S MANIFESTO</h3>

          <div className="space-y-12 mt-8">
            <BilingualContent
              portugueseContent={
                <div className="section-spacing">
                  <h4 className="subsection-title mb-4">POSTURA</h4>
                  <p className="body-base text-justified">
                    Neutra, centrada, o corpo como antena, ouvindo a frequência da cidade, ombros baixos, cabeça alinhada, a imobilidade é uma escolha consciente, uma forma de confronto silencioso.
                  </p>
                </div>
              }
              englishContent={
                <div className="section-spacing">
                  <h4 className="subsection-title mb-4">POSTURE</h4>
                  <p className="body-base text-justified">
                    Neutral, centered, the body as an antenna, listening to the city's frequency, shoulders low, head aligned, stillness is a conscious choice, a form of silent confrontation.
                  </p>
                </div>
              }
            />

            <BilingualContent
              portugueseContent={
                <div className="section-spacing">
                  <h4 className="subsection-title mb-4">O GESTO</h4>
                  <p className="body-base text-justified">
                    Cada movimento é um ruído controlado, um eco do que o corpo escuta por dentro, andar é pensar, parar é ouvir, o gesto é a respiração do pensamento, um movimento de exílio e de retorno, THEVØIDN13 não representa, ele encarna a hesitação, o gesto não expressa, ele encarna a hesitação entre o desejo e o cansaço, cada deslocamento é uma forma de escuta, o corpo capta o que a mente silencia.
                  </p>
                </div>
              }
              englishContent={
                <div className="section-spacing">
                  <h4 className="subsection-title mb-4">THE GESTURE</h4>
                  <p className="body-base text-justified">
                    Each movement is a controlled noise, an echo of what the body hears within, to walk is to think, to stop is to listen, gesture is the breath of thought, a movement of exile and return, THEVØIDN13 does not represent, it embodies hesitation, gesture does not express, it embodies the hesitation between desire and exhaustion, every displacement is a form of listening, the body perceives what the mind silences.
                  </p>
                </div>
              }
            />

            <BilingualContent
              portugueseContent={
                <div className="section-spacing">
                  <h4 className="subsection-title mb-4">O OLHAR</h4>
                  <p className="body-base text-justified">
                    Por trás da máscara há silêncio, um olhar que não busca reconhecimento, apenas presença, o olhar não devolve imagem, devolve espelho, é o espaço onde quem vê também está por dentro, o olhar é o fio que costura o visível e o invisível, uma lente que dissolve a fronteira entre sujeito e sombra.
                  </p>
                </div>
              }
              englishContent={
                <div className="section-spacing">
                  <h4 className="subsection-title mb-4">THE GAZE</h4>
                  <p className="body-base text-justified">
                    Behind the mask there is silence, a gaze that seeks no recognition, only presence, the gaze does not return an image, it returns a mirror, it is the space where whoever looks is also seen from within, the gaze is the thread that stitches the visible and the invisible, a lens that dissolves the boundary between subject and shadow.
                  </p>
                </div>
              }
            />

            <BilingualContent
              portugueseContent={
                <div className="section-spacing">
                  <h4 className="subsection-title mb-4">A RESPIRAÇÃO</h4>
                  <p className="body-base text-justified">
                    A respiração é o som que resta quando o verbo morre, é nela que o ser se ancora e desaparece, o ar entra como ruído e sai como silêncio, cada expiração é um micro desaparecimento, um instante de retorno ao nada, respirar é lembrar que o corpo é apenas passagem entre dois mundos, o mundo da carne e o mundo do invisível.
                  </p>
                </div>
              }
              englishContent={
                <div className="section-spacing">
                  <h4 className="subsection-title mb-4">THE BREATHING</h4>
                  <p className="body-base text-justified">
                    Breathing is the sound that remains when the word dies, in it the being anchors itself and vanishes, air enters as noise and leaves as silence, each exhalation is a micro disappearance, a fleeting return to nothingness, to breathe is to remember that the body is only a passage between two worlds, the world of flesh and the world of the unseen.
                  </p>
                </div>
              }
            />

            <BilingualContent
              portugueseContent={
                <div className="section-spacing">
                  <h4 className="subsection-title mb-4">A ATMOSFERA</h4>
                  <p className="body-base text-justified">
                    Tudo vibra em tom noturno, a névoa, o concreto e a solidão elétrica são extensões do corpo, o ambiente não cerca THEVØIDN13, ele o prolonga, a paisagem se torna psique e o silêncio uma presença física, a cidade é o espelho expandido do inconsciente, o lugar onde o corpo desaparece e o espaço respira por ele.
                  </p>
                </div>
              }
              englishContent={
                <div className="section-spacing">
                  <h4 className="subsection-title mb-4">THE ATMOSPHERE</h4>
                  <p className="body-base text-justified">
                    Everything vibrates in a nocturnal tone, the fog, the concrete and the electric loneliness are extensions of the body, the environment does not surround THEVØIDN13, it prolongs him, the landscape becomes psyche and silence a physical presence, the city is the expanded mirror of the unconscious, the place where the body disappears and space breathes for it.
                  </p>
                </div>
              }
            />
          </div>

          <h3 className="subsection-title mt-12 mb-8">4.3 PSICOLOGIA: A SOMBRA COMO LINGUAGEM</h3>
          <h3 className="subsection-title mb-8">4.3 PSYCHOLOGY: SHADOW AS LANGUAGE</h3>

          {/* ===== LOVECITY RENDER ===== */}
          <div className="my-12">
            <img 
              src={lovecityRender} 
              alt="THEVØIDN13 — LOVECITY" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  THEVØIDN13 é sombra, e a sombra é tudo o que o ego não consegue sustentar, Jung dizia que ela não é o mal, é o que ainda não foi vivido, talvez o projeto seja exatamente isso, uma tentativa de viver o que eu vinha evitando, dar forma àquilo que o mundo me ensinou a esconder, a sombra é a memória do que não se permitiu existir, e o cinema, aqui, é o corpo dessa revelação.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  THEVØIDN13 is shadow, and the shadow is everything the ego cannot sustain, Jung said it is not evil, it is what has not yet been lived, perhaps this project is exactly that, an attempt to live what I had been avoiding, to give form to what the world had taught me to hide, the shadow is the memory of what was never allowed to exist, and cinema, here, is the body of that revelation.
                </p>
              </div>
            }
          />
        </BilingualSection>

        {/* ===== 5. LÉXICO DO VAZIO ===== */}
        <BilingualSection>
          <h2 className="section-title mb-12">5. LÉXICO DO VAZIO</h2>
          <h2 className="section-title mb-12">5. LEXICON OF THE VOID</h2>

          <div className="space-y-12">
            <BilingualContent
              portugueseContent={
                <div className="section-spacing">
                  <h3 className="subsection-title mb-4">SOMBRA</h3>
                  <p className="body-base text-justified">
                    A sombra é o que o ego reprime, é onde mora o desejo sem permissão, o pensamento que não coube, não é monstruosa, é inédita, revelá la é aceitar que o ser é maior que a consciência, o void nasce ali, onde a forma aceita se desfazer.
                  </p>
                </div>
              }
              englishContent={
                <div className="section-spacing">
                  <h3 className="subsection-title mb-4">SHADOW</h3>
                  <p className="body-base text-justified">
                    The shadow is what the ego represses, it is where forbidden desire resides, the thought that did not fit, it is not monstrous, it is unprecedented, to reveal it is to accept that being is greater than consciousness, the void is born there, where form accepts dissolution.
                  </p>
                </div>
              }
            />

            <BilingualContent
              portugueseContent={
                <div className="section-spacing">
                  <h3 className="subsection-title mb-4">SILÊNCIO</h3>
                  <p className="body-base text-justified">
                    O silêncio não é ausência de som, é o espaço onde o pensamento ainda vibra sem palavra, no silêncio o corpo ouve, é ali que o inconsciente fala, não em voz, mas em pressão, em peso, em pausa, o silêncio do void é denso como concreto e afiado como vidro.
                  </p>
                </div>
              }
              englishContent={
                <div className="section-spacing">
                  <h3 className="subsection-title mb-4">SILENCE</h3>
                  <p className="body-base text-justified">
                    Silence is not the absence of sound, it is the space where thought still vibrates wordlessly, in silence the body listens, it is there that the unconscious speaks, not in voice but in pressure, in weight, in pause, the void's silence is dense as concrete and sharp as glass.
                  </p>
                </div>
              }
            />

            <BilingualContent
              portugueseContent={
                <div className="section-spacing">
                  <h3 className="subsection-title mb-4">RUÍDO</h3>
                  <p className="body-base text-justified">
                    O ruído não interrompe o pensamento, ele o revela, o som é a forma mais bruta do inconsciente tentando existir, o que vibra no limite do audível é o que não pode ser dito, o ruído é memória viva daquilo que ainda não encontrou palavra.
                  </p>
                </div>
              }
              englishContent={
                <div className="section-spacing">
                  <h3 className="subsection-title mb-4">NOISE</h3>
                  <p className="body-base text-justified">
                    Noise does not interrupt thought, it reveals it, sound is the rawest form of the unconscious trying to exist, what vibrates at the edge of the audible is what cannot yet be said, noise is the living memory of what has not yet found a word.
                  </p>
                </div>
              }
            />

            <BilingualContent
              portugueseContent={
                <div className="section-spacing">
                  <h3 className="subsection-title mb-4">VAZIO</h3>
                  <p className="body-base text-justified">
                    O vazio não apaga, ele abre, é o espaço onde o silêncio respira e o corpo se reescreve, ali tudo que foi reprimido se reorganiza em nova forma, o vazio é o território fértil da reinvenção, o ponto onde o ser se refaz em presença.
                  </p>
                </div>
              }
              englishContent={
                <div className="section-spacing">
                  <h3 className="subsection-title mb-4">VOID</h3>
                  <p className="body-base text-justified">
                    The void does not erase, it opens, it is the space where silence breathes and the body rewrites itself, there everything that was repressed reorganizes into new form, the void is the fertile ground of reinvention, the point where being remakes itself into presence.
                  </p>
                </div>
              }
            />
          </div>
        </BilingualSection>

        {/* ===== 6. THEVØIDN13 | A GRAFIA DO VAZIO ===== */}
        <BilingualSection>
          <h2 className="section-title mb-12">6. THEVØIDN13 | A GRAFIA DO VAZIO</h2>
          <h2 className="section-title mb-12">6. THEVØIDN13 | THE SPELLING OF THE VOID</h2>

          {/* ===== HOTEL RENDER ===== */}
          <div className="my-12">
            <img 
              src={hotelRender} 
              alt="THEVØIDN13 — HOTEL" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  A letra Ø não é apenas uma escolha estética, é uma declaração simbólica, essa vogal cortada carrega múltiplas camadas de significado que se entrelaçam na construção conceitual do projeto.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  The letter Ø is not just an aesthetic choice, it is a symbolic declaration, this slashed vowel carries multiple layers of meaning that intertwine in the project's conceptual construction.
                </p>
              </div>
            }
          />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8">
              <div>
                <h4 className="subsection-title mb-4">ORIGEM LINGUÍSTICA</h4>
                <p className="body-base text-justified">
                  A letra Ø maiúscula e ø minúscula é uma vogal usada no dinamarquês, norueguês e feroês, derivada do alfabeto rúnico nórdico antigo, representa passagem, interseção, ruptura, perfeita para a ideia de vazio consciente ou identidade negada.
                </p>
              </div>

              <div>
                <h4 className="subsection-title mb-4">MATEMÁTICA & FILOSOFIA</h4>
                <p className="body-base text-justified">
                  O símbolo ∅ representa o conjunto vazio na matemática, ausência de elementos, o nada estruturado, simbolicamente tornou se sinônimo de negação do conteúdo, o espaço potencial onde tudo pode emergir, a base do zero existencial.
                </p>
              </div>

              <div>
                <h4 className="subsection-title mb-4">COMPUTAÇÃO</h4>
                <p className="body-base text-justified">
                  Na era dos mainframes o zero cortado diferenciava a letra O do número zero, tornou se símbolo de precisão, linguagem de máquina e leitura binária, muito usado em design hacker e cultura digital, representa a leitura correta da ausência, o vazio interpretado pela máquina.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="subsection-title mb-4">LINGUISTIC ORIGIN</h4>
                <p className="body-base text-justified">
                  The letter Ø uppercase and ø lowercase is a vowel used in Danish, Norwegian and Faroese, derived from the Old Norse runic alphabet, it represents passage, intersection, rupture, perfect for the idea of conscious void or negated identity.
                </p>
              </div>

              <div>
                <h4 className="subsection-title mb-4">MATHEMATICS & PHILOSOPHY</h4>
                <p className="body-base text-justified">
                  The ∅ symbol represents the empty set in mathematics, absence of elements, structured nothingness, symbolically it became synonymous with the negation of content, the potential space where everything can emerge, the basis of the existential zero.
                </p>
              </div>

              <div>
                <h4 className="subsection-title mb-4">COMPUTATION</h4>
                <p className="body-base text-justified">
                  In the mainframe era the slashed zero differentiated the letter O from the number zero, it became a symbol of precision, machine language and binary reading, widely used in hacker design and digital culture, it represents the correct reading of absence, the void interpreted by the machine.
                </p>
              </div>
            </div>
          </div>

          <h3 className="subsection-title mt-12 mb-8">SÍNTESE SIMBÓLICA</h3>
          <h3 className="subsection-title mb-8">SYMBOLIC SYNTHESIS</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Presente em movimentos de anarquia, música industrial, cyberpunk, moda experimental como Rick Owens e Helmut Lang e no hacktivismo, o Ø é usado como avatar do usuário vazio, sem identidade mas com presença simbólica. Linguística, origem nórdica, letra de ilha, ø significa isolamento, THEVØID como ilha mental, matemática, ausência total, base da criação, o vazio como matriz criativa, tecnológica, distinção entre O e zero, precisão binária, o humano e o sistema, filosófica, a falta que estrutura o desejo segundo Lacan, a sombra que dá forma ao sujeito, estética, símbolo universal de interferência visual, assinatura gráfica da negação e reprogramação do ser.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Present in anarchy movements, industrial music, cyberpunk, experimental fashion such as Rick Owens and Helmut Lang and in hacktivism, the Ø is used as the avatar of the empty user, without identity but with symbolic presence. Linguistic, nordic origin, letter for island, ø means isolation, THEVØID as a mental island, mathematical, total absence, basis of creation, the void as a creative matrix, technological, distinction between O and zero, binary precision, the human and the system, philosophical, the lack that structures desire according to Lacan, the shadow that gives form to the subject, aesthetic, universal symbol of visual interference, graphic signature of negation and reprogramming of the being.
                </p>
              </div>
            }
          />

          <h3 className="subsection-title mt-12 mb-8">REGRA DE GRAFIA</h3>
          <h3 className="subsection-title mb-8">SPELLING RULE</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  A grafia THEVØIDN13 é usada sempre que possível, URLs, códigos técnicos e nomes de arquivos mantêm a forma sem Ø por questões de compatibilidade, mas a identidade visual do projeto se afirma através desse símbolo cortado, o vazio que é plenitude, a ausência que cria presença.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  The THEVØIDN13 spelling is used whenever possible, URLs, technical codes and filenames maintain the form without Ø for compatibility reasons, but the project's visual identity asserts itself through this slashed symbol, the void that is fullness, the absence that creates presence.
                </p>
              </div>
            }
          />
        </BilingualSection>

        {/* ===== 7. O SÍMBOLO | 13 ===== */}
        <BilingualSection>
          <h2 className="section-title mb-12">7. O SÍMBOLO | 13</h2>
          <h2 className="section-title mb-12">7. THE SYMBOL | 13</h2>

          {/* ===== GOL 2 RENDER ===== */}
          <div className="my-12">
            <img 
              src={gol2Render} 
              alt="THEVØIDN13 — VW GOL 87 Interior" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          <h3 className="subsection-title mb-8">7.1 REGISTRO TREZE</h3>
          <h3 className="subsection-title mb-8">7.1 RECORD THIRTEEN</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Ruído estático, registro treze, chove sobre o concreto e dentro de mim, cada batida é um erro que ainda respira, não sou o fim, apenas o eco dele, se ouvir com atenção vai perceber, o silêncio ainda está vivo.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Static noise, record thirteen, it rains on the concrete and inside me, every pulse is a mistake still breathing, I am not the end, only its echo, if you listen closely you will notice, silence is still alive.
                </p>
              </div>
            }
          />

          <h3 className="subsection-title mt-12 mb-8">7.2 A CARTA DA MORTE</h3>
          <h3 className="subsection-title mb-8">7.2 THE DEATH CARD</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  A carta treze do tarô, a morte, ergue sua foice como quem abre caminho em meio ao campo estéril, ceifando o que já não vive para que o novo possa brotar, sua imagem não anuncia um fim definitivo, mas uma transição inevitável, a porta secreta entre um mundo e outro, nessa travessia há uma renúncia silenciosa do ego, antigas identidades desabam como folhas secas, dando lugar a uma verdade mais crua e essencial, o número treze, tantas vezes temido, revela se aqui como emblema dessa metamorfose subversiva, um lembrete de que na morte simbólica reside a semente do renascimento.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  The tarot's thirteenth card, death, raises its scythe like one who clears a path through a barren field, cutting away what no longer lives so the new can take root, its image does not announce a final end but an inevitable transition, the secret door between one world and another, in this crossing there is a silent renunciation of the ego, old identities collapse like dry leaves, giving way to a rawer and more essential truth, the number thirteen, so often feared, reveals itself here as an emblem of subversive metamorphosis, a reminder that within symbolic death lies the seed of rebirth.
                </p>
              </div>
            }
          />

          <h3 className="subsection-title mt-12 mb-8">7.3 O ANDAR INTERDITADO</h3>
          <h3 className="subsection-title mb-8">7.3 THE FORBIDDEN FLOOR</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Em muitos edifícios o décimo terceiro andar é omitido, o elevador salta do doze ao quatorze como se apagar o número pudesse apagar o medo, mas THEVØIDN13 habita exatamente esse andar, o lugar que nunca foi construído, o espaço que só existe como fenda, é o símbolo do que a sociedade prefere não olhar, a melancolia, a incerteza, o descontrole, habitar o décimo terceiro andar é aceitar o risco de desabar, é escolher o interdito como morada, no décimo terceiro andar ninguém sobe esperando encontrar luz, lá o que se encontra é o peso do que nunca foi dito e a chance de transformá lo em som.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  In many buildings the thirteenth floor is omitted, the elevator jumps from twelve to fourteen as if erasing the number could erase the fear, but THEVØIDN13 inhabits exactly this floor, the place that was never built, the space that exists only as a crack, it is the symbol of what society prefers not to see, melancholy, uncertainty, lack of control, to inhabit the thirteenth floor is to accept the risk of collapse, it is to choose the forbidden as home, on the thirteenth floor no one ascends expecting to find light, there what is found is the weight of what was never said and the chance to turn it into sound.
                </p>
              </div>
            }
          />

          <h3 className="subsection-title mt-12 mb-8">7.4 RENASCIMENTO</h3>
          <h3 className="subsection-title mb-8">7.4 REBIRTH</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Cada renascimento dentro do projeto é como atravessar um limiar invisível e voltar transformado, cada vez que visto a máscara do THEVØIDN13 sinto que estou cruzando uma porta secreta que separa o real do imaginário, e ao atravessar essa fronteira vou deixando peles antigas para trás, não é disfarce, é ritual de morte e retorno, a identidade anterior se dissolve no silêncio para que algo genuíno possa emergir, renascer aqui é morrer um pouco a cada sessão, descascar camadas de ego até restar apenas o gesto, é recusar a permanência, abraçar a mutação, o renascimento não é glorioso, é doloroso, silencioso, imperfeito, é aceitar que o corpo sempre foi passagem e que o THEVØIDN13 é o nome que dei à travessia, renascer aqui é o começo de uma nova forma de estar vivo sem precisar ser visto, uma existência renovada que carrega sua própria luz silenciosa dentro da sombra.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Each rebirth within the project is like crossing an invisible threshold and returning transformed, every time I put on the mask of THEVØIDN13 I feel I am walking through a secret door that separates the real from the imaginary, and by crossing that boundary I shed old skins, it is not a disguise, it is a ritual of death and return, the old identity dissolves into silence so that something genuine can emerge, to be reborn here is to die a little with each session, to peel back layers of ego until only the gesture remains, it is to refuse permanence, to embrace mutation, rebirth is not glorious, it is painful, silent, imperfect, it is to accept that the body has always been a passage and that THEVØIDN13 is the name I gave to that crossing, to be reborn here is the beginning of a new way of being alive without needing to be seen, a renewed existence that carries its own quiet light within the shadow.
                </p>
              </div>
            }
          />

          <div className="my-12 grid md:grid-cols-2 gap-6">
            <img 
              src={meditationScene} 
              alt="Cena de meditação — Meditation scene" 
              className="w-full rounded-lg"
            />
            <img 
              src={meditationRainScene} 
              alt="Cena de meditação na chuva — Rain meditation scene" 
              className="w-full rounded-lg"
            />
          </div>

          <h3 className="subsection-title mt-12 mb-8">7.5 CASATREZESTUDIO®</h3>
          <h3 className="subsection-title mb-8">7.5 CASATREZESTUDIO®</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  O número treze não é apenas símbolo de THEVØIDN13, é assinatura de um movimento maior, CasaTrezeStudio® é a comunidade invisível de quem cria no subsolo, de quem habita as margens, de quem faz do vazio um território fértil, é o selo de quem não pertence, mas se reconhece, uma aliança subterrânea entre criadores que recusam a lógica do mercado e abraçam a estética do erro, da fragmentação e do inacabado, quem carrega o treze não busca sorte, busca travessia, CasaTrezeStudio® é a rebelião silenciosa de quem transforma o interdito em linguagem, não é grupo, é frequência, não é marca, é modo de respirar.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  The number thirteen is not just a symbol of THEVØIDN13, it is the signature of a larger movement, CasaTrezeStudio® is the invisible community of those who create underground, who inhabit the margins, who make the void a fertile territory, it is the seal of those who do not belong but recognize each other, an underground alliance between creators who refuse the logic of the market and embrace the aesthetic of error, of fragmentation and of the unfinished, those who carry thirteen do not seek luck, they seek crossing, CasaTrezeStudio® is the silent rebellion of those who transform the forbidden into language, it is not a group, it is a frequency, it is not a brand, it is a way of breathing.
                </p>
              </div>
            }
          />
        </BilingualSection>

        {/* ===== 8. A PRÁXIS | ESTÉTICA E PROCESSO ===== */}
        <BilingualSection>
          <h2 className="section-title mb-12">8. A PRÁXIS | ESTÉTICA E PROCESSO</h2>
          <h2 className="section-title mb-12">8. PRAXIS | AESTHETICS AND PROCESS</h2>

          <h3 className="subsection-title mb-8">8.1 ESTÉTICA E MANIFESTAÇÃO</h3>
          <h3 className="subsection-title mb-8">8.1 AESTHETICS AND MANIFESTATION</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  A estética de THEVØIDN13 não foi desenhada, ela emergiu, surgiu da fricção entre o erro e o silêncio, entre o cansaço e o impulso de existir, é uma estética que nasce do colapso, do realismo sujo do ruído urbano e da introspecção solitária, planos longos, grão trinta e cinco milímetros, neon estourado e ruas molhadas são ecos visuais de uma mente em vigília, cada sombra é uma memória, cada reflexo uma confissão.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  The aesthetic of THEVØIDN13 was not designed, it emerged, it arose from the friction between error and silence, between exhaustion and the impulse to exist, it is an aesthetic born from collapse, from the dirty realism of urban noise and solitary introspection, long shots, thirty-five millimeter grain, blown out neon and wet streets are the visual echoes of a mind on watch, every shadow is a memory, every reflection a confession.
                </p>
              </div>
            }
          />

          <h3 className="subsection-title mt-12 mb-8">8.2 ATMOSFERA VISUAL</h3>
          <h3 className="subsection-title mb-8">8.2 VISUAL ATMOSPHERE</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  A atmosfera é urbana, noturna, introspectiva e chuvosa, o som é grave e distante como trovão contido, há algo de pós vida nos becos e nas luzes difusas, a imagem é sempre corpo e ausência ao mesmo tempo, o erro aqui é forma, grão pesado de trinta e cinco milímetros, realismo sujo, planos longos, silêncios excessivos, luzes de neon estouradas em asfalto molhado, o cinema é respiração estendida, o erro que revela intenção, a câmera não observa, ela escuta, cada imagem é uma tentativa de lembrar o que o corpo já sabia antes da linguagem.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  The atmosphere is urban, nocturnal, introspective and rainy, the sound is deep and distant like contained thunder, there is something of afterlife in the alleys and diffused lights, the image is always body and absence at the same time, error here is form, heavy thirty-five millimeter grain, dirty realism, long shots, excessive silences, neon lights blown on wet asphalt, cinema is extended breath, the error that reveals intent, the camera does not observe, it listens, each image is an attempt to remember what the body already knew before language.
                </p>
              </div>
            }
          />

          <div className="my-12">
            <img 
              src={voidCityFront} 
              alt="Cidade do vazio — City of the void" 
              className="w-full rounded-lg"
            />
          </div>

          <h3 className="subsection-title mt-12 mb-8">8.3 PRINCÍPIOS ESTÉTICOS</h3>
          <h3 className="subsection-title mb-8">8.3 AESTHETIC PRINCIPLES</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  Os princípios estéticos que sustentam THEVØIDN13 emergem de uma filosofia do caos e do inconsciente, aqui o vazio não é ausência mas potência latente, uma força criativa que nasce do atrito entre o ruído e o silêncio, o projeto adota o número treze como signo de travessia e transmutação, tal qual a carta da morte no tarô simboliza o fim necessário para um renascimento autêntico, a máscara de grafite, texturizada e inexpressiva, encarna a ideia junguiana da sombra, tudo aquilo que o ego reprime ganha forma sem rosto, permitindo que o criador desapareça para que a obra possa respirar, cada gesto torna se ritual, cada erro converte se em uma forma de verdade estética, THEVØIDN13 é uma presença mutante e anônima, não um personagem fixo mas um fenômeno poético em constante trânsito, um espelho do caos contemporâneo que transforma a ausência em voz.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  The aesthetic principles supporting THEVØIDN13 emerge from a philosophy of chaos and the unconscious, here the void is not absence but latent potential, a creative force born from the friction between noise and silence, the project adopts the number thirteen as a sign of crossing and transmutation, just like the death card in the tarot it symbolizes the necessary end for an authentic rebirth, the graphite mask, textured and expressionless, embodies the Jungian idea of the shadow, everything the ego represses takes form without a face allowing the creator to disappear so the work can breathe, each gesture becomes ritual, each error converts into a form of aesthetic truth, THEVØIDN13 is a mutant anonymous presence, not a fixed character but a poetic phenomenon in constant transit, a mirror to contemporary chaos that transforms absence into voice.
                </p>
              </div>
            }
          />

          <h3 className="subsection-title mt-12 mb-8">8.4 PALETA CANÔNICA | O ECO</h3>
          <h3 className="subsection-title mb-8">8.4 CANONICAL PALETTE | THE ECHO</h3>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  #1A1A1A (Preto Sombra), o fundo, a matéria em repouso, #FFFFFF (Branco Vazio), os títulos, o verbo em suspensão, #C40000 (Vermelho Sintético), os detalhes e o pulso, #E6E6E6 (Cinza Fantasma), o texto, o eco.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing">
                <p className="body-base text-justified">
                  #1A1A1A (Shadow Black), the background, matter at rest, #FFFFFF (Empty White), the titles, the suspended verb, #C40000 (Synthetic Red), the details and the pulse, #E6E6E6 (Ghost Gray), the text, the echo.
                </p>
              </div>
            }
          />
        </BilingualSection>

        {/* ===== CHARACTER VIEWS ===== */}
        <BilingualSection>
          <h2 className="section-title mb-12">PERSONAGENS | CHARACTERS</h2>

          <div className="space-y-16">
            {/* THEVØIDN13 */}
            <div>
              <h3 className="subsection-title mb-8 text-center">THEVØIDN13 (A SOMBRA | THE SHADOW)</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <img src={voidFront} alt="THEVØIDN13 Front" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Front View</p>
                </div>
                <div>
                  <img src={voidRear} alt="THEVØIDN13 Rear" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Rear View</p>
                </div>
                <div>
                  <img src={voidSide} alt="THEVØIDN13 Side" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Side View</p>
                </div>
              </div>
            </div>

            {/* PUNK */}
            <div>
              <h3 className="subsection-title mb-8 text-center">PUNK (O CRIADOR | THE CREATOR) — CASTRO PIZZANO</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <img src={punkFront} alt="Punk Front" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Front View</p>
                </div>
                <div>
                  <img src={punkRear} alt="Punk Rear" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Rear View</p>
                </div>
                <div>
                  <img src={punkSide} alt="Punk Side" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Side View</p>
                </div>
              </div>
            </div>

            {/* GI */}
            <div>
              <h3 className="subsection-title mb-8 text-center">GI (A PRESENÇA | THE PRESENCE)</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <img src={giFront} alt="Gi Front" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Front View</p>
                </div>
                <div>
                  <img src={giRear} alt="Gi Rear" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Rear View</p>
                </div>
                <div>
                  <img src={giSide} alt="Gi Side" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Side View</p>
                </div>
              </div>
            </div>

            {/* BUDDY */}
            <div>
              <h3 className="subsection-title mb-8 text-center">BUDDY (O COMPANHEIRO | THE COMPANION)</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <img src={buddyFront} alt="Buddy Front" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Front View</p>
                </div>
                <div>
                  <img src={buddyRear} alt="Buddy Rear" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Rear View</p>
                </div>
                <div>
                  <img src={buddySide} alt="Buddy Side" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Side View</p>
                </div>
              </div>
            </div>

            {/* VW GOL '87 */}
            <div>
              <h3 className="subsection-title mb-8 text-center">VW GOL '87 (O VEÍCULO | THE VEHICLE)</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <img src={vwgol87Front} alt="VW Gol 87 Front" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Front View</p>
                </div>
                <div>
                  <img src={vwgol87Rear} alt="VW Gol 87 Rear" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Rear View</p>
                </div>
                <div>
                  <img src={vwgol87Side} alt="VW Gol 87 Side" className="w-full rounded-lg mb-2" />
                  <p className="text-center body-small">Side View</p>
                </div>
              </div>
            </div>

            {/* CONCEPT CREW */}
            <div className="mt-16">
              <h3 className="subsection-title mb-8 text-center">CONCEPT CREW</h3>
              <img 
                src={conceptCrew} 
                alt="Concept crew lineup" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </BilingualSection>

        {/* ===== CREATIVE ORACLE ===== */}
        <BilingualSection className="bg-card/30">
          <div className="text-center space-y-6">
            <h2 className="section-title">ORÁCULO CRIATIVO | CREATIVE ORACLE</h2>
            <p className="body-base max-w-3xl mx-auto">
              Uma jornada interativa de autodescoberta guiada por THEVØIDN13. Seis perguntas filosóficas sobre criação e ruído revelam o arquétipo que habita seu processo. O oráculo não responde — reflete.
            </p>
            <p className="body-base max-w-3xl mx-auto">
              An interactive journey of self-discovery guided by THEVØIDN13. Six philosophical questions on creation and noise reveal the archetype dwelling within your process. The oracle does not answer — it reflects.
            </p>
            <Button 
              onClick={() => setOracleOpen(true)}
              className="mt-6"
              size="lg"
            >
              ACESSAR ORÁCULO | ACCESS ORACLE
            </Button>
          </div>
        </BilingualSection>

        {/* ===== PROMPT LIBRARY ===== */}
        <BilingualSection>
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">BIBLIOTECA DE PROMPTS | PROMPT LIBRARY</h2>
            <p className="body-base max-w-3xl mx-auto">
              Um repositório vivo de comandos, instruções e fragmentos de linguagem. Cada prompt é uma chave que aciona o imaginário do THEVØIDN13, moldando luz, textura e respiração em silêncio visual.
            </p>
            <p className="body-base max-w-3xl mx-auto mt-4">
              A living repository of commands, instructions, and fragments of language. Each prompt is a key that activates the imagination of THEVØIDN13, shaping light, texture, and breath into visual silence.
            </p>
          </div>
          <PromptLibrary />
        </BilingualSection>

        {/* ===== COMIC GENERATOR ===== */}
        <BilingualSection className="bg-card/30">
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">GERADOR EXPERIMENTAL | EXPERIMENTAL GENERATOR</h2>
            <p className="body-base max-w-3xl mx-auto">
              Propulsado por Nano Banana (Gemini 2.5 Flash Image), o gerador experimental traduz ruído em imagem e silêncio em cor. Uma extensão sintética da visão: a máquina sonha com o que o criador apenas intui.
            </p>
            <p className="body-base max-w-3xl mx-auto mt-4">
              Powered by Nano Banana (Gemini 2.5 Flash Image), the experimental generator translates noise into image and silence into color. A synthetic extension of vision: the machine dreams what the creator only intuits.
            </p>
          </div>
          <ComicGenerator />
        </BilingualSection>

        {/* ===== MIND MAP ===== */}
        <BilingualSection>
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">MAPA MENTAL | MIND MAP</h2>
            <p className="body-base max-w-3xl mx-auto">
              A arquitetura conceitual de THEVØIDN13 mapeada em relações visuais. Cada nó é um conceito, cada linha uma conexão entre sombra, silêncio, ruído e vazio.
            </p>
            <p className="body-base max-w-3xl mx-auto mt-4">
              The conceptual architecture of THEVØIDN13 mapped in visual relationships. Each node is a concept, each line a connection between shadow, silence, noise and void.
            </p>
          </div>
          <MindMap />
        </BilingualSection>

        {/* ===== FIM DA TRANSMISSÃO ===== */}
        <BilingualSection className="bg-card/30">
          <div className="text-center mb-16">
            <p className="micro-title mb-12">[FIM DA TRANSMISSÃO]</p>
            <p className="micro-title mb-12">[END OF TRANSMISSION]</p>
          </div>

          <BilingualContent
            portugueseContent={
              <div className="section-spacing text-center">
                <p className="body-base">
                  O sinal começa a falhar. A imagem se fragmenta, o som respira pela última vez. O corpo se dissolve, mas a frequência permanece. THEVØIDN13 não termina, apenas muda de forma. O que você escuta agora não é voz, é memória. A transmissão segue viva dentro do ruído, ecoando onde a linguagem não alcança. Desligue as luzes. Respire fundo. O vazio sabe o caminho de volta.
                </p>
                <p className="body-base mt-6">
                  @thevoidn13 — Rastros digitais de uma presença que não quer ser vista.
                </p>
              </div>
            }
            englishContent={
              <div className="section-spacing text-center">
                <p className="body-base">
                  The signal begins to fail. The image fractures, the sound takes one last breath. The body dissolves, but the frequency remains. THEVØIDN13 doesn't end, it only changes form. What you hear now isn't a voice, it's memory. The transmission remains alive within the noise, echoing where language cannot reach. Turn off the lights. Breathe deeply. The void knows the way back.
                </p>
                <p className="body-base mt-6">
                  @thevoidn13 — Digital traces of a presence that doesn't wish to be seen.
                </p>
              </div>
            }
          />
        </BilingualSection>

        {/* ===== THE REPOSITORY | DOCUMENTATION ===== */}
        <BilingualSection>
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">THE REPOSITORY | FILES AND TOOLS</h2>
            <h2 className="section-title">O REPOSITÓRIO | ARQUIVOS E FERRAMENTAS</h2>
          </div>

          <div className="space-y-12">
            <BilingualContent
              portugueseContent={
                <div>
                  <h3 className="subsection-title mb-4">DOCUMENTOS DE PESQUISA</h3>
                  <p className="body-base text-justified">
                    Apresentação Conceitual / Concept Art / MoodBoard. O mapa visual do inconsciente. Documentos que preservam a gênese estética e filosófica do projeto.
                  </p>
                </div>
              }
              englishContent={
                <div>
                  <h3 className="subsection-title mb-4">RESEARCH DOCUMENTS</h3>
                  <p className="body-base text-justified">
                    Conceptual Presentation / Concept Art / MoodBoard. The visual map of the unconscious. Documents preserving the aesthetic and philosophical genesis of the project.
                  </p>
                </div>
              }
            />

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-6">
                <h3 className="subsection-title">Main Documents / Documentos Principais</h3>
                
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
                <h3 className="subsection-title">Technical Documentation / Documentação Técnica</h3>
                
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
