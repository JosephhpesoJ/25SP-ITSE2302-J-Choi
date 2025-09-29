// Store sentences
var sentence1 =
  "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
var sentence2 =
  "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
var sentence3 =
  "This summer they plan on traveling to El Paso to visit as many family members as possible.";

// Extract numbers from sentence1
var index5 = sentence1.indexOf("5");
var num1 = sentence1.slice(index5, index5 + 1);
var index4 = sentence1.indexOf("4");
var num2 = sentence1.slice(index4, index4 + 1);
var index1 = sentence1.lastIndexOf("1");
var num3 = sentence1.slice(index1, index1 + 1);

// Extract numbers from sentence2
var index6 = sentence2.indexOf("6");
var num4 = sentence2.slice(index6, index6 + 1);
var index2 = sentence2.indexOf("2");
var num5 = sentence2.slice(index2, index2 + 1);
var index100 = sentence2.indexOf("100");
var num6 = sentence2.slice(index100, index100 + 3);

// Extract 10 and 0 from 100
var num7 = num6.substring(0, 2);
var num8 = num6.substring(2, 3);

// Parse all to integers
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);
num6 = parseInt(num6);
num7 = parseInt(num7);
num8 = parseInt(num8);

// Sum variables
var sumTotal = num1 + num2 + num3 + num4 + num5 + num7;

// Display sumTotal
console.log("The variable sumTotal is storing " + sumTotal);

// Extract San Antonio
var cityStart = sentence2.indexOf("San Antonio");
var city = sentence2.substring(cityStart, cityStart + "San Antonio".length);

// Change sentence3 to include city
sentence3 =
  "This summer they plan on traveling to " +
  city +
  " to visit as many family members as possible.";
console.log(sentence3);

// Use numbers 1 and 10 for while loop
var start = 1;
var end = 10;
while (start <= end) {
  console.log("I saw " + start + " car(s) on my trip.");
  start++;
}
