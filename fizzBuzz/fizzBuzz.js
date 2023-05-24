function fizzBuzz(num) {
  let total = 0;
  for (let i = 0; i < num; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      total += i;
    }
  }
  return total;
}

module.exports = fizzBuzz;
