// Please do not change the name of this function
function herdTheBabies(str) {
  return str
    .split("")
    .sort((a, b) => a.localeCompare(b, "en-UK", { caseFirst: "upper" }))
    .join("");
}

module.exports = herdTheBabies;
