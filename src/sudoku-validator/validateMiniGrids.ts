import createMiniGrid from "./createMiniGrid";
import { SudokuGrid } from "../utils/grid-types";
import validateSection from "./validate-section";

export default function validateMiniGrids(grid: SudokuGrid): boolean | null {
  for (let y = 0; y < 8; y += 3) {
    for (let x = 0; x < 8; x += 3) {
      const miniGrid = createMiniGrid(x, y, grid);
      const isValid = validateSection(miniGrid);
      if (!isValid) {
        return isValid;
      }
    }
  }
  return true;
}
