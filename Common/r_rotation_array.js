// Implement a function that returns an updated array with r right rotations on an array of integers a .

function rotation(arr, rotations) {
  if (rotations == 0) return arr;
  for (let i = 0; i < rotations; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];

console.log(rotation(arr, 2)); // Output: [4, 5, 1, 2, 3]
