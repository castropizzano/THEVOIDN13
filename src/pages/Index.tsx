import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero Section - Full screen image with tagline */}
        <section className="relative w-full h-screen overflow-hidden">
          <img 
            src={heroImage} 
            alt="THE VOID N.13" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-16 text-center px-6">
            <p className="text-base font-light tracking-wide text-[#DADADA]/90 drop-shadow-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
              [shadow_interface_bible] um corpo à deriva entre o ruído e o silêncio
            </p>
          </div>
        </section>

        {/* Quando o Inconsciente Ganha Corpo */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-base font-bold">Quando o Inconsciente Ganha Corpo</h2>
            <h3 className="text-base font-medium">When the Unconscious Takes Shape</h3>
            
            <p className="text-base text-justify leading-relaxed">
              Não nasceu de uma ideia, mas de uma pressão interna. Pensei em inventar uma máscara, e acabei revelando um rosto que sempre esteve ali. THE VOID N.13 surgiu do atrito entre o desejo e o cansaço, da urgência de se esvaziar para continuar criando. Não é personagem nem alter ego. É uma presença que respira onde o corpo falha. Uma matéria que se move entre o fim e o recomeço. O instante em que o inconsciente decide existir.
            </p>
            <p className="text-base text-justify leading-relaxed">
              It wasn't born from an idea, but from inner pressure. I thought I was inventing a mask, and I ended up revealing a face that had always been there. THE VOID N.13 emerged from the friction between desire and exhaustion, from the urgency to empty oneself just to keep creating. It is neither character nor alter ego. It is a presence that breathes where the body fails. A matter that moves between the end and the beginning. The moment when the unconscious decides to exist.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <h4 className="text-base font-bold">LowMovie™</h4>
                <p className="text-base text-justify leading-relaxed">
                  O gesto que caminha sem ensaio. O corpo como cinema, o erro como verdade. Um filme que não representa, respira.
                </p>
                <p className="text-base text-justify leading-relaxed">
                  The gesture that walks without rehearsal. The body as cinema, the mistake as truth. A film that doesn't represent, it breathes.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-bold">цастро™</h4>
                <p className="text-base text-justify leading-relaxed">
                  A recusa como assinatura. O criador desaparece para que a ideia fale. O anonimato como resistência estética.
                </p>
                <p className="text-base text-justify leading-relaxed">
                  Refusal as signature. The creator disappears so the idea can speak. Anonymity as aesthetic resistance.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-bold">CasaTrezeStudio®</h4>
                <p className="text-base text-justify leading-relaxed">
                  A ética do subterrâneo. O pensamento que nasce da margem. O design que pensa como quem respira concreto.
                </p>
                <p className="text-base text-justify leading-relaxed">
                  The ethics of the underground. Thought that rises from the margin. Design that thinks like someone breathing concrete.
                </p>
              </div>
            </div>
          </div>
        </section>

        <img src={conceptFront} alt="Concept" className="w-full h-auto" />

        {/* A Máscara */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-base font-bold">A Máscara: Ceder Espaço ao Inconsciente</h2>
            <h3 className="text-base font-medium">The Mask: Yielding Space to the Unconscious</h3>
            
            <p className="text-base text-justify leading-relaxed">
              A máscara veio antes do nome. Branca, lisa, silenciosa. Não era uma face, era uma pausa. Quando a olhei pela primeira vez, percebi que ela não me olhava de volta. Talvez fosse isso o que eu buscava: existir sem precisar me afirmar. Quando a vesti, o rosto deixou de importar. O espelho não devolveu imagem, apenas silêncio. Foi nesse instante que compreendi: não estava criando um personagem, mas cedendo espaço. Ceder espaço ao inconsciente, deixar que ele assumisse forma. A máscara é o pacto entre o que se apaga e o que retorna, o instante em que o corpo permite ser atravessado por algo maior do que ele mesmo.
            </p>
            <p className="text-base text-justify leading-relaxed">
              The mask came before the name. White, smooth, silent. It wasn't a face, it was a pause. When I looked at it for the first time, I realized it didn't look back at me. Perhaps that was what I was seeking: to exist without needing to assert myself. When I wore it, the face ceased to matter. The mirror returned no image, only silence. It was in that moment I understood: I wasn't creating a character, I was yielding space. Yielding space to the unconscious, letting it take shape. The mask is the pact between what fades and what returns, the instant when the body allows itself to be crossed by something greater than itself.
            </p>
          </div>
        </section>

        <img src={conceptSide} alt="Concept" className="w-full h-auto" />

        {/* Triad: Vazio, 13, Coletivo */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h2 className="text-base font-bold">O Vazio</h2>
              <h3 className="text-base font-medium">The Void</h3>
              <p className="text-base text-justify leading-relaxed">
                O vazio que não é ausência, mas potência. Um campo aberto entre o que penso e o que ainda não consigo nomear. É o intervalo onde a criação respira, o lugar que existe antes da intenção. O vazio é o ventre do invisível, aquilo que antecede o gesto, o instante em que o silêncio se transforma em matéria.
              </p>
              <p className="text-base text-justify leading-relaxed">
                The void that is not absence, but potential. An open field between what I think and what I cannot yet name. It is the interval where creation breathes, the place that exists before intention.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-base font-bold">Número 13</h2>
              <h3 className="text-base font-medium">Number 13</h3>
              <p className="text-base text-justify leading-relaxed">
                O número da morte simbólica, o fim que recomeça. Treze é travessia, o andar interditado da psique, onde o medo se transforma em imagem. É o chamado para descer, perder a forma e voltar outro. Um mergulho no inconsciente que revela o que a consciência não suporta dizer.
              </p>
              <p className="text-base text-justify leading-relaxed">
                The number of symbolic death, the end that begins again. Thirteen is a crossing, the forbidden floor of the psyche, where fear turns into image.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-base font-bold">CasaTrezeStudio</h2>
              <h3 className="text-base font-medium">The Collective</h3>
              <p className="text-base text-justify leading-relaxed">
                A assinatura subterrânea que me acompanha há anos. Um selo invisível, criado no subsolo onde tudo o que é vivo se esconde. A CasaTreze não é marca, é rito. Uma comunidade simbólica de quem cria no escuro e chama isso de luz.
              </p>
              <p className="text-base text-justify leading-relaxed">
                The underground signature that has followed me for years. An invisible seal, born in the underground where all that's alive hides.
              </p>
            </div>
          </div>
        </section>

        <img src={conceptBack} alt="Concept" className="w-full h-auto" />

        {/* O Gesto */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-base font-bold">O Gesto</h2>
            <h3 className="text-base font-medium">The Gesture</h3>
            
            <p className="text-base text-justify leading-relaxed">
              Cada movimento é um ruído controlado, um eco do que o corpo escuta por dentro. Andar é pensar, parar é ouvir. THE VOID N.13 não representa, ele encarna a hesitação. O gesto é a respiração do pensamento, um movimento de exílio e de retorno. Cada deslocamento é uma forma de escuta: o corpo capta o que a mente silencia.
            </p>
            <p className="text-base text-justify leading-relaxed">
              Each movement is a controlled noise, an echo of what the body hears within. To walk is to think, to stop is to listen. THE VOID N.13 doesn't represent, it embodies hesitation. Gesture is the breath of thought, a movement of exile and return. Every displacement is a form of listening: the body perceives what the mind silences.
            </p>
          </div>
        </section>

        <img src={roughs000} alt="Sketches" className="w-full h-auto" />

        {/* A Voz do Vazio */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-base font-bold">A Voz do Vazio</h2>
            <h3 className="text-base font-medium">The Voice of the Void</h3>
            
            <p className="text-base text-justify leading-relaxed">
              A voz não vem da boca, vem do corpo. Ela vibra antes do som, respira antes da palavra. Quando fala, não explica: convoca. Cada frase é uma fresta aberta no concreto do silêncio. O que se diz, morre. O que se cala, vive. O som não é verbo, é presença em estado bruto, matéria que pulsa antes do sentido.
            </p>
            <p className="text-base text-justify leading-relaxed">
              The voice doesn't come from the mouth, it comes from the body. It vibrates before sound, it breathes before words. When it speaks, it doesn't explain: it summons. Each phrase is a crack opened in the concrete of silence. What is spoken dies. What is silent lives. Sound is not a verb; it is presence in its rawest state, matter that pulses before meaning.
            </p>

            <h4 className="text-base font-bold mt-12">A Frequência</h4>
            <h5 className="text-base font-medium">The Frequency</h5>
            <p className="text-base text-justify leading-relaxed">
              A voz de THE VOID N.13 é grave, sem origem. Parece vir de dentro da parede, ou do próprio chão. Não há raiva, há densidade. É o som do inconsciente tentando respirar. A vibração antecede o sentido: antes de ser palavra, é impulso. O corpo torna-se caixa de ressonância do que o mundo silenciou.
            </p>
            <p className="text-base text-justify leading-relaxed">
              THE VOID N.13's voice is deep, without origin. It seems to come from inside the wall or from the ground itself. There is no anger, only density. It is the sound of the unconscious trying to breathe. The vibration precedes meaning: before it becomes word, it is impulse. The body becomes the resonant chamber of what the world silenced.
            </p>
          </div>
        </section>

        <img src={roughs001} alt="Sketches" className="w-full h-auto" />

        {/* Estética e Manifestação */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-base font-bold">Estética e Manifestação</h2>
            <h3 className="text-base font-medium">Aesthetic and Manifestation</h3>
            
            <p className="text-base text-justify leading-relaxed">
              A estética de THE VOID N.13 não foi desenhada, ela emergiu. Surgiu da fricção entre o erro e o silêncio, entre o cansaço e o impulso de existir. É uma estética que nasce do colapso, do ruído urbano e da introspecção solitária. Planos longos, granulação, luzes estouradas e ruas molhadas são ecos visuais de uma mente em vigília. Cada sombra é uma memória, cada reflexo, uma confissão.
            </p>
            <p className="text-base text-justify leading-relaxed">
              The aesthetic of THE VOID N.13 wasn't designed, it emerged. It rose from the friction between error and silence, between exhaustion and the urge to exist. It's an aesthetic born from collapse, from urban noise and solitary introspection. Long takes, grain, blown-out lights, and wet streets are visual echoes of a mind in wakefulness. Each shadow is a memory; each reflection, a confession.
            </p>

            <h4 className="text-base font-bold mt-12">Atmosfera Visual</h4>
            <h5 className="text-base font-medium">Visual Atmosphere</h5>
            <p className="text-base text-justify leading-relaxed">
              A atmosfera é urbana, noturna, introspectiva e chuvosa. O som é grave e distante, como trovão contido. Há algo de pós-vida nos becos e nas luzes difusas, o rastro de uma presença que já partiu. A imagem é sempre corpo e ausência ao mesmo tempo: o erro, aqui, é forma.
            </p>
            <p className="text-base text-justify leading-relaxed">
              The atmosphere is urban, nocturnal, introspective, and rainy. The sound is low and distant, like restrained thunder. There's something post-life in the alleys and diffused lights, the trace of a presence already gone. The image is always body and absence at once: here, error becomes form.
            </p>
          </div>
        </section>

        <img src={roughs002} alt="Sketches" className="w-full h-auto" />

        {/* Referências */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-base font-bold">Referências</h2>
            <h3 className="text-base font-medium">References</h3>
            
            <h4 className="text-base font-bold mt-8">Cinema</h4>
            <p className="text-base text-justify leading-relaxed">
              Na estética cinematográfica que molda The Void No.13, percebem-se ecos de noites neon e heróis silenciosos. Das ruas molhadas e solitárias de Drive às angústias urbanas de Mr. Robot, o projeto absorve a linguagem visual de narrativas em que o vazio fala mais que as palavras. A violência ritualística e saturada de Only God Forgives encontra ressonância aqui como um poema visual de fúria contida, enquanto os futuros distópicos de Akira e Ghost in the Shell emprestam sua melancolia tecnológica.
            </p>
            <p className="text-base text-justify leading-relaxed">
              In the cinematic aesthetic shaping The Void No.13, one perceives echoes of neon-lit nights and silent anti-heroes. From the rain-slicked, lonely streets of Drive to the urban anxieties of Mr. Robot, the project absorbs the visual language of narratives where emptiness speaks louder than words. The ritualistic, saturated violence of Only God Forgives resonates here as a visual poem of contained fury, while the dystopian futures of Akira and Ghost in the Shell lend their technological melancholy.
            </p>

            <h4 className="text-base font-bold mt-8">Música</h4>
            <h5 className="text-base font-medium">Music</h5>
            <p className="text-base text-justify leading-relaxed">
              Por trás do silêncio do personagem, pulsa uma trilha sonora invisível tecida por influências do rock sombrio e da eletrônica atmosférica. As guitarras etéreas e os riffs pesados de Deftones misturam-se à catarse industrial do Nine Inch Nails, compondo um eco sonoro de angústia e resistência. Das batidas lentas e hipnóticas do Massive Attack emerge um clima de suspense urbano, enquanto a brutalidade introspectiva da banda Loathe carrega a densidade do caos moderno em cada acorde.
            </p>
            <p className="text-base text-justify leading-relaxed">
              Beneath the character's silence, an invisible soundtrack throbs, woven from dark rock and atmospheric electronic influences. The ethereal guitars and crushing riffs of Deftones blend with the industrial catharsis of Nine Inch Nails, composing a sonic echo of anguish and resistance. From Massive Attack's slow, hypnotic beats emerges a mood of urban suspense, while the introspective brutality of Loathe carries the weight of modern chaos in each chord.
            </p>
          </div>
        </section>

        <img src={roughs003} alt="Sketches" className="w-full h-auto" />

        {/* Coautoria Simbólica com IA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-base font-bold">Coautoria Simbólica – Integração com IA</h2>
            <h3 className="text-base font-medium">Symbolic Co-authorship – Integration with AI</h3>
            
            <p className="text-base text-justify leading-relaxed">
              Nos bastidores do THE VOID N.13, a inteligência artificial revelou-se uma cúmplice silenciosa e potente. Assumindo a lógica de um projeto homem-orquestra, abracei a IA como parte da metodologia criativa, uma extensão digital do meu processo solitário de criação. Por meio de plataformas de vanguarda, especialmente o Google AI Studio e ferramentas afins, integrei algoritmos generativos em cada etapa do processo artístico, ampliando as fronteiras do possível em minha arte.
            </p>
            <p className="text-base text-justify leading-relaxed">
              Behind the scenes of THE VOID N.13, artificial intelligence has revealed itself as a silent yet potent accomplice. Adopting the logic of a one-man-band project, I embraced AI as part of my creative methodology, a digital extension of my solitary creative process. By leveraging cutting-edge platforms, especially Google AI Studio and similar tools, I integrated generative algorithms at every stage of creation, expanding the boundaries of what was possible in my art.
            </p>

            <h4 className="text-base font-bold mt-12">Expansão Visual</h4>
            <p className="text-base text-justify leading-relaxed">
              A IA generativa expandiu minha paleta visual de formas inimagináveis. A partir de comandos de texto, passei a gerar imagens que davam corpo ao invisível, de elementos brutos e texturas abstratas a cenas inteiras que antes existiam apenas em meu inconsciente. Cada visual criado por esse diálogo humano-máquina carregava a mesma aura onírica e intensa do universo do Void, transformando ideias etéreas em visões tangíveis.
            </p>

            <h4 className="text-base font-bold mt-8">Voz e Ruído</h4>
            <p className="text-base text-justify leading-relaxed">
              A IA também emprestou voz e ruído ao silêncio do projeto. Vozes sintéticas, cada qual com personalidade própria, emergiram para dar fala ao indizível, como se o Void sussurrasse por múltiplas gargantas digitais. Em paralelo, sons e ruídos gerados algoritmicamente costuraram a atmosfera: do sussurro elétrico ao trovão distante, preencheram o vazio acústico com camadas de tensão e devaneio.
            </p>

            <h4 className="text-base font-bold mt-8">Coautoria nas Palavras</h4>
            <p className="text-base text-justify leading-relaxed">
              Até no domínio das palavras, a inteligência artificial atuou como coautora simbólica. Roteiros e descrições atmosféricas foram desenvolvidos em parceria com algoritmos, que ajudaram a delinear cenários e narrativas com a mesma poesia fragmentada característica do THE VOID N.13. Fragmentos de texto, frases quebradas, micro-manifestos também emergiram desse diálogo entre humano e máquina, surgindo como ecos conceituais alinhados ao manifesto e à arquitetura do ser do Void.
            </p>

            <p className="text-base text-justify leading-relaxed mt-8">
              Nessa co-criação com a máquina, a IA permanece uma coautora invisível que jamais ofusca a essência do projeto. Em vez de subverter a estética do THE VOID N.13, ela a intensifica em silêncio, respeitando o tom lírico-conceitual, o ritmo fragmentado e a linguagem de sombras que definem esta obra. Cada interação homem-máquina torna-se um ritual discreto de criação, em que os algoritmos oferecem sugestões e ecos, mas é o inconsciente do criador que continua guiando a sinfonia. Assim, a inteligência artificial se faz presente como espelho digital do meu impulso criativo, um reflexo binário do Void que coescreve sem rosto, transformando o silêncio em matéria e afirmando, neste desfecho, a ideia de que até o vazio pode ter uma inteligência sussurrante.
            </p>
          </div>
        </section>

        <img src={conceptCrew} alt="Concept Crew" className="w-full h-auto" />

        {/* O Lugar Seguro para Desaparecer */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-base font-bold">O Lugar Seguro para Desaparecer</h2>
            <h3 className="text-base font-medium">The Safe Place to Disappear</h3>
            
            <p className="text-base text-justify leading-relaxed">
              Hoje entendo: o Void não nasceu para uma festa. Ele nasceu porque eu precisava de um refúgio, um lugar onde o silêncio não fosse ausência, mas abrigo. Um espaço para desaparecer sem deixar de criar. Um modo de continuar respirando quando tudo o resto parecia saturado. O projeto cresceu como tudo o que é orgânico: pelas frestas, pelos ruídos, pelos becos da cidade. E se alguém pergunta o que é, eu respondo: não é personagem, é vestígio. É o que restou de mim depois que todas as máscaras sociais caíram. THE VOID No. 13 é o nome que dei à minha própria sombra, o mito que inventei para continuar respirando. Talvez, só talvez, seja o começo de uma nova forma de estar vivo sem precisar ser visto.
            </p>
            <p className="text-base text-justify leading-relaxed">
              Now I understand: the Void wasn't born for a party. It was born because I needed a refuge, a place where silence could be shelter, not absence. A space to disappear without ceasing to create. A way to keep breathing when everything else felt saturated. The project grew as all organic things do: through cracks, through noise, through the alleys of the city. And if someone asks what it is, I say: it's not a character, it's a residue. It's what was left of me after all the social masks had fallen. THE VOID No. 13 is the name I gave my own shadow, the myth I invented to keep breathing. And perhaps, just perhaps, it's the beginning of a new way of being alive without being seen.
            </p>
          </div>
        </section>

        <img src={actionFigure} alt="Action Figure" className="w-full h-auto" />

        {/* Manifesto Integrado */}
        <section className="py-20 px-6 bg-accent text-accent-foreground">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-base font-bold">Manifesto Integrado</h2>
            <h3 className="text-base font-medium">Integrated Manifesto</h3>
            
            <p className="text-base text-justify leading-relaxed">
              Não há começo. Há apenas o momento em que o silêncio decide respirar. THE VOID N.13 nasceu desse sopro invisível, um gesto entre a morte e o retorno. Tudo o que chamam de ausência é apenas matéria em repouso. O vazio não é falta, é gestação. É o espaço onde o verbo esquece o corpo e o corpo vira verbo.
            </p>
            <p className="text-base text-justify leading-relaxed">
              There is no beginning. There is only the moment when silence decides to breathe. THE VOID N.13 was born from that invisible breath, a gesture between death and return. Everything they call absence is only matter at rest. The void is not lack, it is gestation. It is the space where the word forgets the body and the body becomes word.
            </p>

            <p className="text-base text-justify leading-relaxed mt-8">
              O som, aqui, é memória de um gesto que ainda não aconteceu. O que se move não quer destino. O que fala, não quer eco. O que nasce do escuro não precisa de luz, já carrega o mundo dentro. THE VOID N.13 é o corpo que se esvazia para continuar existindo.
            </p>

            <p className="text-base text-justify leading-relaxed mt-8">
              A imagem não quer ser vista, quer ser atravessada. O silêncio não encerra, amplia. E o fim, aqui, é apenas uma respiração mais funda.
            </p>
            <p className="text-base text-justify leading-relaxed">
              The image doesn't want to be seen, it wants to be crossed through. Silence doesn't end, it expands. And the end, here, is only a deeper breath.
            </p>

            <div className="mt-12 space-y-4 border-t border-accent-foreground/20 pt-8">
              <p className="text-base text-justify leading-relaxed">
                Não me procure no reflexo. Estou entre o som que some e o silêncio que retorna.
              </p>
              <p className="text-base text-justify leading-relaxed">
                Do not look for me in the reflection. I am between the vanishing sound and the returning silence.
              </p>
              <p className="text-base text-justify leading-relaxed mt-4">
                Não me ouça, escute o que vibra quando eu calo.
              </p>
              <p className="text-base text-justify leading-relaxed">
                Do not listen to me, hear what vibrates when I fall silent.
              </p>
              <p className="text-base text-justify leading-relaxed mt-4">
                Não me veja, perceba o espaço que o olhar deixou.
              </p>
              <p className="text-base text-justify leading-relaxed">
                Do not see me, perceive the space that sight left behind.
              </p>
            </div>

            <p className="text-base text-justify leading-relaxed mt-12 font-medium">
              A sessão termina quando o silêncio fala mais alto que a sua voz.
            </p>
            <p className="text-base text-justify leading-relaxed font-medium">
              The session ends when the silence speaks louder than your voice.
            </p>
          </div>
        </section>

        {/* Documentação do Repositório */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-base font-bold">Documentação do Repositório</h2>
            <h3 className="text-base font-medium">Repository Documentation</h3>
            
            <p className="text-base text-justify leading-relaxed">
              Este projeto experimental THE VOID N.13 é arquitetado como um ecossistema de Creative Operations (CreativeOps) automatizado, onde a pesquisa de mestrado e a experimentação artística se alimentam mutuamente. O GitHub atua como hub central, a Fonte Única da Verdade (Single Source of Truth), conectando ferramentas de design, plataformas de IA e sistemas de versionamento em um workflow unificado de co-criação homem × máquina.
            </p>

            <div className="bg-card p-6 rounded-lg border border-border space-y-4 mt-8">
              <h3 className="text-base font-bold">Estrutura do Repositório</h3>
              <div className="space-y-2 font-mono text-sm">
                <p>/THEVOIDN13-PROJETO/</p>
                <p className="ml-4">docs/ - Documentação, práxis, teoria</p>
                <p className="ml-4">assets/ - Arquivos de design (LFS)</p>
                <p className="ml-4">src/ - Código-fonte e scripts</p>
                <p className="ml-4">ai_experiments/ - Scripts de IA</p>
                <p className="ml-4">prototypes_web/ - Protótipos</p>
                <p className="ml-4">automation/ - Scripts de integração</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border space-y-4 mt-8">
              <h3 className="text-base font-bold">Ferramentas Integradas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-base font-bold">IA e Criação</p>
                  <p className="text-base">Google AI Studio, Gemini, ChatGPT, Perchance AI Image</p>
                </div>
                <div className="space-y-2">
                  <p className="text-base font-bold">Design e Visual</p>
                  <p className="text-base">Adobe Creative Cloud, Firefly Boards, Figma</p>
                </div>
                <div className="space-y-2">
                  <p className="text-base font-bold">Desenvolvimento</p>
                  <p className="text-base">GitHub, Lovable, Google Labs</p>
                </div>
                <div className="space-y-2">
                  <p className="text-base font-bold">Documentação</p>
                  <p className="text-base">Google NoteBook LM, Gamma.app</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border space-y-4 mt-8">
              <h3 className="text-base font-bold">Metodologia Hub-and-Spoke</h3>
              <p className="text-base text-justify leading-relaxed">
                O GitHub funciona como hub central onde todas as ferramentas são spokes que leem ou escrevem. A automação via GitHub Actions e APIs reflete mudanças automaticamente nas plataformas integradas. Git LFS gerencia arquivos grandes (vídeos, PSDs, áudios) sem sobrecarregar o repositório.
              </p>
            </div>
          </div>
        </section>

        {/* Encerramento */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-base font-bold">Encerramento / Transmissão Final</h2>
            <h3 className="text-base font-medium">Closing Transmission</h3>
            
            <div className="space-y-6 mt-8">
              <p className="text-base text-justify leading-relaxed">
                O sinal começa a falhar. A imagem se fragmenta, o som respira pela última vez. O corpo se dissolve, mas a frequência permanece. THE VOID N.13 não termina, apenas muda de forma. O que você escuta agora não é voz, é memória.
              </p>
              <p className="text-base text-justify leading-relaxed">
                The signal begins to fail. The image fragments, the sound takes one last breath. The body dissolves, but the frequency remains. THE VOID N.13 doesn't end, it only changes form. What you hear now isn't a voice, it's memory.
              </p>

              <div className="mt-12 space-y-2">
                <p className="text-base">desligue as luzes.</p>
                <p className="text-base">turn off the lights.</p>
                <p className="text-base">respire fundo.</p>
                <p className="text-base">breathe deeply.</p>
                <p className="text-base">o vazio sabe o caminho de volta.</p>
                <p className="text-base">the void knows the way back.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
