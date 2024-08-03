import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./providers/theme-provider.jsx";
import { Toaster } from "sonner";
import AuthProvider from "./providers/auth-provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
        <Toaster richColors duration={2000} closeButton position="top-center" />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
