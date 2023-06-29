import {render} from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom"
import App  from "./App";
import ThemeProvider from "./theme/ThemeProvider";


render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)