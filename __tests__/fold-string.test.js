const foldString = require("../fold-strings/fold-string.js");

describe("foldString", () => {
    test("should fold a one word string with an even number of characters ", () => {
        expect(foldString("apples")).toBe("ppasel");
    })
    test("should fold a one word string with an odd number of characters", () => {
        expect(foldString("apple")).toBe("papel");
    })
    
});