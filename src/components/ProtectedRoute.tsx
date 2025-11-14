import { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { AccessGate } from "@/components/AccessGate";
import { LoadingSpinner } from "@/components/LoadingSpinner";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Bypass authentication - allow direct access in editor
  return <>{children}</>;
};
