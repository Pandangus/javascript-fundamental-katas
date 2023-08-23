// Please do not change the name of this function
function rotateArray(arr, num) {
  arrCopy = [...arr]
  rotatedNums = arrCopy.splice(-num % arr.length);
  return rotatedNums.concat(arrCopy);
}

module.exports = rotateArray;
