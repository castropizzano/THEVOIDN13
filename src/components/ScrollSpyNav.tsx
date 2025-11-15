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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

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

  return (
    <nav className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "group flex items-center gap-3 transition-all duration-300",
              "hover:translate-x-[-8px]"
            )}
            aria-label={`Ir para ${item.label}`}
          >
            <span
              className={cn(
                "text-xs font-mono uppercase tracking-wider transition-all duration-300",
                "opacity-0 group-hover:opacity-100",
                activeSection === item.id
                  ? "text-primary opacity-100"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </span>
            <div
              className={cn(
                "w-2 h-2 rounded-full border transition-all duration-300",
                activeSection === item.id
                  ? "bg-primary border-primary w-3 h-3"
                  : "border-muted-foreground group-hover:border-primary"
              )}
            />
          </button>
        ))}
      </div>
    </nav>
  );
};
