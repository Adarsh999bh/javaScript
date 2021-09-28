const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const arr=["zero","one","two","three","four","five","six","seven","eight","nine"]
rl.question("enter the number  ",(number)=>{
    console.log(arr[number])
    rl.close()
})