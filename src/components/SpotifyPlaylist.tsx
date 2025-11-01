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
  const playlistId = "37i9dQZF1DX5Ejj0EkURtP"; // Placeholder - user needs to create actual playlist

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Music className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                ASSINATURA SONORA
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                SONIC SIGNATURE — 13 tracks que guiaram o processo criativo
              </p>
            </div>
          </div>
          
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
                    a corrosão de Rust, a fricção sensorial de Sextape, os sintetizadores 
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
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Peso Gravitacional</p>
                <p className="font-medium">Black Sabbath — Into the Void</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Corrosão</p>
                <p className="font-medium">Black Label Society — Rust</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Fricção Sensorial</p>
                <p className="font-medium">Deftones — Sextape</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Atmosfera Etérea</p>
                <p className="font-medium">Vangelis — Blade Runner Blues</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Agressão Controlada</p>
                <p className="font-medium">Slipknot — Duality</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Colapso Final</p>
                <p className="font-medium">Frank Sinatra — My Way</p>
              </div>
            </div>
          </div>
        </Card>

        <p className="text-xs text-muted-foreground text-center mt-4">
          * Crie sua própria playlist no Spotify com estas 13 faixas e atualize o playlistId no código
        </p>
      </div>
    </section>
  );
};

export default SpotifyPlaylist;
