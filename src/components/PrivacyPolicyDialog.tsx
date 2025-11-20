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
                  <strong>sessionStorage</strong> usado apenas para melhorar a experiência do usuário (UX):
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
                <h3 className="bible-subtitle">3. ZERO RASTREAMENTO</h3>
                <p className="bible-body text-sm">
                  Sem Google Analytics, Facebook Pixel ou quaisquer ferramentas de rastreamento 
                  de terceiros. A navegação é completamente privada e anônima.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">4. GERADOR DE STILLS CINEMATOGRÁFICOS (100% CLIENT-SIDE)</h3>
                <p className="bible-body text-sm">
                  O site inclui um recurso experimental: <strong>Gerador de Stills Cinematográficos</strong>, que funciona 100% no seu navegador.
                </p>
                <p className="bible-body text-sm font-semibold">
                  Como funciona:
                </p>
                <ul className="bible-body text-sm space-y-1 ml-6">
                  <li>• Você escreve um prompt de texto descrevendo a cena desejada</li>
                  <li>• O prompt é processado 100% no seu navegador (zero backend)</li>
                  <li>• Pollinations.AI gera a imagem usando modelo FLUX (gratuito, ilimitado, sem login)</li>
                  <li>• A imagem é gerada e exibida instantaneamente</li>
                  <li>• Marca d'água THEVØIDN13 é aplicada localmente no seu navegador</li>
                </ul>
                <p className="bible-body text-sm font-semibold text-destructive">
                  O que NÃO é feito:
                </p>
                <ul className="bible-body text-sm space-y-1 ml-6">
                  <li>❌ Prompts NÃO são enviados para backend</li>
                  <li>❌ Prompts NÃO são armazenados em nenhum servidor</li>
                  <li>❌ Nenhuma autenticação ou login é necessário</li>
                  <li>❌ Nenhum dado é coletado ou rastreado</li>
                </ul>
                <p className="bible-body text-sm">
                  <strong>Rate Limiting (Proteção Client-Side):</strong> O gerador implementa um cooldown de 10 segundos entre gerações via <code>sessionStorage</code> local. Este rate limiting é facilmente contornável (basta limpar o sessionStorage), mas isso é intencional: como o Pollinations.AI processa no navegador do usuário, quem "abusar" só estará consumindo seus próprios recursos (CPU/RAM), sem impacto no site ou em outros usuários.
                </p>
                <p className="bible-body text-sm text-muted-foreground">
                  Esta feature é <strong>opcional</strong> e não afeta a privacidade do resto do site.
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
                  Transparência radical. Direito de saber que não há vigilância. Este banner não é obrigação legal burocrática—é <strong>declaração 
                  política e artística</strong>. Afirmação: "Este é um espaço ético."
                </p>
                <p className="bible-body text-sm">
                  O banner reaparece a cada nova sessão <strong>porque sessionStorage é usado 
                  (não cookies)</strong>. Escolha por sessionStorage pela transparência 
                  e efemeridade—apaga ao fechar o navegador.
                </p>
                <p className="bible-body text-sm">
                  Sem preferências permanentes por respeito à privacidade.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">8. DOCUMENTAÇÃO TÉCNICA COMPLETA</h3>
                <p className="bible-body text-sm">
                  Para explicação técnica detalhada de como este site funciona, 
                  incluindo código-fonte e diagramas de fluxo de dados, acesse a página de transparência:
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
                  <strong>sessionStorage</strong> used only to improve user experience (UX):
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
                  No Google Analytics, Facebook Pixel, or any third-party tracking 
                  tools. Navigation is completely private and anonymous.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">4. CINEMATIC STILLS GENERATOR (100% CLIENT-SIDE)</h3>
                <p className="bible-body text-sm">
                  The site includes an experimental feature: <strong>Cinematic Stills Generator</strong>, which runs 100% in your browser.
                </p>
                <p className="bible-body text-sm font-semibold">
                  How it works:
                </p>
                <ul className="bible-body text-sm space-y-1 ml-6">
                  <li>• You write a text prompt describing the desired scene</li>
                  <li>• The prompt is processed 100% in your browser (zero backend)</li>
                  <li>• Pollinations.AI generates the image using FLUX model (free, unlimited, no login)</li>
                  <li>• The image is generated and displayed instantly</li>
                  <li>• THEVØIDN13 watermark is applied locally in your browser</li>
                </ul>
                <p className="bible-body text-sm font-semibold text-destructive">
                  What is NOT done:
                </p>
                <ul className="bible-body text-sm space-y-1 ml-6">
                  <li>❌ Prompts are NOT sent to backend</li>
                  <li>❌ Prompts are NOT stored on any server</li>
                  <li>❌ No authentication or login required</li>
                  <li>❌ No data collected or tracked</li>
                </ul>
                <p className="bible-body text-sm">
                  <strong>Rate Limiting (Client-Side Protection):</strong> The generator implements a 10-second cooldown between generations via local <code>sessionStorage</code>. This rate limiting is easily bypassable (just clear sessionStorage), but this is intentional: since Pollinations.AI processes in the user's browser, anyone who "abuses" it will only be consuming their own resources (CPU/RAM), with no impact on the site or other users.
                </p>
                <p className="bible-body text-sm text-muted-foreground">
                  This feature is <strong>optional</strong> and does not affect the privacy of the rest of the site.
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
                  Radical transparency. Right to know there's no surveillance. This banner is not a bureaucratic legal obligation—it's a <strong>political 
                  and artistic statement</strong>. Affirmation: "This is an ethical space."
                </p>
                <p className="bible-body text-sm">
                  Banner reappears with each new session <strong>because sessionStorage is used 
                  (not cookies)</strong>. Choice for sessionStorage for transparency 
                  and ephemerality—deletes when browser closes.
                </p>
                <p className="bible-body text-sm">
                  No permanent preferences out of respect for privacy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="bible-subtitle">8. COMPLETE TECHNICAL DOCUMENTATION</h3>
                <p className="bible-body text-sm">
                  For detailed technical explanation of how this site works, 
                  including source code and data flow diagrams, access the transparency page:
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
