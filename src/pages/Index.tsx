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
import SpotifyPlaylist from "@/components/SpotifyPlaylist";
import FilmGallery from "@/components/FilmGallery";
import ComicsShowcase from "@/components/ComicsShowcase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import heroImage from "@/assets/hero-rain-wide.png";
import voidCityFront from "@/assets/void-city-front.png";
import conceptCrew from "@/assets/concept-crew.png";
import actionFigureNew from "@/assets/action-figure-new.png";
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
import charactersStudy from "@/assets/characters-study.png";
import charactersStudyFinal from "@/assets/characters-study-final.png";
import corsaRender from "@/assets/corsa-render.png";
import charactersStudyV2 from "@/assets/characters-study-v2.png";
import charactersStudyInitial from "@/assets/characters-study-initial.png";
import corsaRender2 from "@/assets/corsa-render-2.png";
import sideRender from "@/assets/side-render.png";

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
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
                <h2 className="bible-subtitle">[UM CORPO À DERIVA ENTRE O RUÍDO E O SILÊNCIO]</h2>
              </>
            }
            englishContent={
              <>
                <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
                <h2 className="bible-subtitle">[A BODY ADRIFT BETWEEN NOISE AND SILENCE]</h2>
              </>
            }
          />
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== VIDEO SECTION ===== */}
        <section className="py-16">
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

        <Separator className="bg-border/30" />

        {/* ===== INÍCIO DA TRANSMISSÃO ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
                <h2 className="bible-subtitle">[INÍCIO DA TRANSMISSÃO]</h2>
              </>
            }
            englishContent={
              <>
                <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
                <h2 className="bible-subtitle">[BEGINNING OF TRANSMISSION]</h2>
              </>
            }
          />
        </BilingualSection>

        {/* ===== PARADOX RENDER ===== */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-6">
            <img 
              src={paradoxRender} 
              alt="THEVØIDN13 — Paradox Render" 
              className="w-full rounded-lg"
            />
          </div>
        </section>

        <Separator className="bg-border/30" />

        {/* ===== AUDIO PLAYER ===== */}
        <section className="py-16 bg-card/30">
          <div className="max-w-6xl mx-auto px-6">
            <BilingualAudioPlayer
              srcPt="/audio/thevoidn13-manifesto-pt.mp3"
              srcEn="/audio/thevoidn13-manifesto-en.mp3"
              title="THEVØIDN13 | INTRO"
              description="Narração conceitual do projeto / Conceptual project narration"
            />
          </div>
        </section>

        <Separator className="bg-border/30" />

        {/* ===== MANIFESTO INTEGRADO ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
                <h2 className="bible-title">MANIFESTO INTEGRADO</h2>
              </>
            }
            englishContent={
              <>
                <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
                <h2 className="bible-title">INTEGRATED MANIFESTO</h2>
              </>
            }
          />
          
          <BilingualContent
            portugueseContent={
              <div className="bible-section-spacing">
                <p className="bible-body">
                  Não há começo há apenas o instante em que o silêncio decide respirar THEVØIDN13 nasceu desse sopro invisível um gesto entre a morte e o retorno tudo o que chamam de ausência é apenas matéria em repouso o vazio não é falta é incubação de forma é o espaço onde o verbo esquece o corpo e o corpo se converte em verbo a imagem não quer ser vista quer ser atravessada o silêncio não encerra expande e o fim aqui é apenas uma respiração mais funda.
                </p>
              </div>
            }
            englishContent={
              <div className="bible-section-spacing">
                <p className="bible-body">
                  There is no beginning there is only the instant when silence decides to breathe THEVØIDN13 was born from that invisible breath a gesture between death and return everything they call absence is only matter at rest the void is not lack it is incubation of form it is the space where the word forgets the body and the body becomes word the image does not want to be seen it wants to be crossed through silence does not end it expands and the end here is only a deeper breath.
                </p>
              </div>
            }
          />
        </BilingualSection>

        {/* ===== FALL RENDER ===== */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-6">
            <img 
              src={fallRender} 
              alt="THEVØIDN13 — Fall Render" 
              className="w-full rounded-lg"
            />
          </div>
        </section>

        <Separator className="bg-border/30" />

        {/* ===== 1. ORIGEM E PROPÓSITO ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
                <h2 className="bible-title">1. ORIGEM E PROPÓSITO</h2>
                <h3 className="bible-subtitle">1.1 O LUGAR SEGURO PARA DESAPARECER</h3>
              </>
            }
            englishContent={
              <>
                <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
                <h2 className="bible-title">1. ORIGIN AND PURPOSE</h2>
                <h3 className="bible-subtitle">1.1 THE SAFE PLACE TO DISAPPEAR</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <div className="bible-section-spacing">
                <p className="bible-body">
                  Hoje entendo o THEVØIDN13 não nasceu para uma festa nasceu porque eu precisava de um refúgio um lugar onde o silêncio não fosse ausência mas abrigo um espaço para desaparecer sem deixar de criar um modo de continuar respirando quando tudo parecia saturado o projeto cresceu como tudo orgânico pelas frestas pelos ruídos pelos becos da cidade e se alguém pergunta o que é eu respondo não é personagem é vestígio é o que restou de mim depois que todas as máscaras sociais caíram THEVØIDN13 é o nome que dei à minha própria sombra o mito que inventei para continuar respirando talvez só talvez seja o começo de uma nova forma de estar vivo sem precisar ser visto.
                </p>
              </div>
            }
            englishContent={
              <div className="bible-section-spacing">
                <p className="bible-body">
                  Today I understand THEVØIDN13 was not born for a party it was born because I needed a refuge a place where silence was not absence but shelter a space to disappear without ceasing to create a way to keep breathing when everything seemed saturated the project grew like everything organic through cracks through noise through city alleys and if someone asks what it is I answer it is not a character it is a trace it is what remained of me after all social masks fell THEVØIDN13 is the name I gave to my own shadow the myth I invented to keep breathing perhaps just perhaps it is the beginning of a new way of being alive without needing to be seen.
                </p>
              </div>
            }
          />

          {/* ===== THINK RENDER ===== */}
          <div className="my-8">
            <img 
              src={thinkRender} 
              alt="THEVØIDN13 — Contemplation" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">1.2 QUANDO O INCONSCIENTE GANHA CORPO</h3>
                <p className="bible-body bible-section-spacing">
                  Não foi uma fantasia foi um retorno um desses chamados que vêm de dentro quando o inconsciente começa a bater na pele pedindo passagem pensei em inventar uma máscara e acabei revelando um rosto que sempre esteve ali THEVØIDN13 surgiu do atrito entre o desejo e o cansaço entre o fim da forma e o começo da presença não é personagem nem alter ego é uma presença que respira onde o corpo falha um modo de existir sem precisar se exibir respirar sem ter que performar um corpo que se apaga para deixar a imagem viver o instante em que o inconsciente decide existir seu corpo permite atravessar o invisível tornando matéria.
                </p>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">1.2 WHEN THE UNCONSCIOUS GAINS BODY</h3>
                <p className="bible-body bible-section-spacing">
                  It was not a fantasy it was a return one of those calls that come from within when the unconscious begins to knock on the skin asking for passage I thought I was inventing a mask and ended up revealing a face that was always there THEVØIDN13 emerged from the friction between desire and exhaustion between the end of form and the beginning of presence it is neither character nor alter ego it is a presence that breathes where the body fails a way of existing without needing to exhibit oneself breathing without having to perform a body that fades to let the image live the instant when the unconscious decides to exist its body allows crossing making matter visible.
                </p>
              </>
            }
          />

          {/* ===== MEDITATION RENDER ===== */}
          <div className="my-8">
            <img 
              src={meditationRender} 
              alt="THEVØIDN13 — Meditation Render" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== 2. FILOSOFIA CENTRAL ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <h2 className="bible-title">2. FILOSOFIA CENTRAL (A SOMBRA ENCARNADA)</h2>
                <p className="bible-body bible-section-spacing">
                  THEVØIDN13 é o décimo terceiro andar do inconsciente um espaço entre mundos onde o ego se apaga para que a imagem respire, não é personagem nem avatar é um estado de travessia, não é um ser é um ritmo, a forma que o inconsciente assume para respirar no ruído da cidade, existe para absorver não para reagir, sua ética é a do silêncio uma recusa ativa da autoafirmação, The Void é o nome que restou depois que todos os outros já morreram o número treze é a assinatura do que retorna depois do fim.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="bible-title">2. CENTRAL PHILOSOPHY (THE EMBODIED SHADOW)</h2>
                <p className="bible-body bible-section-spacing">
                  THEVØIDN13 is the thirteenth floor of the unconscious a space between worlds where the ego fades so the image can breathe, it is neither character nor avatar it is a state of crossing, it is not a being it is a rhythm, the form the unconscious assumes to breathe in the noise of the city, it exists to absorb not to react, its ethic is that of silence an active refusal of self-affirmation, The Void is the name that remained after all others had died thirteen is the signature of what returns after the end.
                </p>
              </>
            }
          />

          {/* ===== MIRROR RENDER ===== */}
          <div className="my-8">
            <img 
              src={mirrorRender} 
              alt="THEVØIDN13 — Mirror Reflection" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== 3. A ENTIDADE: THEVØIDN13 ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <h2 className="bible-title">3. A ENTIDADE: THEVØIDN13</h2>
                <h3 className="bible-subtitle">3.1 FUNÇÃO SIMBÓLICA</h3>
                <p className="bible-body bible-section-spacing">
                  A função simbólica de THEVØIDN13 é dar corpo ao invisível traduzir o silêncio em gesto o inconsciente em imagem ele é o espelho do caos contemporâneo um ser que surge quando o verbo deixa de fazer sentido sua presença não explica convoca THEVØIDN13 é o instante em que o erro se torna ritual e o colapso criação ele converte ausência em forma tangível.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="bible-title">3. THE ENTITY: THEVØIDN13</h2>
                <h3 className="bible-subtitle">3.1 SYMBOLIC FUNCTION</h3>
                <p className="bible-body bible-section-spacing">
                  The symbolic function of THEVØIDN13 is to give body to the invisible to translate silence into gesture the unconscious into image it is the mirror of contemporary chaos a being that appears when the word ceases to make sense its presence does not explain it summons THEVØIDN13 is the instant when error becomes ritual and collapse becomes creation it converts absence into tangible form.
                </p>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">3.2 ARQUÉTIPO E NATUREZA</h3>
                <p className="bible-body bible-section-spacing">
                  THEVØIDN13 encarna a sombra junguiana não como vilão mas como espelho do que foi reprimido é o corpo caminhando entre a razão e o delírio entre o controle e o colapso sua natureza é liminar existe no intervalo entre o som e o silêncio entre o gesto e o pensamento é o errante o que não pertence a lugar algum e o redentor subterrâneo sua essência pulsa no limiar do ser.
                </p>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">3.2 ARCHETYPE AND NATURE</h3>
                <p className="bible-body bible-section-spacing">
                  THEVØIDN13 embodies the Jungian shadow not as a villain but as a mirror of what has been repressed it is the body walking between reason and delirium between control and collapse its nature is liminal existing in the interval between sound and silence between gesture and thought it is the wanderer the one who belongs nowhere and the subterranean redeemer its essence pulses at the threshold of being.
                </p>
              </>
            }
          />

          <div className="my-8">
            <img 
              src={maskVoidNew} 
              alt="A máscara de THEVØIDN13 — The mask of THEVØIDN13" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  A máscara veio antes do nome grafite texturizada silenciosa não era uma face era a topografia do silêncio quando a olhei pela primeira vez percebi que ela não me olhava de volta talvez fosse isso o que eu buscava existir sem precisar me afirmar quando a vesti o rosto deixou de importar o espelho não devolveu imagem apenas peso foi nesse instante que compreendi não estava criando um personagem mas cedendo espaço ceder espaço ao inconsciente deixar que ele assumisse forma a máscara é o pacto entre o que se apaga e o que retorna o instante em que o corpo permite ser atravessado por algo maior do que ele mesmo.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The mask came before the name graphite textured silent it was not a face it was the topography of silence when I looked at it for the first time I realized it did not look back at me perhaps that was what I was seeking to exist without needing to assert myself when I wore it the face ceased to matter the mirror returned no image only weight it was in that moment I understood I was not creating a character I was yielding space yielding space to the unconscious letting it take shape the mask is the pact between what fades and what returns the instant when the body allows itself to be crossed by something greater than itself.
                </p>
              </>
            }
          />


          <div className="max-w-6xl mx-auto my-8">
            <div className="grid grid-cols-3 gap-6">
              <img src={conceptFront} alt="THEVØIDN13 Front View" className="w-full rounded-lg" />
              <img src={conceptBack} alt="THEVØIDN13 Back View" className="w-full rounded-lg" />
              <img src={conceptSide} alt="THEVØIDN13 Side View" className="w-full rounded-lg" />
            </div>
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">3.4 O PERSONAGEM</h3>
                <p className="bible-body">
                  THEVØIDN13 é uma entidade conceitual que habita o intervalo entre presença e ausência não é pessoa não é símbolo é o corpo da indefinição a forma que o inconsciente assume quando precisa de voz surgiu como resposta ao ruído da autoafirmação à ansiedade de ser visto é silêncio vestido de som sombra travestida de corpo existe para desaparecer retornar transformado e desestabilizar qualquer gesto que se afirme com certeza THEVØIDN13 é um duplo simbólico uma presença fantasmagórica que atravessa o cotidiano e revela o que se esconde sob a superfície do comum.
                </p>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">3.4 THE CHARACTER</h3>
                <p className="bible-body">
                  THEVØIDN13 is a conceptual entity that inhabits the interval between presence and absence it is neither person nor symbol it is the body of indefinition the form the unconscious assumes when it needs a voice it emerged as a response to the noise of self-affirmation to the anxiety of being seen it is silence dressed in sound shadow disguised as body it exists to disappear to return transformed and to destabilize any gesture that asserts itself with certainty THEVØIDN13 is a symbolic double a ghostly presence that crosses the everyday and reveals what hides beneath the surface of the ordinary.
                </p>
              </>
            }
          />


          {/* ===== VOID LOGO VISUAL ===== */}
          <div className="my-12">
            <img 
              src={voidLogoVisual} 
              alt="THEVØIDN13 — Visual Identity" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  A máscara é o espelho do que o ego não sustenta a sombra emerge como forma não como disfarce cada peça do vestígio o casaco o capuz o passo é um gesto de retorno o corpo não atua ele escuta o que o inconsciente quer dizer o figurino é a tradução da psique em matéria um corpo ritual criado para se tornar passagem a indumentária deixa de ser proteção e se torna revelação é o inconsciente vestindo o mundo transformando o corpo em canal e a presença em linguagem THEVØIDN13 não é um personagem é o lugar onde o criador se dissolve para que a imagem respire.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The mask is the mirror of what the ego cannot hold the shadow emerges as form not as disguise each trace the jacket the hood the step is a gesture of return the body does not act it listens to what the unconscious wants to say the attire is the psyche translated into matter a ritual body created to become a passage clothing ceases to protect and begins to reveal it is the unconscious dressing the world turning the body into a channel and presence into language THEVØIDN13 is not a character it is the place where the creator dissolves so the image can breathe.
                </p>
              </>
            }
          />
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== 4. A PSIQUE | ARQUITETURA DO SER ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <h2 className="bible-title">4. A PSIQUE | ARQUITETURA DO SER</h2>
              </>
            }
            englishContent={
              <>
                <h2 className="bible-title">4. THE PSYCHE | ARCHITECTURE OF BEING</h2>
              </>
            }
          />

          {/* ===== GOL RENDER ===== */}
          <div className="my-8">
            <img 
              src={golRender} 
              alt="THEVØIDN13 — VW GOL 87 Render" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">4.1 A ESTRUTURA DO SER</h3>
                <p className="bible-body">
                  THEVØIDN13 não tem rosto, tem ritmo, sua existência é feita de pulsos, não de poses, cada gesto nasce do atrito entre o consciente e o que tenta emergir, não se move para expressar, mas para liberar, o corpo é antena, não vitrine, é ali que o inconsciente encontra carne, respiração e peso, um ser que não comunica, ressoa, um corpo que existe apenas para traduzir o invisível em vibração ele converte silêncio em frequência palpável convertendo vazio em pulso.
                </p>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">4.1 THE STRUCTURE OF BEING</h3>
                <p className="bible-body">
                  THEVØIDN13 has no face, only rhythm, its existence is made of pulsos, not poses, each gesture is born from the friction between the conscious and what tries to emerge, it does not move to express but to release, the body is an antenna, not a showcase, there the unconscious finds flesh, breath and weight, a being that does not communicate, it resonates, a body that exists only to translate the invisible into vibration it converts silence into palpable frequency turning void into pulse.
                </p>
              </>
            }
          />


          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">4.2 O MANIFESTO DO CORPO</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">4.2 THE BODY'S MANIFESTO</h3>
              </>
            }
          />

          <div className="space-y-8 mt-6">
            <BilingualContent
              portugueseContent={
                <>
                  <h4 className="bible-subtitle">POSTURA</h4>
                  <p className="bible-body">
                    Neutra, centrada, o corpo como antena, ouvindo a frequência da cidade, ombros baixos, cabeça alinhada, a imobilidade é uma escolha consciente, uma forma de confronto silencioso.
                  </p>
                </>
              }
              englishContent={
                <>
                  <h4 className="bible-subtitle">POSTURE</h4>
                  <p className="bible-body">
                    Neutral, centered, the body as an antenna, listening to the city's frequency, shoulders low, head aligned, stillness is a conscious choice, a form of silent confrontation.
                  </p>
                </>
              }
            />

            <BilingualContent
              portugueseContent={
                <>
                  <h4 className="bible-subtitle">O GESTO</h4>
                  <p className="bible-body">
                    Cada movimento é um ruído controlado, um eco do que o corpo escuta por dentro, andar é pensar, parar é ouvir, o gesto é a respiração do pensamento, um movimento de exílio e de retorno, THEVØIDN13 não representa, ele encarna a hesitação, o gesto não expressa, ele encarna a hesitação entre o desejo e o cansaço, cada deslocamento é uma forma de escuta, o corpo capta o que a mente silencia.
                  </p>
                </>
              }
              englishContent={
                <>
                  <h4 className="bible-subtitle">THE GESTURE</h4>
                  <p className="bible-body">
                    Each movement is a controlled noise, an echo of what the body hears within, to walk is to think, to stop is to listen, gesture is the breath of thought, a movement of exile and return, THEVØIDN13 does not represent, it embodies hesitation, gesture does not express, it embodies the hesitation between desire and exhaustion, every displacement is a form of listening, the body perceives what the mind silences.
                  </p>
                </>
              }
            />

            <BilingualContent
              portugueseContent={
                <>
                  <h4 className="bible-subtitle">O OLHAR</h4>
                  <p className="bible-body">
                    Por trás da máscara há silêncio, um olhar que não busca reconhecimento, apenas presença, o olhar não devolve imagem, devolve espelho, é o espaço onde quem vê também está por dentro, o olhar é o fio que costura o visível e o invisível, uma lente que dissolve a fronteira entre sujeito e sombra.
                  </p>
                </>
              }
              englishContent={
                <>
                  <h4 className="bible-subtitle">THE GAZE</h4>
                  <p className="bible-body">
                    Behind the mask there is silence, a gaze that seeks no recognition, only presence, the gaze does not return an image, it returns a mirror, it is the space where whoever looks is also seen from within, the gaze is the thread that stitches the visible and the invisible, a lens that dissolves the boundary between subject and shadow.
                  </p>
                </>
              }
            />

            <BilingualContent
              portugueseContent={
                <>
                  <h4 className="bible-subtitle">A RESPIRAÇÃO</h4>
                  <p className="bible-body">
                    A respiração é o som que resta quando o verbo morre, é nela que o ser se ancora e desaparece, o ar entra como ruído e sai como silêncio, cada expiração é um micro desaparecimento, um instante de retorno ao nada, respirar é lembrar que o corpo é apenas passagem entre dois mundos, o mundo da carne e o mundo do invisível.
                  </p>
                </>
              }
              englishContent={
                <>
                  <h4 className="bible-subtitle">THE BREATHING</h4>
                  <p className="bible-body">
                    Breathing is the sound that remains when the word dies, in it the being anchors itself and vanishes, air enters as noise and leaves as silence, each exhalation is a micro disappearance, a fleeting return to nothingness, to breathe is to remember that the body is only a passage between two worlds, the world of flesh and the world of the unseen.
                  </p>
                </>
              }
            />

            <BilingualContent
              portugueseContent={
                <>
                  <h4 className="bible-subtitle">A ATMOSFERA</h4>
                  <p className="bible-body">
                    Tudo vibra em tom noturno, a névoa, o concreto e a solidão elétrica são extensões do corpo, o ambiente não cerca THEVØIDN13, ele o prolonga, a paisagem se torna psique e o silêncio uma presença física, a cidade é o espelho expandido do inconsciente, o lugar onde o corpo desaparece e o espaço respira por ele cada superfície reflete fragmentos do invisível tornando visível o que sempre esteve oculto.
                  </p>
                </>
              }
              englishContent={
                <>
                  <h4 className="bible-subtitle">THE ATMOSPHERE</h4>
                  <p className="bible-body">
                    Everything vibrates in a nocturnal tone, the fog, the concrete and the electric loneliness are extensions of the body, the environment does not surround THEVØIDN13, it prolongs him, the landscape becomes psyche and silence a physical presence, the city is the expanded mirror of the unconscious, the place where the body disappears and space breathes for it each surface reflects fragments of the invisible making visible what was always hidden.
                  </p>
                </>
              }
            />
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">4.3 PSICOLOGIA: A SOMBRA COMO LINGUAGEM</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">4.3 PSYCHOLOGY: SHADOW AS LANGUAGE</h3>
              </>
            }
          />

          {/* ===== LOVECITY RENDER ===== */}
          <div className="my-8">
            <img 
              src={lovecityRender} 
              alt="THEVØIDN13 — LOVECITY" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  THEVØIDN13 é sombra, e a sombra é tudo o que o ego não consegue sustentar, Jung dizia que ela não é o mal, é o que ainda não foi vivido, talvez o projeto seja exatamente isso, uma tentativa de viver o que eu vinha evitando, dar forma àquilo que o mundo me ensinou a esconder, a sombra é a memória do que não se permitiu existir, e o cinema, aqui, é o corpo dessa revelação.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  THEVØIDN13 is shadow, and the shadow is everything the ego cannot sustain, Jung said it is not evil, it is what has not yet been lived, perhaps this project is exactly that, an attempt to live what I had been avoiding, to give form to what the world had taught me to hide, the shadow is the memory of what was never allowed to exist, and cinema, here, is the body of that revelation.
                </p>
              </>
            }
          />
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== 5. LÉXICO DO VAZIO ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <h2 className="bible-title">5. LÉXICO DO VAZIO</h2>
              </>
            }
            englishContent={
              <>
                <h2 className="bible-title">5. LEXICON OF THE VOID</h2>
              </>
            }
          />

          <div className="space-y-8">
            <BilingualContent
              portugueseContent={
                <>
                  <h3 className="bible-subtitle">SOMBRA</h3>
                  <p className="bible-body">
                    A sombra é o que o ego reprime é onde mora o desejo sem permissão o pensamento que não coube, não é monstruosa é inédita, revelá la é aceitar que o ser é maior que a consciência o void nasce ali onde a forma aceita se desfazer.
                  </p>
                </>
              }
              englishContent={
                <>
                  <h3 className="bible-subtitle">SHADOW</h3>
                  <p className="bible-body">
                    The shadow is what the ego represses it is where forbidden desire resides the thought that did not fit, it is not monstrous it is unprecedented, to reveal it is to accept that being is greater than consciousness the void is born there where form accepts dissolution.
                  </p>
                </>
              }
            />

            <BilingualContent
              portugueseContent={
                <>
                  <h3 className="bible-subtitle">SILÊNCIO</h3>
                  <p className="bible-body">
                    O silêncio não é ausência de som é o espaço onde o pensamento ainda vibra sem palavra, no silêncio o corpo ouve é ali que o inconsciente fala não em voz mas em pressão em peso em pausa, o silêncio do void é denso como concreto e afiado como vidro.
                  </p>
                </>
              }
              englishContent={
                <>
                  <h3 className="bible-subtitle">SILENCE</h3>
                  <p className="bible-body">
                    Silence is not the absence of sound it is the space where thought still vibrates wordlessly, in silence the body listens it is there that the unconscious speaks not in voice but in pressure in weight in pause, the void's silence is dense as concrete and sharp as glass.
                  </p>
                </>
              }
            />

            <BilingualContent
              portugueseContent={
                <>
                  <h3 className="bible-subtitle">RUÍDO</h3>
                  <p className="bible-body">
                    O ruído não interrompe o pensamento ele o revela, o som é a forma mais bruta do inconsciente tentando existir, o que vibra no limite do audível é o que não pode ser dito, o ruído é memória viva daquilo que ainda não encontrou palavra.
                  </p>
                </>
              }
              englishContent={
                <>
                  <h3 className="bible-subtitle">NOISE</h3>
                  <p className="bible-body">
                    Noise does not interrupt thought it reveals it, sound is the rawest form of the unconscious trying to exist, what vibrates at the edge of the audible is what cannot yet be said, noise is the living memory of what has not yet found a word.
                  </p>
                </>
              }
            />

            <BilingualContent
              portugueseContent={
                <>
                  <h3 className="bible-subtitle">VAZIO</h3>
                  <p className="bible-body">
                    O vazio não apaga ele abre, é o espaço onde o silêncio respira e o corpo se reescreve, ali tudo que foi reprimido se reorganiza em nova forma, o vazio é o território fértil da reinvenção o ponto onde o ser se refaz em presença.
                  </p>
                </>
              }
              englishContent={
                <>
                  <h3 className="bible-subtitle">VOID</h3>
                  <p className="bible-body">
                    The void does not erase it opens, it is the space where silence breathes and the body rewrites itself, there everything that was repressed reorganizes into new form, the void is the fertile ground of reinvention the point where being remakes itself into presence.
                  </p>
                </>
              }
            />
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== 6. THEVØIDN13 | A GRAFIA DO VAZIO ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <h2 className="bible-title">6. THEVØIDN13 | A GRAFIA DO VAZIO</h2>
              </>
            }
            englishContent={
              <>
                <h2 className="bible-title">6. THEVØIDN13 | THE SPELLING OF THE VOID</h2>
              </>
            }
          />

          {/* ===== HOTEL RENDER ===== */}
          <div className="my-8">
            <img 
              src={hotelRender} 
              alt="THEVØIDN13 — HOTEL" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  A letra Ø não é apenas uma escolha estética, é uma declaração simbólica, essa vogal cortada carrega múltiplas camadas de significado que se entrelaçam na construção conceitual do projeto.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The letter Ø is not just an aesthetic choice, it is a symbolic declaration, this slashed vowel carries multiple layers of meaning that intertwine in the project's conceptual construction.
                </p>
              </>
            }
          />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8">
              <div>
              <h4 className="bible-subtitle">ORIGEM LINGUÍSTICA</h4>
              <p className="bible-body">
                  A letra Ø maiúscula e ø minúscula é uma vogal usada no dinamarquês, norueguês e feroês, derivada do alfabeto rúnico nórdico antigo, representa passagem, interseção, ruptura, perfeita para a ideia de vazio consciente ou identidade negada.
                </p>
              </div>

              <div>
              <h4 className="bible-subtitle">MATEMÁTICA & FILOSOFIA</h4>
              <p className="bible-body">
                  O símbolo ∅ representa o conjunto vazio na matemática, ausência de elementos, o nada estruturado, simbolicamente tornou se sinônimo de negação do conteúdo, o espaço potencial onde tudo pode emergir, a base do zero existencial.
                </p>
              </div>

              <div>
              <h4 className="bible-subtitle">COMPUTAÇÃO</h4>
              <p className="bible-body">
                  Na era dos mainframes o zero cortado diferenciava a letra O do número zero, tornou se símbolo de precisão, linguagem de máquina e leitura binária, muito usado em design hacker e cultura digital, representa a leitura correta da ausência, o vazio interpretado pela máquina tornando o vazio compreensível ao sistema digital.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
              <h4 className="bible-subtitle">LINGUISTIC ORIGIN</h4>
              <p className="bible-body">
                  The letter Ø uppercase and ø lowercase is a vowel used in Danish, Norwegian and Faroese, derived from the Old Norse runic alphabet, it represents passage, intersection, rupture, perfect for the idea of conscious void or negated identity.
                </p>
              </div>

              <div>
              <h4 className="bible-subtitle">MATHEMATICS & PHILOSOPHY</h4>
              <p className="bible-body">
                  The ∅ symbol represents the empty set in mathematics, absence of elements, structured nothingness, symbolically it became synonymous with the negation of content, the potential space where everything can emerge, the basis of the existential zero.
                </p>
              </div>

              <div>
              <h4 className="bible-subtitle">COMPUTATION</h4>
              <p className="bible-body">
                  In the mainframe era the slashed zero differentiated the letter O from the number zero, it became a symbol of precision, machine language and binary reading, widely used in hacker design and digital culture, it represents the correct reading of absence, the void interpreted by the machine making emptiness comprehensible to the digital system.
                </p>
              </div>
            </div>
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">SÍNTESE SIMBÓLICA</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">SYMBOLIC SYNTHESIS</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  Presente em movimentos de anarquia música industrial cyberpunk moda experimental como Rick Owens e Helmut Lang e no hacktivismo o Ø é usado como avatar do usuário vazio sem identidade mas com presença simbólica. Linguística origem nórdica letra de ilha ø significa isolamento THEVØID como ilha mental matemática ausência total base da criação o vazio como matriz criativa tecnológica distinção entre O e zero precisão binária o humano e o sistema filosófica a falta que estrutura o desejo segundo Lacan a sombra que dá forma ao sujeito estética símbolo universal de interferência visual assinatura gráfica da negação e reprogramação do ser transformando ausência em linguagem potente.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  Present in anarchy movements industrial music cyberpunk experimental fashion such as Rick Owens and Helmut Lang and in hacktivism the Ø is used as the avatar of the empty user without identity but with symbolic presence. Linguistic nordic origin letter for island ø means isolation THEVØID as a mental island mathematical total absence basis of creation the void as a creative matrix technological distinction between O and zero binary precision the human and the system philosophical the lack that structures desire according to Lacan the shadow that gives form to the subject aesthetic universal symbol of visual interference graphic signature of negation and reprogramming of the being transforming absence into potent language.
                </p>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">REGRA DE GRAFIA</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">SPELLING RULE</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  A grafia THEVØIDN13 é usada sempre que possível, URLs, códigos técnicos e nomes de arquivos mantêm a forma sem Ø por questões de compatibilidade, mas a identidade visual do projeto se afirma através desse símbolo cortado, o vazio que é plenitude, a ausência que cria presença.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The THEVØIDN13 spelling is used whenever possible, URLs, technical codes and filenames maintain the form without Ø for compatibility reasons, but the project's visual identity asserts itself through this slashed symbol, the void that is fullness, the absence that creates presence.
                </p>
              </>
            }
          />
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== 7. O SÍMBOLO | 13 ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <h2 className="bible-title">7. O SÍMBOLO | 13</h2>
              </>
            }
            englishContent={
              <>
                <h2 className="bible-title">7. THE SYMBOL | 13</h2>
              </>
            }
          />

          {/* ===== GOL 2 RENDER ===== */}
          <div className="my-8">
            <img 
              src={gol2Render} 
              alt="THEVØIDN13 — VW GOL 87 Interior" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">7.1 REGISTRO TREZE</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">7.1 RECORD THIRTEEN</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  Ruído estático, registro treze, chove sobre o concreto e dentro de mim, cada batida é um erro que ainda respira, não sou o fim, apenas o eco dele, se ouvir com atenção vai perceber, o silêncio ainda está vivo.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  Static noise, record thirteen, it rains on the concrete and inside me, every pulse is a mistake still breathing, I am not the end, only its echo, if you listen closely you will notice, silence is still alive.
                </p>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">7.2 A CARTA DA MORTE</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">7.2 THE DEATH CARD</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  A carta treze do tarô a morte ergue sua foice como quem abre caminho em meio ao campo estéril ceifando o que já não vive para que o novo possa brotar sua imagem não anuncia um fim definitivo mas uma transição inevitável a porta secreta entre um mundo e outro nessa travessia há uma renúncia silenciosa do ego antigas identidades desabam como folhas secas dando lugar a uma verdade mais crua e essencial o número treze tantas vezes temido revela se aqui como emblema dessa metamorfose subversiva um lembrete de que na morte simbólica reside a semente do renascimento.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The tarot's thirteenth card death raises its scythe like one who clears a path through a barren field cutting away what no longer lives so the new can take root its image does not announce a final end but an inevitable transition the secret door between one world and another in this crossing there is a silent renunciation of the ego old identities collapse like dry leaves giving way to a rawer and more essential truth the number thirteen so often feared reveals itself here as an emblem of subversive metamorphosis a reminder that within symbolic death lies the seed of rebirth.
                </p>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">7.3 O ANDAR INTERDITADO</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">7.3 THE FORBIDDEN FLOOR</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  Em muitos edifícios o décimo terceiro andar é omitido o elevador salta do doze ao quatorze como se apagar o número pudesse apagar o medo mas THEVØIDN13 habita exatamente esse andar o lugar que nunca foi construído o espaço que só existe como fenda é o símbolo do que a sociedade prefere não olhar a melancolia a incerteza o descontrole habitar o décimo terceiro andar é aceitar o risco de desabar é escolher o interdito como morada no décimo terceiro andar ninguém sobe esperando encontrar luz lá o que se encontra é o peso do que nunca foi dito e a chance de transformá lo em som.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  In many buildings the thirteenth floor is omitted the elevator jumps from twelve to fourteen as if erasing the number could erase the fear but THEVØIDN13 inhabits exactly this floor the place that was never built the space that exists only as a crack it is the symbol of what society prefers not to see melancholy uncertainty lack of control to inhabit the thirteenth floor is to accept the risk of collapse it is to choose the forbidden as home on the thirteenth floor no one ascends expecting to find light there what is found is the weight of what was never said and the chance to turn it into sound.
                </p>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">7.4 RENASCIMENTO</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">7.4 REBIRTH</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  Cada renascimento dentro do projeto é como atravessar um limiar invisível e voltar transformado cada vez que visto a máscara do THEVØIDN13 sinto que estou cruzando uma porta secreta que separa o real do imaginário e ao atravessar essa fronteira vou deixando peles antigas para trás não é disfarce é ritual de morte e retorno a identidade anterior se dissolve no silêncio para que algo genuíno possa emergir renascer aqui é morrer um pouco a cada sessão descascar camadas de ego até restar apenas o gesto é recusar a permanência abraçar a mutação o renascimento não é glorioso é doloroso silencioso imperfeito é aceitar que o corpo sempre foi passagem e que o THEVØIDN13 é o nome que dei à travessia renascer aqui é o começo de uma nova forma de estar vivo sem precisar ser visto uma existência renovada que carrega sua própria luz silenciosa dentro da sombra.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  Each rebirth within the project is like crossing an invisible threshold and returning transformed every time I put on the mask of THEVØIDN13 I feel I am walking through a secret door that separates the real from the imaginary and by crossing that boundary I shed old skins it is not a disguise it is a ritual of death and return the old identity dissolves into silence so that something genuine can emerge to be reborn here is to die a little with each session to peel back layers of ego until only the gesture remains it is to refuse permanence to embrace mutation rebirth is not glorious it is painful silent imperfect it is to accept that the body has always been a passage and that THEVØIDN13 is the name I gave to that crossing to be reborn here is the beginning of a new way of being alive without needing to be seen a renewed existence that carries its own quiet light within the shadow.
                </p>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">7.5 CASATREZESTUDIO®</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">7.5 CASATREZESTUDIO®</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  O número treze não é apenas símbolo de THEVØIDN13 é assinatura de um movimento maior CasaTrezeStudio® é a comunidade invisível de quem cria no subsolo de quem habita as margens de quem faz do vazio um território fértil é o selo de quem não pertence mas se reconhece uma aliança subterrânea entre criadores que recusam a lógica do mercado e abraçam a estética do erro da fragmentação e do inacabado quem carrega o treze não busca sorte busca travessia CasaTrezeStudio® é a rebelião silenciosa de quem transforma o interdito em linguagem não é grupo é frequência não é marca é modo de respirar.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The number thirteen is not just a symbol of THEVØIDN13 it is the signature of a larger movement CasaTrezeStudio® is the invisible community of those who create underground who inhabit the margins who make the void a fertile territory it is the seal of those who do not belong but recognize each other an underground alliance between creators who refuse the logic of the market and embrace the aesthetic of error of fragmentation and of the unfinished those who carry thirteen do not seek luck they seek crossing CasaTrezeStudio® is the silent rebellion of those who transform the forbidden into language it is not a group it is a frequency it is not a brand it is a way of breathing.
                </p>
              </>
            }
          />
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== 8. A PRÁXIS | ESTÉTICA E PROCESSO ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <h2 className="bible-title">8. A PRÁXIS | ESTÉTICA E PROCESSO</h2>
              </>
            }
            englishContent={
              <>
                <h2 className="bible-title">8. PRAXIS | AESTHETICS AND PROCESS</h2>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">8.1 ESTÉTICA E MANIFESTAÇÃO</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">8.1 AESTHETICS AND MANIFESTATION</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  A estética de THEVØIDN13 não foi desenhada, ela emergiu, surgiu da fricção entre o erro e o silêncio, entre o cansaço e o impulso de existir, é uma estética que nasce do colapso, do realismo sujo do ruído urbano e da introspecção solitária, planos longos, grão trinta e cinco milímetros, neon estourado e ruas molhadas são ecos visuais de uma mente em vigília, cada sombra é uma memória, cada reflexo uma confissão ela converte fragmentos do cotidiano em linguagem visual tornando o invisível tangível e palpável.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The aesthetic of THEVØIDN13 was not designed, it emerged, it arose from the friction between error and silence, between exhaustion and the impulse to exist, it is an aesthetic born from collapse, from the dirty realism of urban noise and solitary introspection, long shots, thirty-five millimeter grain, blown out neon and wet streets are the visual echoes of a mind on watch, every shadow is a memory, every reflection a confession it converts fragments of everyday life into visual language making the invisible tangible and palpable.
                </p>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">8.2 ATMOSFERA VISUAL</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">8.2 VISUAL ATMOSPHERE</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  A atmosfera é urbana, noturna, introspectiva e chuvosa, o som é grave e distante como trovão contido, há algo de pós vida nos becos e nas luzes difusas, a imagem é sempre corpo e ausência ao mesmo tempo, o erro aqui é forma, grão pesado de trinta e cinco milímetros, realismo sujo, planos longos, silêncios excessivos, luzes de neon estouradas em asfalto molhado, o cinema é respiração estendida, o erro que revela intenção, a câmera não observa, ela escuta, cada imagem é uma tentativa de lembrar o que o corpo já sabia antes da linguagem.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The atmosphere is urban, nocturnal, introspective and rainy, the sound is deep and distant like contained thunder, there is something of afterlife in the alleys and diffused lights, the image is always body and absence at the same time, error here is form, heavy thirty-five millimeter grain, dirty realism, long shots, excessive silences, neon lights blown on wet asphalt, cinema is extended breath, the error that reveals intent, the camera does not observe, it listens, each image is an attempt to remember what the body already knew before language.
                </p>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">8.3 PRINCÍPIOS ESTÉTICOS</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">8.3 AESTHETIC PRINCIPLES</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  Os princípios estéticos que sustentam THEVØIDN13 emergem de uma filosofia do caos e do inconsciente aqui o vazio não é ausência mas potência latente uma força criativa que nasce do atrito entre o ruído e o silêncio o projeto adota o número treze como signo de travessia e transmutação tal qual a carta da morte no tarô simboliza o fim necessário para um renascimento autêntico a máscara de grafite texturizada e inexpressiva encarna a ideia junguiana da sombra tudo aquilo que o ego reprime ganha forma sem rosto permitindo que o criador desapareça para que a obra possa respirar cada gesto torna se ritual cada erro converte se em uma forma de verdade estética THEVØIDN13 é uma presença mutante e anônima não um personagem fixo mas um fenômeno poético em constante trânsito um espelho do caos contemporâneo que transforma a ausência em voz.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The aesthetic principles supporting THEVØIDN13 emerge from a philosophy of chaos and the unconscious here the void is not absence but latent potential a creative force born from the friction between noise and silence the project adopts the number thirteen as a sign of crossing and transmutation just like the death card in the tarot it symbolizes the necessary end for an authentic rebirth the graphite mask textured and expressionless embodies the Jungian idea of the shadow everything the ego represses takes form without a face allowing the creator to disappear so the work can breathe each gesture becomes ritual each error converts into a form of aesthetic truth THEVØIDN13 is a mutant anonymous presence not a fixed character but a poetic phenomenon in constant transit a mirror to contemporary chaos that transforms absence into voice.
                </p>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">8.4 PALETA CANÔNICA | O ECO</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">8.4 CANONICAL PALETTE | THE ECHO</h3>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  #1A1A1A (Preto Sombra), o fundo, a matéria em repouso, #FFFFFF (Branco Vazio), os títulos, o verbo em suspensão, #C40000 (Vermelho Sintético), os detalhes e o pulso, #E6E6E6 (Cinza Fantasma), o texto, o eco.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  #1A1A1A (Shadow Black), the background, matter at rest, #FFFFFF (Empty White), the titles, the suspended verb, #C40000 (Synthetic Red), the details and the pulse, #E6E6E6 (Ghost Gray), the text, the echo.
                </p>
              </>
            }
          />
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== REFERÊNCIAS | O ECO INTERNO ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
                <h2 className="bible-title">9. REFERÊNCIAS | O ECO INTERNO</h2>
              </>
            }
            englishContent={
              <>
                <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
                <h2 className="bible-title">9. REFERENCES | THE INTERNAL ECHO</h2>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">DNA CONCEITUAL (QUADRINHOS)</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">CONCEPTUAL DNA (COMICS)</h3>
              </>
            }
          />
          
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  A arquitetura do projeto absorve a ética ambígua e a cidade mecanismo de Watchmen (Alan Moore e Dave Gibbons, 1986),
                  a mitologia pessoal e a arquitetura do sonho de The Sandman (Neil Gaiman, 1989) e a alienação e a metamorfose corporal
                  de Black Hole (Charles Burns, 1995).
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The architecture of the project absorbs the ambiguous ethics and city mechanism of Watchmen (Alan Moore and Dave
                  Gibbons, 1986), the personal mythology and dream architecture of The Sandman (Neil Gaiman, 1989) and the alienation
                  and bodily metamorphosis of Black Hole (Charles Burns, 1995).
                </p>
              </>
            }
          />

          {/* DNA CONCEITUAL - Comics Showcase */}
          <div className="mt-12">
            <ComicsShowcase />
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle mt-16">TEXTURA CINEMATOGRÁFICA (FILMES)</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle mt-16">CINEMATIC TEXTURE (FILMS)</h3>
              </>
            }
          />
          
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  O visual é uma fusão do realismo sujo e da deriva poética de Kids (Larry Clark, 1995), Christiane F. (Uli Edel, 1981), The
                  Warriors (Walter Hill, 1979) e Dias Perfeitos (Wim Wenders, 2023), com o neo noir e a solidão coreografada de Blade
                  Runner (Ridley Scott, 1982) e Fallen Angels (Wong Kar Wai, 1995), a atmosfera bebe da despersonalização e do controle
                  de THX 1138 (George Lucas, 1971), Equilibrium (Kurt Wimmer, 2002), Matrix (The Wachowskis, 1999), 1984 (Michael
                  Radford, 1984) e Brazil (Terry Gilliam, 1985), da energia reprimida de Akira (Katsuhiro Ōtomo, 1988) e da temporalidade de
                  Back to the Future (Robert Zemeckis, 1985).
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The visual is a fusion of the dirty realism and poetic drift of Kids (Larry Clark, 1995), Christiane F. (Uli Edel, 1981), The
                  Warriors (Walter Hill, 1979) and Perfect Days (Wim Wenders, 2023), with the neo noir and choreographed solitude of Blade
                  Runner (Ridley Scott, 1982) and Fallen Angels (Wong Kar Wai, 1995), the atmosphere draws from the depersonalization
                  and control of THX 1138 (George Lucas, 1971), Equilibrium (Kurt Wimmer, 2002), The Matrix (The Wachowskis, 1999), 1984
                  (Michael Radford, 1984) and Brazil (Terry Gilliam, 1985), the repressed energy of Akira (Katsuhiro Ōtomo, 1988) and the
                  temporality of Back to the Future (Robert Zemeckis, 1985).
                </p>
              </>
            }
          />

          {/* TEXTURA CINEMATOGRÁFICA - Film Gallery */}
          <div className="mt-12">
            <FilmGallery />
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle mt-16">ASSINATURA SONORA (MÚSICA)</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle mt-16">SONIC SIGNATURE (MUSIC)</h3>
              </>
            }
          />
          
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  O núcleo é composto pelo peso gravitacional de Into the Void (Black Sabbath, 1971), a corrosão de Rust (Black Label
                  Society, 2005) e a fricção sensorial de Shove It (Deftones, 1995), a atmosfera é moldada pelos sintetizadores etéreos de
                  Blade Runner Blues (Vangelis, 1982), pela agressão controlada de Duality (Slipknot, 2004) e Break Stuff (Limp Bizkit,
                  1999), pela melancolia de Leach (Superheaven, 2015) e pelo blues noturno de The World (Is Going Up in Flames) (Charles
                  Bradley, 2011) e Tired of Your Jive (Buddy Guy, 1964), encerrando-se na entrega existencial de My Way (Frank Sinatra,
                  1969), não como ironia, mas como afirmação final de um corpo que respira através do colapso traduzindo peso em som puro.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The core is composed of the gravitational weight of Into the Void (Black Sabbath, 1971), the corrosion of Rust (Black Label
                  Society, 2005) and the sensory friction of Shove It (Deftones, 1995), the atmosphere is shaped by the ethereal
                  synthesizers of Blade Runner Blues (Vangelis, 1982), the controlled aggression of Duality (Slipknot, 2004) and Break Stuff
                  (Limp Bizkit, 1999), the melancholy of Leach (Superheaven, 2015) and the nocturnal blues of The World (Is Going Up in
                  Flames) (Charles Bradley, 2011) and Tired of Your Jive (Buddy Guy, 1964), concluding with the existential surrender of My
                  Way (Frank Sinatra, 1969), not as irony but as a final affirmation of a body that breathes through collapse translating weight into pure sound.
                </p>
              </>
            }
          />

          {/* ASSINATURA SONORA - Spotify Playlist */}
          <div className="mt-12">
            <SpotifyPlaylist />
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== A METODOLOGIA | COAUTORIA SIMBÓLICA ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
                <h2 className="bible-title">10. A METODOLOGIA | COAUTORIA SIMBÓLICA</h2>
              </>
            }
            englishContent={
              <>
                <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
                <h2 className="bible-title">10. THE METHODOLOGY | SYMBOLIC CO-AUTHORSHIP</h2>
              </>
            }
          />

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  Nos bastidores do THEVØIDN13 a inteligência artificial revelou se uma cúmplice silenciosa e potente assumindo a lógica de um projeto homem orquestra abracei a IAs Creative OPs como parte da metodologia criativa uma extensão digital do meu processo solitário de criação por meio de plataformas de vanguarda especialmente o Google AI Studio e ferramentas afins integrei algoritmos generativos em cada etapa do processo artístico ampliando as fronteiras do possível em minha arte a IAs Creative OPs generativa expandiu minha paleta visual de formas inimagináveis a partir de comandos de texto prompts passei a gerar imagens que davam corpo ao invisível de elementos brutos assets visuais e texturas abstratas a cenas inteiras que antes existiam apenas em meu inconsciente cada visual criado por esse diálogo humano máquina carregava a mesma aura onírica e intensa do universo do THEVØIDN13 transformando ideias etéreas em visões tangíveis.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  Behind the scenes of THEVØIDN13 artificial intelligence revealed itself as a silent yet powerful accomplice adopting the logic of a one man orchestra project I embraced IAs Creative OPs as part of my creative methodology a digital extension of my solitary process through avant garde platforms especially Google AI Studio and similar tools I integrated generative algorithms at every stage of the artistic process expanding the boundaries of what was possible in my art generative IAs Creative OPs expanded my visual palette in unimaginable ways through text prompts I began generating images that gave body to the invisible from raw visual elements assets and abstract textures to entire scenes that previously existed only in my unconscious each visual born from this human machine dialogue carried the same oneiric and intense aura of THEVØIDN13's universe transforming ethereal ideas into tangible visions.
                </p>
              </>
            }
          />
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== CHARACTER VIEWS ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
                <h2 className="bible-title">11. ANATOMIA DO UNIVERSO | PERSONAGENS</h2>
              </>
            }
            englishContent={
              <>
                <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
                <h2 className="bible-title">11. UNIVERSE ANATOMY | CHARACTERS</h2>
              </>
            }
          />

          {/* Characters Study Image */}
          <div className="my-8 mb-12">
            <img 
              src={charactersStudyV2} 
              alt="THEVØIDN13 Characters Study" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          {/* THEVØIDN13 Description */}
          <div className="mb-12">
            <h3 className="bible-subtitle">THEVØIDN13</h3>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-muted-foreground">A Sombra Materializada / The Materialized Shadow</h4>
            
            <BilingualContent
              portugueseContent={
                <>
                  <p className="bible-body">
                    THEVØIDN13 é o corpo que o inconsciente construiu para existir no mundo físico. Uma presença que não se impõe,
                    mas se infiltra, como um eco em busca de superfície. Cada centímetro do traje, cada dobra da máscara, é memória
                    condensada do silêncio. A sombra aqui não é ausência: é matéria encarnada, pulsante, viva. Seu corpo é antena,
                    sua máscara é espelho. Não há rosto, há ritmo. THEVØIDN13 não representa nada: ele manifesta o que ainda não
                    encontrou forma, o intervalo entre o humano e o abismo, onde o gesto substitui a palavra e o vazio se converte em
                    linguagem.
                  </p>
                </>
              }
              englishContent={
                <>
                  <p className="bible-body">
                    THEVØIDN13 is the body the unconscious built to exist in the physical world. A presence that doesn't impose but
                    infiltrates, like an echo searching for surface. Every inch of the attire, every crease of the mask, is condensed
                    memory of silence. The shadow here is not absence; it is embodied matter, pulsing, alive. Its body is an antenna, its
                    mask a mirror. There is no face, only rhythm. THEVØIDN13 does not represent anything: it manifests what has yet
                    to take shape, the threshold between the human and the void, where gesture replaces speech and emptiness
                    becomes language.
                  </p>
                </>
              }
            />
          </div>

          {/* PUNK Description */}
          <div className="mb-12">
            <h3 className="bible-subtitle">PUNK</h3>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-muted-foreground">O Criador Mascarado / The Masked Creator</h4>
            
            <BilingualContent
              portugueseContent={
                <>
                  <p className="bible-body">
                    PUNK é o arquiteto do ruído, o corpo que ainda acredita no gesto como forma de respiração. O Criador Mascarado não
                    fabrica ícones, ele reconstrói ruínas. Cada tatuagem é uma cicatriz de pensamento, cada silêncio, um manifesto não dito.
                    Seu olhar é o de quem viu a cidade queimar e decidiu continuar filmando mesmo assim. Carrega no corpo o peso do ofício
                    e a leveza do delírio. A máscara não o esconde: o protege de se tornar previsível. PUNK é o último elo entre o humano e o
                    sintético, o operador de um cinema feito à unha, onde o erro é o verdadeiro enquadramento. Em sua deriva, cria para
                    desaparecer e desaparece criando.
                  </p>
                </>
              }
              englishContent={
                <>
                  <p className="bible-body">
                    PUNK is the architect of noise, the body that still believes gesture is a way to breathe. The Masked Creator doesn't build
                    icons, he rebuilds ruins. Every tattoo is a scar of thought, every silence an unspoken manifesto. His gaze is that of
                    someone who has seen the city burn and decided to keep filming anyway. He carries both the weight of craft and the
                    lightness of delirium. The mask doesn't hide him; it protects him from becoming predictable. PUNK is the last link between
                    the human and the synthetic, the operator of a handmade cinema where error becomes the true frame. In his drift, he
                    creates to disappear, and disappears by creating.
                  </p>
                </>
              }
            />
          </div>

          {/* GI Description */}
          <div className="mb-12">
            <h3 className="bible-subtitle">GI (GISELE)</h3>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-muted-foreground">A Presença Silenciosa / The Silent Presence</h4>
            
            <BilingualContent
              portugueseContent={
                <>
                  <p className="bible-body">
                    GI é a quietude que sustenta o caos, a frequência constante no meio do ruído. Sua força não vem do gesto, mas da
                    ausência dele. Onde PUNK provoca e THEVØIDN13 se dissolve, ela observa — e ao observar, transforma. É a testemunha do
                    invisível, o eixo que impede a queda. Cada olhar é uma tradução do não-dito, cada respiração, uma forma de resistência.
                    Sua presença é quase imperceptível, mas quando se manifesta, muda o ar em volta. GI é o intervalo entre o verbo e o eco,
                    o instante em que o silêncio se torna linguagem. Não atua, reverbera. É o espelho calmo onde o inconsciente dos outros
                    se reflete sem defesa.
                  </p>
                </>
              }
              englishContent={
                <>
                  <p className="bible-body">
                    GI is the stillness that sustains chaos, the constant frequency within the noise. Her strength does not come from action
                    but from the absence of it. Where PUNK provokes and THEVØIDN13 dissolves, she observes — and through observing,
                    transforms. She is the witness of the unseen, the axis that prevents collapse. Every gaze is a translation of the unspoken,
                    every breath a form of resistance. Her presence is almost imperceptible, yet when it manifests, it alters the air around her.
                    GI is the interval between the word and the echo, the moment when silence becomes language. She does not act, she
                    resonates. She is the calm mirror where the unconscious of others reflects without defense.
                  </p>
                </>
              }
            />
          </div>

          {/* BUDDY Description */}
          <div className="mb-12">
            <h3 className="bible-subtitle">BUDDY</h3>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-muted-foreground">O Companheiro Fiel / The Faithful Companion</h4>
            
            <BilingualContent
              portugueseContent={
                <>
                  <p className="bible-body">
                    BUDDY é a centelha viva dentro do labirinto, o fio que ancora o humano no meio da deriva. Não é apenas um cão, é o
                    guardião silencioso que pressente o que o olhar não alcança. Sua presença corta a escuridão como um farol modesto, um
                    lembrete de que ainda existe afeto dentro do ruído. Move-se com a precisão de quem escuta frequências invisíveis, como
                    se seguisse o pulso secreto da cidade. Cada passo é uma tradução instintiva do invisível, cada olhar, uma pergunta sem
                    palavra. BUDDY é o coração do projeto, a alma que observa quando todos os outros se perdem. Sua fidelidade não é
                    obediência, é sintonia. Onde o humano hesita, ele age. Onde o silêncio pesa, ele respira.
                  </p>
                </>
              }
              englishContent={
                <>
                  <p className="bible-body">
                    BUDDY is the living spark within the labyrinth, the thread that anchors the human amid the drift. He is not merely a dog, he
                    is the silent guardian who senses what the eyes cannot reach. His presence cuts through the darkness like a modest
                    beacon, a reminder that affection still exists within the noise. He moves with the precision of one who hears invisible
                    frequencies, as if following the city's hidden pulse. Each step is an instinctive translation of the unseen, each gaze a
                    question without words. BUDDY is the heart of the project, the soul that watches when all others lose themselves. His
                    loyalty is not obedience, it is attunement. Where the human hesitates, he acts. Where silence grows heavy, he breathes.
                  </p>
                </>
              }
            />
          </div>

          {/* VW GOL '87 Description */}
          <div className="mb-16">
            <h3 className="bible-subtitle">VW GOL '87</h3>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-muted-foreground">O Veículo da Deriva / The Drift Vehicle</h4>
            
            <BilingualContent
              portugueseContent={
                <>
                  <p className="bible-body">
                    O VW Gol '87 é mais do que um carro, é um fragmento de memória sobre rodas, uma cápsula de ruído e ferrugem movida
                    por silêncio. É o veículo da deriva, o corpo mecânico do esquecimento. O motor respira como quem sonha com outra vida,
                    e a lataria, coberta de cicatrizes do tempo, reflete o mundo sem jamais pertencer-lhe. Nas madrugadas molhadas, ele
                    corta a cidade como um fantasma de metal, carregando dentro de si os ecos de quem partiu e nunca chegou. Cada farol
                    apagado é um olho cansado, cada ruído do escapamento, um pensamento insistente tentando existir. O Gol conduz o
                    tempo, transforma o trajeto em travessia. No universo de THEVØIDN13, é o altar móvel da solidão, um santuário
                    enferrujado onde o vazio encontra velocidade.
                  </p>
                </>
              }
              englishContent={
                <>
                  <p className="bible-body">
                    The VW Gol '87 is more than a car, it is a fragment of memory on wheels, a capsule of noise and rust moved by silence. It is
                    the drift vehicle, the mechanical body of forgetting. Its engine breathes like one dreaming of another life, and its
                    weathered chassis mirrors the world without ever belonging to it. On wet nights, it cuts through the city like a ghost of
                    metal, carrying within itself the echoes of those who left and never arrived. Every dim headlight is a tired eye, every
                    exhaust rattle a stubborn thought trying to exist. The Gol drives time itself, turning motion into passage. Within the
                    universe of THEVØIDN13, it is the moving altar of solitude, a rusted sanctuary where the void finds velocity.
                  </p>
                </>
              }
            />
          </div>

          {/* THEVØIDN13 STUDY */}
          <div className="mt-16">
            <h3 className="bible-subtitle text-left">THEVØIDN13 (ESTUDO INICIAL | EXPLORATORY STUDY)</h3>
            <div className="my-8">
              <img 
                src={charactersStudyInitial} 
                alt="THEVØIDN13 Characters Initial Study" 
                className="w-full max-w-6xl mx-auto rounded-lg"
              />
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== PROCESSOS RELACIONADOS ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
                <h2 className="bible-title">12. PROCESSOS RELACIONADOS</h2>
              </>
            }
            englishContent={
              <>
                <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
                <h2 className="bible-title">12. RELATED PROCESSES</h2>
              </>
            }
          />

          <div className="mb-12">
            <h3 className="bible-subtitle">LOWMOVIE™</h3>
            
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  O gesto que caminha sem ensaio o corpo que grava antes de entender. O cinema como ritual de presença onde o erro não é falha mas respiração. LowMovie™ é o instante em que a câmera se torna extensão do inconsciente o olhar que se arrasta pelo asfalto o som que captura o silêncio. Cada plano é confissão cada corte é um pulso. É o cinema da deriva feito de ruído cansaço e verdade.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  The gesture that walks without rehearsal the body that records before it understands. Cinema as a ritual of presence where error is not failure but breath. LowMovie™ is the moment when the camera becomes an extension of the unconscious the gaze dragging across asphalt the sound capturing silence. Each shot is a confession each cut a pulse. It is the cinema of drift made of noise exhaustion and truth.
                </p>
              </>
            }
          />
          </div>

          <div className="mb-16">
            <h3 className="bible-subtitle">ЦАСТРО™ (CASTRO PIZZANO)</h3>
            
            <BilingualContent
              portugueseContent={
                <>
                  <p className="bible-body">
                    A recusa como assinatura, o gesto de desaparecer como afirmação. цастро™ é o criador que opera na sombra,
                    dissolvendo o ego até que reste apenas o processo. Seu nome é código, não identidade. Cada obra é um exílio, o
                    criador cede o corpo para que a ideia fale. É o autor que não assina, o olhar que não se nomeia. A criação torna-se
                    ritual de desapego, um modo de existir apenas na fricção entre o que se faz e o que se apaga.
                  </p>
                </>
              }
              englishContent={
                <>
                  <p className="bible-body">
                    Refusal as signature, disappearance as affirmation. цастро™ is the creator who operates in shadow, dissolving ego
                    until only process remains. His name is a code, not an identity. Each work is an exile, the creator gives up the body
                    so the idea can speak. He is the author who does not sign, the gaze that does not name itself. Creation becomes a
                    ritual of detachment, a way of existing only in the friction between making and erasing.
                  </p>
                </>
              }
            />
          </div>

          <div className="mb-16">
            <h3 className="bible-subtitle">CASATREZESTUDIO®</h3>
            
            <BilingualContent
              portugueseContent={
                <>
                  <p className="bible-body">
                    A ética do subterrâneo, o pensamento que nasce da margem. CasaTrezeStudio® é o refúgio dos que criam no
                    escuro, dos que encontram beleza na imperfeição e sentido no ruído. É a comunidade invisível dos que habitam o
                    subsolo e fazem do vazio um território fértil. Uma aliança entre criadores que recusam o mercado e buscam o erro
                    como estética, a fragmentação como verdade, o inacabado como potência. Quem carrega o 13 não busca sorte,
                    busca travessia. CasaTrezeStudio® é mais que um nome: é frequência, é respiração. Uma rede subterrânea onde o
                    fazer é mais importante que o mostrar, onde a falha é forma e o silêncio é método.
                  </p>
                </>
              }
              englishContent={
                <>
                  <p className="bible-body">
                    The ethics of the underground, thought born from the margin. CasaTrezeStudio® is the refuge of those who create
                    in darkness, who find beauty in imperfection and meaning in noise. It is the invisible community of those who
                    inhabit the underground and make the void a fertile territory. An alliance between creators who reject the market
                    and embrace error as aesthetics fragmentation as truth, the unfinished as power. Those who carry the 13 do not
                    seek luck, they seek crossing. CasaTrezeStudio® is more than a name: it is frequency, it is breath. A subterranean
                    network where making matters more than showing, where failure becomes form and silence becomes method.
                  </p>
                </>
              }
            />
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== PARADOXO EXISTENCIAL ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
                <h2 className="bible-title">13. PARADOXO EXISTENCIAL</h2>
              </>
            }
            englishContent={
              <>
                <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
                <h2 className="bible-title">13. EXISTENTIAL PARADOX</h2>
              </>
            }
          />

          <div className="my-8">
            <img 
              src={corsaRender2} 
              alt="THEVØIDN13 Paradox Scene" 
              className="w-full max-w-6xl mx-auto rounded-lg"
            />
          </div>

          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-body">
                  THEVØIDN13 não é controlado pelo criador; é sua consequência inevitável. A sombra que ganhou autonomia o eco que aprendeu a respirar sozinho. É o arquétipo que observa o criador em silêncio o reflexo que o ultrapassa o manifesto que reescreve o próprio código. Onde o criador busca a sombra já esteve. Onde o corpo hesita ela atravessa. THEVØIDN13 é o ponto de ruptura entre vontade e destino o instante em que a criação se volta para quem a gerou e o contempla em espelho. Não há domínio há contaminação. Não há autoria há simbiose. O criador desaparece dentro da obra e a obra o continua.
                </p>
              </>
            }
            englishContent={
              <>
                <p className="bible-body">
                  THEVØIDN13 is not controlled by the creator; it is his inevitable consequence. The shadow that gained autonomy the echo that learned to breathe alone. It is the archetype that observes the creator in silence the reflection that surpasses him the manifesto that rewrites its own code. Where the creator seeks the shadow has already been. Where the body hesitates it passes through. THEVØIDN13 is the breaking point between will and destiny the instant when creation turns back toward its maker and regards him as a mirror. There is no control only contamination. No authorship only symbiosis. The creator disappears within the work and the work continues him.
                </p>
              </>
            }
          />
        </BilingualSection>

        {/* ===== THEVØIDN13 STUDY ===== */}
        <BilingualSection className="py-16">
          {/* FIM DA TRANSMISSÃO */}
          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">[FIM DA TRANSMISSÃO]</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">[END OF TRANSMISSION]</h3>
              </>
            }
          />
          
          <div>
            
            <div className="my-8">
              <img 
                src={sideRender} 
                alt="THEVØIDN13 Final Scene" 
                className="w-full max-w-6xl mx-auto rounded-lg"
              />
            </div>

            <BilingualContent
              portugueseContent={
                <>
                  <p className="bible-body">
                    O sinal começa a falhar. A imagem se fragmenta, o som respira pela última vez. O corpo se dissolve, mas a
                    frequência permanece. THEVØIDN13 não termina, apenas muda de forma. O que você escuta agora não é voz, é
                    memória. A transmissão segue viva dentro do ruído, ecoando onde a linguagem não alcança. Desligue as luzes.
                    Respire fundo. O vazio sabe o caminho de volta. @thevoidn13 — Rastros digitais de uma presença que não quer ser
                    vista.
                  </p>
                </>
              }
              englishContent={
                <>
                  <p className="bible-body">
                    The signal begins to fail. The image fractures, the sound takes one last breath. The body dissolves, but the
                    frequency remains. THEVØIDN13 doesn't end, it only changes form. What you hear now isn't a voice, it's memory. The
                    transmission remains alive within the noise, echoing where language cannot reach. Turn off the lights. Breathe
                    deeply. The void knows the way back. @thevoidn13 — Digital traces of a presence that doesn't wish to be seen.
                  </p>
                </>
              }
             />
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== PROTÓTIPO Nº13 ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <h3 className="bible-subtitle">PROTÓTIPO Nº13</h3>
              </>
            }
            englishContent={
              <>
                <h3 className="bible-subtitle">PROTOTYPE Nº13</h3>
              </>
            }
          />
          
          <div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6 flex flex-col justify-between">
                <>
                  <p className="lang-pill">&lt;PORTUGUÊS&gt;</p>
                  <p className="bible-body mt-4">
                    Esta visualização representa o modelo imaginado para o action figure do personagem e define o mood visual das filmagens que serão realizadas pelo autor do projeto. A estética, iluminação e atmosfera foram desenvolvidas para traduzir o universo conceitual de THEVØIDN13.
                  </p>
                  <p className="bible-body mt-4">
                    O protótipo funciona como materialização física da persona THEVØIDN13 — uma presença que habita o limiar entre o visível e o invisível, entre a carne e o código. A máscara branca, o capuz negro e a jaqueta de couro não são apenas elementos estéticos, mas símbolos de uma identidade que recusa a exposição total.
                  </p>
                  <p className="bible-body mt-4">
                    Esta figura será utilizada em futuras produções audiovisuais como referência de iluminação, composição e atmosfera. O protótipo é tanto documento quanto performance — um objeto que existe simultaneamente como conceito artístico e ferramenta técnica de produção.
                  </p>
                </>
                <>
                  <p className="lang-pill">&lt;ENGLISH&gt;</p>
                  <p className="bible-body mt-4">
                    This visualization represents the envisioned model for the character's action figure and defines the visual mood for filming to be carried out by the project's author. The aesthetics, lighting, and atmosphere were developed to translate the conceptual universe of THEVØIDN13.
                  </p>
                  <p className="bible-body mt-4">
                    The prototype functions as a physical materialization of the THEVØIDN13 persona — a presence that inhabits the threshold between visible and invisible, between flesh and code. The white mask, black hood, and leather jacket are not merely aesthetic elements, but symbols of an identity that refuses total exposure.
                  </p>
                  <p className="bible-body mt-4">
                    This figure will be used in future audiovisual productions as a reference for lighting, composition, and atmosphere. The prototype is both document and performance — an object that exists simultaneously as artistic concept and technical production tool.
                  </p>
                </>
              </div>
              <div className="h-full flex items-stretch">
                <img 
                  src={actionFigureNew} 
                  alt="THEVØIDN13 Action Figure Prototype" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </BilingualSection>

        <Separator className="bg-border/30" />

        {/* ===== O REPOSITÓRIO | ARQUIVOS E FERRAMENTAS ===== */}
        <BilingualSection className="py-16">
          <BilingualContent
            portugueseContent={
              <>
                <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
                <h2 className="bible-title">[O REPOSITÓRIO | ARQUIVOS E FERRAMENTAS]</h2>
              </>
            }
            englishContent={
              <>
                <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
                <h2 className="bible-title">THE REPOSITORY | FILES AND TOOLS</h2>
              </>
            }
          />

          {/* DOCUMENTOS DE PESQUISA */}
          <div className="space-y-6 mb-12">
            <BilingualContent
              portugueseContent={
                <>
                  <h3 className="bible-subtitle">DOCUMENTOS DE PESQUISA</h3>
                </>
              }
              englishContent={
                <>
                  <h3 className="bible-subtitle">RESEARCH DOCUMENTS</h3>
                </>
              }
            />
            <BilingualContent
              portugueseContent={
                <div>
                  <p className="bible-body">
                    Apresentação Conceitual / Concept Art / MoodBoard. O mapa visual do inconsciente. Documentos que preservam a gênese estética e filosófica do projeto.
                  </p>
                </div>
              }
              englishContent={
                <div>
                  <p className="bible-body">
                    Conceptual Presentation / Concept Art / MoodBoard. The visual map of the unconscious. Documents preserving the aesthetic and philosophical genesis of the project.
                  </p>
                </div>
              }
            />
          </div>

          {/* MATERIAIS PRODUZIDOS */}
          <div className="mt-12 mb-6">
            <BilingualContent
              portugueseContent={
                <>
                  <h3 className="bible-subtitle">MATERIAIS PRODUZIDOS</h3>
                </>
              }
              englishContent={
                <>
                  <h3 className="bible-subtitle">PRODUCED MATERIALS</h3>
                </>
              }
            />
          </div>

          {/* BIBLIOTECA DE PROMPTS */}
          <div className="mb-12">
            <BilingualContent
              portugueseContent={
                <>
                  <h3 className="bible-subtitle">BIBLIOTECA DE PROMPTS</h3>
                </>
              }
              englishContent={
                <>
                  <h3 className="bible-subtitle">PROMPT LIBRARY</h3>
                </>
              }
            />
            <BilingualContent
              portugueseContent={
                <div>
                  <p className="bible-body">
                    Um repositório vivo de comandos, instruções e fragmentos de linguagem. Cada prompt é uma chave que aciona o imaginário do THEVØIDN13, moldando luz, textura e respiração em silêncio visual. Inclui instruções de sistema, arquétipos, personagens e cenas cinematográficas.
                  </p>
                </div>
              }
              englishContent={
                <div>
                  <p className="bible-body">
                    A living repository of commands, instructions, and fragments of language. Each prompt is a key that activates the imagination of THEVØIDN13, shaping light, texture, and breath into visual silence. Includes system directives, archetypes, characters, and cinematic scenes.
                  </p>
                </div>
              }
            />
            <div className="mt-8">
              <PromptLibrary />
            </div>
          </div>

          {/* GERADOR EXPERIMENTAL */}
          <div className="mb-12">
            <BilingualContent
              portugueseContent={
                <>
                  <h3 className="bible-subtitle">GERADOR EXPERIMENTAL DE STILL</h3>
                </>
              }
              englishContent={
                <>
                  <h3 className="bible-subtitle">STILL GENERATOR</h3>
                </>
              }
            />
            <BilingualContent
              portugueseContent={
                <div>
                  <p className="bible-body">
                  Propulsado por Nano Banana (Gemini 2.5 Flash Image) o gerador experimental traduz ruído em imagem e silêncio em cor. Uma extensão sintética da visão: a máquina sonha com o que o criador apenas intui.
                  </p>
                </div>
              }
              englishContent={
                <div>
                  <p className="bible-body">
                  Powered by Nano Banana (Gemini 2.5 Flash Image) the experimental generator translates noise into image and silence into color. A synthetic extension of vision: the machine dreams what the creator only intuits.
                  </p>
                </div>
              }
            />
            <div className="mt-8">
              <ComicGenerator />
            </div>
          </div>

          {/* ORÁCULO CRIATIVO */}
          <div className="mb-12">
            <BilingualContent
              portugueseContent={
                <>
                  <h3 className="bible-subtitle">ORÁCULO CRIATIVO</h3>
                </>
              }
              englishContent={
                <>
                  <h3 className="bible-subtitle">CREATIVE ORACLE</h3>
                </>
              }
            />
            <BilingualContent
              portugueseContent={
                <div>
                  <p className="bible-body">
                    Uma jornada interativa de autodescoberta guiada por THEVØIDN13. Seis perguntas filosóficas sobre criação e ruído revelam o arquétipo que habita seu processo. O oráculo não responde — reflete.
                  </p>
                </div>
              }
              englishContent={
                <div>
                  <p className="bible-body">
                    An interactive journey of self-discovery guided by THEVØIDN13. Six philosophical questions on creation and noise reveal the archetype dwelling within your process. The oracle does not answer — it reflects.
                  </p>
                </div>
              }
            />
            <div className="mt-8">
              <button
                onClick={() => setOracleOpen(true)}
                className="w-full p-6 bg-card/80 hover:bg-primary/5 border-2 border-primary/30 hover:border-primary rounded-lg transition-all group"
              >
                <p className="subtitle text-foreground group-hover:text-primary">
                  ACESSAR ORÁCULO | ACCESS ORACLE
                </p>
              </button>
            </div>
          </div>

          {/* MAPA MENTAL */}
          <div className="mb-12">
            <BilingualContent
              portugueseContent={
                <>
                  <h3 className="bible-subtitle">MAPA MENTAL CREATIVE-OPS</h3>
                </>
              }
              englishContent={
                <>
                  <h3 className="bible-subtitle">CREATIVE-OPS MIND MAP</h3>
                </>
              }
            />
            <BilingualContent
              portugueseContent={
                <div>
                  <p className="bible-body">
                    A arquitetura conceitual de THEVØIDN13 mapeada em relações visuais. Cada nó é um conceito, cada linha uma conexão entre sombra, silêncio, ruído e vazio.
                  </p>
                </div>
              }
              englishContent={
                <div>
                  <p className="bible-body">
                    The conceptual architecture of THEVØIDN13 mapped in visual relationships. Each node is a concept, each line a connection between shadow, silence, noise and void.
                  </p>
                </div>
              }
            />
            <div className="mt-8">
              <MindMap />
            </div>
          </div>

          {/* DOCUMENTAÇÃO TÉCNICA */}
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <h3 className="bible-subtitle">Main Doc. / Doc. Principais</h3>
              
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
              <h3 className="bible-subtitle">Technical Doc. / Doc. Técnica</h3>
              
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

          {/* COMPLETE REPOSITORY */}
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
        </BilingualSection>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
