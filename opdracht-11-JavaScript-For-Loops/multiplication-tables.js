const multiplier = 9;
for (let i = 0; i <= 10; i++) {
  let result = multiplier * i;
  console.log(multiplier + " * " + i + " = " + result);
}

// Bonus
for (let multiplier = 0; multiplier <= 10; multiplier++) {
  for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log(multiplier + " * " + i + " = " + result);
  }
}

/*
2. Multiplication tables
We all know know them from elementary school: multiplication tables. Write a script that prints the multiplication table of 9. The output looks like this:

// 1 x 9 = 9 
// 2 x 9 = 18 
// 3 x 9 = 27 
// etc...
Bonus: use a nested for loop to write the multiplication tables of 1 until 10. Start the loop at the lowest number (in this case 1). The output now looks like this:

// 1 x 1 = 1 
// 1 x 2 = 2 
// 1 x 3 = 3 
// etc...

// ...
// 9 x 1 = 9 
// 9 x 2 = 18 
// 9 x 3 = 27
// ...etc 
When you successfully complete the bonus, your script prints 100 lines to your console (10 for each multiplication table).
*/
