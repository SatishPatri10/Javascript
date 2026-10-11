// Write a JavaScript program to reverse a given string.

function reverseStr(str) {
  const abc = str.split("").reverse().join("");
  return abc;
}
console.log(reverseStr("india"));
