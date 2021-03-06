/*
HEY KIDDO

We're going to write two functions, one that greets and another that checks if someone is an adult.

create a function that has one parameter: the age
this function should return true if the age is >= 18, false in all other cases
think of a good name for the function and the parameter
create a second function that has one parameter: the age
think of a good name for the function and the parameter
this second function uses (calls) the first function, giving it the age, to check if we get an adult age
if it's an adult the second function should return "Hello there"
if it's not an adult it should return "Hey kiddo"
use console.log to display the return value of the second function
experiment so you're sure your function works
--------------------------------------------------------------------------------------------------------------------
*/

const eighteenOrOlder = function(age) {
    if (age >= 18) {
        return true; // return true if the age is >= 18
    } else {
        return false;  // false in all other cases
    }
};

const greetings = function(age) {
    if (eighteenOrOlder(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(greetings(20)); // "Hello there"
console.log(greet(10)); // "Hey kiddo"


/*
VAT EXCERCISE 1
Now let's write some code. First let's write a function that takes the base price and the VAT percentage and returns the price including VAT. 
You must do the calculation of the VAT amount in a separate function.
So, in the spirit of the lesson: we have a main function that does the main calculation and another function that we call from this main function.
*/

const calculateVat = function(baseRate, vatRate) {
    return baseRate * (vatRate / 100); // returns the price including VAT
};

const rateIncludingVat = function(baseRate, vatRate) {
    const vat = calculateVat(baseRate, vatRate);
    return baseRate + vat;
};

console.log(rateIncludingVat(3000, 21)); // 3630



/*
VAT EXCERCISE 2
In this exercise we're going to calculate the base price and VAT amount.
The main function you make should take the amount including VAT and the VAT percentage.
The return value should be an array with two elements: base price and VAT amount.
*/


const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]


/*------------------------------------------------------------------------------------------------------------------

NOTES:

What can we do inside of a function?
Inside of a function you can write almost any code you want. You can also write as much or as little code as you need.
However it's good practice to let a function do only one thing. This is also known as the "single responsibility principle".
If a function does more than one thing it could be a good idea to split it up.


CALLING FUNCTIONS
Calling a function works exactly the same inside and outside of a function:

const scream = function () {
  console.log("Aaaaaaa!");
};

// Calling scream outside of a function
scream();

// Here we call scream inside of a function
const makeNoise = function () {
  scream();
};

makeNoise();


-------------------------------------------------------------------------------------------------------------------

RETURN VALUES

When a function returns the return value is "passed" or given back to the location where the function was called.
It does not matter if that's inside or outside of a function.

const add = function(numberA, numberB) {
    return numberA + numberB;
};

// The add function returns to this line, which is outside of a function.
const eight = add(3, 5);
console.log(eight);

const doCalculation = function() {
    // The add function returns to this line, which is inside of a function.
    const six = add(2, 4);
    console.log(six);
};

doCalculation();

---------------------------------------------------------------------------------------------------------------------

DEBUGGING

If you have a lot of functions calling each other it can be a little confusing what happens when.
To help figure this out you can use console.log statements.

const makePositive = function(number) {
    console.log("Entering makePositive..");
    if (number < 0) {
        return Math.abs(number);
    }
    return number;
};

const makeBigger = function(number) {
    console.log("Entering makeBigger..");
    if (number < 10) {
        return 10 + number;
    }
    return number;
};

const square = function(number) {
    console.log("Entering square..");
    return number * number;
};

const doComplexCalculation = function(number) {
    console.log("Entering doComplexCalculation..");
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squaredNumber = square(bigNumber);
    return squaredNumber;
};

console.log(doComplexCalculation(-1));

*/
