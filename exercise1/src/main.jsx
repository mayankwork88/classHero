import ReactDOM from "react-dom/client";
import { PriceContextProvider } from "./context/PriceContext.jsx";
import { RORContextProvider } from "./context/RORContext.jsx";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { appTheme } from "./styles/theme.js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={appTheme}>
    <CssBaseline />
    <PriceContextProvider>
      <RORContextProvider>
        <App />
      </RORContextProvider>
    </PriceContextProvider>
  </ThemeProvider>
);
