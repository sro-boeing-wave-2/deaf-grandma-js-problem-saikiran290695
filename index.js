/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
let count = 0;
print('What do you want to say to Grandma!!');
while (count < 3) {
  let response = 'HUH?! SPEAK UP, SONNY!';
  const input = prompt();
  const res = isUppercase(input);
  const rand = getRandomValue(1930, 1950);
  if (res) { // check if convo is in CAP
    if (input === 'BYE') {
      count += 1;
    } else {
      count = 0;
    }
    response = `NO, NOT SINCE ${rand}`;
  }
  if (count === 3) { // check if count of 'BYE' reached 3
    break;
  } else {
    print(response);
  }
}
