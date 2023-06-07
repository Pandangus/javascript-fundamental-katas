const sentenceToCamelCase = require("../sentence-to-camel-case/sentence-to-camel-case");

describe("sentenceToCamelCase", () => {
  test(`should return "ThisSentence" when sentenceToCamelCase("this sentence", true) is called`, () => {
    expect(sentenceToCamelCase("this sentence", true)).toBe("ThisSentence");
  });
  test(`should return "thisSentence" when sentenceToCamelCase("this sentence", false) is called`, () => {
    expect(sentenceToCamelCase("this sentence", false)).toBe("thisSentence");
  });
  test(`should return "ThisSentence" when sentenceToCamelCase("This sentence", true) is called`, () => {
    expect(sentenceToCamelCase("This sentence", true)).toBe("ThisSentence");
  });
  test(`should return "thisSentence" when sentenceToCamelCase("This sentence", false) is called`, () => {
    expect(sentenceToCamelCase("This sentence", false)).toBe("thisSentence");
  });
  test(`should return "ThisBiggerStrangeSentence" when sentenceToCamelCase("This Bigger strange Sentence", true) is called`, () => {
    expect(sentenceToCamelCase("This Bigger strange Sentence", true)).toBe(
      "ThisBiggerStrangeSentence"
    );
  });
  test(`should return "thisBiggerStrangeSentence" when sentenceToCamelCase("This Bigger strange Sentence", false) is called`, () => {
    expect(sentenceToCamelCase("This Bigger strange Sentence", false)).toBe(
      "thisBiggerStrangeSentence"
    );
  });
  test(`should return a very long string entirely in UpperCamelCase when sentenceToCamelCase() is called with a very long string and a true boolean`, () => {
    expect(
      sentenceToCamelCase(
        "Who controls the British crown Who keeps the metric system down We do we do Who keeps Atlantis off the maps Who keeps the Martians under wraps We do we do Who holds back the electric car Who makes Steve Gutenberg a star We do we do Who robs cavefish of their sight Who rigs every Oscar night We do we do",
        true
      )
    ).toBe(
      "WhoControlsTheBritishCrownWhoKeepsTheMetricSystemDownWeDoWeDoWhoKeepsAtlantisOffTheMapsWhoKeepsTheMartiansUnderWrapsWeDoWeDoWhoHoldsBackTheElectricCarWhoMakesSteveGutenbergAStarWeDoWeDoWhoRobsCavefishOfTheirSightWhoRigsEveryOscarNightWeDoWeDo"
    );
  });
  test(`should return a very long string entirely in lowerCamelCase when sentenceToCamelCase() is called with a very long string and a false boolean`, () => {
    expect(
      sentenceToCamelCase(
        "Who controls the British crown Who keeps the metric system down We do we do Who keeps Atlantis off the maps Who keeps the Martians under wraps We do we do Who holds back the electric car Who makes Steve Gutenberg a star We do we do Who robs cavefish of their sight Who rigs every Oscar night We do we do",
        false
      )
    ).toBe(
      "whoControlsTheBritishCrownWhoKeepsTheMetricSystemDownWeDoWeDoWhoKeepsAtlantisOffTheMapsWhoKeepsTheMartiansUnderWrapsWeDoWeDoWhoHoldsBackTheElectricCarWhoMakesSteveGutenbergAStarWeDoWeDoWhoRobsCavefishOfTheirSightWhoRigsEveryOscarNightWeDoWeDo"
    );
  });
  test(`should not mutate input data when sentence string is passed into sentenceToCamelCase() with true boolean`, () => {
    const input = "hey apple";
    const output = sentenceToCamelCase(input, true);
    expect(output).not.toBe(input);
  });
  test(`should not mutate input data when sentence string is passed into sentenceToCamelCase() with false boolean`, () => {
    const input = "Hey apple";
    const output = sentenceToCamelCase(input, false);
    expect(output).not.toBe(input);
  });
  test(`BONUS: should not mutate input data when camelCase string is passed into sentenceToCamelCase()`, () => {
    const input = "heyApple";
    const output = sentenceToCamelCase(input);
    expect(output).not.toBe(input);
  });
  test(`BONUS: should return "Hello world." string when sentenceToCamelCase() is passed the lowerCamelCase "helloWorld" string" `, () => {
    expect(sentenceToCamelCase("helloWorld")).toBe("Hello world.");
  });
  test(`BONUS: should return "Hello world." string when sentenceToCamelCase() is passed the UpperCamelCase "HelloWorld`, () => {
    expect(sentenceToCamelCase("HelloWorld")).toBe("Hello world.");
  });
  test(`BONUS: should return a larger sentence string when passed a larger lowerCamelCase string`, () => {
    expect(sentenceToCamelCase("thisBiggerStrangeSentence")).toBe(
      "This bigger strange sentence."
    );
  });
  test(`BONUS: should return a larger sentence string when passed a larger UpperCamelCase string`, () => {
    expect(sentenceToCamelCase("ThisBiggerStrangeSentence")).toBe(
      "This bigger strange sentence."
    );
  });
  test(`BONUS: should return a very long sentence string when passed a very long lowerCamelCase string`, () => {
    expect(
      sentenceToCamelCase(
        "whoControlsTheBritishCrownWhoKeepsTheMetricSystemDownWeDoWeDoWhoKeepsAtlantisOffTheMapsWhoKeepsTheMartiansUnderWrapsWeDoWeDoWhoHoldsBackTheElectricCarWhoMakesSteveGutenbergAStarWeDoWeDoWhoRobsCavefishOfTheirSightWhoRigsEveryOscarNightWeDoWeDo"
      )
    ).toBe(
      "Who controls the british crown who keeps the metric system down we do we do who keeps atlantis off the maps who keeps the martians under wraps we do we do who holds back the electric car who makes steve gutenberg a star we do we do who robs cavefish of their sight who rigs every oscar night we do we do."
    );
  });
  test(`BONUS: should return a very long sentence string when passed a very long UpperCamelCase string`, () => {
    expect(
      sentenceToCamelCase(
        "WhoControlsTheBritishCrownWhoKeepsTheMetricSystemDownWeDoWeDoWhoKeepsAtlantisOffTheMapsWhoKeepsTheMartiansUnderWrapsWeDoWeDoWhoHoldsBackTheElectricCarWhoMakesSteveGutenbergAStarWeDoWeDoWhoRobsCavefishOfTheirSightWhoRigsEveryOscarNightWeDoWeDo"
      )
    ).toBe(
      "Who controls the british crown who keeps the metric system down we do we do who keeps atlantis off the maps who keeps the martians under wraps we do we do who holds back the electric car who makes steve gutenberg a star we do we do who robs cavefish of their sight who rigs every oscar night we do we do."
    );
  });
});
