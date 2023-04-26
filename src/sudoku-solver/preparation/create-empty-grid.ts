import { SolverGrid, SolverRow, MiniGridLabel } from "../../utils/grid-types";

export default function createEmptyGrid(): SolverGrid {
  const emptyGrid: SolverGrid = [];
  for (let row = 0; row < 9; row++) {
    const rowArray: SolverRow = [];
    for (let column = 0; column < 9; column++) {
      const miniGridLocation = locateMiniGrid(row, column);
      rowArray.push({ value: null, miniGrid: miniGridLocation });
    }
    emptyGrid.push(rowArray);
  }
  return emptyGrid;
}

export function locateMiniGrid(row: number, column: number): MiniGridLabel {
  if (row < 3) {
    if (column < 3) {
      return "A";
    } else if (column < 6) {
      return "B";
    } else {
      return "C";
    }
  } else if (row < 6) {
    if (column < 3) {
      return "D";
    } else if (column < 6) {
      return "E";
    } else {
      return "F";
    }
  } else {
    if (column < 3) {
      return "G";
    } else if (column < 6) {
      return "H";
    } else {
      return "I";
    }
  }
}
