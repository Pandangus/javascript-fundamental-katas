// Please do not change the name of this function
function pigLatin(str) {
  const latinArr = [];
  const splitStr = str.split(" ");
  for (index in splitStr) {
    const firstCharacter = splitStr[index][0];
    if (isVowel(firstCharacter)) {
      latinArr.push(`${splitStr[index]}way`);
    } else {
      const word = splitStr[index];
      let count = 0;
      for (index in word) {
        const char = word[index];
        if (isVowel(char)) {
          const splitWord = word.split('')
          const consonants = splitWord.splice(0, count)
          latinArr.push(`${splitWord.join('')}${consonants.join('')}ay`)
          break
        } else {
          count += 1;
          if(count == word.length){
            latinArr.push(`${word}ay`)
          }
        }
      }
    }
  }
  return latinArr.join(" ");
}

function isVowel(inputStr) {
  loweredInput = inputStr.toLowerCase();
  if (
    loweredInput == "a" ||
    loweredInput == "e" ||
    loweredInput == "i" ||
    loweredInput == "o" ||
    loweredInput == "u"
  )
    return true;
  return false;
}

module.exports = pigLatin;