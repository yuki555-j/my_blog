import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apllo";
import { AppRouter } from "./AppRouter";
import reportWebVitals from "./reportWebVitals";
import "./assets/stylesheets/reset.css";
import "./assets/stylesheets/burgerMenu.css";
import "./assets/stylesheets/richText.css";
import "./assets/stylesheets/index.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
