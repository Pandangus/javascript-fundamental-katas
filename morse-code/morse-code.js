// Please do not change the name of this function
function morseCode(str) {
  const lookUp = {
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
        .map((word) => morseToText(word, lookUp))
        .join(" ");
    } else {
      return morseToText(str, lookUp);
    }
  } else {
    if (/\s/.test(str)) {
      return str
        .split(" ")
        .map((word) => textToMorse(word, lookUp))
        .join("   ");
    } else {
      return textToMorse(str, lookUp);
    }
  }
}

function morseToText(morse, lookUpObject) {
  return morse
    .split(" ")
    .map((code) => Object.keys(lookUpObject).find((key) => lookUpObject[key] === code))
    .join("");
}

function textToMorse(text, lookUpObject) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => lookUpObject[char])
    .join(" ");
}

module.exports = morseCode;
