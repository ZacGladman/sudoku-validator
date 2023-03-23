import { SudokuGrid } from "./grid-types";

export const incompleteGrid: SudokuGrid = [
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
];

export const correctGrid: SudokuGrid = [
  [1, 7, 9, 4, 3, 2, 5, 6, 8],
  [6, 5, 3, 8, 9, 7, 1, 2, 4],
  [8, 2, 4, 5, 1, 6, 9, 3, 7],
  [9, 1, 5, 6, 8, 3, 7, 4, 2],
  [2, 4, 6, 1, 7, 5, 8, 9, 3],
  [3, 8, 7, 2, 4, 9, 6, 1, 5],
  [5, 6, 1, 7, 2, 4, 3, 8, 9],
  [4, 9, 8, 3, 5, 1, 2, 7, 6],
  [7, 3, 2, 9, 6, 8, 4, 5, 1],
];

export const incorrectRowsAndColumns: SudokuGrid = [
  [1, 7, 9, 4, 3, 2, 5, 6, 8],
  [6, 5, 3, 8, 9, 7, 1, 2, 4],
  [8, 2, 4, 5, 1, 6, 9, 3, 7],
  [9, 1, 5, 6, 8, 3, 7, 4, 2],
  [2, 4, 6, 1, 7, 5, 8, 9, 3],
  [3, 8, 7, 2, 4, 9, 6, 1, 5],
  [5, 6, 1, 7, 2, 4, 3, 8, 9],
  [4, 9, 8, 3, 5, 1, 2, 7, 6],
  [7, 3, 2, 9, 6, 8, 4, 5, 7],
];

export const incorrectGrids: SudokuGrid = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [9, 1, 2, 3, 4, 5, 6, 7, 8],
];
