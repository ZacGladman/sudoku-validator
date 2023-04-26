/* 
This function creates an array of possible numbers for each empty square.

For each empty square, it loops through 1-9, checking if each number is missing from the square's row, column AND minigrid.
If so, it is a possible solution and is added to that square's array.

If a square is not empty, it is denoted as null, so that the coordinates of this grid align with those of the main grid.
*/

import { SolverGrid, SolverMiniGrids } from "../../../utils/grid-types";
import { locateMiniGrid } from "../create-empty-grid";

export default function calculatePossibilities(
  grid: SolverGrid,
  rows: number[][],
  columns: (number | null)[][],
  miniGrids: SolverMiniGrids
): (number[] | null)[][] {
  const possibilitiesGrid = [];
  for (let row = 0; row < 9; row++) {
    const rowArray = [];
    for (let col = 0; col < 9; col++) {
      if (grid[row][col].value !== null) {
        rowArray.push(null);
      } else {
        const squarePossibilities = [];
        const whichGrid = locateMiniGrid(row, col);
        for (let i = 1; i <= 9; i++) {
          if (
            rows[row].includes(i) &&
            columns[col].includes(i) &&
            miniGrids[whichGrid].includes(i)
          ) {
            squarePossibilities.push(i);
          }
        }
        rowArray.push(squarePossibilities);
      }
    }
    possibilitiesGrid.push(rowArray);
  }
  return possibilitiesGrid;
}
