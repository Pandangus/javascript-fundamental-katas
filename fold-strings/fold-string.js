// Please do not change the name of this function
function foldString(str) {
  if (str.length == 1) {
    return str;
  }
  if (str.length % 2 === 0)
    return `${str
      .slice(0, Math.floor(str.length / 2))
      .split("")
      .reverse()
      .join("")}${str
      .slice(-Math.floor(str.length / 2))
      .split("")
      .reverse()
      .join("")}`;
  else
    return `${str
      .slice(0, Math.floor(str.length / 2))
      .split("")
      .reverse()
      .join("")}${str.slice(
      Math.floor(str.length / 2),
      Math.ceil(str.length / 2)
    )}${str
      .slice(-Math.floor(str.length / 2))
      .split("")
      .reverse()
      .join("")}`;
}

module.exports = foldString;
