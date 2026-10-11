function perfectNumber(num) {
  let sum = 0;
  for (i = 0; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  return sum == num ? true : false;
}

console.log(perfectNumber(6));

console.log(perfectNumber(27));