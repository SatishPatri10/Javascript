function getAlternatives(arr) {
  let res = [];
  for (i = 0; i < arr.length; i += 2) {
    res.push(arr[i]);
  }
  return res;
}

const arr = [10, 20, 30, 40, 50];
const res = getAlternatives(arr);
console.log("Response is: ", res.join(" "));
