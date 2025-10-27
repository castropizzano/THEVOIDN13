import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dissertacao = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              LOWMOVIE™ E O LABIRINTO CRIATIVO
            </h1>
            <p className="text-xl text-muted-foreground">
              Subjetividade, Subcultura e a Construção de uma Estética em Movimento no Coletivo LowPressure™
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Introdução – Rastros nas Ruas</h2>
              <p className="text-justify leading-relaxed">
                Esta pesquisa se constrói como travessia em primeira pessoa, um deslizamento entre o skate, o vídeo e a escrita, ativando formas de escuta, presença e invenção. O ato de escrever aqui é corpo em movimento, gesto que se arrisca, que se lança como quem dropa uma borda, um corrimão, uma escada. Drop é esse instante inaugural em que o skatista se projeta de um ponto mais alto e inicia o percurso com risco e intuição, abrindo caminho no concreto.
              </p>
              <p className="text-justify leading-relaxed">
                O processo criativo delineado neste trabalho emerge da convivência com o coletivo LowPressure™, organismo em vibração, movido por sintonia estética e prática. No vocabulário do skate, trata-se de uma crew, mas também de uma forma de vida em rede, em que o pertencimento se inscreve nos gestos, nas imagens e nos vínculos forjados em movimento. É nesse território que nasce o LowMovie™, dispositivo audiovisual de criação partilhada que atravessa toda esta pesquisa.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">A VideoParte como Linguagem</h2>
              <p className="text-justify leading-relaxed">
                Os vídeos de skate registram a evolução técnica e criativa dos skatistas e desempenham um papel central na construção de sua identidade cultural. A VideoParte destaca não apenas as habilidades dos skatistas, mas também a integração entre seus movimentos e o ambiente urbano. A VideoParte é linguagem estética em movimento, expressão que transforma a paisagem urbana em território simbólico.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Corpo e Cidade</h2>
              <p className="text-justify leading-relaxed">
                A cidade se apresenta como campo de criação no entre: entre corpo e espaço, manobra e erro, presença e imagem. No percurso de criação do LowMovie™ emergiu organicamente o conceito de Lowbyrinth™, uma imagem simbólica que expressa caminhos improvisados, não lineares e rizomáticos do fazer coletivo. Essa metáfora orienta a estrutura metodológica do estudo, traçando um percurso que se desdobra em dobra, escuta e desvio.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Mestrado em Cinema e Artes do Vídeo</h2>
              <p className="text-justify leading-relaxed">
                Dissertação apresentada ao Programa de Pós-Graduação em Cinema e Artes do Vídeo da Universidade Estadual do Paraná, Linha de Pesquisa Processos de Criação no Cinema e nas Artes do Vídeo, como requisito parcial para a obtenção do título de Mestre em Cinema e Artes do Vídeo.
              </p>
              <p className="text-justify leading-relaxed font-medium">
                Orientador: Prof. Dr. Fábio Jabur de Noronha
              </p>
              <p className="text-justify leading-relaxed font-medium">
                Universidade Estadual do Paraná (UNESPAR)
              </p>
              <p className="text-justify leading-relaxed font-medium">
                Curitiba, 2025
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dissertacao;
