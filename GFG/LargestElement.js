function largestElement(arr) {
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const arr = [10, 230, 20, 44];
const res = largestElement(arr);
console.log(res);
