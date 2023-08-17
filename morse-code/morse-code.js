// Please do not change the name of this function
function morseCode(str) {
  lookUp = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".---.",
    "!": "-.-.--",
    "/": "-..-.",
    "-": "-....-",
    "(": "-.--.-",
    ")": "-.--.",
    '"': ".-..-.",
    ":": "---...",
    ";": "-.-.-.",
    "{": "-.--.",
    "}": "-.--.-",
    "=": "-...-",
    _: "..--.-",
    $: "...-..-",
    "@": ".--.-.",
    "&": ".-...",
  };
  if (str[0] == "." || str[0] == "-") {
    if (/\s\s\s/.test(str)) {
      return str
        .split("   ")
        .map((word) => morseToText(word))
        .join(" ");
    } else {
      return morseToText(str);
    }
  } else {
    if (/\s/.test(str)) {
      return str
        .split(" ")
        .map((word) => textToMorse(word))
        .join("   ");
    } else {
      return textToMorse(str);
    }
  }
}
module.exports = morseCode;

function morseToText(morse) {
  return morse
    .split(" ")
    .map((code) => Object.keys(lookUp).find((key) => lookUp[key] === code))
    .join("");
}

function textToMorse(text) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => lookUp[char])
    .join(" ");
}

console.log(morseCode("low 5"))