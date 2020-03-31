// > Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.

// Error Driven Development 
// Test Driven Development

let args = process.argv.slice(2);
console.log(args);

const performSum = function(stringNums) {
  // returns ... 
  let sum = 0;
  for (let num of stringNums) {
    let numProper = Number(num); 
    // check to see if numProper is a number vs NaN
    if (!isNaN(numProper)) {
      sum += numProper; // sum = sum + num;
    }
  }
  return sum;
}

// console.log(nums);


const finalSum = performSum(args);
console.log('Sum Total: ', finalSum);


// final line