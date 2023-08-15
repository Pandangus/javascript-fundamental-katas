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
      consonants = "";
      count = 0;
      for (index in word) {
        ////////////////// you're trying to make it work when there are no vowels present:
        // at the moment you're kinda triggering it when it meets a vowel, but you're
        // testing it with strings with no vowels in them, so it can never detect one
        char = word[index];
        if (isVowel(char)) {
          console.log("hello");
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

console.log(!isVowel("x"));

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
