const morseCode = require("../morse-code/morse-code")

describe("morseCode", () => {
    test("should decode a single character from morse code", () => {
        expect(morseCode(".-")).toBe("A");
    })
})