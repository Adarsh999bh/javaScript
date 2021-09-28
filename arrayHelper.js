let empArray = [1,2,3,4,5];
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage+= dailyWage;
}
empArray.forEach(sum);
console.log(totalEmpWage);

function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log(empArray.reduce(totalWages,0));

let dailyCntr = 0;
function mapDatWithWage(dailyWage){
    dailyCntr++;

}

