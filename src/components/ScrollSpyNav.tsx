import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Início" },
  { id: "transmissao", label: "Transmissão" },
  { id: "manifesto", label: "Manifesto" },
  { id: "origem", label: "Origem" },
  { id: "filosofia", label: "Filosofia" },
  { id: "entidade", label: "Entidade" },
  { id: "psique", label: "Psique" },
  { id: "lexico", label: "Léxico" },
  { id: "metodologia", label: "Metodologia" },
  { id: "personagens", label: "Personagens" },
  { id: "referencias", label: "Referências" },
];

export const ScrollSpyNav = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;
      
      // Esconder se estiver no topo ou no footer
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      if (scrollTop < 100 || scrollTop + clientHeight >= scrollHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Detectar seção ativa
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <nav 
      className="fixed right-12 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
      style={{ 
        transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="relative flex flex-col gap-8">
        {/* Linha conectora vertical */}
        <div 
          className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
          style={{ 
            background: "rgba(255, 255, 255, 0.1)",
          }}
        />
        
        {navItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Tooltip */}
            <div 
              className={cn(
                "absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap",
                "opacity-0 group-hover:opacity-100 pointer-events-none",
                "transition-all duration-300 ease-out",
                "bg-black/90 px-4 py-2 border-l-2 border-primary",
                "text-xs tracking-wider"
              )}
              style={{
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.05em",
              }}
            >
              {item.label}
            </div>
            
            {/* Ponto de navegação */}
            <button
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "relative w-3 h-3 rounded-full border-2 cursor-pointer z-10 bg-background",
                "transition-all duration-300",
                activeSection === item.id
                  ? "bg-primary border-primary scale-[1.3]"
                  : "border-white/30 hover:border-primary/80 hover:scale-110"
              )}
              style={{
                boxShadow: activeSection === item.id 
                  ? "0 0 16px rgba(255, 0, 0, 0.4)" 
                  : "none",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              aria-label={`Ir para ${item.label}`}
            />
          </div>
        ))}
      </div>
    </nav>
  );
};
