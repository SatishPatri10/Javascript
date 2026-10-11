// Write a JavaScript program to find the maximum number in an array.

function maxNumArray(arr) {
  return Math.max.apply(null, arr);
}

console.log(maxNumArray([1, 6, 8, 5, 7, 8, 8]));
