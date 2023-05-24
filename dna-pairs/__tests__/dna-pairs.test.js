const dnaPairs = require("../dna-pairs.js");

describe("dnaPairs()", () => {
  test("returns an single array nested within an array when passed an empty string", () => {
    //arrange
    const testInput = "";
    const expectedOutput = [[]];
    //act
    const result = dnaPairs(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("returns correct match for single DNA character", () => {
    //arrange
    const testInput = "A";
    const expectedOutput = [["A", "T"]];
    //act
    const result = dnaPairs(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("returns correct match for multiple DNA characters", () => {
    //arrange
    const testInput = "ATGC";
    const expectedOutput = [
      ["A", "T"],
      ["T", "A"],
      ["G", "C"],
      ["C", "G"],
    ];
    //act
    const result = dnaPairs(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
});
