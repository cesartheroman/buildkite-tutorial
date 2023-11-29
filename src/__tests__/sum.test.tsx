import sum from "../sum.tsx";

test("should sum 2 numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
