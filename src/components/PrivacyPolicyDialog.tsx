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
          <DialogTitle className="site-title text-center">
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
                <h3 className="site-subtitle">1. COLETA DE DADOS</h3>
                <p className="site-paragraph text-sm">
                  Coletamos apenas informações essenciais: nome completo e endereço de email. 
                  Estes dados são utilizados exclusivamente para controle de acesso ao memorial 
                  e comunicações relacionadas ao projeto THEVOIDN13.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="site-subtitle">2. USO DE COOKIES</h3>
                <p className="site-paragraph text-sm">
                  Utilizamos cookies essenciais para:
                </p>
                <ul className="list-disc list-inside space-y-2 site-paragraph text-sm ml-4">
                  <li>Armazenar preferências de consentimento de cookies</li>
                  <li>Manter sessões de acesso ao site</li>
                  <li>Garantir funcionalidades básicas da plataforma</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="site-subtitle">3. SEGURANÇA</h3>
                <p className="site-paragraph text-sm">
                  Seus dados são armazenados em servidores seguros com criptografia. 
                  Implementamos Row Level Security (RLS) para garantir que apenas administradores 
                  autorizados possam acessar a lista de emails cadastrados.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="site-subtitle">4. SEUS DIREITOS</h3>
                <p className="site-paragraph text-sm">
                  Você tem direito a:
                </p>
                <ul className="list-disc list-inside space-y-2 site-paragraph text-sm ml-4">
                  <li>Solicitar a exclusão de seus dados a qualquer momento</li>
                  <li>Acessar as informações que temos sobre você</li>
                  <li>Retificar dados incorretos ou desatualizados</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="site-subtitle">5. NATUREZA DO PROJETO</h3>
                <p className="site-paragraph text-sm">
                  Este é um memorial artístico acadêmico desenvolvido como parte de pesquisa 
                  de mestrado em Cinema e Artes do Vídeo (PPG-CINEAV/UNESPAR). O cadastro 
                  permite documentar o alcance e interesse no projeto para fins de pesquisa.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-6" />

            {/* English Version */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="site-subtitle">1. DATA COLLECTION</h3>
                <p className="site-paragraph text-sm">
                  We only collect essential information: full name and email address. 
                  This data is used exclusively for access control to the memorial 
                  and communications related to the THEVOIDN13 project.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="site-subtitle">2. COOKIE USAGE</h3>
                <p className="site-paragraph text-sm">
                  We use essential cookies to:
                </p>
                <ul className="list-disc list-inside space-y-2 site-paragraph text-sm ml-4">
                  <li>Store cookie consent preferences</li>
                  <li>Maintain site access sessions</li>
                  <li>Ensure basic platform functionalities</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="site-subtitle">3. SECURITY</h3>
                <p className="site-paragraph text-sm">
                  Your data is stored on secure servers with encryption. 
                  We implement Row Level Security (RLS) to ensure that only authorized 
                  administrators can access the registered email list.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="site-subtitle">4. YOUR RIGHTS</h3>
                <p className="site-paragraph text-sm">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 site-paragraph text-sm ml-4">
                  <li>Request deletion of your data at any time</li>
                  <li>Access the information we have about you</li>
                  <li>Rectify incorrect or outdated data</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="site-subtitle">5. PROJECT NATURE</h3>
                <p className="site-paragraph text-sm">
                  This is an academic artistic memorial developed as part of master's 
                  research in Cinema and Video Arts (PPG-CINEAV/UNESPAR). Registration 
                  allows documenting the project's reach and interest for research purposes.
                </p>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-border">
              <p className="site-paragraph text-xs text-muted-foreground">
                Última atualização: Janeiro 2025 / Last updated: January 2025
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
