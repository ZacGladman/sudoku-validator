/* 
This function creates an object with keys ranging from A-I. Each key's value is the values MISSING from the
corresponding 3x3 grid.

Grid A is at the top left of the sudoku grid, with B and C to the right.
Grid D-F follow the same pattern below, and G-I below that.

This funtion lets the solver function know which numbers can and cannot go into a certain 3x3 grid.
*/

import { SolverGrid, SolverMiniGrids, Square } from "../../../utils/grid-types";
import { locateMiniGrid } from "../create-empty-grid";
import createOneMiniGrid from "./oneMiniGrid";

export default function createAllMiniGrids(grid: SolverGrid): SolverMiniGrids {
  const miniGridsObject: SolverMiniGrids = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
  };
  for (let row = 0; row < 8; row += 3) {
    for (let column = 0; column < 8; column += 3) {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const miniGrid = createOneMiniGrid(row, column, grid);
      const missingNums = nums.filter((x) => !miniGrid.includes(x));
      const whichMiniGrid = locateMiniGrid(row, column);
      miniGridsObject[whichMiniGrid] = missingNums;
    }
  }
  return miniGridsObject;
}
