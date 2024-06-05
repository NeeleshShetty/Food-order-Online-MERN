import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AuthOProviderWithNavigate from "./auth/AuthOProviderWithNavigate";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AuthOProviderWithNavigate>
        <AppRoutes />
      </AuthOProviderWithNavigate>
    </Router>
  </React.StrictMode>
);
