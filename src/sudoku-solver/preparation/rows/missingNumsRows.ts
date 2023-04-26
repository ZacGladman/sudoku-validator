/* 
This function produces an array of arrays, each representing the different rows of the sudoku grid.

Each sub-array includes only the numbers that are MISSING from that row.
*/

import { SolverGrid } from "../../../utils/grid-types";

export default function missingNumsRows(grid: SolverGrid): number[][] {
  const returnArray = [];
  for (let i = 0; i < 9; i++) {
    const oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const nums: (number | null)[] = [];
    for (const el of grid[i]) {
      nums.push(el.value);
    }
    const missingNums = oneToNine.filter((x) => !nums.includes(x));
    returnArray.push(missingNums);
  }
  return returnArray;
}
