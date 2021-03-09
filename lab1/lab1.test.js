const lab1 = require("./lab1");

console.log("Testing question 1")

let input = [1, 2, 3, 4, 5];
let result = JSON.stringify(lab1.questionOne(input));
let expected = JSON.stringify({ '1': false, '2': true, '3': true, '4': false, '5': true });
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = [99999999];
result = JSON.stringify(lab1.questionOne(input));
expected = JSON.stringify({ '99999999': false });
console.log("Input: " + input);
console.log("Expected Output: " + JSON.stringify(expected));
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = [5, -4, -1];
result = JSON.stringify(lab1.questionOne(input));
expected = JSON.stringify({ '5': true, '-4': false, '-1': false });
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = [9, 5, 4, 7];
result = JSON.stringify(lab1.questionOne(input));
expected = JSON.stringify({ '4': false, '5': true, '7': true, '9': false });
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = [96, 47, 65, 37];
result = JSON.stringify(lab1.questionOne(input));
expected = JSON.stringify({ "37": true, "47": true, "65": false, "96": false });
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

console.log("Testing question 2")

input = [5, 3, 10, 6, 4];
result = lab1.questionTwo(input);
expected = 471826.53;
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = [999, 543, 234];
result = lab1.questionTwo(input);
expected = 2108178305492522.25;
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = [1, 1, 1];
result = lab1.questionTwo(input);
expected = 15.59;
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = [99];
result = lab1.questionTwo([99]);
expected = 9509900499.00;
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = [4, 6, 99, 7, 54];
result = lab1.questionTwo(input);
expected = 18601615712.58;
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

console.log("Testing question 3")

input = "We all agreed; it was a magnificent evening.";
result = JSON.stringify(lab1.questionThree(input));
expected = JSON.stringify({ consonants: 20, vowels: 15, numbers: 0, spaces: 7, punctuation: 2, specialCharacters: 0 });
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = "Oh, how I’d love to go!";
result = JSON.stringify(lab1.questionThree(input));
expected = JSON.stringify({ consonants: 8, vowels: 7, numbers: 0, spaces: 5, punctuation: 2, specialCharacters: 0 });
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = "JavaScript is such a great language!!!!:)";
result = JSON.stringify(lab1.questionThree(input));
expected = JSON.stringify({ consonants: 18, vowels: 12, numbers: 0, spaces: 5, punctuation: 6, specialCharacters: 0 });
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = "Wow! Thanks to extensions, I don't even have to format my code";
result = JSON.stringify(lab1.questionThree(input));
expected = JSON.stringify({ consonants: 30, vowels: 18, numbers: 0, spaces: 11, punctuation: 3, specialCharacters: 0 });
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = "Hi.    ";
result = JSON.stringify(lab1.questionThree(input));
expected = JSON.stringify({ consonants: 1, vowels: 1, numbers: 0, spaces: 4, punctuation: 1, specialCharacters: 0 });
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

console.log("Testing question 4")

input = "25000, 3.11, 5";
result = lab1.questionFour(25000, 3.11, 5);
expected = 450.44
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = "30000, 5, 6";
result = lab1.questionFour(30000, 5, 6);
expected = 483.15;
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = "19500, 7, 3";
result = lab1.questionFour(19500, 7, 3);
expected = 602.1;
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = "55000, 2, 6";
result = lab1.questionFour(55000, 2, 6);
expected = 811.27;
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");

input = "33000, 4.5, 2";
result = lab1.questionFour(33000, 4.5, 2);
expected = 1440.38;
console.log("Input: " + input);
console.log("Expected Output: " + expected);
console.log("Function Output: " + result);
if (result == expected) console.log("Test Case Passed\n")
else console.log("Test case Failed\n");