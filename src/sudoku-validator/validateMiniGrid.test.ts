import { SudokuGrid } from "../utils/grid-types";
import validateMiniGrids from "./validateMiniGrids";

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

const incorrectGrid2: SudokuGrid = [
  [1, 7, 9, 4, 3, 2, 5, 6, 8],
  [6, 5, 3, 8, 9, 7, 1, 2, 4],
  [8, 2, 4, 5, 1, 6, 9, 3, 7],
  [9, 1, 5, 6, 8, 3, 7, 4, 2],
  [2, 4, 6, 1, 7, 5, 8, 9, 3],
  [3, 8, 7, 2, 4, 9, 6, 1, 5],
  [5, 6, 1, 7, 2, 4, 3, 8, 9],
  [4, 9, 8, 3, 5, 1, 2, 7, 6],
  [7, 3, 2, 9, 6, 8, 4, 5, 6],
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

test("valid 3x3 grids return true", () => {
  expect(validateMiniGrids(correctGrid)).toBe(true);
});

test("invalid 3x3 grids return false", () => {
  expect(validateMiniGrids(incorrectGrid)).toBe(false);
  expect(validateMiniGrids(incorrectGrid2)).toBe(false);
});

test("incomplete 3x3 grids return null", () => {
  expect(validateMiniGrids(incompleteGrid)).toBe(null);
});
