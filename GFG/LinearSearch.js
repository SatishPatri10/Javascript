function linearSearch(arr, x) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

const arr = [10, 8, 30, 4, 5];
const x= 5
const res = linearSearch(arr, x);
console.log(res);
