function sentenceToCamelCase(sentence, boolean) {
  if (/\s/g.test(sentence)) {
    const upperCaseWordsArr = [];
    sentence.split(" ").forEach((word, index) => {
      if (!boolean && index === 0)
        return upperCaseWordsArr.push(
          word.slice(0, 1).toLowerCase() + word.slice(1)
        );
      upperCaseWordsArr.push(word.slice(0, 1).toUpperCase() + word.slice(1));
    });
    return upperCaseWordsArr.join("");
  }
  const normalSentenceArr = [];
  sentence.split("").forEach((character, index) => {
    if (index === 0) return normalSentenceArr.push(character.toUpperCase());
    if (/[A-Z]/.test(character))
      return normalSentenceArr.push(` ${character.toLowerCase()}`);
    normalSentenceArr.push(character);
  });
  return `${normalSentenceArr.join("")}.`;
}

module.exports = sentenceToCamelCase;
