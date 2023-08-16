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
    test("should add 'ay' as suffix to a series of consonants", () => {
        expect(pigLatin("pygmy")).toBe("pygmyay");
    })
    test("should push a a single consonant to the end of the word and then add 'ay' as a suffix", () => {
        expect(pigLatin("wallet")).toBe("alletway")
    })
});