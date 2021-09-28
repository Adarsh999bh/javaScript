const low = parseInt(process.argv[2]);
const high = parseInt(process.argv[3]);

const isPrime = (num) => {
  let count = 2;
  while (count < num / 2 + 1) {
    if (num % count !== 0) {
      count++;
      continue;
    }
    return false;
  }
  return true;
};
const primeBetween = (a, b) => {
  let count = 0;
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

primeBetween(low, high);
