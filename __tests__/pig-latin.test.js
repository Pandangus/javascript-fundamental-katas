const pigLatin = require('../pig-latin/pig-latin.js')

describe("pigLatin", () => {
    test("should add 'way' as suffix to single vowel passed in", () => {
        expect(pigLatin("a")).toBe("away");
    })
});