/*
3. The grade assigner
For this exercise, your start off with an existing function that determines the grade based on a score of 0-100:

function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}
Write a for loop that iterates from 60 to 100. This value indicates the "score" of a student. During each iteration, call the assignGrade function with the current and log the following statement:

For scoring 80 points, you get an C
When you successfully complete the grade assigner, your script prints 40 lines to your console (one for each score).
*/