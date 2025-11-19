import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyDialogProps {
  children: React.ReactNode;
}

export const PrivacyPolicyDialog = ({ children }: PrivacyPolicyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="bible-title text-center">
            POLÍTICA DE PRIVACIDADE
            <br />
            PRIVACY POLICY
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-8">
            {/* Portuguese Version */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="bible-subtitle">1. ZERO COLETA DE DADOS</h3>
                <p className="bible-body text-sm">
                  Este site <strong>NÃO COLETA NENHUM DADO PESSOAL</strong>. Não há cadastros, 
                  formulários de contato, newsletters ou qualquer tipo de registro de usuário. 
                  O THEVØIDN13 é um memorial artístico 100% estático e aberto.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">2. ZERO COOKIES</h3>
                <p className="bible-body text-sm">
                  Este site <strong>NÃO UTILIZA COOKIES</strong>. Nenhum dado é armazenado no seu navegador.
                  Sua preferência de idioma não é salva entre sessões—cada visita é completamente anônima e sem rastros.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">3. ZERO RASTREAMENTO</h3>
                <p className="bible-body text-sm">
                  Não utilizamos Google Analytics, Facebook Pixel, ou qualquer ferramenta de 
                  rastreamento de terceiros. Sua navegação é completamente privada e anônima.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">4. NATUREZA DO PROJETO</h3>
                <p className="bible-body text-sm">
                  Este é um memorial artístico acadêmico desenvolvido como parte de pesquisa 
                  de mestrado em Cinema e Artes do Vídeo (PPG-CINEAV/UNESPAR). O site funciona 
                  como arquivo visual, portfólio e interface experimental—<strong>sem necessidade 
                  de qualquer tipo de cadastro ou identificação de visitantes</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">5. CONTATO</h3>
                <p className="bible-body text-sm">
                  Para questões sobre privacidade ou sobre o projeto, entre em contato através 
                  dos canais públicos listados na página do autor.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-6" />

            {/* English Version */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="bible-subtitle">1. ZERO DATA COLLECTION</h3>
                <p className="bible-body text-sm">
                  This website <strong>DOES NOT COLLECT ANY PERSONAL DATA</strong>. There are no 
                  registrations, contact forms, newsletters, or any type of user registration. 
                  THEVØIDN13 is a 100% static and open artistic memorial.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">2. ZERO COOKIES</h3>
                <p className="bible-body text-sm">
                  This website <strong>DOES NOT USE COOKIES</strong>. No data is stored in your browser.
                  Your language preference is not saved between sessions—each visit is completely anonymous and traceless.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">3. ZERO TRACKING</h3>
                <p className="bible-body text-sm">
                  We do not use Google Analytics, Facebook Pixel, or any third-party tracking 
                  tools. Your navigation is completely private and anonymous.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">4. PROJECT NATURE</h3>
                <p className="bible-body text-sm">
                  This is an academic artistic memorial developed as part of a master's research 
                  in Cinema and Video Arts (PPG-CINEAV/UNESPAR). The website functions as a visual 
                  archive, portfolio, and experimental interface—<strong>without requiring any type 
                  of registration or visitor identification</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">5. CONTACT</h3>
                <p className="bible-body text-sm">
                  For privacy or project-related questions, please contact through the public 
                  channels listed on the author page.
                </p>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-border">
              <p className="bible-body text-xs text-muted-foreground">
                Última atualização: Janeiro 2025 / Last updated: January 2025
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
