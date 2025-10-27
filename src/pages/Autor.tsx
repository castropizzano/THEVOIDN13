import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import heroImage from "@/assets/castro-hero.png";

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
                  <p className="text-base text-justify leading-relaxed">
                    Criação autoral utilizando Adobe Creative Cloud (Photoshop, Illustrator, After Effects, Premiere Pro). Cocriação com Claude 3.5 Sonnet, GPT-4, Gemini, Midjourney, Adobe Firefly, Lovable. Documentação do processo. Transparência radical. Autoria compartilhada mas assinada.
                  </p>
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
                  <p className="text-base text-justify leading-relaxed">
                    Authorial creation using Adobe Creative Cloud (Photoshop, Illustrator, After Effects, Premiere Pro). Co-creation with Claude 3.5 Sonnet, GPT-4, Gemini, Midjourney, Adobe Firefly, Lovable. Process documentation. Radical transparency. Shared but signed authorship.
                  </p>
                </div>
              </>
            }
          />
        </BilingualSection>

        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <>
                <h2 className="text-base font-bold">Contato</h2>
                <div className="space-y-2 mt-6">
                  <p className="text-base text-justify leading-relaxed">
                    <span className="font-medium">Website:</span> castropizzano.com
                  </p>
                  <p className="text-base text-justify leading-relaxed">
                    <span className="font-medium">Portfolio:</span> behance.net/castropizzano
                  </p>
                  <p className="text-base text-justify leading-relaxed">
                    <span className="font-medium">Filmes:</span> vimeo.com/castropizzano
                  </p>
                  <p className="text-base text-justify leading-relaxed">
                    <span className="font-medium">Lattes:</span> lattes.cnpq.br/5523516994010198
                  </p>
                </div>
              </>
            }
            englishContent={
              <>
                <h2 className="text-base font-bold">Contact</h2>
                <div className="space-y-2 mt-6">
                  <p className="text-base text-justify leading-relaxed">
                    <span className="font-medium">Website:</span> castropizzano.com
                  </p>
                  <p className="text-base text-justify leading-relaxed">
                    <span className="font-medium">Portfolio:</span> behance.net/castropizzano
                  </p>
                  <p className="text-base text-justify leading-relaxed">
                    <span className="font-medium">Films:</span> vimeo.com/castropizzano
                  </p>
                  <p className="text-base text-justify leading-relaxed">
                    <span className="font-medium">Lattes:</span> lattes.cnpq.br/5523516994010198
                  </p>
                </div>
              </>
            }
          />
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
                <p className="text-sm text-muted-foreground mb-2">Release CasaTrezeStudio® / CasaTrezeStudio® Release</p>
                <a 
                  href="https://casatrezestudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
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
                <p className="text-sm text-muted-foreground">Memorial Acadêmico / Academic Memorial</p>
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
