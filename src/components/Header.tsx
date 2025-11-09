import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GlobalSearch } from "@/components/GlobalSearch";

const Header = () => {
  const location = useLocation();
  const { isAdmin } = useAuth();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const navItems = [
    { path: "/lowmovie", label: "LOWMOVIE™" },
    { path: "/sobre", label: "AUTHOR" },
    { path: "/galeria", label: "VIDEO PORTFOLIO" },
  ];
  
  if (isAdmin) {
    navItems.push({ path: "/admin", label: "ADMIN" });
  }
  
  return (
    <>
      <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="flex items-center h-10 text-sm sm:text-base font-medium tracking-wide text-foreground hover:text-foreground/80 transition-colors touch-manipulation"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              THEVØIDN13
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center h-10 text-sm font-medium tracking-wide transition-colors ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Search Button - Desktop */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="h-10 w-10 p-0 flex items-center justify-center"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="flex gap-2 items-center md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="h-10 w-10 touch-manipulation"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-10 w-10 touch-manipulation"
                    aria-label="Menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-background/98 backdrop-blur-md">
                  <div className="flex flex-col gap-6 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={`text-lg font-medium tracking-wide transition-colors py-3 touch-manipulation ${
                          location.pathname === item.path
                            ? "text-foreground border-l-2 border-primary pl-4"
                            : "text-muted-foreground hover:text-foreground hover:border-l-2 hover:border-muted-foreground/50 pl-4"
                        }`}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
