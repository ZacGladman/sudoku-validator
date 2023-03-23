export type SudokuGrid = Row[];
export type Square = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;
export type Row = Square[];

export type MiniGridLabel = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I";
export interface SolverSquare {
  value: Square;
  miniGrid: MiniGridLabel;
}
export type SolverRow = SolverSquare[];
export type SolverGrid = SolverRow[];
