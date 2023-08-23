const herdTheBabies = require("../herd-the-babies/herd-the-babies");

describe("herdTheBabies", () => {
  test(`should sort simple case of one single adult letter and one single baby letter alphabetically with uppercase first`, () => {
    expect(herdTheBabies("aA")).toBe("Aa");
  });
  test(`should two single adult letters along with one single baby letter alphabetically with uppercase first`, () => {
    expect(herdTheBabies("aBA")).toBe("AaB");
  });
  test(`should three single adult letters along with multiple baby letters for adult letters alphabetically with uppercase first`, () => {
    expect(herdTheBabies("bbaBccAC")).toBe("AaBbbCcc");
  });
  test(`should repeated adult letters along with multiple baby letters alphabetically with uppercase first`, () => {
    expect(herdTheBabies("AaBbbBaAbAbbAbB")).toBe("AAAAaaBBBbbbbbb");
  });
  test("should not mutate original input", () => {
    const originalString = "JmBMjb";
    herdTheBabies(originalString);
    expect(originalString).toEqual("JmBMjb");
  });
});
