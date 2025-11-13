import { BilingualSection } from "@/components/BilingualSection";
import { Card } from "@/components/ui/card";

export const CasaTrezeBlock = () => {
  return (
    <BilingualSection className="py-16">
      <div className="bible-bilingual-grid bible-block-spacing">
        <div>
          <h2 className="bible-title">CASATREZESTUDIO®</h2>
          <p className="bible-subtitle text-primary mt-2">Base Operacional + Ecossistema Criativo</p>
        </div>
        <div>
          <h2 className="bible-title">CASATREZESTUDIO®</h2>
          <p className="bible-subtitle text-primary mt-2">Operational Base + Creative Ecosystem</p>
        </div>
      </div>

      <div className="bible-bilingual-grid bible-section-spacing mt-8">
        <div>
          <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
          <div className="space-y-6 mt-6">
            <p className="bible-body">
              A CasaTrezeStudio nasceu em 2008 como <span className="font-semibold text-primary">gesto intuitivo</span>, 
              movido por urgência e imaginação. A casa onde cresci, antes silenciada pelo tempo, transformou-se em 
              <span className="font-semibold text-primary"> abrigo coletivo</span>. Um espaço onde a presença se fez 
              forma e o encontro se tornou prática.
            </p>

            <Card className="p-6 border-l-4 border-primary bg-gradient-to-br from-background via-background to-primary/5">
              <h3 className="bible-subtitle mb-4">Laboratório de Experimentação</h3>
              <p className="bible-body">
                Espaço que se constitui como <span className="font-semibold">laboratório, abrigo e ponto de encontro</span> para 
                experiências visuais ligadas à cultura urbana. Ali, filmagens, encontros e colagens coletivas compõem uma 
                gramática própria. Um modo de existir em criação.
              </p>
            </Card>

            <div className="space-y-4">
              <h3 className="bible-subtitle">Pesquisa Situada + Corpo Implicado</h3>
              <p className="bible-body">
                A CasaTrezeStudio opera como <span className="font-semibold text-primary">espacialidade viva da pesquisa</span>—não 
                apenas local físico, mas campo relacional onde teoria e prática se entrelaçam. É aqui que converge a 
                produção artesanal e experimental, sustentando uma metodologia de <span className="font-semibold">pesquisa 
                situada</span> com corpo implicado.
              </p>
              
              <p className="bible-body">
                Um tempo em que as rotas institucionais se estreitavam diante das tatuagens na pele e das marcas sociais, 
                a CasaTrezeStudio abriu outra vereda. Coletivo criativo onde cada um produzia e co-criava junto—galera do 
                vídeo, galera da web, galera do design.
              </p>
            </div>

            <Card className="p-6 border-l-4 border-primary">
              <h3 className="bible-subtitle mb-4">Núcleo de Convergência</h3>
              <p className="bible-body">
                É neste território que <span className="font-semibold">LowMovie™, LowPressure™ e THEVØIDN13</span> convergem. 
                Plataforma de experimentação híbrida que permanece viva, cultivando arte sustentada na colaboração e na 
                resistência. A casa número 13 como símbolo de resistência ao convencional. O azar transformado em potência criativa.
              </p>
            </Card>
          </div>
        </div>

        <div>
          <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
          <div className="space-y-6 mt-6">
            <p className="bible-body">
              CasaTrezeStudio was born in 2008 as an <span className="font-semibold text-primary">intuitive gesture</span>, 
              driven by urgency and imagination. The house where I grew up, previously silenced by time, transformed into a 
              <span className="font-semibold text-primary"> collective shelter</span>. A space where presence became 
              form and encounter became practice.
            </p>

            <Card className="p-6 border-l-4 border-primary bg-gradient-to-br from-background via-background to-primary/5">
              <h3 className="bible-subtitle mb-4">Experimentation Laboratory</h3>
              <p className="bible-body">
                Space that constitutes itself as <span className="font-semibold">laboratory, shelter and meeting point</span> for 
                visual experiences connected to urban culture. There, filming, meetings and collective collages compose their 
                own grammar. A way of existing in creation.
              </p>
            </Card>

            <div className="space-y-4">
              <h3 className="bible-subtitle">Situated Research + Implicated Body</h3>
              <p className="bible-body">
                CasaTrezeStudio operates as <span className="font-semibold text-primary">living spatiality of research</span>—not 
                just a physical location, but relational field where theory and practice intertwine. It is here that 
                artisanal and experimental production converge, sustaining a methodology of <span className="font-semibold">situated 
                research</span> with implicated body.
              </p>
              
              <p className="bible-body">
                At a time when institutional routes narrowed before tattooed skin and social marks, 
                CasaTrezeStudio opened another path. Creative collective where everyone produced and co-created together—video 
                crew, web crew, design crew.
              </p>
            </div>

            <Card className="p-6 border-l-4 border-primary">
              <h3 className="bible-subtitle mb-4">Convergence Nucleus</h3>
              <p className="bible-body">
                It is in this territory that <span className="font-semibold">LowMovie™, LowPressure™ and THEVØIDN13</span> converge. 
                Hybrid experimentation platform that remains alive, cultivating art sustained by collaboration and 
                resistance. House number 13 as symbol of resistance to the conventional. Bad luck transformed into creative power.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </BilingualSection>
  );
};
