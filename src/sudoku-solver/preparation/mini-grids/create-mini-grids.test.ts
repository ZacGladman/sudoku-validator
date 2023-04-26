import createAllMiniGrids from "./create-mini-grids";
import { testGrid1 } from "../../../utils/solver-test-grids";

test("correctly converts grid into object with num arrays for each 3x3 grid", () => {
  expect(createAllMiniGrids(testGrid1)).toStrictEqual({
    A: [1, 2, 4, 5, 7, 9],
    B: [2, 3, 4, 5, 7, 9],
    C: [2, 3, 5, 6, 7, 8, 9],
    D: [1, 3, 4, 5, 6, 9],
    E: [1, 3, 4, 7, 8, 9],
    F: [3, 4, 6, 9],
    G: [1, 2, 5, 7, 8, 9],
    H: [1, 2, 3, 4, 6, 7, 8, 9],
    I: [2, 4, 5, 6, 7, 8],
  });
});
