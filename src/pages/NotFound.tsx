import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-left max-w-2xl px-6">
        <h1 className="section-title mb-4">404 — PÁGINA NÃO ENCONTRADA</h1>
        <p className="body-base text-muted-foreground mb-6">
          A página que você procura não existe ou foi movida.
        </p>
        <p className="body-base text-muted-foreground mb-8 italic">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="body-base text-primary hover:underline">
          ← Retornar ao início / Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
