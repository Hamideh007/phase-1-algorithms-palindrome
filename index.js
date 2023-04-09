function isPalindrome(word) {
  // Convert the word to lowercase to make the function case-insensitive
  word = word.toLowerCase();

  // Use two pointers to compare characters from the beginning and end of the word
  let left = 0;
  let right = word.length - 1;

  // Keep moving the pointers towards each other until they meet in the middle
  while (left < right) {
    // If the characters don't match, the word is not a palindrome
    if (word[left] !== word[right]) {
      return false;
    }

    // Move the pointers towards each other
    left++;
    right--;
  }

  // If we've reached the middle of the word without finding any mismatches, the word is a palindrome
  return true;
}

/* 
  Pseudocode:
  1. Convert the word to lowercase to make it case-insensitive.
  2. Use two pointers to compare characters from the beginning and end of the word.
  3. Keep moving the pointers towards each other until they meet in the middle.
  4. If any of the characters don't match, the word is not a palindrome.
  5. If all characters match, the word is a palindrome.
*/

/*
  Explanation:
  The isPalindrome function checks if the given word is a palindrome or not.
  A palindrome is a word that reads the same backwards as forwards, e.g. "racecar".
  To check if a word is a palindrome, we use two pointers to compare characters
  from the beginning and end of the word. If any of the characters don't match,
  the word is not a palindrome. If all characters match, the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("A man a plan a canal Panama"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Not a palindrome"));
}

module.exports = isPalindrome;
