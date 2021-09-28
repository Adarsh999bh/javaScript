function validatePalindrome(string) {
  // get the total length of the words
  const len = string.length;
  let flag = true;
  // Use for loop to divide the words into 2 half
  for (let i = 0; i < len / 2; i++) {
    // validate the first and last characters are same
    if (string[i] !== string[len - 1 - i]) {
      console.log(string+" is not a palindrome");
      flag = false;
    }
  }
  if (flag) console.log(string+" is a palindrome");
}

validatePalindrome(process.argv[2]);
