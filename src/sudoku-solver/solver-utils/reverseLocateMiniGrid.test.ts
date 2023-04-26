import reverseLocateMiniGrid from "./reverseLocateMiniGrid";

test("A letter from A to B returns the corresponding coordinates of the top-left square", () => {
  expect(reverseLocateMiniGrid("A")).toStrictEqual([0, 0]);
  expect(reverseLocateMiniGrid("F")).toStrictEqual([3, 6]);
});
