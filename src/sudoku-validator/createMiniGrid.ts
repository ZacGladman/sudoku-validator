import { Row, SudokuGrid } from "../utils/grid-types";

export default function createMiniGrid(
  x: number,
  y: number,
  grid: SudokuGrid
): Row {
  return [
    grid[y][x],
    grid[y][x + 1],
    grid[y][x + 2],
    grid[y + 1][x],
    grid[y + 1][x + 1],
    grid[y + 1][x + 2],
    grid[y + 2][x],
    grid[y + 2][x + 1],
    grid[y + 2][x + 2],
  ];
}
