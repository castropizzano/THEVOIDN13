import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const MusicPlayer = () => {
  return (
    <Card className="bg-card/80 border-primary/30 hover:border-primary transition-colors">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          LowMovie™ Original Soundtrack
        </CardTitle>
        <CardDescription className="text-base">
          Trilhas sonoras originais do filme / Original motion picture soundtracks
        </CardDescription>
      </CardHeader>
      <CardContent>
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
                Album instrumental das cenas cinematográficas / Instrumental album for cinematic scenes
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
                Album das VideoPartes / VideoParts soundtrack album
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

        <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">Nota de Escuta:</span> Acione o som antes da próxima respiração. 
            Ao deslizar por estas páginas, faça vibrar os pulsares que mantêm o LowMovie™ em combustão contínua, 
            riscando a superfície como quem traça linha no asfalto. Dê play, deixe a onda atravessar o corpo.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
