import React, { useEffect, useState } from "react";
import Display from "../Display/Display";
import Face from "../Face/Face";
import Button from "../Button/Button";
import { MAX_COLS, MAX_ROWS, NUM_OF_BEES } from "../../constants/constants";
import { getGameBoard } from "../../utils/utils";
import { Emoji } from "../../types/types";
import "../../constants/constants";
import "./App.scss";

const App: React.FC = () => {
  const [tiles, setTiles] = useState(
    getGameBoard(MAX_COLS, MAX_ROWS, NUM_OF_BEES)
  );

  const [face, setFace] = useState(Emoji.win);

  const renderCells = (): React.ReactNode => {
    return tiles.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <Button
          key={`${rowIndex}${colIndex}`}
          state={cell.state}
          value={cell.value}
          row={rowIndex}
          col={colIndex}
        />
      ))
    );
  };

  return (
    <div className="App">
      <div className="header">
        <Display value={0}></Display>
        <Face char={face}></Face>
        <Display value={15}></Display>
      </div>
      <div
        className="body"
        onMouseOver={() => setFace(Emoji.worried)}
        onMouseOut={() => setFace(Emoji.relief)}
      >
        {renderCells()}
      </div>
    </div>
  );
};

export default App;
