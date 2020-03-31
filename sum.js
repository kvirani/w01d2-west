// > Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.

// Error Driven Development 
// Test Driven Development

let nums = process.argv.slice(2);
console.log(nums);

// console.log(nums);
let sum = 0;
for (let num of nums) {
  let numProper = Number(num); 
  // check to see if numProper is a number vs NaN
  if (!isNaN(numProper)) {
    sum += numProper; // sum = sum + num;
  }
}

console.log('Sum Total: ', sum);

