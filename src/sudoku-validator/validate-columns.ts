import { SudokuGrid } from "../utils/grid-types";
import validateSection from "./validate-section";
import createColumn from "./createColumn";

export default function validateColumns(grid: SudokuGrid): boolean | null {
  for (let i = 0; i < 9; i++) {
    const column = createColumn(i, grid);
    const isValid = validateSection(column);
    if (!isValid) {
      return isValid;
    }
  }
  return true;
}
