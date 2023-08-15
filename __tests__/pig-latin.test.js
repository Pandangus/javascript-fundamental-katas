const pigLatin = require('../pig-latin/pig-latin.js')

describe("pigLatin", () => {
    test("should add 'way' as suffix to single vowel", () => {
        expect(pigLatin("a")).toBe("away");
    })
    test("should add 'way' as suffix to a word beginning with a vowel", () => {
        expect(pigLatin("apple")).toBe("appleway");
    })
    test("should add 'ay' as suffix to a single consonant", () => {
        expect(pigLatin("j")).toBe("jay");
    })
});