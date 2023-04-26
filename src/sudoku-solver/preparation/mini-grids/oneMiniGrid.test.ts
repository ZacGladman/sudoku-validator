import createOneMiniGrid from "./oneMiniGrid";
import { testGrid1 } from "../../../utils/solver-test-grids";

test("correctly creates mini grid", () => {
  expect(createOneMiniGrid(0, 0, testGrid1)).toStrictEqual([8, 6, 3]);
  expect(createOneMiniGrid(0, 3, testGrid1)).toStrictEqual([8, 6, 1]);
  expect(createOneMiniGrid(3, 0, testGrid1)).toStrictEqual([7, 8, 2]);
});
