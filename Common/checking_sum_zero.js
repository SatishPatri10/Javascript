//[-5,-4,-3,-2,0,2,4,6,8]

function getSumPairZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
}

const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log("Result:" ,result);

// Here the time complexity is O(n^2)

// Optimized version

function getSumPairZeroOptimized(array) {
  const numMap = {};
  for(let i = 0; i < array.length; i++){
    const complement = -array[i];
    if(numMap[complement] !== undefined){
      return [array[i], complement];
    }
    numMap[array[i]] = i;
  }
  return null;
}

const resultOptimized = getSumPairZeroOptimized([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log("Result Optimized", resultOptimized);

// The current code is designed to stop as soon as it finds the first pair of numbers that sum to zero. 
// If you'd like to find all pairs that sum to zero, the code will need to be modified to continue checking all elements and collect all such pairs.

function getAllSumPairsZero(array) {
  const pairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        pairs.push([array[i], array[j]]);
      }
    }
  }
  return pairs;
}

const results = getAllSumPairsZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log("All Sum Result", results);

// The time complexity of the code is O(n^2)

// A more efficient approach would be to use a hash table (or object in JavaScript) to store the numbers we've seen so far and their indices. When we encounter a number that we've seen before, we can find the difference and check if it's zero. If it is, we've found a pair that sums to zero.

function getAllSumPairsZero(array) {
  const pairs = [];
  const numMap = {};

  for (const num of array) {
    const complement = -num;
    if (numMap[complement]) {
      pairs.push([num, complement]);
    }
    numMap[num] = true;
  }

  return pairs;
}

const resultOfAllSumPairsZero = getAllSumPairsZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log("All Sum Result Optimized", resultOfAllSumPairsZero);
