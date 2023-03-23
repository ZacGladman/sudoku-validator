import sudokuSolver from "./SOLVER";

test("solveable puzzles return the completed grid", () => {
  expect(sudokuSolver(grid)).toStrictEqual(solvedGrid);
});

test("unsolveable puzzles return false", () => {
  expect(sudokuSolver(unsolveableGrid)).toBe(false);
});
