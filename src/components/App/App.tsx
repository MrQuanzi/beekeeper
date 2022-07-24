import React from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header">
        <Display value={0}></Display>
        <Button></Button>
        <Display value={15}></Display>
      </div>
      <div className="body">Body</div>
    </div>
  );
};

export default App;
