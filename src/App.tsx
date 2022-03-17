import React from "react";
import ReactDOM from "react-dom";
import ComponentApp2 from "./ComponentApp2";

import "./index.css";

const App = () => (
  <div className="container">
    <div>App2</div>
    <ComponentApp2 prop1="propFromApp2"></ComponentApp2>    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
