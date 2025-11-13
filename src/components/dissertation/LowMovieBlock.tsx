import { BilingualSection } from "@/components/BilingualSection";
import { Card } from "@/components/ui/card";

export const LowMovieBlock = () => {
  return (
    <BilingualSection className="py-16">
      <div className="bible-bilingual-grid bible-block-spacing">
        <div>
          <h2 className="bible-title">LOWMOVIE™ COMO DISPOSITIVO</h2>
          <p className="bible-subtitle text-primary mt-2">Obra + Pesquisa</p>
        </div>
        <div>
          <h2 className="bible-title">LOWMOVIE™ AS DEVICE</h2>
          <p className="bible-subtitle text-primary mt-2">Work + Research</p>
        </div>
      </div>

      <div className="bible-bilingual-grid bible-section-spacing mt-8">
        <div>
          <p className="bible-lang-tag">&lt;PORTUGUÊS&gt;</p>
          <div className="space-y-6 mt-6">
            <p className="bible-body">
              LowMovie™ não é apenas obra—é <span className="font-semibold text-primary">dispositivo de pesquisa</span>. 
              Full-length que condensa o labirinto criativo (Lowbyrinth™) do coletivo LowPressure™, operando como 
              arquivo vivo, cine-transe e estética relacional em movimento.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-primary">
                <h3 className="bible-subtitle mb-4">Cine-Transe</h3>
                <p className="bible-body">
                  Montagem rítmica que dissolve narrativa linear em experiência sensorial. 
                  O filme como portal de imersão no universo LowPressure™.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-primary">
                <h3 className="bible-subtitle mb-4">Estética Relacional</h3>
                <p className="bible-body">
                  Criação como processo compartilhado. Câmera, skatistas, cidade e crew 
                  em relação dinâmica e colaborativa.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-primary">
                <h3 className="bible-subtitle mb-4">Arquivo Vivo</h3>
                <p className="bible-body">
                  Registro não domesticado. Memória em movimento que resiste à 
                  cristalização documental tradicional.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-primary">
                <h3 className="bible-subtitle mb-4">VideoParte</h3>
                <p className="bible-body">
                  Linguagem híbrida: documentário experimental + filme de skate. 
                  Cada skatista é protagonista de sua própria narrativa visual.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-background via-background to-primary/5 border-2 border-primary/20 mt-6">
              <h3 className="bible-subtitle mb-4">Lowbyrinth™ — O Labirinto Criativo</h3>
              <p className="bible-body">
                LowMovie™ materializa o conceito de Lowbyrinth™: percursos criativos não-lineares, 
                processos em deriva, método como wandering. O filme é o eixo sensível da defesa—não 
                ilustração da teoria, mas <span className="font-semibold text-primary">teoria incorporada</span>.
              </p>
            </Card>
          </div>
        </div>

        <div>
          <p className="bible-lang-tag">&lt;ENGLISH&gt;</p>
          <div className="space-y-6 mt-6">
            <p className="bible-body">
              LowMovie™ is not just a work—it's a <span className="font-semibold text-primary">research device</span>. 
              Full-length that condenses the creative labyrinth (Lowbyrinth™) of the LowPressure™ collective, operating as 
              living archive, cine-trance and relational aesthetics in movement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-primary">
                <h3 className="bible-subtitle mb-4">Cine-Trance</h3>
                <p className="bible-body">
                  Rhythmic montage that dissolves linear narrative into sensory experience. 
                  The film as immersion portal into the LowPressure™ universe.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-primary">
                <h3 className="bible-subtitle mb-4">Relational Aesthetics</h3>
                <p className="bible-body">
                  Creation as shared process. Camera, skaters, city and crew 
                  in dynamic and collaborative relation.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-primary">
                <h3 className="bible-subtitle mb-4">Living Archive</h3>
                <p className="bible-body">
                  Undomesticated record. Memory in movement that resists 
                  traditional documentary crystallization.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-primary">
                <h3 className="bible-subtitle mb-4">VideoPart</h3>
                <p className="bible-body">
                  Hybrid language: experimental documentary + skate film. 
                  Each skater is protagonist of their own visual narrative.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-background via-background to-primary/5 border-2 border-primary/20 mt-6">
              <h3 className="bible-subtitle mb-4">Lowbyrinth™ — The Creative Labyrinth</h3>
              <p className="bible-body">
                LowMovie™ materializes the Lowbyrinth™ concept: non-linear creative paths, 
                drifting processes, method as wandering. The film is the sensitive axis of the defense—not 
                theory illustration, but <span className="font-semibold text-primary">embodied theory</span>.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </BilingualSection>
  );
};
