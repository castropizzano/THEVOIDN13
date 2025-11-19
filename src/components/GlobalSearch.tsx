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
import { useTranslation } from "@/hooks/useTranslation";

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

// Static search data - no backend needed
const staticSearchContent = [
  {
    section: "THEVØIDN13 — Manifesto",
    excerpt: "Memorial artístico explorando arte, código e consciência através de co-criação humano-máquina",
    path: "/",
    keywords: ["thevoidn13", "manifesto", "arte", "código", "consciência", "memorial"]
  },
  {
    section: "LowMovie™ — Dissertação",
    excerpt: "Projeto de pesquisa em Cinema e Artes do Vídeo",
    path: "/lowmovie",
    keywords: ["lowmovie", "dissertação", "cinema", "pesquisa", "mestrado"]
  },
  {
    section: "Castro Pizzano — Autor",
    excerpt: "Sobre o criador, pesquisador e artista por trás do projeto",
    path: "/autor",
    keywords: ["castro", "pizzano", "autor", "criador", "artista", "цастро"]
  },
  {
    section: "Galeria Visual",
    excerpt: "Exploração visual do universo THEVØIDN13",
    path: "/galeria",
    keywords: ["galeria", "vídeos", "visual", "imagens"]
  },
];

export const GlobalSearch = ({ open, onOpenChange }: GlobalSearchProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSearch = () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    
    // Simple client-side search
    const searchResults = staticSearchContent
      .map(item => {
        const titleMatch = item.section.toLowerCase().includes(searchTerm);
        const excerptMatch = item.excerpt.toLowerCase().includes(searchTerm);
        const keywordMatch = item.keywords.some(k => k.includes(searchTerm));
        
        let relevance = 0;
        if (titleMatch) relevance += 3;
        if (excerptMatch) relevance += 2;
        if (keywordMatch) relevance += 1;
        
        return {
          section: item.section,
          excerpt: item.excerpt,
          path: item.path,
          relevance
        };
      })
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
            {t("search").toUpperCase()}
          </DialogTitle>
          <DialogDescription className="bible-body text-sm">
            {t("searchPlaceholder")}
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-2">
          <Input
            placeholder={t("searchPlaceholder")}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value.trim()) {
                handleSearch();
              } else {
                setResults([]);
              }
            }}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button 
            onClick={handleSearch}
            disabled={!query.trim()}
            size="icon"
            aria-label={t("search")}
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
              aria-label={t("close")}
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
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="bible-subtitle text-sm font-semibold mb-1">
                      {result.section}
                    </h3>
                    <p className="bible-body text-xs text-muted-foreground line-clamp-2">
                      {result.excerpt}
                    </p>
                  </div>
                  <div className="text-xs text-primary font-mono">
                    {result.relevance}%
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="text-center py-8">
            <p className="bible-body text-sm text-muted-foreground">
              {t("noResults")}
            </p>
          </div>
        )}

        <div className="text-xs text-muted-foreground bible-body text-center">
          Powered by AI
        </div>
      </DialogContent>
    </Dialog>
  );
};
