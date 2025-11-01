import { Music, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SpotifyPlaylist = () => {
  // 13 tracks that guided the THEVOIDN13 creation process
  const playlistId = "16p2xrYWYsA4DfNgdrtEmP";

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-end mb-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <Info className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Trilha do Processo Criativo</DialogTitle>
                <DialogDescription className="text-base leading-relaxed pt-4">
                  <p className="mb-4">
                    Esta playlist representa a <strong>assinatura sonora</strong> que permeou 
                    todo o desenvolvimento do THEVØIDN13. São 13 faixas cuidadosamente 
                    selecionadas que traduziram em peso gravitacional, corrosão, fricção 
                    e melancolia o universo conceitual do projeto.
                  </p>
                  <p className="mb-4">
                    Do peso visceral de <em>Black Sabbath</em> à atmosfera etérea de <em>Vangelis</em>, 
                    da agressão controlada de <em>Slipknot</em> ao blues noturno de <em>Buddy Guy</em>, 
                    cada faixa foi um portal para diferentes camadas do vazio.
                  </p>
                  <p>
                    <strong>O núcleo é composto pelo peso gravitacional de Into the Void</strong>, 
                    a corrosão de Rust, a fricção sensorial de Shove It, os sintetizadores 
                    etéreos de Blade Runner Blues, e o colapso final traduzindo peso em som puro.
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
          <div className="aspect-[16/9] w-full">
            <iframe
              style={{ borderRadius: '12px' }}
              src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="THEVOIDN13 Sonic Signature Playlist"
            />
          </div>
          
          <div className="p-6 border-t border-primary/10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Peso Gravitacional</p>
                <p className="font-medium">Black Sabbath — Into the Void (1971)</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Corrosão</p>
                <p className="font-medium">Black Label Society — Rust (2005)</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Fricção Sensorial</p>
                <p className="font-medium">Deftones — Shove It (1995)</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Atmosfera Etérea</p>
                <p className="font-medium">Vangelis — Blade Runner Blues (1982)</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Agressão Controlada</p>
                <p className="font-medium">Slipknot — Duality (2004)</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Caos Catártico</p>
                <p className="font-medium">Limp Bizkit — Break Stuff (1999)</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Melancolia</p>
                <p className="font-medium">Superheaven — Leach (2015)</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Blues Noturno</p>
                <p className="font-medium">Charles Bradley — The World (2011)</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Blues Clássico</p>
                <p className="font-medium">Buddy Guy — Tired of Your Jive (1964)</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Entrega Existencial</p>
                <p className="font-medium">Frank Sinatra — My Way (1969)</p>
              </div>
            </div>
          </div>
        </Card>

        <p className="text-xs text-muted-foreground text-center mt-4">
          13 faixas que traduziram em peso gravitacional, corrosão, fricção e melancolia o universo conceitual do THEVØIDN13
        </p>
      </div>
    </section>
  );
};

export default SpotifyPlaylist;
