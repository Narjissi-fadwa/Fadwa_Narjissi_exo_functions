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

// const isEven = function (number) {
//     number % 2 == 0 ? console.log(number + " is even") : console.log(number + " is odd")
// }
// isEven(1)
// isEven(2)

//* Exercise 6: Palindrome Check
// Create a function called isPalindrome that takes a string as a parameter and prints whether the string is a palindrome (reads the same backward as forward) to the console. Ignore spaces and case.
// Use loops and conditional statements. Call the function with different strings.

// function isPalindrome(str) {
//     str = str.replace(/\s/g, '').toLowerCase();
//     for (let i = 0; i < str.length / 2; i++) {
//         str[i] !== str[str.length -1 - i] ? console.log("not palindrom") : console.log("Palindrom");
//         return;
//     }
// }
// isPalindrome("fadwa")
// isPalindrome("racecar")
// isPalindrome(" RacE car ")
// isPalindrome("pop")
// isPalindrome("po p")
// isPalindrome(" Pop ")

//* Exercise 7: Maximum of Two Numbers
// Create a function called maxOfTwo that takes two numbers as parameters and prints the larger of the two to the console. 
// Use an if-else statement. Call the function with different numbers.

// function maxOfTwo(number1 , number2) {
//     number1 > number2 ? console.log(number1) : console.log(number2);
//     return;
// }
// maxOfTwo(100 , 50)
// maxOfTwo(4848 , 5115)

//* Exercise 8: Array Sum
// Create a function called arraySum that takes an array of numbers as a parameter and prints the sum of those numbers to the console. 
// Use the for...of loop. Call the function with different arrays.
// function arraySum(numberArray) {
//     let sum = 0
//     for (const item of numberArray) {
//         sum += item
//     }
//     console.log(sum)
//     return;
// }
// arraySum([1,2,3,4,5,6,7,8,9,10])

//* Exercise 9: Factorial Without Recursion
// Create a function called factorial that takes a number as a parameter and prints the factorial of that number to the console. 
// Calculate the factorial without using recursion. Call the function with different numbers.

// function factorial(number) {
//     let x = number - 1
//     while (x >= 1) {
//         number *= x
//         x--
//     }
//     console.log(number);
//     return;
// }
// factorial(5)
// factorial(3)

//* Exercise 10: Vowel Checker
// Create a function called isVowel that takes a character as a parameter and prints whether the character is a vowel or not to the console. Use an if-else statement. 
// Call the function with different characters.

// const isVowel = (char) => {
//     (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y") ? console.log(char + " is a vowel.") : console.log(char + " is not a vowel.");
//     }

// isVowel("u")
// isVowel("b")
// isVowel("e")
// isVowel("c")

//* Exercise 11: Largest in Array
// Create a function called largestInArray that takes an array of numbers as a parameter and prints the largest number in the array to the console. 
// Use the Math.max function. Call the function with different arrays.

// const largestInArray = function (Array) {
//     let largest = Math.max(...Array)
//     console.log("The largest number in the array is: " + largest);
// }

// largestInArray([44, 48, 655, 8, 155, 2]);


//* Exercise 12: Prime Number Checker
// Create a function called isPrime that takes a number as a parameter and prints whether the number is a prime number or not to the console. 
// Use loops and conditional statements. Call the function with different numbers.
// function isPrime(number) {
//         for (let index = 2; index < number; index++) {
//             number % index === 0 ? console.log("not prime") : console.log("prime");
//             break;
//             }
//         return;
// }
// isPrime(7);
// isPrime(4);

//* Exercise 13: Sum of Digits
// Create a function called sumOfDigits that takes a positive integer as a parameter and calculates the sum of its digits. 
// Print the result to the console.

// function sumOfDigits(int) {
//     let sum = 0;

//     while (int > 0) {
//         sum += int % 10;
//         int = Math.floor(int / 10);
//     }
//     console.log("The sum of the digits is: " + sum);
// }

// sumOfDigits(123);
// sumOfDigits(1234);


//* Exercise 14: arrayIntersection 
// Create a function called arrayIntersection that takes two arrays as parameters and returns a new array containing the common elements between them.

// function arrayIntersection(a, b) {
//     let commonElements = [];
//     for (let i = 0; i < a.length; i++) {
//         b.includes(a[i]) ? commonElements.push(a[i]): " " ;
//     }
//     return commonElements;
// }

// let a = ["fadwa", 2, "other", 3, 4, true, 5, 6];
// let b = [true, 4, "fadwa", 2, false, 1, 8];

// console.log(arrayIntersection(a, b));

//* Exercise: Fibonacci Sequence

function fibonacci(number) {
    let num1 = 0;
    let num2 = 1;
    let nextresult; 
    for (let index = 0; index <= number; index++) {
        console.log(num1);
        nextresult = num1 + num2;
        num1 = num2;
        num2 = nextresult
    }
}
fibonacci(5)