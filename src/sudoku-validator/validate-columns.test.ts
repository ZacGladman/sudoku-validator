import { SudokuGrid } from "../utils/grid-types";
import validateColumns from "./validate-columns";

const correctGrid: SudokuGrid = [
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

const incorrectGrid: SudokuGrid = [
  [1, 7, 9, 4, 3, 2, 5, 6, 8],
  [6, 5, 3, 8, 9, 7, 1, 2, 4],
  [8, 2, 4, 5, 1, 6, 9, 3, 7],
  [9, 1, 5, 6, 8, 3, 7, 4, 2],
  [2, 4, 6, 1, 7, 5, 8, 9, 3],
  [3, 8, 7, 2, 4, 9, 6, 1, 5],
  [5, 6, 1, 7, 2, 4, 3, 8, 9],
  [4, 9, 8, 3, 5, 1, 2, 7, 1],
  [7, 3, 2, 9, 6, 8, 4, 5, 1],
];

const incompleteGrid: SudokuGrid = [
  [1, 7, 9, 4, 3, 2, 5, 6, 8],
  [6, 5, 3, 8, 9, 7, 1, 2, 4],
  [8, 2, 4, 5, 1, 6, 9, 3, 7],
  [9, 1, 5, 6, 8, 3, 7, 4, 2],
  [2, 4, 6, 1, 7, 5, 8, 9, 3],
  [3, 8, 7, 2, 4, 9, 6, 1, 5],
  [5, 6, 1, 7, 2, 4, 3, 8, 9],
  [4, 9, 8, 3, 5, 1, 2, 7, 1],
  [7, 3, 2, 9, 6, 8, 4, 5, null],
];

test("valid columns return true", () => {
  expect(validateColumns(correctGrid)).toBe(true);
});

test("invalid columns return true", () => {
  expect(validateColumns(incorrectGrid)).toBe(false);
});

test("incomplete grids return null", () => {
  expect(validateColumns(incompleteGrid)).toBe(null);
});
