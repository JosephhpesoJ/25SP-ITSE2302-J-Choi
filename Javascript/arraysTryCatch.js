// Topic array
let siteTopics = ["HTML", "CSS", "JavaScript", "Accessibility", "Web Design"];

// Days array
let dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Name and year
let firstName = "Joseph";
let birthYear = 2007;

// Add one topic
siteTopics.push("User Experience");

// Show array length
console.log("The length of the siteTopics array is " + siteTopics.length);

// Show topics
let i = 0;
while (i < siteTopics.length) {
  console.log(siteTopics[i]);
  i++;
}

// Reverse days
dayNames.reverse();

// Show reversed days
for (let j = 0; j < dayNames.length; j++) {
  console.log(dayNames[j]);
}

// Remove first day
dayNames.shift();

// Try/catch block
try {
  if (dayNames[0] === "Sunday") {
    throw "Error: Sunday should be missing!";
  }
} catch (error) {
  console.log(error);
} finally {
  console.log(
    firstName +
      " was born in the year " +
      birthYear +
      ". I think the day was either a " +
      dayNames[1] +
      " or " +
      dayNames[3] +
      "."
  );
}
