function customBubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      let temp = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
const result = customBubbleSort([4, -1, 34, 0.9, -9, 103]);

console.log(result);
