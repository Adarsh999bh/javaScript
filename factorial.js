let fact = 1;
let i = 1;
let num = parseInt(process.argv[2]);
while (i <= num) {
  fact = fact * i;
  i++; //increment i by 1
}
console.log("Factorial of " + num + " is: " + fact);
