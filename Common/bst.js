function bst(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == key){
      return mid;
    }
    if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1; // Element not found
}

console.log(bst([1,3,5,6,9,14,29,57,89],29));