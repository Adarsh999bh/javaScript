const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the year ", (year) => {
  let leap = false;
  // condition to check leap year
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) leap = true;
      else leap = false;
    } else leap = true;
  } else leap = false;

  if (leap == true) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
  rl.close();
});
