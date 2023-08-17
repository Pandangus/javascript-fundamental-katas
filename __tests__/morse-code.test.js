const morseCode = require("../morse-code/morse-code")

describe("morseCode", () => {
    test("should decode a single character from morse code", () => {
        expect(morseCode(".-")).toBe("A");
    })
    test("should decode multiple characters from morse code", () => {
        expect(morseCode(".... ..")).toBe("HI");
    })
    test("should decode multiple words from morse code", () => {
        expect(morseCode("-. --- -... --- -.. -.--   . ...- . .-.   --. --- . ...   .. -.   .- -. -..   -. --- -... --- -.. -.--   . ...- . .-.   -.-. --- -- . ...   --- ..- -")).toBe("NOBODY EVER GOES IN AND NOBODY EVER COMES OUT");
    })
})