// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).


//Approach 1

// function reverse(str) {
//   let rev_str = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev_str += str[i];
//   }
//   return rev_str;
// }

// function is_palindrome(str) {
//   reverse_str = reverse(str);

//   if (reverse_str === str) {
//     console.log("passed string is palindrome ");
//   } else {
//     console.log("passed string is not palindrome");
//   }
// }


// let test = "hellolleh";
// console.log(is_palindrome(test));


//Approach 2

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("hellolleh"));
