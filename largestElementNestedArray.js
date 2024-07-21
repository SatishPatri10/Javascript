// Write a JavaScript program to find the largest element in a nested array. 

function findLargestElement(nestedArray) {
    let largest = Number.MIN_SAFE_INTEGER;

    function findLargest(arr) {
        for (let element of arr) {
            if (Array.isArray(element)) {
                findLargest(element); // Recurse into nested arrays
            } else {
                largest = Math.max(largest, element);
            }
        }
    }

    findLargest(nestedArray);
    return largest;
}

console.log(findLargestElement([
    34, 65, 67,
    [
        43, 76, 87, 23, 56, 7,
        [
            54, 7, 87, 23, 79, 994, 2
        ],
        54
    ], 54, 4, 2
]));
