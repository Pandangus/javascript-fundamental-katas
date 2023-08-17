const rotateArray = require("../rotate-array/rotate-array");

describe("rotateArray", () => {
    test(`should return array unchanged if passed 0`, () => {
      expect(rotateArray([1,2,3], 0)).toEqual([1,2,3]);
    });
    test(`should rotate array once to the right if passed 1`, () => {
        expect(rotateArray([1,2,3], 1)).toEqual([3,1,2]);
      });
});