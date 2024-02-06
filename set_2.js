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
} else if (50 <= score && score< 60) {
    grade = "D";
} else if (0 <= score && score< 50) {
    grade = "F";
} else {
    grade = "Enter scoure under 100 and Make sure you entring numbers only";
}
alert("Your Grade is " + grade);
