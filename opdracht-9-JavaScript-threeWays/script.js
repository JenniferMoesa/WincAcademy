/*
FUNCTIONS: THREE WAYS TO WRITE THEM

In this exercise we're going to write a single function in three styles.

The function we're going to create will do the following.

take two numbers
each number will be squared (multiplied with itself)
the squared numbers will be added together
this sum will be squared again
the resulting value is returned
Write this function in all three styles and give the functions and their arguments good names.
They cannot have exactly the same name. There are multiple ways to do this.

function declaration
function expression
arrow function
After you're done, check that all three functions give the same result if you give them the same arguments.
*/


//FUNCTION DECLARATION
function numberMultiplied(number1, number2) {
    const number1Multiplied = number1 * number1; // number1 multiplied with itself
    const number2Multiplied = number2 * number2; // // number2 multiplied with itself
    const sum = number1Multiplied + number2Multiplied; // multiplied number1 and multiplied number2 will be added together
    const sumMultiplied = sum * sum; //  sum will be multiplied
    return sumMultiplied; // the resulting value is returned
}


//FUNCTION EXPRESSION
const numberMultiplied = function(number1, number2) {
    const number1Multiplied = number1 * number1; // number1 multiplied with itself
    const number2Multiplied = number2 * number2; // // number2 multiplied with itself
    const sum = number1Multiplied + number2Multiplied; // multiplied number1 and multiplied number2 will be added together
    const sumMultiplied = sum * sum; //  sum will be multiplied
    return sumMultiplied; // the resulting value is returned
};


// ARROW FUNCTION
const numberMultiplied = (number1, number2) => { // "this function results in...
    const number1Multiplied = number1 * number1; // number1 multiplied with itself
    const number2Multiplied = number2 * number2; // // number2 multiplied with itself
    const sum = number1Multiplied + number2Multiplied; // multiplied number1 and multiplied number2 will be added together
    const sumMultiplied = sum * sum; //  sum will be multiplied
    return sumMultiplied; // the resulting value is returned
};


/* --------------------------------------------------------------------------------------------------------------------

FUNCTION DECLARATIONS

function add(number1, number2) {
  return number1 + number2;
}

add(5, 6); // 11

NOTE: The most important drawback is that you cannot assign or re-assign a function declaration.
Function declarations also cannot create anonymous functions.

---------------------------------------------------------------------------------------------------

FUNCTION EXPRESSIONS

const add = function (number1, number2) {
  return number1 + number2;
};

add(5, 6); // 11

NOTE:
1. we have an "expression" that evaluates to a function
2. we assign the function to a variable (add in this case)
We can use function expressions to create anonymous functions.

------------------------------------------------------------------------------------------------------

ARROW FUNCTIONS

const add = (number1, number2) => { // "this function results in number1 + number2"
  return number1 + number2;
};
add(5, 6); // 11


NOTE:
Read the arrow (=>) as "results in". So: "this function results in number1 + number2".

If an arrow function has 0 arguments it looks like this:

const sayHello = () => {
  console.log("hello");
};

If an arrow function has 1 argument you can skip the parentheses and it looks like this:

const square = number => {
  return number * number;
};


----------------------------------------------------------------------------------------------------

BEST PRACTICES
always use function expressions (normal or arrow)
don't mix function expressions and declarations
use arrow functions for very short functions (in general it's a good idea to write short functions)
use arrow functions when you're comfortable with them



END OF NOTES

------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------*/
  
