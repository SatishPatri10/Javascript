function twoSum(arr, x) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == x) {
        console.log(arr[i] + arr[j]);
        return true; // return true if pair found, else false
      }
    }
  }
  return false;
}
twoSum([0, -1, 2, -3, 1], -2);
