// Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.

let num = prompt("Enter a number: ");
// condition using Ternary Operater
n = num % 5 === 0 ? "Number is multiple of 5" : "Number is Not multiple of 5";
alert(n);


// Qs2. Write a code which can give grades to students according to their scores:

let score = prompt("Enter a Score: ");
if (80 <= score && score <= 100) {
  grade = "A";
} else if (70 <= score && score < 80) {
  grade = "B";
} else if (60 <= score && score < 70) {
  grade = "C";
} else if (50 <= score && score < 60) {
  grade = "D";
} else if (0 <= score && score < 50) {
  grade = "F";
} else {
    alert("Enter scoure under 100 and Make sure you entring numbers only");
}
alert("Your Grade is " + grade);


// Qs3. A string is a golden string if it starts with the character ‘A or ‘a’ and has a total length greater than 5.

let string = "abcdefgh";
if ((string[0] === "a" || string[0] === "A") && string.length > 5) {
  console.log("golden string");
} else {
  console.log("Not golden string");
}


// Qs4. Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4: October, November, December

let month = prompt("Enter month: ");
switch (month) {
  case "january":
  case "february":
  case "march":
    alert("Months in Quarter 1");
    break;
  case "april":
  case "may":
  case "june":
    alert("Months in Quarter 2");
    break;
  case "july":
  case "august":
  case "september":
    alert("Months in Quarter 3");
    break;
  case "october":
  case "november":
  case "december":
    alert("Months in Quarter 4");
    break;
  default:
    alert("Enter correct option");
}


// Qs5. Take 3 numbers find which is largest number.

let n1 = prompt("Enter No.1: ");
let n2 = prompt("Enter No.2: ");
let n3 = prompt("Enter No.3: ");
if (n1 > n2) {
  if (n1 > n3) {
    alert(`${n1} is largest number`);
  } else {
    alert(`${n3} is largest number`);
  }
} else if (n1 < n2) {
  if (n2 > n3) {
    alert(`${n2} is largest number`);
  } else {
    alert(`${n3} is largest number`);
  }
}


// Qs6. Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2

let num1 = prompt("Enter No.1: ");
let num2 = prompt("Enter No.2: ");
if (num1 % 10 == num2 % 10) {
  alert(`Both numbers have the same last digit which is ${num1 % 10}`);
} else {
  alert("Both numbers have the Not same last digit");
}

