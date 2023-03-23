import validateSection from "./validate-section";

test("valid sections return true", () => {
  expect(validateSection([5, 4, 3, 2, 1, 6, 7, 8, 9])).toEqual(true);
});

test("invalid sections return false", () => {
  expect(validateSection([5, 4, 3, 2, 1, 6, 7, 8, 5])).toEqual(false);
});

test("incomplete sections return null", () => {
  expect(validateSection([5, 4, 3, 2, 1, null, 7, 8, 9])).toEqual(null);
});
