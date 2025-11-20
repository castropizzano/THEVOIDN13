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
          <div className="space-y-8 max-w-prose mx-auto">
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
                <h3 className="bible-subtitle">2. ARMAZENAMENTO MÍNIMO E HONESTO</h3>
                <p className="bible-body text-sm">
                  Este site <strong>NÃO UTILIZA COOKIES</strong>. 
                </p>
                <p className="bible-body text-sm">
                  Usamos <strong>sessionStorage</strong> apenas para melhorar a experiência do usuário (UX):
                </p>
                <ul className="bible-body text-sm space-y-1 ml-6">
                  <li><strong>Key</strong>: "antiSurveillanceBannerSeen"</li>
                  <li><strong>Propósito</strong>: Evitar re-exibir o banner na mesma sessão do navegador</li>
                  <li><strong>Dados armazenados</strong>: Apenas um boolean "true" (não contém dados pessoais)</li>
                  <li><strong>Persistência</strong>: Apaga automaticamente ao fechar o navegador</li>
                </ul>
                <p className="bible-body text-sm">
                  Sua preferência de idioma <strong>não é salva</strong> entre sessões—cada visita é anônima.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">5. NATUREZA DO PROJETO</h3>
                <p className="bible-body text-sm">
                  Este é um memorial artístico acadêmico desenvolvido como parte de pesquisa 
                  de mestrado em Cinema e Artes do Vídeo (PPG-CINEAV/UNESPAR). O site funciona 
                  como arquivo visual, portfólio e interface experimental—<strong>sem necessidade 
                  de qualquer tipo de cadastro ou identificação de visitantes</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">6. CONTATO</h3>
                <p className="bible-body text-sm">
                  Para questões sobre privacidade ou sobre o projeto, entre em contato através 
                  dos canais públicos listados na página do autor.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">7. POR QUE ESTE BANNER EXISTE?</h3>
                <p className="bible-body text-sm">
                  Acreditamos em <strong>transparência radical</strong>. Você tem o direito de saber que não está 
                  sendo vigiado. Este banner não é uma obrigação legal burocrática—é uma <strong>declaração 
                  política e artística</strong>. É o site afirmando: "Este é um espaço ético."
                </p>
                <p className="bible-body text-sm">
                  O banner reaparece a cada nova sessão <strong>porque usamos sessionStorage 
                  (não cookies)</strong>. Escolhemos sessionStorage porque ele é mais transparente 
                  e efêmero—apaga ao fechar o navegador.
                </p>
                <p className="bible-body text-sm">
                  Não guardamos preferências permanentes porque respeitamos sua privacidade.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">8. DOCUMENTAÇÃO TÉCNICA COMPLETA</h3>
                <p className="bible-body text-sm">
                  Para uma explicação técnica detalhada de como este site funciona, 
                  incluindo código-fonte e diagramas de fluxo de dados, visite nossa página de transparência:
                </p>
                <p className="bible-body text-sm">
                  <a href="/transparency" className="text-primary hover:underline font-semibold">
                    /transparency
                  </a>
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
                <h3 className="bible-subtitle">2. MINIMAL AND HONEST STORAGE</h3>
                <p className="bible-body text-sm">
                  This website <strong>DOES NOT USE COOKIES</strong>. 
                </p>
                <p className="bible-body text-sm">
                  We use <strong>sessionStorage</strong> only to improve user experience (UX):
                </p>
                <ul className="bible-body text-sm space-y-1 ml-6">
                  <li><strong>Key</strong>: "antiSurveillanceBannerSeen"</li>
                  <li><strong>Purpose</strong>: Prevent re-displaying the banner in the same browser session</li>
                  <li><strong>Data stored</strong>: Only a boolean "true" (contains no personal data)</li>
                  <li><strong>Persistence</strong>: Automatically deletes when closing the browser</li>
                </ul>
                <p className="bible-body text-sm">
                  Your language preference is <strong>not saved</strong> between sessions—each visit is anonymous.
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
                <h3 className="bible-subtitle">4. EXPERIMENTAL AI FEATURE (OPTIONAL)</h3>
                <p className="bible-body text-sm">
                  The site includes an experimental feature: <strong>Cinematic Still Generator</strong>.
                </p>
                <p className="bible-body text-sm font-semibold">
                  How it works:
                </p>
                <ul className="bible-body text-sm space-y-1 ml-6">
                  <li>• You write a text prompt</li>
                  <li>• The prompt is sent to an edge function (backend)</li>
                  <li>• The edge function uses Lovable AI (google/gemini-2.5-flash-image-preview)</li>
                  <li>• An image is generated and returned to you</li>
                </ul>
                <p className="bible-body text-sm font-semibold text-destructive">
                  What we DON'T do:
                </p>
                <ul className="bible-body text-sm space-y-1 ml-6">
                  <li>❌ We don't store your prompts</li>
                  <li>❌ We don't associate prompts with users (no authentication)</li>
                  <li>❌ We don't sell or share your prompts</li>
                </ul>
                <p className="bible-body text-sm">
                  <strong>Limitation</strong>: This feature uses the developer's AI credits, 
                  so there may be rate limits or temporary unavailability.
                </p>
                <p className="bible-body text-sm">
                  <strong>It's optional</strong>: You can navigate 95% of the site without using this feature.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">5. PROJECT NATURE</h3>
                <p className="bible-body text-sm">
                  This is an academic artistic memorial developed as part of a master's research 
                  in Cinema and Video Arts (PPG-CINEAV/UNESPAR). The website functions as a visual 
                  archive, portfolio, and experimental interface—<strong>without requiring any type 
                  of registration or visitor identification</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">6. CONTACT</h3>
                <p className="bible-body text-sm">
                  For privacy or project-related questions, please contact through the public 
                  channels listed on the author page.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">7. WHY DOES THIS BANNER EXIST?</h3>
                <p className="bible-body text-sm">
                  We believe in <strong>radical transparency</strong>. You have the right to know you're not being 
                  surveilled. This banner is not a bureaucratic legal obligation—it's a <strong>political 
                  and artistic statement</strong>. It's the site affirming: "This is an ethical space."
                </p>
                <p className="bible-body text-sm">
                  The banner reappears with each new session <strong>because we use sessionStorage 
                  (not cookies)</strong>. We chose sessionStorage because it's more transparent 
                  and ephemeral—it deletes when you close the browser.
                </p>
                <p className="bible-body text-sm">
                  We don't save permanent preferences because we respect your privacy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">8. COMPLETE TECHNICAL DOCUMENTATION</h3>
                <p className="bible-body text-sm">
                  For a detailed technical explanation of how this site works, 
                  including source code and data flow diagrams, visit our transparency page:
                </p>
                <p className="bible-body text-sm">
                  <a href="/transparency" className="text-primary hover:underline font-semibold">
                    /transparency
                  </a>
                </p>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-border">
              <p className="bible-body text-xs text-muted-foreground">
                Última atualização: 19 de novembro de 2025 / Last updated: November 19, 2025
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
