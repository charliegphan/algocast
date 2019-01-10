// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let midpoint;
//   let endpoint = str.length - 1;
//   str.length % 2 === 0 ? midpoint = str.length / 2 : midpoint = Math.floor(str.length / 2);

//   for (let i = 0; i < midpoint; i++) {
//     if (str[i] !== str[endpoint]) {
//       return false;
//     }

//     endpoint--;
//   }

//   return true;
// }

function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

module.exports = palindrome;
