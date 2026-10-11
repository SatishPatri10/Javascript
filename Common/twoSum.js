function twoSum(arr, x) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == x) {
        console.log(arr[i], arr[j], arr[i] + arr[j]);
        return true; // return true if pair found, else false
      }
    }
  }
  return false;
}
twoSum([0, -1, 2, -3, 1], -2);

//optimzed solution
function twoSum(arr, x) {
  const seen = {}; // Hash map to store elements

  for (let i = 0; i < arr.length; i++) {
    const complement = x - arr[i]; // Calculate the required complement

    if (seen[complement] !== undefined) {
      console.log(arr[i], complement, arr[i] + complement);
      return true; // Pair found
    }

    seen[arr[i]] = i; // Store the current element in the hash map
  }

  return false; // No pair found
}

twoSum([0, -1, 2, -3, 1], -2);