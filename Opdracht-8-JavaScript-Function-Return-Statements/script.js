/*Checking if a number is big
We're going to write a function that checks if a number is bigger than 100.

create a function that has one parameter (argument)
think of good names for the function and the parameter
inside the function check the number
if the number is bigger than 100 use the return keyword to return true
if the number is 100 or smaller use the return keyword to return false
now we're going to check if the function works as we intended
call the function with different numbers
use console.log to display the return value of the function
the end result of this exercise should not use console.log inside of the function*/

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "True";
    }
  
    else (val <= 100) ;{  // Change this line
      return "False";
    }
  }
  
  console.log(testGreaterThan(10)); // 10 or under

/*
Bouncer at a club
We're going to create an "AI" bouncer: Brenda the Bouncer Bot.
Brenda will check that there aren't to many people in the club.
She will also check the age of the people wanting to enter the club. Brenda will return one of three sentences:

"come in"
"it's too busy now, come back later"
"this is a club for adults"
To make these decisions we'll give Brenda the following arguments:

the maximum number of people in the club
the current number of people in the club
the age of the person wanting to enter the club
Tip

There are multiple ways to write this function.
It's possible to use one or multiple return statements.
If you've created one version of the function: can you think of another way to write it?

create a function with the right number of parameters
think of good names for the function and the parameters
inside the function write the code that decides what Brenda should say
return Brenda's response
call the function multiple times with different arguments
make sure you see all of Brenda's different responses
Now think about the categories of functions we discussed: functions that do something and functions that produce something.
What kind of function is this?

Generally speaking functions can be used to:

do something
produce or calculate something
do and produce something

  */

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "it's too busy now, come back later";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  console.log(testGreaterThan(10)); // 10 or under






/*
Calculating the average
We're going to write a function that calculates the average of five numbers.

create a function with the right number of parameters
think of good names for the function and the parameters
inside the function calculate the average of the five numbers
bonus: use Math.round to round the average to a whole number
use the return keyword to return the average of the five numbers
call the function multiple times with different arguments
check that your function correctly calculates the average
use console.log to display the return value of the function
the end result of this exercise should not use console.log inside of the function
Now think about the categories of functions we discussed: functions that do something and functions that produce something.
What kind of function is this?
*/