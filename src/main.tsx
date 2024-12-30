import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProfilProvider } from "./context/context.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ProfilProvider>
      <App />
    </ProfilProvider>
  </BrowserRouter>
);
