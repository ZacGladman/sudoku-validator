import columnsCreator from "./columnsCreator";
import { testGrid1 } from "../../../utils/solver-test-grids";

test("creates nestedArray of numbers missing from all columns", () => {
  expect(columnsCreator(testGrid1)).toStrictEqual([
    [1, 4, 5, 7, 9],
    [1, 2, 3, 5, 7, 8, 9],
    [1, 2, 4, 5, 6, 9],
    [1, 2, 3, 4, 7, 8, 9],
    [1, 3, 4, 7, 9],
    [2, 3, 4, 5, 6, 7, 8, 9],
    [2, 5, 6, 8],
    [2, 3, 4, 5, 6, 7, 8, 9],
    [3, 4, 6, 7, 9],
  ]);
});
