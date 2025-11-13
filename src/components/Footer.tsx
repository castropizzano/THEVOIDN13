const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-sm sm:text-base font-bold tracking-wide">THEVØIDN13</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Memorial Artístico e Práxis Híbrida / Artistic Memorial and Hybrid Praxis
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-xs sm:text-sm text-muted-foreground">© 2025 Castro Pizzano</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Licensed under CC BY-NC-SA 4.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
