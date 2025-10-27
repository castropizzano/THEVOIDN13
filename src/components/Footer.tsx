const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            цастро™ / Castro Pizzano / THE VOID N.13
          </p>
          <p className="text-sm text-muted-foreground">
            Curitiba – Brasil · 2025
          </p>
          <a 
            href="https://github.com/castropizzano/thevoidn13" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            @thevoidn13
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
