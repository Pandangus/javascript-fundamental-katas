// Please do not change the name of this function
function rotateArray(arr, num) {
  const arrCopy = [...arr];
  const rotatedNums = arrCopy.splice(-num % arr.length);
  return rotatedNums.concat(arrCopy);
}

module.exports = rotateArray;
