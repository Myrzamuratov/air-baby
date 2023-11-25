import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthContextProvider from "./context/AuthContextProvider";
import FormContextProvider from "./context/FormContextProvider";
import LangContextProvider from "./context/LangContextProvider";
import NewsContextProvider from "./context/NewsContextProvider";
import ReviewContext from "./context/ReviewContextProvider";
import ReviewContextProvider from "./context/ReviewContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LangContextProvider>
      <AuthContextProvider>
        <FormContextProvider>
          <NewsContextProvider>
            <ReviewContextProvider>
              <App />
            </ReviewContextProvider>
          </NewsContextProvider>
        </FormContextProvider>
      </AuthContextProvider>
    </LangContextProvider>
  </BrowserRouter>
);
