import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";

const Autor = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              CASTRO PIZZANO
            </h1>
            <p className="text-xl text-muted-foreground">
              цастро™ / PUNK
            </p>
          </div>
        </section>

        <BilingualSection className="py-8">
          <BilingualContent 
            portugueseContent={
              <p className="text-lg leading-relaxed">
                Skatista, Designer Gráfico, Videomaker e Pesquisador Visual
              </p>
            }
            englishContent={
              <p className="text-lg leading-relaxed">
                Skateboarder, Graphic Designer, Videomaker & Visual Researcher
              </p>
            }
          />
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-2xl font-bold">Quem Fala e De Onde Falo</h2>
                <p className="text-justify leading-relaxed">
                  Mestrando do Programa de Pós-Graduação Mestrado Acadêmico em Cinema e Artes do Vídeo (PPG-CINEAV) da Universidade Estadual do Paraná (Unespar), campus de Curitiba II/Faculdade de Artes do Paraná (FAP), vinculado à linha de pesquisa (2) Processos de Criação no Cinema e nas Artes do Vídeo. Membro do Grupo de Pesquisa CineCriare Cinema: Criação e Reflexão (Unespar/PPG-CINEAV/CNPq).
                </p>
                <p className="text-justify leading-relaxed">
                  Graduado em Comunicação Social / Publicidade e Propaganda pela Universidade Tuiuti do Paraná (2010). Pós-graduado em Direção de Arte e Estratégias Criativas pela Universidade Unicuritiba (2016). Diretor de arte, artista visual, designer gráfico e videomaker, atua na criação de identidades visuais e narrativas semióticas através da experimentação em linguagens artísticas e audiovisuais.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-2xl font-bold">Who Speaks and From Where</h2>
                <p className="text-justify leading-relaxed">
                  Master's candidate in the Academic Graduate Program in Cinema and Video Arts (PPG-CINEAV) at Paraná State University (Unespar), Curitiba II campus/Faculty of Arts of Paraná (FAP), linked to research line (2) Creation Processes in Cinema and Video Arts. Member of the CineCriare Research Group Cinema: Creation and Reflection (Unespar/PPG-CINEAV/CNPq).
                </p>
                <p className="text-justify leading-relaxed">
                  Bachelor's degree in Social Communication / Advertising from Tuiuti University of Paraná (2010). Postgraduate degree in Art Direction and Creative Strategies from Unicuritiba University (2016). Art director, visual artist, graphic designer and videomaker, working in the creation of visual identities and semiotic narratives through experimentation in artistic and audiovisual languages.
                </p>
              </>
            }
          />
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-2xl font-bold">Anti-Brand цастро™</h2>
                <p className="text-justify leading-relaxed">
                  Uma identidade que rejeita a lógica publicitária da autopromoção. O uso do Cirílico (цастро) e da fonte Journalism cria distância e estranhamento, forçando a decifração e o consumo consciente. É um manifesto a favor da autoria e da produção local. A autenticidade nasce das bordas, e o valor emerge da não adesão ao sistema.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-2xl font-bold">Anti-Brand цастро™</h2>
                <p className="text-justify leading-relaxed">
                  An identity that rejects the advertising logic of self-promotion. The use of Cyrillic (цастро) and Journalism font creates distance and estrangement, forcing decipherment and conscious consumption. It is a manifesto in favor of authorship and local production. Authenticity is born from the edges, and value emerges from non-adherence to the system.
                </p>
              </>
            }
          />
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-2xl font-bold">O Skate Como Primeira Escola do Olhar</h2>
                <p className="text-justify leading-relaxed">
                  O skate foi meu ponto de partida, não apenas como prática esportiva, mas como linguagem de corpo, um modo de mover-se no mundo com autonomia. A queda e o impulso, o erro como aprendizado constante. Foi nesse universo que a câmera surgiu como extensão natural do corpo e da imaginação. Filmar é como andar de skate com os olhos. A prática levou à experimentação com ângulos não convencionais: rasteiros, olho de peixe, perspectivas radicais. A câmera vibra com o asfalto, capturando a cidade como tensão viva e matéria estética.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-2xl font-bold">Skateboarding as the First School of Vision</h2>
                <p className="text-justify leading-relaxed">
                  Skateboarding was my starting point, not just as a sport, but as body language, a way of moving through the world with autonomy. The fall and the impulse, error as constant learning. It was in this universe that the camera emerged as a natural extension of body and imagination. Filming is like skateboarding with your eyes. The practice led to experimentation with unconventional angles: ground level, fisheye, radical perspectives. The camera vibrates with the asphalt, capturing the city as living tension and aesthetic matter.
                </p>
              </>
            }
          />
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-2xl font-bold">CasaTrezeStudio®</h2>
                <p className="text-justify leading-relaxed">
                  Fundou, em 2008, o Coletivo Criativo CasaTrezeStudio, associação de produtores criativos independentes que opera como um laboratório de criação autoral, cultural e comercial, conectando pessoas, ideias e projetos. Um estúdio criativo pós-contemporâneo de design e vídeo. A assinatura subterrânea que me acompanha há anos. Um selo invisível, criado no subsolo onde tudo o que é vivo se esconde.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-2xl font-bold">CasaTrezeStudio®</h2>
                <p className="text-justify leading-relaxed">
                  Founded in 2008, the Creative Collective CasaTrezeStudio, an association of independent creative producers that operates as a laboratory of authorial, cultural and commercial creation, connecting people, ideas and projects. A post-contemporary creative studio of design and video. The underground signature that has accompanied me for years. An invisible seal, created in the basement where everything that is alive hides.
                </p>
              </>
            }
          />
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-2xl font-bold">LowPressure™</h2>
                <p className="text-justify leading-relaxed">
                  É membro do LowPressureSkate, coletivo criativo formado por skatistas e produtores audiovisuais que desenvolvem projetos autorais nas interseções entre skate, cinema, vídeo e arte. Um grupo de artistas skatistas que funciona como crew, família e laboratório criativo. Low não indica precariedade, indica liberdade. É fazer com o que se tem, transformar limite em potência criativa. Like rats on hostile paths.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-2xl font-bold">LowPressure™</h2>
                <p className="text-justify leading-relaxed">
                  Member of LowPressureSkate, a creative collective formed by skateboarders and audiovisual producers who develop authorial projects at the intersections between skateboarding, cinema, video and art. A group of skateboarder artists that functions as crew, family and creative laboratory. Low does not indicate precariousness, it indicates freedom. It is doing with what you have, transforming limits into creative power. Like rats on hostile paths.
                </p>
              </>
            }
          />
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-2xl font-bold">Formação e Experiência</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">Mestrado em andamento (2024 / 2025)</p>
                    <p className="text-justify leading-relaxed">
                      Cinema e Artes do Vídeo / Universidade Estadual do Paraná (UNESPAR)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Orientador: Dr. Fábio Jabur de Noronha
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Especialização (2014 / 2016)</p>
                    <p className="text-justify leading-relaxed">
                      Direção de Arte e Estratégias Criativas / Centro Universitário Curitiba (UNICURITIBA)
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Graduação (2006 / 2010)</p>
                    <p className="text-justify leading-relaxed">
                      Comunicação Social / Publicidade e Propaganda / Universidade Tuiuti do Paraná
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Docência</p>
                    <p className="text-justify leading-relaxed">
                      Professor de Economia Criativa (2017 / 2020) / Universidade Positivo
                    </p>
                    <p className="text-justify leading-relaxed">
                      Professor de Branding e Produção Audiovisual / Universidade Isulpar
                    </p>
                  </div>
                </div>
              </>
            }
            englishContent={
              <>
                <h2 className="text-2xl font-bold">Education and Experience</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">Master's in progress (2024 / 2025)</p>
                    <p className="text-justify leading-relaxed">
                      Cinema and Video Arts / Paraná State University (UNESPAR)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Advisor: Dr. Fábio Jabur de Noronha
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Specialization (2014 / 2016)</p>
                    <p className="text-justify leading-relaxed">
                      Art Direction and Creative Strategies / Curitiba University Center (UNICURITIBA)
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Graduation (2006 / 2010)</p>
                    <p className="text-justify leading-relaxed">
                      Social Communication / Advertising / Tuiuti University of Paraná
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Teaching</p>
                    <p className="text-justify leading-relaxed">
                      Professor of Creative Economy (2017 / 2020) / Positivo University
                    </p>
                    <p className="text-justify leading-relaxed">
                      Professor of Branding and Audiovisual Production / Isulpar University
                    </p>
                  </div>
                </div>
              </>
            }
          />
        </BilingualSection>

        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-2xl font-bold">Contato</h2>
                <div className="space-y-2">
                  <p className="text-justify leading-relaxed">
                    <span className="font-medium">Website:</span> castropizzano.com
                  </p>
                  <p className="text-justify leading-relaxed">
                    <span className="font-medium">Portfolio:</span> behance.net/castropizzano
                  </p>
                  <p className="text-justify leading-relaxed">
                    <span className="font-medium">Filmes:</span> vimeo.com/castropizzano
                  </p>
                  <p className="text-justify leading-relaxed">
                    <span className="font-medium">Lattes:</span> lattes.cnpq.br/5523516994010198
                  </p>
                </div>
              </>
            }
            englishContent={
              <>
                <h2 className="text-2xl font-bold">Contact</h2>
                <div className="space-y-2">
                  <p className="text-justify leading-relaxed">
                    <span className="font-medium">Website:</span> castropizzano.com
                  </p>
                  <p className="text-justify leading-relaxed">
                    <span className="font-medium">Portfolio:</span> behance.net/castropizzano
                  </p>
                  <p className="text-justify leading-relaxed">
                    <span className="font-medium">Films:</span> vimeo.com/castropizzano
                  </p>
                  <p className="text-justify leading-relaxed">
                    <span className="font-medium">Lattes:</span> lattes.cnpq.br/5523516994010198
                  </p>
                </div>
              </>
            }
          />
        </BilingualSection>
      </main>

      <Footer />
    </div>
  );
};

export default Autor;
