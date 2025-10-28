import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Política de Privacidade | THEVOIDN13"
        description="Política de privacidade e termos de uso do memorial artístico THEVOIDN13"
      />
      <Header />

      <main className="py-20">
        <BilingualSection>
          <h1 className="site-title text-center mb-8">
            POLÍTICA DE PRIVACIDADE / PRIVACY POLICY
          </h1>
        </BilingualSection>

        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-6">
                <h2 className="site-title">1. COLETA DE DADOS</h2>
                <p className="site-paragraph">
                  Coletamos apenas informações essenciais: nome completo e endereço de email. 
                  Estes dados são utilizados exclusivamente para controle de acesso ao memorial 
                  e comunicações relacionadas ao projeto THEVOIDN13.
                </p>

                <h2 className="site-title">2. USO DE COOKIES</h2>
                <p className="site-paragraph">
                  Utilizamos cookies essenciais para:
                </p>
                <ul className="list-disc list-inside space-y-2 site-paragraph ml-4">
                  <li>Armazenar preferências de consentimento de cookies</li>
                  <li>Manter sessões de acesso ao site</li>
                  <li>Garantir funcionalidades básicas da plataforma</li>
                </ul>

                <h2 className="site-title">3. SEGURANÇA</h2>
                <p className="site-paragraph">
                  Seus dados são armazenados em servidores seguros (Supabase) com criptografia. 
                  Implementamos Row Level Security (RLS) para garantir que apenas administradores 
                  autorizados possam acessar a lista de emails cadastrados.
                </p>

                <h2 className="site-title">4. SEUS DIREITOS</h2>
                <p className="site-paragraph">
                  Você tem direito a:
                </p>
                <ul className="list-disc list-inside space-y-2 site-paragraph ml-4">
                  <li>Solicitar a exclusão de seus dados a qualquer momento</li>
                  <li>Acessar as informações que temos sobre você</li>
                  <li>Retificar dados incorretos ou desatualizados</li>
                </ul>

                <h2 className="site-title">5. CONTATO</h2>
                <p className="site-paragraph">
                  Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, 
                  entre em contato através do email indicado no site.
                </p>

                <h2 className="site-title">6. NATUREZA DO PROJETO</h2>
                <p className="site-paragraph">
                  Este é um memorial artístico acadêmico desenvolvido como parte de pesquisa 
                  de mestrado em Cinema e Artes do Vídeo (PPG-CINEAV/UNESPAR). O cadastro 
                  permite documentar o alcance e interesse no projeto para fins de pesquisa.
                </p>
              </div>
            }
            englishContent={
              <div className="space-y-6">
                <h2 className="site-title">1. DATA COLLECTION</h2>
                <p className="site-paragraph">
                  We only collect essential information: full name and email address. 
                  This data is used exclusively for access control to the memorial 
                  and communications related to the THEVOIDN13 project.
                </p>

                <h2 className="site-title">2. COOKIE USAGE</h2>
                <p className="site-paragraph">
                  We use essential cookies to:
                </p>
                <ul className="list-disc list-inside space-y-2 site-paragraph ml-4">
                  <li>Store cookie consent preferences</li>
                  <li>Maintain site access sessions</li>
                  <li>Ensure basic platform functionalities</li>
                </ul>

                <h2 className="site-title">3. SECURITY</h2>
                <p className="site-paragraph">
                  Your data is stored on secure servers (Supabase) with encryption. 
                  We implement Row Level Security (RLS) to ensure that only authorized 
                  administrators can access the registered email list.
                </p>

                <h2 className="site-title">4. YOUR RIGHTS</h2>
                <p className="site-paragraph">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 site-paragraph ml-4">
                  <li>Request deletion of your data at any time</li>
                  <li>Access the information we have about you</li>
                  <li>Rectify incorrect or outdated data</li>
                </ul>

                <h2 className="site-title">5. CONTACT</h2>
                <p className="site-paragraph">
                  To exercise your rights or clarify privacy questions, 
                  contact us through the email provided on the website.
                </p>

                <h2 className="site-title">6. PROJECT NATURE</h2>
                <p className="site-paragraph">
                  This is an academic artistic memorial developed as part of master's 
                  research in Cinema and Video Arts (PPG-CINEAV/UNESPAR). Registration 
                  allows documenting the project's reach and interest for research purposes.
                </p>
              </div>
            }
          />
        </BilingualSection>

        <BilingualSection className="py-12">
          <div className="text-center space-y-2">
            <p className="site-paragraph text-muted-foreground">
              Última atualização: Janeiro 2025 / Last updated: January 2025
            </p>
          </div>
        </BilingualSection>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;