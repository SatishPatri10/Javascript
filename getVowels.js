// Write the code to find the vowels

function getVowels(str) {
  let count = 0;
  const vowels = ["a", "i", "e", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(getVowels("aeiouaa"));
