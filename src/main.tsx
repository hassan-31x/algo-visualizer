import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PathfindingProvider } from "./context/PathfindingContext";
import { TileProvider } from "./context/TileContext";
import { SpeedProvider } from "./context/SpeedContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PathfindingProvider>
    <TileProvider>
      <SpeedProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SpeedProvider>
    </TileProvider>
  </PathfindingProvider>
);
