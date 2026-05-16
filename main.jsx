import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <App />

    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#ffffff",
          color: "#1e293b",
          borderRadius: "14px",
          padding: "14px",
          fontSize: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        },

        success: {
          style: {
            border: "1px solid #22c55e",
          },
        },

        error: {
          style: {
            border: "1px solid #ef4444",
          },
        },
      }}
    />

  </React.StrictMode>
);