import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthContextProvider from "./context/AuthContextProvider";
import FormContextProvider from "./context/FormContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
