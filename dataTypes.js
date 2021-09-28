let origDogs = ["Bulldog","Beagle","Labrador"];
let cats = new Array("chandu","bruno");
let birds = new Array("Falcons","Ducks","crow");

//array copy elements
let slicedDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(1,2);console.log(dogs);

//stack func
let pushDog = dogs.push("Goldy");
let popDog = dogs.pop();
dogs[dogs.length] = "poodle";

//add and remove from first
let addFirst = dogs.unshift("golden retriever");
let shiftDog = dogs.shift();

//atomatic add and remove elements
dogs.splice(2,1,"pug","Boxer");

//array func - concat,slice and sort
let animals = dogs.concat(cats,birds);
let newAnimals = [...dogs,...cats,...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray(first,second){console.log("Scan: "+first+" "+second);}
scanArray(animals);

