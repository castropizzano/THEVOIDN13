import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const location = useLocation();
  const { isAdmin } = useAuth();
  
  const navItems = [
    { path: "/lowmovie", label: "LOWMOVIE™" },
    { path: "/sobre", label: "AUTHOR" },
    { path: "/galeria", label: "VIDEO PORTFOLIO" },
  ];
  
  if (isAdmin) {
    navItems.push({ path: "/admin", label: "ADMIN" });
  }
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-sm font-medium tracking-wide text-[#DADADA] hover:text-[#DADADA]/80 transition-colors"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            THEVØIDN13
          </Link>
          
          <ul className="flex gap-12 items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    location.pathname === item.path
                      ? "text-[#DADADA]"
                      : "text-[#DADADA]/70 hover:text-[#DADADA]"
                  }`}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
