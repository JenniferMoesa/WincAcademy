/*
Functions: three ways to write them: exercise
In this exercise we're going to write a single function in three styles.

The function we're going to create will do the following.

take two numbers
each number will be squared (multiplied with itself)
the squared numbers will be added together
this sum will be squared again
the resulting value is returned
Write this function in all three styles and give the functions and their arguments good names. They cannot have exactly the same name. There are multiple ways to do this.

function declaration
function expression
arrow function
After you're done, check that all three functions give the same result if you give them the same arguments.
*/


/*

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

------------------------------------------------------------------------------------------------------

ARROW FUNCTIONS

const add = (number1, number2) => {
  return number1 + number2;
};
add(5, 6); // 11


*/