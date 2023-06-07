const sentenceToCamelCase = require("../sentence-to-camel-case/sentence-to-camel-case");

describe("sentenceToCamelCase", () => {
  test(`should return "ThisSentence" when sentenceToCamelCase("this sentence", true) is called`, () => {
    expect(sentenceToCamelCase("back we go", true)).toBe("BackWeGo");
  });
  test(`should return "thisSentence" when sentenceToCamelCase("this sentence", false) is called`, () => {
    expect().toBe();
  });
});
