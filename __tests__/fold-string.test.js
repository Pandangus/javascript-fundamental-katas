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
    test("should fold odd charactered words within a string containing a single space", () => {
        expect(foldString("gambled racecar")).toBe("magbdel carerac");
    })
    test("should fold odd and even charactered words within a string containing a single space", () => {
        expect(foldString("spaceman astronaught")).toBe("capsname ortsanthgua");
    })
    test("should fold odd and even charactered words within a string containing a many words and multiple spaces", () => {
        expect(foldString("up the airy mountains down the rushy glen")).toBe("up the iayr nuomtsnia odnw the ursyh lgne");
    })
    test("should not mutate original input", () => {
        input = "pineapple"
        output = foldString(input)
        expect(input).not.toBe(output);
    })
});