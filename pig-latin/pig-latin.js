// Please do not change the name of this function
function pigLatin(str) {
  latinArr = [];
  splitStr = str.split(" ");
  for (index in splitStr) {
    firstCharacter = splitStr[index][0];
    if (isVowel(firstCharacter)) {
      latinArr.push(`${splitStr[index]}way`);
    } else {
      word = splitStr[index];
      count = 0;
      for (index in word) {
        char = word[index];
        if (isVowel(char)) {
          splitWord = word.split('')
          consonants = splitWord.splice(0, count)
          latinArr.push(`${splitWord.join('')}${consonants.join('')}ay`)
          break
        } else {
          count += 1;
          if(count == word.length){
            latinArr.push(`${word}ay`)
            break
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

/*
define a new array
split the sentance on the spaces
check if first letter of each word begins with a vowel
if yes: 
  add 'way' to the end of word
  push word to new array
if no: 
  iterate through the characters until you find a vowel
    then: 
      splice the beginning of the word
      add it to end of word
      add 'ay' to the end of word
      push word to new array
join new array

To translate to Pig Latin you take the first 
consonant (or consecutive consonants) of each ]
word, move it to the end and also append 'ay'. 
If the word starts with a vowel, just append 
'way' at the end.
*/
