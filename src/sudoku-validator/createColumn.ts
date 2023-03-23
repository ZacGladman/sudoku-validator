import { Row, SudokuGrid } from "../utils/grid-types";

export default function createColumn(i: number, grid: SudokuGrid): Row {
  const column: Row = [];
  for (let j = 0; j < 9; j++) {
    column.push(grid[j][i]);
  }
  return column;
}
