// Qs1. Write a JavaScript function that returns array elements larger than a number.

let array = [10, 2, 34, 4, 9, 7, 87, 9, 7, 90];

function findLargeNo(arr) {
  let large = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (large < arr[i]) {
      large = arr[i];
    }
  }
  return large;
}

console.log("Largest number in array is:", findLargeNo(array));


// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let string = "abcdabcdefgggh";

function uniStr(str) {
  let s = "";
  for (let i = 0; i < str.length; i++) {
    if (s.indexOf(str[i]) === -1) {
      s += str[i];
    }
  }
  return s;
}

console.log("Unique characters are:", uniStr(string));


// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : "United States of America"

let country = ["Australia", "Germany", "United States of America"];

function findLargeArr(arr) {
  let large = "";
  for (let i = 0; i < arr.length; i++) {
    if (large.length < arr[i].length) {
      large = arr[i];
    }
  }
  return large;
}

console.log("Largest string is:", findLargeArr(country));


// Qs4. Write a JavaScript function to count the number of vowels(a, e, i, o, u) in a String argument.

let adds = "ahcAOnbeUEisjfhgsgIou";

function countVowels(str) {
  let list = ["a", "e", "i", "o", "u"];
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] == str[i].toLowerCase()) {
        num += 1;
      }
    }
  }
  return num;
}

console.log("Total number of vowels is:", countVowels(adds));


// Qs5. Write a JavaScript function to generate a random number within a range (start, end).

function genRandom(start, end) {
    let range = end - start + 1;
  let num = Math.floor(Math.random() * range) + start;
  return num;
}

console.log("Generated random number is:", genRandom(5, 10));
