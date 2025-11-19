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
                <h3 className="bible-subtitle">2. ZERO COOKIES E RASTREAMENTO</h3>
                <p className="bible-body text-sm">
                  <strong>Este site não utiliza cookies, localStorage, sessionStorage ou 
                  qualquer mecanismo de armazenamento local.</strong> Não rastreamos sua navegação, 
                  não identificamos visitantes e não coletamos estatísticas de uso.
                </p>
                <p className="bible-body text-sm mt-2">
                  Sua preferência de idioma (PT/EN) é armazenada apenas na memória durante 
                  a sessão atual e é esquecida ao fechar o navegador.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">3. ZERO ANALYTICS</h3>
                <p className="bible-body text-sm">
                  Não utilizamos Google Analytics, Facebook Pixel, ou qualquer ferramenta de 
                  analytics ou rastreamento de terceiros. <strong>Sua navegação é completamente 
                  privada, anônima e não deixa rastros.</strong>
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">4. ARQUITETURA ESTÁTICA</h3>
                <p className="bible-body text-sm">
                  Este é um site 100% estático sem backend, sem servidor, sem banco de dados 
                  e sem APIs. Não existem formulários, cadastros ou qualquer tipo de interação 
                  que colete informações. O site funciona como um memorial artístico digital, 
                  portfólio e interface experimental—<strong>sem necessidade de qualquer tipo 
                  de identificação ou cadastro de visitantes</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">5. NATUREZA DO PROJETO</h3>
                <p className="bible-body text-sm">
                  Desenvolvido como parte de pesquisa de mestrado em Cinema e Artes do Vídeo 
                  (PPG-CINEAV/UNESPAR) por Castro Pizzano. Este memorial artístico existe para 
                  ser explorado livremente, sem barreiras, sem cadastros e sem vigilância.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">6. CONTATO</h3>
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
                <h3 className="bible-subtitle">2. ZERO COOKIES AND TRACKING</h3>
                <p className="bible-body text-sm">
                  <strong>This website does not use cookies, localStorage, sessionStorage, or 
                  any local storage mechanism.</strong> We do not track your navigation, do not 
                  identify visitors, and do not collect usage statistics.
                </p>
                <p className="bible-body text-sm mt-2">
                  Your language preference (PT/EN) is stored only in memory during the current 
                  session and is forgotten when you close the browser.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">3. ZERO ANALYTICS</h3>
                <p className="bible-body text-sm">
                  We do not use Google Analytics, Facebook Pixel, or any analytics or tracking 
                  tools from third parties. <strong>Your navigation is completely private, 
                  anonymous, and leaves no traces.</strong>
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">4. STATIC ARCHITECTURE</h3>
                <p className="bible-body text-sm">
                  This is a 100% static website with no backend, no server, no database, and 
                  no APIs. There are no forms, registrations, or any type of interaction that 
                  collects information. The website functions as a digital artistic memorial, 
                  portfolio, and experimental interface—<strong>without requiring any type of 
                  identification or visitor registration</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">5. PROJECT NATURE</h3>
                <p className="bible-body text-sm">
                  Developed as part of master's research in Cinema and Video Arts 
                  (PPG-CINEAV/UNESPAR) by Castro Pizzano. This artistic memorial exists to be 
                  freely explored, without barriers, without registrations, and without surveillance.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">6. CONTACT</h3>
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
              <p className="bible-body text-xs text-muted-foreground mt-2">
                <strong>ZERO DATA · ZERO TRACKING · ZERO COOKIES · 100% STATIC</strong>
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
