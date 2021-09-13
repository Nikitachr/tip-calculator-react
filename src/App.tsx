import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/calculator";

function App() {
  return (
    <div className="bg-background h-screen flex flex-col items-center">
      <img className="w-24 mt-8 sm:mt-32" src={logo} alt="" />
      <Calculator className="p-8 mt-14 h-full sm:h-auto w-full max-w-920" />
    </div>
  );
}

export default App;
