// Please do not change the name of this function
function changeCalculator(changeNum) {
  calculatedChangeObj = {};
  denominationArr = [200, 100, 50, 20, 10, 5, 2, 1];
  let ourChangeNum = changeNum;
  denominationArr.forEach((denomination) => {
    const changeRemainder = ourChangeNum % denomination;
    const howManyDenominations =
      (ourChangeNum - changeRemainder) / denomination;
    if (howManyDenominations > 0) {
      calculatedChangeObj[denomination] = howManyDenominations;
      ourChangeNum = changeRemainder;
    }
  });
  return calculatedChangeObj;
}
module.exports = changeCalculator;
