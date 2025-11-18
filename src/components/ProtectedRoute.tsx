import { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { AccessGate } from "@/components/AccessGate";
import { LoadingSpinner } from "@/components/LoadingSpinner";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" text="Verificando autenticação..." />
      </div>
    );
  }

  if (!user) {
    return <AccessGate onAccessGranted={() => window.location.reload()} />;
  }

  return <>{children}</>;
};
