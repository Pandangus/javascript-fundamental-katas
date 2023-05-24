const getTweetData = require("../get-tweet-data.js");

describe("getTweetData()", () => {
  test("returns default object template when passed an empty string", () => {
    //arrange
    const testInput = "";
    const expectedOutput = {
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 0,
    };
    //act
    const result = getTweetData(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("returns default object template with length included", () => {
    //arrange
    const testInput = "I am 23 characters long";
    const expectedOutput = {
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 23,
    };
    //act
    const result = getTweetData(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("returns default object template with length, mentions, mentionCount from a string with different mentions", () => {
    //arrange
    const testInput = "I'll take a pint of @Ranmore, by @Surrey_Hills";
    const expectedOutput = {
      tags: [],
      mentions: ["@Ranmore", "@Surrey_Hills"],
      tagCount: 0,
      mentionCount: 2,
      length: 46,
    };
    //act
    const result = getTweetData(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("returns default object template with length, mentions, mentionCount from a string with repeated mentions", () => {
    //arrange
    const testInput = "I'll take a pint of @Ranmore. I love @Ranmore!";
    const expectedOutput = {
      tags: [],
      mentions: ["@Ranmore"],
      tagCount: 0,
      mentionCount: 1,
      length: 46,
    };
    //act
    const result = getTweetData(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("returns default object template with length, mentions, mentionCount, tags, tagCount from a string with different mentions", () => {
    //arrange
    const testInput =
      "I'll take a pint of @Ranmore, by @Surrey_Hills. #cask_ale #cool_guy";
    const expectedOutput = {
      tags: ["#cask_ale", "#cool_guy"],
      mentions: ["@Ranmore", "@Surrey_Hills"],
      tagCount: 2,
      mentionCount: 2,
      length: 67,
    };
    //act
    const result = getTweetData(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("returns default object template with length, mentions, mentionCount, tags, tagCount from a string with different mentions", () => {
    //arrange
    const testInput =
      "I'll take a pint of @Ranmore. I love @Ranmore! #cask_ale #cask_ale";
    const expectedOutput = {
      tags: ["#cask_ale"],
      mentions: ["@Ranmore"],
      tagCount: 1,
      mentionCount: 1,
      length: 66,
    };
    //act
    const result = getTweetData(testInput);
    //assert
    expect(result).toEqual(expectedOutput);
  });
  test("test to make sure original data is not mutated", () => {
    //arrange
    const testInput =
      "I'll take a pint of @Ranmore, by @Surrey_Hills. #cask_ale #cool_guy";
    const expectedOutput = {
      tags: ["#cask_ale", "#cool_guy"],
      mentions: ["@Ranmore", "@Surrey_Hills"],
      tagCount: 2,
      mentionCount: 2,
      length: 67,
    };
    //act
    const result = getTweetData(testInput);
    //assert
    expect(result).not.toBe(testInput);
  });
});
