import { MAX_COLS, MAX_ROWS, NUM_OF_BEES } from "../constants/constants";
import { Cell, CellValue, CellState } from "../types/types";

const getGameBoard = (cols: number, rows: number, bees: number): Cell[][] => {
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
  const board: Cell[][] = placeBees(bees, cells);
  return board;
};

const placeBees = (n: number = NUM_OF_BEES, cells: Cell[][]): Cell[][] => {
  let placed: number = 0;
  while (placed < n) {
    const row = Math.floor(Math.random() * MAX_ROWS);
    const col = Math.floor(Math.random() * MAX_COLS);
    const cell: Cell = cells[row][col];

    if (cell.value !== CellValue.bomb) {
      cell.value = CellValue.bomb;
      placed++;
    }
  }
  return cells;
};

export { getGameBoard };
