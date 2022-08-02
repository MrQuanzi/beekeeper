// Types used in the BeeKeeper app

export enum CellValue {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  bomb,
}

export enum CellState {
  hidden,
  visible,
  flagged,
}

export type Cell = { value: CellValue; state: CellState };
