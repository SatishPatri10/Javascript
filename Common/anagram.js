function isAnagram(one, two){
  var a = one.toLowerCase();
  var b = two.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

console.log(isAnagram("listen", "silent")); // true

console.log(isAnagram("hello", "world")); // false