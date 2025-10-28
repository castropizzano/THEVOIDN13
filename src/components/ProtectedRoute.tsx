import { ReactNode, useEffect, useState } from "react";
import { AccessGate } from "@/components/AccessGate";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user has access
    const accessGranted = localStorage.getItem("thevoidn13_access_granted");
    setHasAccess(accessGranted === "true");
    setIsChecking(false);
  }, []);

  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  // Show nothing while checking
  if (isChecking) {
    return null;
  }

  // Show access gate if no access
  if (!hasAccess) {
    return <AccessGate onAccessGranted={handleAccessGranted} />;
  }

  // Render protected content
  return <>{children}</>;
};
