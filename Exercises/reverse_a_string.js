// Create a function that reverses a input string
// "Hello" -> "olleH"

function reverse_string(str) {
  console.log(str);
  // First check for valid input
  if (!str || str.length < 2 || typeof str !== "string") {
    return `invalid input`;
  }
  // Create an empty array to fill with the reversed values
  const reversed_string = [];
  for (let i = str.length - 1; i >= 0; i--) {
    //console.log(string[i]);
    reversed_string.push(str[i]);
  }
  // console.log(reversed_string);
  // join converts the array into a string 
  return reversed_string.join(``);
}

function reverse_string_2(str) {
    // making it easier with some of the built-in js functions 
    return str.split('').reverse().join();
}

const my_input = "Hello my name is: cvbn!";
console.log(reverse_string(my_input));
console.log(reverse_string_2(my_input));