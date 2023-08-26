// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.
let num = prompt("Enter a number");
function isPositive(num) {
    if(num<0) {
        console.log("Negative Number")
    } else if (num>0) {
        console.log("Positive Number")
    } else {
        console.log("Number is Zero")
    }
}
isPositive(num);

// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.
let number = prompt('Enter a positive integer: ');
function factorial(number) {
    if (number < 0) {
        console.log('Invalid Input');
    } else if (number == 0) {
        console.log('The factorial of 0 is 1.');
    } else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${number} is ${fact}.`);
    }
}
factorial(num);

// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.
function maxNumber(x, y) {
      if (x == y) {
        return "Numbers are the same";
      } else if (x > y) {
        return `${x} is larger`;
      } else {
        return `${y} is larger`;
      }
  }
  console.log(maxNumber(15, 60));

// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
function isPalindrome(string) {
    var re = /[^A-Za-z0-9]/g;
    string = string.toLowerCase().replace(re, '');
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(isPalindrome("Naman"))

// Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
function isPrime(n)
{  
    if (n <= 3)
        return true;
    if (n % 2 == 0 || n % 3 == 0)
        return false;
    for (let i = 5; i * i <= n; i = i + 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    return true;
}
function printPrime(n)
{
    for (let i = 2; i <= n; i++) {
        if (isPrime(i))
            console.log(i + " "); 
    }
}
printPrime(10);

// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
function calculator(operator, num1, num2) {
    if (operator == '+') {
        return num1 + num2;
    } else if (operator == '-') {
        return num1 - num2;
    } else if (operator == '*') {
        return num1 * num2;
    } else {
        return num1 / num2;
    } 
}
console.log(calculator('*', 3, 6));

// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.
function countVowels(str) {
    var count = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || 
        string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            count += 1;
      }
    }
    return count;
  }
  console.log("Number of vowels in given string = " + countVowels("RiyaBajaj"))

// Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
function isPerfect(number) {
    var sum = 0;
    for(var i=1;i<=number/2;i++) {
        if(number%i === 0) {
            sum += i;
        }
    }
    if(sum == number && sum != 0) {
        console.log("It is a perfect number.");
    } else {
        console.log("It is not a perfect number.");
    }   
 } 
isPerfect(25);

// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
function fibonacci(n) {
    let a = 0, b = 1, sum;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
      sum = a + b;
      console.log(sum);
      a = b;
      b = sum;
    }
  }
  
  fibonacci(8);

// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.
function table(num) {
    for(let i = 1; i <= 10; i++) {
        let res = i * num;
        console.log(`${num} * ${i} = ${res}`);
    }
}
table(9);