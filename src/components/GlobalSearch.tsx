import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchResult {
  section: string;
  excerpt: string;
  path: string;
  relevance: number;
}

interface GlobalSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const GlobalSearch = ({ open, onOpenChange }: GlobalSearchProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const staticContent = [
    {
      section: "Manifesto Integrado",
      excerpt: "O vazio não é falta, é incubação de forma. THEVØIDN13 como presença que respira onde o corpo falha.",
      path: "/",
      keywords: ["manifesto", "vazio", "void", "filosofia", "philosophy", "origem", "origin"]
    },
    {
      section: "LowMovie — Dissertação",
      excerpt: "Processo matricial de criação: CasaTrezeStudio®, LowPressure™ crew, filme-processo e pesquisa acadêmica.",
      path: "/dissertacao",
      keywords: ["lowmovie", "dissertacao", "dissertation", "pesquisa", "research", "mestrado", "cinema"]
    },
    {
      section: "Autor: Castro Pizzano",
      excerpt: "Práxis híbrida explorando co-criação humano-máquina, anti-branding e processos experimentais.",
      path: "/autor",
      keywords: ["autor", "author", "castro", "pizzano", "biografia", "biography", "about"]
    },
    {
      section: "Portfolio de Vídeos",
      excerpt: "Catálogo completo de trabalhos audiovisuais e projetos experimentais.",
      path: "/videos",
      keywords: ["videos", "portfolio", "galeria", "gallery", "works", "projetos"]
    }
  ];

  const handleSearch = () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    
    const searchResults = staticContent
      .map(item => ({
        section: item.section,
        excerpt: item.excerpt,
        path: item.path,
        relevance: (
          (item.section.toLowerCase().includes(lowerQuery) ? 50 : 0) +
          (item.excerpt.toLowerCase().includes(lowerQuery) ? 30 : 0) +
          (item.keywords.some(k => k.includes(lowerQuery)) ? 40 : 0)
        )
      }))
      .filter(item => item.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance);

    setResults(searchResults);
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    onOpenChange(false);
    setQuery("");
    setResults([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="bible-subtitle text-lg">
            {language === "pt" ? "BUSCA" : "SEARCH"}
          </DialogTitle>
          <DialogDescription className="bible-body text-sm">
            {language === "pt" ? "Buscar no memorial" : "Search the memorial"}
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-2">
          <Input
            placeholder={language === "pt" ? "Buscar no memorial..." : "Search the memorial..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button 
            onClick={handleSearch}
            disabled={!query.trim()}
            size="icon"
            aria-label={language === "pt" ? "Buscar" : "Search"}
          >
            <Search className="h-4 w-4" />
          </Button>
          {query && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setQuery("");
                setResults([]);
              }}
              aria-label={language === "pt" ? "Fechar" : "Close"}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {results.length > 0 && (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <Card
                key={index}
                className="p-4 cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => handleResultClick(result.path)}
              >
                <h3 className="bible-subtitle text-sm font-semibold text-primary mb-2">
                  {result.section}
                </h3>
                <p className="bible-body text-xs text-muted-foreground line-clamp-2">
                  {result.excerpt}
                </p>
              </Card>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <p className="bible-body text-sm text-center text-muted-foreground py-8">
            {language === "pt" ? "Nenhum resultado encontrado" : "No results found"}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};
