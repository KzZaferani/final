console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number

console.log("Khashayar Zaferani");
console.log("200542551");
// Step 2: Create a block scoped, immutable variable that stores an empty array

const myArray = [];
// Step 3: Add the 3 people's names to the array
myArray.push("james");
myArray.push("jack");
myArray.push("merry");

// Step 4: Remove the second array item from the array

delete myArray[1];
// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable

let upperCaseNames = myArray.map(name => name.toUpperCase());
// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
const aside = document.querySelector('.aside h2');

aside.addEventListener('click', function() {
  alert("Hello from Boo the World's Cutest Dog!");
});