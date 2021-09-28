let keyString = 'a string';
let keyObj = {}
let keyFunc = function(){}

let myMap = new Map()
myMap.set(keyString,"Value associated with 'a string'")
myMap.set(keyObj,'value associated with keyObj')
myMap.set(keyFunc,'value associated with keyFunc ')

let size = myMap.size;
console.log(size);
let valstr = myMap.get(keyString);
console.log(valstr);
let isKeyExist = myMap.has('a string');
console.log(isKeyExist);

for(let [key,value] of myMap) console.log("Loop 1:"+key+' = '+ value);
for(let [key,value] of myMap.entries()) console.log("Loop 2:"+key+' = '+ value);
for(let key of myMap.keys()) console.log("Loop 3:"+key);
for(let value of myMap.values()) console.log("Loop 4:"+ value);


let first = new Map([[1,'one'], [2,'two'], [3,'three']])
let second = new Map([[1,'uno'], [2,'dos']])
let merged = new Map([...first,...second, [1,'eins']])
console.log(merged);
let hasKey = merged.has(1);
//let delKey = merged.delete(1);
if(merged.has(1))console.log(merged.get(1));
console.log("pos2:"+merged.get(2));
//merged.clear();
console.log(merged.size); 
