import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export const MindMap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useTranslation();

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Card className="bg-card/80 border-primary/30 hover:border-primary transition-colors">
          <CardHeader>
            <CardTitle className="heading-2 text-primary">
              {t("creativeOpsMindMap")}
            </CardTitle>
            <CardDescription className="body-base text-muted-foreground">
              {t("completeEcosystem")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => setIsOpen(true)}
              variant="outline"
              className="w-full"
            >
              {t("expandFullMap")}
            </Button>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl mx-auto max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm p-6 sm:p-8 pt-12">
          <DialogTitle className="sr-only">{language === 'pt' ? 'Mapa Mental Creative-Ops Completo' : 'Creative-Ops Mind Map Full'}</DialogTitle>
          <DialogDescription className="sr-only">
            {language === 'pt' ? 'Ecossistema completo das operações criativas THEVØIDN13' : 'Complete ecosystem of THEVØIDN13 creative operations'}
          </DialogDescription>

          <div className="bible-block">
            {/* Code-style Interface */}
            <div className="bg-black/90 border border-primary/30 rounded-lg p-6 sm:p-8 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="bible-block">
                {/* Header */}
                <div className="text-primary text-base sm:text-lg font-bold border-b border-primary/30 pb-4">
                  CREATIVE_OPS::MIND_MAP   <span className="text-muted-foreground text-xs">// PT / EN</span>
                </div>

                {/* Input */}
                <div className="space-y-2">
                  <div className="text-accent font-bold">
                    [01] INPUT::MEMORIAL_ARTISTICO
                  </div>
                  <div className="pl-6 space-y-1">
                    <div className="text-foreground">
                      {language === 'pt'
                        ? 'Coleta de diários, HQs, dissertação, arquivos brutos, memórias de set e processos THEVØIDN13.'
                        : 'Collection of journals, comics, thesis, raw files, on-set memories and THEVØIDN13 processes.'}
                    </div>
                  </div>
                </div>

                {/* Process */}
                <div className="space-y-2">
                  <div className="text-accent font-bold">
                    [02] PROCESS::SHADOW_INTERFACE
                  </div>
                  <div className="pl-6 space-y-1">
                    <div className="text-foreground">
                      {language === 'pt'
                        ? 'THEVØIDN13 organiza, cruza e traduz o material em protocolos visuais, textuais e sonoros.'
                        : 'THEVØIDN13 organizes, cross-references and translates the material into visual, textual and sonic protocols.'}
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="space-y-2">
                  <div className="text-accent font-bold">
                    [03] MAP::CREATIVE_OPS
                  </div>
                  <div className="pl-6 space-y-1">
                    <div className="text-foreground">
                      {language === 'pt'
                        ? 'Cada projeto gera um nó no mapa: filmes, HQs, sites, prompts, memórias e experimentos.'
                        : 'Each project generates a node in the map: films, comics, websites, prompts, memories and experiments.'}
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="space-y-2">
                  <div className="text-accent font-bold">
                    [04] LINK::TOOLS
                  </div>
                  <div className="pl-6 space-y-1">
                    <div className="text-foreground">
                      {language === 'pt'
                        ? 'Integração com Lovable, Gamma, IA de imagem, edição de vídeo e sistemas de escrita crítica.'
                        : 'Integration with Lovable, Gamma, image AIs, video editing and critical writing systems.'}
                    </div>
                  </div>
                </div>

                {/* Output */}
                <div className="space-y-2">
                  <div className="text-accent font-bold">
                    [05] OUTPUT::ECOSSISTEMA_VIVO
                  </div>
                  <div className="pl-6 space-y-1">
                    <div className="text-foreground">
                      {language === 'pt'
                        ? 'O mapa mental se atualiza em tempo real, espelhando o crescimento do universo THEVØIDN13.'
                        : 'The mind map updates in real time, mirroring the growth of the THEVØIDN13 universe.'}
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="space-y-2 border-t border-primary/30 pt-4">
                  <div className="text-primary font-bold">
                    [06] STATUS::ONLINE
                  </div>
                  <div className="pl-6 space-y-1">
                    <div className="text-foreground">
                      {language === 'pt'
                        ? 'Este painel é uma visão de sistema do processo criativo em operação contínua.'
                        : 'This panel is a system view of the creative process in continuous operation.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
