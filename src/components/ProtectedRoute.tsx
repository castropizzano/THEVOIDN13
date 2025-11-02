import { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { AccessGate } from "@/components/AccessGate";
import { LoadingSpinner } from "@/components/LoadingSpinner";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  // Show access gate if not authenticated
  if (!user) {
    return <AccessGate onAccessGranted={() => {}} />;
  }

  // Render protected content for authenticated users
  return <>{children}</>;
};
