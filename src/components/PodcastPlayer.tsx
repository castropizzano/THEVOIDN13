import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Podcast, Play } from "lucide-react";

export const PodcastPlayer = () => {
  return (
    <Card className="bg-card/80 border-primary/30 hover:border-primary transition-colors">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Podcast className="w-6 h-6 text-primary" />
          <div>
            <CardTitle className="text-2xl font-bold text-primary">
              Skate Punk — Processos Criativos
            </CardTitle>
            <CardDescription className="text-base">
              Entrevista sobre o LowMovie™ e processos de criação / Interview about creative processes
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Podcast Chiclé Vídeos — Conversa sobre a trajetória criativa, os bastidores do LowMovie™, 
            a relação entre skate e audiovisual, e os processos colaborativos do coletivo LowPressure™.
          </p>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden border border-primary/20 bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/rOoUJyzGkDY"
            title="Skate Punk — Processos Criativos — Castro Pizzano"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
          <Play className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <p className="text-sm font-medium">Tópicos da conversa:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Trajetória entre a rua e a academia</li>
              <li>• CasaTrezeStudio como laboratório criativo</li>
              <li>• Coletivo LowPressure™ e práticas colaborativas</li>
              <li>• Processos de filmagem e montagem do LowMovie™</li>
              <li>• Skate como metodologia de criação situada</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
