import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const MusicPlayer = () => {
  return (
    <section className="w-full bible-section">
      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm p-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start bible-media">
                <span className="text-sm">
                  <span className="lang-pt">Sobre a Assinatura Sonora</span>
                  <span className="lang-en">About the Sound Signature</span>
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  <span className="lang-pt">LOWMOVIE™ ORIGINAL SOUNDTRACK</span>
                  <span className="lang-en">LOWMOVIE™ ORIGINAL SOUNDTRACK</span>
                </DialogTitle>
              </DialogHeader>
              <div className="bible-block text-sm leading-relaxed space-y-4">
                <p>
                  <span className="lang-pt">A assinatura sonora de THEVOIDN13 é composta por duas obras principais que exploram diferentes dimensões narrativas do universo.</span>
                  <span className="lang-en">THEVOIDN13's sonic signature consists of two main works that explore different narrative dimensions of the universe.</span>
                </p>
                <p>
                  <span className="lang-pt"><strong>Lowbyrinth:</strong> Álbum instrumental das cenas cinematográficas, criando atmosferas densas e contemplativas que dialogam com a estética visual do filme.</span>
                  <span className="lang-en"><strong>Lowbyrinth:</strong> Instrumental album for cinematic scenes, creating dense and contemplative atmospheres that dialogue with the film's visual aesthetic.</span>
                </p>
                <p>
                  <span className="lang-pt"><strong>Like Rats on Hostile Paths:</strong> Trilha das VideoPartes, explorando texturas e estilos variados e experimentais que refletem a fragmentação narrativa do projeto.</span>
                  <span className="lang-en"><strong>Like Rats on Hostile Paths:</strong> VideoParts soundtrack, exploring varied and experimental textures and styles that reflect the project's narrative fragmentation.</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="lang-pt">Composição: Dan Guinski (Non-Grata) & Raphael Carvalho (Relvi)</span>
                  <span className="lang-en">Composition: Dan Guinski (Non-Grata) & Raphael Carvalho (Relvi)</span>
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <Tabs defaultValue="instrumental" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="instrumental">
              Like Rats on Hostile Paths
            </TabsTrigger>
            <TabsTrigger value="videopartes">
              Lowbyrinth EP
            </TabsTrigger>
          </TabsList>

          <TabsContent value="instrumental" className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">Like Rats on Hostile Paths</h3>
              <p className="text-sm text-muted-foreground">
                <span className="lang-pt">Album instrumental das cenas cinematográficas</span>
                <span className="lang-en">Instrumental album for cinematic scenes</span>
              </p>
              <p className="text-xs text-muted-foreground/70">
                Composição: Dan Guinski (Non-Grata) & Raphael Carvalho (Relvi)
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-primary/20">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/album/74vGlNUZCHtuycS2DR3wXv?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Like Rats on Hostile Paths - LowMovie Soundtrack"
              />
            </div>
          </TabsContent>

          <TabsContent value="videopartes" className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">Lowbyrinth EP</h3>
              <p className="text-sm text-muted-foreground">
                <span className="lang-pt">Album das VideoPartes</span>
                <span className="lang-en">VideoParts soundtrack album</span>
              </p>
              <p className="text-xs text-muted-foreground/70">
                Composição: Dan Guinski (Non-Grata) & Raphael Carvalho (Relvi)
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-primary/20">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/album/61vLb0sa98Xjr5ZGtDEEiZ?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Lowbyrinth EP - LowMovie Soundtrack"
              />
            </div>
          </TabsContent>
          </Tabs>

          <div className="bible-media p-6 bg-secondary/10 rounded-lg border border-primary/10">
            <p className="text-sm text-center text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Nota de Escuta:</strong> Acione o som antes da próxima respiração. Deixe as frequências guiarem sua atenção.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
