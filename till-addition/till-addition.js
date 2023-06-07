// Please do not change the name of this function
function tillAddition(cash) {
  let total = 0;
  for(const denomination in cash){
    if(denomination.endsWith("p")){
      total += parseInt(denomination) * cash[denomination];
    } else {
      total += parseInt(denomination.slice(1)) * cash[denomination] * 100;
    }
  }
  return `£${(total/100).toFixed(2)}`;
};

module.exports = tillAddition;
