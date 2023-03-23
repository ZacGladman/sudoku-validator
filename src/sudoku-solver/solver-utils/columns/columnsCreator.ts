/* 
This function create an array containing arrays for each column of the sudoku grid.

Each array contains only the numbers already in that column. Empty squares are not included.

The purpose of this function is to provide information to the solver function on what numbers 
are already in each column.
*/

import { SolverGrid, SolverSquare } from "../../../utils/grid-types";

export default function columnsCreator(grid: SolverGrid): (number | null)[][] {
  const columns = [];
  for (let col = 0; col < 9; col++) {
    const colArray = [];
    for (let row = 0; row < 9; row++) {
      if (grid[row][col].value !== null) {
        colArray.push(grid[row][col].value);
      }
    }
    columns.push(colArray);
  }
  return columns;
}
