import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import ScrollToTop from "./Components/ScrollTop/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
