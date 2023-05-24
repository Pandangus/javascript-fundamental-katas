const fizzBuzz = require("../fizzBuzz.js");

describe("fuzzBuzz()", () => {
  test("returns a 0 when passed a 0", () => {
    //arrange
    const testInput = 0;
    const expectedOutput = 0;
    //act
    const result = fizzBuzz(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("returns 0 when passed 3", () => {
    //arrange
    const testInput = 3;
    const expectedOutput = 0;
    //act
    const result = fizzBuzz(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("returns 3 when passed 5", () => {
    //arrange
    const testInput = 5;
    const expectedOutput = 3;
    //act
    const result = fizzBuzz(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("returns 8 when passed 6", () => {
    //arrange
    const testInput = 5;
    const expectedOutput = 3;
    //act
    const result = fizzBuzz(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("returns 33 when passed 12", () => {
    //arrange
    const testInput = 12;
    const expectedOutput = 33;
    //act
    const result = fizzBuzz(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
});
