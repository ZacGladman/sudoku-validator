import { Row, Square, SudokuGrid } from "../utils/grid-types";
import validateMiniGrids from "./validateMiniGrids";
import validateSection from "./validate-section";
import validateColumns from "./validate-columns";
import {
  correctGrid,
  incompleteGrid,
  incorrectRowsAndColumns,
  incorrectGrids,
} from "../utils/test-grids";

export default function sudokuValidator(grid: SudokuGrid): boolean | null {
  for (let i = 0; i < 9; i++) {
    const validRow = validateSection(grid[i]);
    if (!validRow) {
      console.log("invalid row(s)!");
      return validRow;
    }
  }
  const validColumns = validateColumns(grid);
  if (!validColumns) {
    console.log("invalid column(s)!");
    return true;
  }
  const validMiniGrids = validateMiniGrids(grid);
  if (!validMiniGrids) {
    console.log("invalid 3x3 grid(s)!");
    return validMiniGrids;
  }
  return true;
}

// console.log(sudokuValidator(correctGrid));
//console.log(sudokuValidator(incorrectRowsAndColumns));
// console.log(sudokuValidator(incorrectGrids));
// console.log(sudokuValidator(incompleteGrid));
