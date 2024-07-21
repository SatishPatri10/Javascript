// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function evenArray(arry) {
  return arry.filter((arr) => arr % 2 === 0);
}

console.log(evenArray([1, 2, 3, 4, 6, 7, 9]));
