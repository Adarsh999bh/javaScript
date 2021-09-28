const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const arr=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
rl.question("enter the number  ",(number)=>{
    console.log(arr[number])
    rl.close()
})