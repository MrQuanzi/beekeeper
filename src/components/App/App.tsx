import React, { useState } from "react";
import Display from "../Display/Display";
import Face from "../Face/Face";
import Button from "../Button/Button";
import getGameBoard from "../../utils/getGameBoard";
// import fillBoard from "../../utils/fillBoard.js";
import "../../constants/constants";
import "./App.scss";
import { MAX_COLS, MAX_ROWS } from "../../constants/constants";

const App: React.FC = () => {
  const [tiles, setTiles] = useState(() => getGameBoard(MAX_COLS, MAX_ROWS));

  const renderCells = (): React.ReactNode => {
    return tiles.map((row, rowIndex) =>
      row.map((cell, colIndex) => <Button key={`${row}${cell}`}></Button>)
    );
  };

  return (
    <div className="App">
      <div className="header">
        <Display value={0}></Display>
        <Face char="😎"></Face>
        <Display value={15}></Display>
      </div>
      <div className="body">{renderCells()}</div>
    </div>
  );
};

export default App;
