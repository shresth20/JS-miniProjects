// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3 -> Print, [7, 9, 0]

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = prompt("Enter no. for first elements :");
console.log(array.slice(0, n));


// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3 -> Print, [9, 0, -2]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let m = prompt("Enter no. for last elements :");
console.log(arr.slice(arr.length - m, arr.length));


// Qs3. Write a JavaScript program to check whether a string is blank or not.

let str = prompt("Blank string checker : ").trim();
if (str.length == 0) {
  alert("Blank string");
} else {
  alert(" Not a Blank string");
}
// using boolen expresstion 
if (!!str == false) {
  alert("Blank string");
} else {
  alert(" Not a Blank string");
}


// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.

let strr = "TestIsLowercaseOrNot";
let index = 5;
if (strr[index] == strr[index].toLowerCase()) {
  console.log("Lowercase");
} else {
  console.log("Not a Lowercase");
}


// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

let string = prompt("Unnessery space remover: ");
console.log(`orignal string : ${string}`);
console.log(`String without space : ${string.trim()}`);


// Qs6. Write a JavaScript program to check if an element exists in an array or not.

let fruit = ["apple", "mango", "litchi", "banana", "guava"];
let f = prompt("Check fruit is in backet? : ").trim().toLowerCase();
if (fruit.includes(f)) {
  alert("Fruit is Available");
} else {
  alert("Fruit is Not Available");
}
