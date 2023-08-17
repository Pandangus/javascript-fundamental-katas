const morseCode = require("../morse-code/morse-code");

describe("morseCode", () => {
  test("should decode a single character from morse code", () => {
    expect(morseCode(".-")).toBe("A");
  });
  test("should decode multiple characters from morse code", () => {
    expect(morseCode(".... ..")).toBe("HI");
  });
  test("should decode multiple words from morse code", () => {
    expect(morseCode("-- -.--   - --- .--.   ..--- -----")).toBe("MY TOP 20");
  });
  });
  test("should decode punctuation", () => {
    expect(morseCode("-.-- --- ..- .---. .-. .   --. --- --- -.. -.-.--")).toBe(
      "YOU'RE GOOD!"
    );
  });
  test("should encode single character into morse code", () => {
    expect(morseCode("X")).toBe("-..-");
  });
  test("should encode multiple characters into morse code", () => {
    expect(morseCode("BYE")).toBe("-... -.-- .");
  });
  test("should encode multiple words into morse code", () => {
    expect(morseCode("SHE SELLS SEA SHELLS")).toBe(
      "... .... .   ... . .-.. .-.. ...   ... . .-   ... .... . .-.. .-.. ..."
    );
  });
  test("should encode punctuation into morse code", () => {
    expect(morseCode("HOW'S THAT!?")).toBe(
      ".... --- .-- .---. ...   - .... .- - -.-.-- ..--.."
    );
  });
  test("should encode test regardless of character case", () => {
    expect(
      morseCode(
        "19000 BARS an HoUr they'RE Shelling! 760,000 THEY'VE done so FAR!!"
      )
    ).toBe(
      ".---- ----. ----- ----- -----   -... .- .-. ...   .- -.   .... --- ..- .-.   - .... . -.-- .---. .-. .   ... .... . .-.. .-.. .. -. --. -.-.--   --... -.... ----- --..-- ----- ----- -----   - .... . -.-- .---. ...- .   -.. --- -. .   ... ---   ..-. .- .-. -.-.-- -.-.--"
    );
  });
  test("should not mutate input", () => {
    input = "9,000,000 Bicycles";
    output = morseCode(input);
    expect(output).not.toBe(input);
  });
});
