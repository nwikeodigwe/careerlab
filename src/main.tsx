import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CookiesProvider } from "react-cookie";

import store, { persistor } from "./store";
import Router from "./router.tsx";

import "./index.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <CookiesProvider>
            <Router />
          </CookiesProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
