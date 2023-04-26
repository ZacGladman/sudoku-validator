import { testGrid1 } from "../../../utils/solver-test-grids";
import missingNumsRows from "./missingNumsRows";

test("an array of arrays representing missing numbers from each row is produced", () => {
  expect(missingNumsRows(testGrid1)).toStrictEqual([
    [1, 2, 3, 5, 7, 9],
    [2, 4, 5, 6, 7, 9],
    [2, 3, 4, 5, 7, 8, 9],
    [3, 4, 6, 8, 9],
    [1, 3, 4, 5, 6, 9],
    [1, 3, 4, 7, 9],
    [1, 2, 5, 6, 7, 8],
    [2, 3, 4, 7, 8, 9],
    [1, 2, 4, 5, 6, 7, 8, 9],
  ]);
});
