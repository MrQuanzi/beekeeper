import React, { useState } from "react";
import Display from "../Display/Display";
import Face from "../Face/Face";
import Button from "../Button/Button";
import { getGameBoard } from "../../utils/utils";
import "../../constants/constants";
import "./App.scss";
import { MAX_COLS, MAX_ROWS, NUM_OF_BEES } from "../../constants/constants";

const App: React.FC = () => {
  const [tiles, setTiles] = useState(() =>
    getGameBoard(MAX_COLS, MAX_ROWS, NUM_OF_BEES)
  );

  const renderCells = (): React.ReactNode => {
    return tiles.map((row, rowIndex) =>
      row.map((cell, colIndex) => <Button key={`${rowIndex}${colIndex}`} />)
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
