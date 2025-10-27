const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-base font-bold tracking-wide">THE VOID N.13</h3>
            <p className="text-sm text-muted-foreground">Memorial Artístico e Práxis Híbrida</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm text-muted-foreground">© 2025 Castro Pizzano</p>
            <p className="text-sm text-muted-foreground">Licensed under CC BY-NC-SA 4.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
