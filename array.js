// Defining an array
let myArray = [1, 2, 3, 4, 5];

// Accessing array elements
console.log(myArray[0]); // Output: 1
console.log(myArray[2]); // Output: 3

// Adding elements to the array
myArray.push(6); // Adds 6 to the end of the array
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

// Removing the last element from the array
myArray.pop(); // Removes 6 from the end of the array
console.log(myArray); // Output: [1, 2, 3, 4, 5]

// Iterating over the array
myArray.forEach(element => {
    console.log(element);
});
