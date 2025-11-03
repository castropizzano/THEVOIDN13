import { useState } from "react";
import { Search, Loader2, X } from "lucide-react";
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
import { supabase } from "@/integrations/supabase/client";
import { useTrackSearch } from "@/hooks/useAnalytics";

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
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { trackSearch } = useTrackSearch();

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const { data, error } = await supabase.functions.invoke('semantic-search', {
        body: { query }
      });

      if (error) {
        console.error('Search error:', error);
        setResults([]);
        return;
      }

      const searchResults = data?.results || [];
      setResults(searchResults);
      
      // Track search
      await trackSearch(query, searchResults.length);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
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
            BUSCA SEMÂNTICA / SEMANTIC SEARCH
          </DialogTitle>
          <DialogDescription className="bible-body text-sm">
            Busca inteligente através de todo o memorial artístico
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-2">
          <Input
            placeholder="Pesquisar conceitos, temas, processos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
            disabled={isSearching}
          />
          <Button 
            onClick={handleSearch}
            disabled={isSearching || !query.trim()}
            size="icon"
          >
            {isSearching ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Search className="h-4 w-4" />
            )}
          </Button>
          {query && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setQuery("");
                setResults([]);
              }}
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

        {!isSearching && query && results.length === 0 && (
          <div className="text-center py-8 text-muted-foreground bible-body text-sm">
            Nenhum resultado encontrado para "{query}"
          </div>
        )}

        <div className="text-xs text-muted-foreground bible-body text-center">
          Powered by AI • Busca conceitual e temática
        </div>
      </DialogContent>
    </Dialog>
  );
};
