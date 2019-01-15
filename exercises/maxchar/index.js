// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charFreq = {};
  for (let i = 0; i < str.length; i++) {
    if (charFreq[str[i]]) {
      charFreq[str[i]]++
    } else {
      charFreq[str[i]] = 1;
    }
  }
  
  let max;
  for (let key in charFreq) {
    if (charFreq[key] > max) {
      max = charFreq[key];
    }
  }
  
  return max;
}

module.exports = maxChar;
