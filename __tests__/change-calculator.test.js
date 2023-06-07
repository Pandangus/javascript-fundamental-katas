const changeCalculator = require("../change-calculator/change-calculator");

describe("changeCalculator", () => {
  test(`should return { "1": 1 } when 1 is passed to changeCalculator()`, () => {
    expect(changeCalculator(1)).toEqual({ 1: 1 });
  });
  test(`should return { "2": 1 } when 2 is passed to changeCalculator()`, () => {
    expect(changeCalculator(2)).toEqual({ 2: 1 });
  });
  test(`should return { "5": 1, "2": 1 } when 7 is passed to changeCalculator()`, () => {
    expect(changeCalculator(7)).toEqual({ 5: 1, 2: 1 });
  });
  test(`should return { "10": 1, "2": 1, "1": 1 } when 13 is passed to changeCalculator()`, () => {
    expect(changeCalculator(13)).toEqual({ 10: 1, 2: 1, 1: 1 });
  });
  test(`should return { "50": 1, "20": 1, "10": 1, "5": 1, "2": 1, "1": 1, } when 88 is passed to changeCalculator()`, () => {
    expect(changeCalculator(88)).toEqual({
      50: 1,
      20: 1,
      10: 1,
      5: 1,
      2: 1,
      1: 1,
    });
  });
  test(`should return { "100": 1, "50": 1, "20": 1, "5": 1, "1": 1 } when 176 is passed to changeCalculator()`, () => {
    expect(changeCalculator(176)).toEqual({ 100: 1, 50: 1, 20: 1, 5: 1, 1: 1 });
  });
  test(`should return { "200": 688, "50": 1, "20": 1, "2": 1 } when 137672 is passed to changeCalculator()`, () => {
    expect(changeCalculator(137672)).toEqual({ 200: 688, 50: 1, 20: 1, 2: 1 });
  });
  test(`should not mutate input variable`, () => {
    const inputVariable = 333;
    const output = changeCalculator(333);
    expect(output).not.toBe(inputVariable);
  });
});
