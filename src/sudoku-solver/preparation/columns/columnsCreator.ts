/* 
This function create an array containing arrays for each column of the sudoku grid.

Each array contains the numbers MISSING from that column.
*/

import { SolverGrid, SolverSquare } from "../../../utils/grid-types";

export default function columnsCreator(grid: SolverGrid): (number | null)[][] {
  const columns = [];
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let col = 0; col < 9; col++) {
    const colArray: (number | null)[] = [];
    for (let row = 0; row < 9; row++) {
      if (grid[row][col].value !== null) {
        colArray.push(grid[row][col].value);
      }
    }
    const missingNums = nums.filter((x) => !colArray.includes(x));
    columns.push(missingNums);
  }
  return columns;
}
