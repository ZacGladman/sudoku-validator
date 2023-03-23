import sudokuValidator from "./SUDOKU-VALIDATOR";
import {
  correctGrid,
  incompleteGrid,
  incorrectRowsAndColumns,
  incorrectGrids,
} from "../utils/test-grids";

test("valid grids return true", () => {
  expect(sudokuValidator(correctGrid)).toBe(true);
});

test("invalid grids return false", () => {
  expect(sudokuValidator(incorrectRowsAndColumns)).toBe(false);
  expect(sudokuValidator(incorrectGrids)).toBe(false);
});

test("incomplete grids return null", () => {
  expect(sudokuValidator(incompleteGrid)).toBe(null);
});
