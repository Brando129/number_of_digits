/*Create a function that will return an integer number corresponding
to the amount of digits in the given integer num.*/

function countDigits(num) {
  // Check if num is a valid number
    if (isNaN(num)) {
        throw new Error("Invalid number");
    }

    // Get the length of the string representation of num
    return num.toString().length;
}

console.log(countDigits(43254))