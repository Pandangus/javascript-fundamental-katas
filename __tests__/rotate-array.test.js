const rotateArray = require("../rotate-array/rotate-array");

describe("rotateArray", () => {
  test(`should return array unchanged if passed 0`, () => {
    expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
  test(`should rotate to the right if passed an integer less than array length`, () => {
    expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
  });
  test(`should rotate to the left if passed a negative integer less than negative array length`, () => {
    expect(rotateArray([1, 2, 3, 4], -2)).toEqual([3, 4, 1, 2]);
  });
  test(`should rotate array right if passed positive integer greater than array length`, () => {
    expect(rotateArray([1, 2, 3, 4], 11)).toEqual([2, 3, 4, 1]);
  });
  test(`should rotate array left if passed negative integer lesser than negative array length`, () => {
    expect(rotateArray(["A", 1, "🌼", "orange"], -6)).toEqual(["🌼", "orange", "A", 1]);
  });
  test(`should not mutate input`, () => {
    inputArr = [0, 9, 10];
    inputNum = 7
    output = rotateArray(inputArr, inputNum);
    expect(inputArr).toEqual([0, 9, 10]);
  });
});
