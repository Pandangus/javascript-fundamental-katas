const foldString = require("../fold-strings/fold-string.js");

describe("foldString", () => {
    test("should return a single character string unchanged", () => {
        expect(foldString("z")).toBe("z");
    })
    test("should return a two character string unchanged", () => {
        expect(foldString("hu")).toBe("hu");
    })
    test("should return a three character string unchanged", () => {
        expect(foldString("pod")).toBe("pod");
    })
    test("should fold a one word string with an even number of characters", () => {
        expect(foldString("apples")).toBe("ppasel");
    })
    test("should fold a one word string with an odd number of characters", () => {
        expect(foldString("apple")).toBe("papel");
    })
    test("should fold even charactered words within a string containing a single space", () => {
        expect(foldString("banana orange")).toBe("nabana aroegn");
    })
});