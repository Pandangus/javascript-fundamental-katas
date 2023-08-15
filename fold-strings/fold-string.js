// Please do not change the name of this function
function foldString(str) {
  if (str.length == 1) return str;
  splitStr = ("" + str).split(" ");
  foldedStrs = [];
  for (index in splitStr) {
    if (splitStr[index].length % 2 === 0)
      foldedStrs.push(
        `${splitStr[index]
          .slice(0, Math.floor(splitStr[index].length / 2))
          .split("")
          .reverse()
          .join("")}${splitStr[index]
          .slice(-Math.floor(splitStr[index].length / 2))
          .split("")
          .reverse()
          .join("")}`
      );
    else
      foldedStrs.push(
        `${splitStr[index]
          .slice(0, Math.floor(splitStr[index].length / 2))
          .split("")
          .reverse()
          .join("")}${splitStr[index].slice(
          Math.floor(splitStr[index].length / 2),
          Math.ceil(splitStr[index].length / 2)
        )}${splitStr[index]
          .slice(-Math.floor(splitStr[index].length / 2))
          .split("")
          .reverse()
          .join("")}`
      );
  }
  return foldedStrs.join(' ');
}

module.exports = foldString;
