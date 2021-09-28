let number = parseInt(process.argv[2]);
for (let i = 2; i*i < number; i++) {
  while (number % i == 0) {
    console.log(i);
    number = number / i;
  }
}
if (number > 2) {
  console.log(number);
}
