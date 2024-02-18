// Qs1. Create a program that generates a random number representing a dice roll. [The number should be between 1 and 6].

let dice = Math.floor(Math.random() * 6) + 1
console.log("The dice number is", dice);
console.log("Reload the page to roll again !");


// Qs2. Create an object representing a car that stores the following properties for the car: name, model, color. Print the car’s name.

let car = {
    name: "Defender",
    model: "defender 130",
    color: ["Gray", "Black",],
}
console.log(car.name);


// Qs3. Create an object Person with their name, age and city, Edit their city’s original value to change it to “New York”, Add a new property country and set it to the United States.

let person = {
    name: "jack",
    age: "20",
    city: "Hongkong",
}
person.city = "NewYork"
person.county = "United States"
console.log(person);









