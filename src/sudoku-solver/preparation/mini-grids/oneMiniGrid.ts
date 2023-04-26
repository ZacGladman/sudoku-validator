/* 
This function creates an individual 3x3 grid.
*/

import { SolverGrid } from "../../../utils/grid-types";

export default function createOneMiniGrid(
  row: number,
  column: number,
  grid: SolverGrid
): (number | null)[] {
  const miniGridArray = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[row + i][column + j].value !== null) {
        miniGridArray.push(grid[row + i][column + j].value);
      }
    }
  }
  return miniGridArray;
}
