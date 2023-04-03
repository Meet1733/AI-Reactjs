import React from "react";
import "./css/App.css"
import Nav from "./Nav";
import Row1 from "./Row1";
import Row2 from "./Row2";

function App() {
  return (
    <div className="App">
      <div className="first-page">
        <Nav/>
        <Row1/>
      </div>

      <div className="second-page">
        <Row2/>
      </div>
    </div>
  );
}

export default App;