import columnsCreator from "./columnsCreator";
import { testGrid1 } from "../../../utils/solver-test-grids";

test("creates nestedArray of numbers present in all columns", () => {
  expect(columnsCreator(testGrid1)).toStrictEqual([
    [8, 3, 2, 6],
    [6, 4],
    [7, 8, 3],
    [6, 5],
    [8, 2, 6, 5],
    [1],
    [4, 1, 7, 9, 3],
    [1],
    [5, 2, 8, 1],
  ]);
});
