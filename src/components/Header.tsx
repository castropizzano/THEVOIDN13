import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "THEVOIDN13" },
    { path: "/dissertacao", label: "LOWMOVIE™" },
    { path: "/autor", label: "ORIGIN" },
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-6">
        <ul className="flex gap-12 justify-center items-center">
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
      </nav>
    </header>
  );
};

export default Header;
