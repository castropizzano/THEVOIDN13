import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  // 404 tracking happens silently - no console pollution
  useEffect(() => {
    // Could send to analytics service here if needed
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-left max-w-2xl px-6">
        <h1 className="bible-title">404, PÁGINA NÃO ENCONTRADA</h1>
        <p className="bible-body text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <p className="bible-body text-muted-foreground italic">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="bible-body text-primary hover:underline">
          ← Retornar ao início / Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
