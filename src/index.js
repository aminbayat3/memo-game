import React from "react";
import ReactDOM from "react-dom/client";
import { CardProvider } from "./context/card-context";

import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CardProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CardProvider>
);
