const tillAddition = require("../till-addition/till-addition");

describe("tillAddition", () => {
  test(`should return "£0.03 when { "1p": 1, "2p": 1 } is passed to tillAddition()`, () => {
    expect(tillAddition({ "1p": 1, "2p": 1 })).toBe("£0.03");
  });
  test(`should return "£0.38 when { "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 } is passed to tillAddition`, () => {
    expect(
      tillAddition({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 })
    ).toBe("£0.38");
  });
  test(`should return "£1.85" when { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 } is passed to tillAddition`, () => {
    expect(
      tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 })
    ).toBe("£1.85");
  });
  test(`should return "£2.00" when {"£1": 2 } is passed to tillAddition`, () => {
    expect(tillAddition({ "£1": 2 })).toBe("£2.00");
  });
  test(`should return "£88.88" when one of each denomination is passed to tillAddition`, () => {
    expect(
      tillAddition({
        "1p": 1,
        "2p": 1,
        "5p": 1,
        "10p": 1,
        "20p": 1,
        "50p": 1,
        "£1": 1,
        "£2": 1,
        "£5": 1,
        "£10": 1,
        "£20": 1,
        "£50": 1,
      })
    ).toBe("£88.88");
  });
  test(`should return "£177.76" when two of each denomination is passed to tillAddition`, () => {
    expect(
      tillAddition({
        "1p": 2,
        "2p": 2,
        "5p": 2,
        "10p": 2,
        "20p": 2,
        "50p": 2,
        "£1": 2,
        "£2": 2,
        "£5": 2,
        "£10": 2,
        "£20": 2,
        "£50": 2,
      })
    ).toBe("£177.76");
  });
  test(`should return "£200.00" when { "£50" : 4 } is passed to tillAddition()`, () => {
    expect(tillAddition({ "£50": 4 })).toBe("£200.00");
  });
  test(`should return "£1376.72" when { "1p": 11, "2p": 18, "5p": 23, "10p": 2, "20p": 77, "50p": 89, "£1": 3, "£2": 6, "£5": 10, "£10": 32, "£20": 29, "£50": 7 } is passed to tillAddition()`, () => {
    expect(
      tillAddition({
        "1p": 11,
        "2p": 18,
        "5p": 23,
        "10p": 2,
        "20p": 77,
        "50p": 89,
        "£1": 3,
        "£2": 6,
        "£5": 10,
        "£10": 32,
        "£20": 29,
        "£50": 7,
      })
    ).toBe("£200.00");
  });
});
