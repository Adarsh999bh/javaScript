console.log("harmonic number")
let sum = 1
let x = 2
while(x<=process.argv[2]){
    sum=sum+(1/x)
    x=x+1
}
console.log(sum)