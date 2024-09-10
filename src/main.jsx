import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
