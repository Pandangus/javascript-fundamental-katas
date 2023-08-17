const morseCode = require("../morse-code/morse-code")

describe("morseCode", () => {
    test("should decode a single character from morse code", () => {
        expect(morseCode(".-")).toBe("A");
    })
    test("should decode a multiple characters from morse code", () => {
        expect(morseCode(".... ..")).toBe("HI");
    })
})