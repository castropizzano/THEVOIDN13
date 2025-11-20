import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { logDocumentChecks } from "@/lib/documentChecker";
import "@/lib/bilingualValidator";

// Check document availability on app start (development only)
if (import.meta.env.DEV) {
  logDocumentChecks();
}

createRoot(document.getElementById("root")!).render(<App />);
