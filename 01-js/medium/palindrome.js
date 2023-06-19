/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var a=str.toLowerCase();
  var b=a.split(" ").join("");
  var s=b.replace(/[^a-zA-Z ]/g, "");
  for (var i=0;i<s.length/2;i++){
    if(s[i]==s[s.length-1-i]) continue;
    else return false;
  }
  return true;
}

module.exports = isPalindrome;
