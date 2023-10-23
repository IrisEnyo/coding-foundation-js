// 01) oddNumbers function
/* Implement a oddNumbers function.

 The function has two parameters, both are numbers.
 Iterate over all numbers between first number and the second number.
 Store all oddNumbers in string, seperated by a comma and return the string.
 Allowed are only positive numbers, add a check. */

function oddNumbers(num1, num2) {
  if (num1 <= 0 || num2 <= 0) {
  }

  const oddNumbers = [];

  for (let index = num1; index <= num2; index++) {
    if (index % 2 !== 0) {
      oddNumbers.push(index);
    }
  }

  return oddNumbers.join(",");
}

console.log(oddNumbers(0, 4));
console.log(oddNumbers(10, 33));
console.log(oddNumbers(9, 12));

//
//
// 02) charCount function
/* Implement a charCount function.

 The function has a first parameter for a word which is a string.
 The function has a second parameter which contains the character to search for which is a string.
 Check if the second parameter consists of only one character, if not, quit the function.
 The function returns the number of times the character from the second parameter is present in the word.
 The function should be case insensitive. */

function charCount(word, toSearch) {
  if (toSearch.length !== 1) {
    return toSearch;
  }

  const lowerCaseWord = word.toLowerCase();
  const lowerCaseChar = toSearch.toLowerCase();

  let count = 0;

  for (let index = 0; index < lowerCaseWord.length; index++) {
    if (lowerCaseWord[index] === lowerCaseChar) {
      count++;
    }
  }
  return count;
}

console.log(charCount("hello", "l"));
console.log(charCount("mama", "m"));
console.log(charCount("Resümee", "e"));
