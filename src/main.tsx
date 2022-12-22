import React from "react";
import ReactDOM from "react-dom/client";
import BasicExample from "./BasicExample";
import AllCollapseExample from "./AllCollapseExample";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>Basic Example</h1>
    <BasicExample />

    <h1>All Collapse Example</h1>
    <AllCollapseExample />
  </React.StrictMode>
);
