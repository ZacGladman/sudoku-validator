import createAllMiniGrids from "./create-mini-grids";
import { testGrid1 } from "../../../utils/solver-test-grids";

test("correctly converts grid into object with num arrays for each 3x3 grid", () => {
  expect(createAllMiniGrids(testGrid1)).toStrictEqual({
    A: [8, 6, 3],
    B: [8, 6, 1],
    C: [4, 1],
    D: [7, 8, 2],
    E: [2, 5, 6],
    F: [4, 5, 7, 2, 8],
    G: [4, 3, 6],
    H: [5],
    I: [9, 1, 3],
  });
});
