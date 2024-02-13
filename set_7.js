// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayAverage = (arr) => {
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    n += arr[i];
  }
  return n / arr.length;
};

console.log("Average of array is:", arrayAverage(array));


// Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

isEven = (n) => {
  if (n % 2 == 0) {
    return "Even number";
  } else {
    return "Not Even number";
  }
};
console.log("This is:", isEven(5));




