//store variables
var sentence1 =
  "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
var sentence2 =
  "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
var sentence3 =
  "This summer they plan on traveling to El Paso to visit as many family members as possible.";

var num1 = "5";
var num2 = "4";
var num3 = "1";
var num4 = "6";
var num5 = "2";
var num6 = "100";
var num7 = "10";
var num8 = "0";

//convert strings to numbers
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);
num7 = parseInt(num7);

//add numbers
var sumTotal = num1 + num2 + num3 + num4 + num5 + num7;

//display sumTotal
console.log("The variable sumTotal is storing " + sumTotal);

//get "San Antonio" from sentence2
var city = "San Antonio";

//have sentence3 include San Antonio
sentence3 =
  "This summer they plan on traveling to " +
  city +
  " to visit as many family members as possible.";
console.log(sentence3);

//use numbers 1 and 10 for while loop
var start = 1;
var end = 10;
while (start <= end) {
  console.log("I saw " + start + " car(s) on my trip.");
  start++;
}
