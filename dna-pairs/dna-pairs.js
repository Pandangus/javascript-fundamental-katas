// Please do not change the name of this function
function dnaPairs(dna) {
  if(dna === ""){
    return [[]];
  }
  const newArr = [];
  for(let i = 0; i < dna.length; i++){
    switch(dna[i]){
      case "A":
        newArr.push(["A", "T"]);
        break;

      case "T":
        newArr.push(["T", "A"]);
        break;

      case "G":
         newArr.push(["G", "C"]);
         break;

      case "C":
         newArr.push(["C", "G"]);
         break;
      default:
        newArr.push([`${dna[i]} has no matches`]);
    }
  }
  return newArr;
}

module.exports = dnaPairs;
