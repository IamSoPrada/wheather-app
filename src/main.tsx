import React from "react";
import ReactDOM from "react-dom/client";
import { UserPositionProvider } from "@/providers/UserPositionProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserPositionProvider>
      <App />
    </UserPositionProvider>
  </React.StrictMode>
);
