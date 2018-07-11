// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let myArray = ['A', 'R', 'R', 'A', 'Y'];
function printArray(arr) { console.log(arr) }

printArray(myArray);

// ==== Challenge 2: Create a counter function ====
const counter = () => { 
  let count = 0 
  count++; 
  return () => {return count++};
 };

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  const countObj = {};
  countObj.increment = () => {return ++count};
  countObj.decrement = () => {return --count};
  return countObj;
};


let newCounterFactory = counterFactory();
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement()); 
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement()); 