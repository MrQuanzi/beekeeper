import { MAX_COLS, MAX_ROWS } from "../constants/constants";
import { Cell, CellValue, CellState } from "../types/types";

const getGameBoard = (cols: number, rows: number): Cell[][] => {
  // Takes dimensions for a 2d array and pushes a given object onto each cell
  const cells: Cell[][] = [];

  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([]);
    for (let col = 0; col < MAX_COLS; col++) {
      cells[row].push({
        value: CellValue.none,
        state: CellState.hidden,
      });
    }
  }
  return cells;
};

export default getGameBoard;
