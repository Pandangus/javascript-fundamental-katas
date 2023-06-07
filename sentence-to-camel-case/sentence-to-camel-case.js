function sentenceToCamelCase(sentence, boolean) {
  if (boolean) {
    const splitSentenceArr = sentence.split(" ");
    const upperCaseWordsArr = [];


    splitSentenceArr.forEach((word) => {
      const firstLetter = word.slice(0, 1)
      const upperCaseFirstLetter = firstLetter.toUpperCase();
      const restOfWord = word.slice(1)
      upperCaseWordsArr.push(upperCaseFirstLetter + restOfWord);
    });

    return upperCaseWordsArr;
  } else {

  }
}

module.exports = sentenceToCamelCase;
