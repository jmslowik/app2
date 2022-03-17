import React from "react";
import ReactDOM from "react-dom";
import { MyContextProvider } from "app1/MyContext";
import ComponentApp2 from "./ComponentApp2";

import "./index.css";

const App = () => (
  <div className="container">
    <div>App2</div>
    <MyContextProvider value={{contextSource: 'App2'}}>
      <ComponentApp2 prop1="propFromApp2"></ComponentApp2> 
    </MyContextProvider>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
