import { fibs, fibsRec } from "./fibonacci.js";

test("8 numbers", () => {
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
test("4 numbers", () => {
  expect(fibsRec(4)).toEqual([0, 1, 1, 2]);
});
test("8 numbers", () => {
  expect(fibsRec(2)).toEqual([0, 1]);
});
