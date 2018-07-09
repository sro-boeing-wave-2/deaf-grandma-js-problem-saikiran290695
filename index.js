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
var count = 0;
 print("What do you want to say to Grandma!!");
 while(count<3){
  var input = prompt();
 var res = isUppercase(input);
 if(res)
 {
    if(input == "BYE")
    {
        count++;
        if (count == 3) {
          break;
        } else {

        }
    }
    else{
        count = 0;
    }
    var rand = getRandomValue(1930,1950);
    print("NO, NOT SINCE " + rand);
 }
 else{
     print("HUH?! SPEAK UP, SONNY!");
 }
}
