import React from "react";
import ReactDOM from "react-dom";
import Container from "@mui/material/Container";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="xl">
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
