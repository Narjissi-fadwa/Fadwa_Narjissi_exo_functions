//* Exercise 1:
//  Greetings
// Create a function called greet that takes a name parameter and prints a greeting message to the console. 
// Call the function with different names.
// function greet(name) {
//     console.log("hello " + name)
// }
// greet("fadwa")
//* Exercise 2: Sum of Numbers
// Create a function called sumNumbers that takes an array of numbers as a parameter and returns the sum of those numbers. 
// Call the function with different arrays.

// const sumNumbers = (Array) => {
//     let numbers = 0
//     for (let index = 0; index <= 10; index++) {
//         numbers += index;
//     }
//     console.log(numbers);

// }
// let myarray=[1,2,3,4,5,6,7,8,9,10]
// sumNumbers(myarray)

//* Exercise 4: Even or Odd
// Create a function called isEven that takes a number as a parameter and prints whether the number is even or odd to the console. 
// Use an if-else statement. Call the function with different numbers.

const isEven = function (number) {
    number % 2 == 0 ? console.log(number + " is even") : console.log(number + " is odd")
}
isEven(1)
isEven(2)

