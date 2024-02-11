// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let array = [1, 2, 3, 4, 5, 6, 2, 3, 5, 4, 9, 7, 8, 9, 7];
let n = 7;

if (array.indexOf(n) !== -1) {
  for (item of array) {
    if (item === n) {
      array.splice(array.indexOf(n), 1);
    }
  }
  console.log("Item remove:", n);
  console.log("Updated array:", array);
} else {
  console.log("Item not found in array.");
}


// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

let num = 2355322233;
// convert into string
numStr = num.toString();
console.log(`Number have ${numStr.length} digits`);


// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let no = 287152;
noStr = no.toString();
let sum = 0;
for (let i = 0; i < noStr.length; i++) {
  sum += parseInt(noStr[i]);
}
console.log("Sum of digits in", no, "is", sum);


// Qs4. Print the factorial of a number n, [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1

let N = 7;
let into = 1;
for (let j = N; j >= 1; j--) {
  console.log(j);
  into *= j;
}
console.log("factorial of", N, "is", into);


// Qs5. Find the largest number in an array with only positive numbers.

let arrNo = [10, 2, 34, 4, 9, 7, 87, 9, 7, 90];
// sort in ascending order
ass = arrNo.sort((a, b) => a - b);
console.log("Largest number of array is:", ass[ass.length - 1]);

// or
let largest = 0;
for (let i = 0; i < arrNo.length; i++) {
  if (largest < arrNo[i]) {
    largest = arrNo[i];
  }
}
console.log("Largest number of array is:", largest);
