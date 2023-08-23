// Please do not change the name of this function
function rotateArray(arr, num) {
  rotatedNums = arr.splice(-num % arr.length);
  return rotatedNums.concat(arr);
}

module.exports = rotateArray;
