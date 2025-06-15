import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

let redirectUri =
  process.env.NODE_ENV === "development"
    ? import.meta.env.VITE_LOGIN_REDIRECT_URI
    : import.meta.env.VITE_LOGIN_REDIRECT_URI_PROD;

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <Auth0Provider
    domain="dev-3q6ief6vnk15bfre.us.auth0.com"
    clientId="qdmu8fpzo9lWhjkFn69MgFOjJJggRrHl"
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);
