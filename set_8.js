// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let square = array.map((n) => n ** 2);
console.log("Squared array is:", square);

let sum = array.reduce((m, n) => m + n);
console.log("Sum of array element is:", sum);

let average = (arr) => sum / arr.length;
console.log("Average of array is:", average(array));


// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

let arr = [1, 2, 3, -4, -5, -6, 7, 8, 9];

let newArr = arr.map((n) => n + 5);
console.log("New array with plus 5 :", newArr);


// Qs3. Create a new array whose elements are in uppercase of words present in the original array.

let letters = ["elements are in", "uppercase", "present in the New array"];

let capital = letters.map((n) => n.toUpperCase());
console.log("New array in uppercase :", capital);


// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

let Arr1 = [1, 2, 3, 4, 5];

function doubleAndReturnArgs(arr, ...args) {
  let doubledArgs = args.map((n) => n * 2);
  let mergeArr = [...arr, ...doubledArgs];
  return mergeArr;
}

console.log(
  "The function return's new array:",
  doubleAndReturnArgs(Arr1, 6, 7, 8, 9, 10)
);


// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

let Num = { 1: "one", 2: "two", 3: "three" };
let Word = { A: "arjun", B: "bhim", C: "Chadaky" };

function mergeObjects(obj1, obj2) {
  let newObj = { ...obj1, ...obj2 };
  return newObj;
}
console.log("New object with merger two objects:", mergeObjects(Num, Word));
