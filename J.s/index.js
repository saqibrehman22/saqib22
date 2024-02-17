// // let ban =+prompt("inter number which you want a table");
// // for(let j=1; j<=10;j++)
// // {
// //     console.log (`${ban} * ${j} = ${ban*j}`)
// // }
// // console.log(3 * 4);
// // // Expected output: 12

// // console.log(-3 * 4);
// // // Expected output: -12

// // console.log('3' * 2);
// // // Expected output: 6

// // console.log('foo' * 2);
// // // Expected output: NaN



// // const student = {
// //  fullName : "Tufeeq Rehman",
// //   age: 19,
// //   cgpa: 5.3,
// //   isPass: false,
// // };

// const profile ={
//     username : "@SaqibRehman",
//     isfollow : false,
//     follower : 123,
//     following:1234,
// }
// console.log ( typeof profile["isfollow"]);

    
// let num = 1.564864;
// console.log(num.toFixed(2));

// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getMonth());

// let num = 1.23978921;
// console.log(num.toFixed (4));
 
// let date = new Date();
// // console.log (date);
// console.log(date.setFulldate(2022)/60*60*24*365);
// let khan = new Date();
// let k = khan.setFullYear('2020');
// console.log(k/(1000*60*60*24*365));


// let num = new date ();
// myDate.setFullYear(2030); // Set the year to 2030
// console.log(myDate); // Outputs: Sat Feb 10 2030 14:19:00 GMT+0500 (Pakistan Standard Time)

// let num = new Date();
// num.setFulYear()

// const name = prompt("enter String");
// let reversedName = "";

// for (let i = name.length - 1; i >= 0; i--) {
//     reversedName += name[i];}
//     console.log(reversedName); 

// alert(reversedName)
// if ( String.lenght === reversedName.lenght){
//     console.log ('Eqaul')
// }
// else{console.log ("Not Equal")}


// function sumDigits(number) {
//     // Convert the number to a string
//     const str = number.toString();
    
//     // Split the string into an array of characters, convert each character to a number, and reduce the array by summing up its values
//     const sum = str.split('').reduce((acc, digit) => acc + Number(digit), 0);
    
//     return sum;
//   }
  
//   // Example usage
//   const result = sumDigits(123); // 1+2+3 = 6
//   console.log(result); // Output: 6
  
  
function sumOfDigits(number) {
    // Convert the number to a string to access individual digits
    const stringNumber = number.toString();
  
    // Initialize a variable to store the sum
    let sum = 0;
  
    // Iterate through each character in the string
    for (let digit of stringNumber) {
      // Convert the character to a number (as it's a string now)
      const digitNumber = parseInt(digit, 10);
  
      // Add the digit to the sum
      sum += digitNumber;
    }
  
    // Return the final sum
    return sum;
  }
  
  // Example usage
  const number = 123;
  const digitSum = sumOfDigits(number);
  console.log(`The sum of digits of ${number} is: ${digitSum}`);

  function sumOfRange(num1, num2) {
    // Handle invalid input
    if (num1 > num2) {
      throw new Error("num1 must be less than or equal to num2");
    }
  
    // Calculate the sum using the arithmetic series formula
    const n = num2 - num1 + 1;
    return n * (num1 + num2) / 2;
  }
  
  // Example usage
  const num1 = 2;
  const num2 = 5;
  const rangeSum = sumOfRange(num1, num2);
  console.log(`The sum of the range from ${num1} to ${num2} is: ${rangeSum}`);

  function calculateAverage(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
      throw new Error("Cannot calculate average of an empty array");
    }
  
    // Calculate the sum of all elements
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
  
    // Calculate the average by dividing the sum by the number of elements
    const average = sum / numbers.length;
  
    // Return the calculated average
    return average;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const average = calculateAverage(numbers);
  console.log(`The average of the array is: ${average}`);

  function compareByCharacterCount(str1, str2) {
    // Remove whitespaces from both strings
    const cleanStr1 = str1.replace(/\s/g, "");
    const cleanStr2 = str2.replace(/\s/g, "");
  
    // Sort the characters of each string
    const sortedStr1 = cleanStr1.split("").sort().join("");
    const sortedStr2 = cleanStr2.split("").sort().join("");
  
    // Compare the sorted strings for equality
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage
  const string1 = "car";
  const string2 = "bat";
  const string3 = "care";
  
  console.log(`${string1} and ${string2} are equal: ${compareByCharacterCount(string1, string2)}`);
  console.log(`${string1} and ${string3} are equal: ${compareByCharacterCount(string1, string3)}`);

  function swapFirstLastChar(string) {
    // Handle strings with length 1 or less
    if (string.length <= 1) {
      return string; // No swapping needed
    }
  
    // Extract first and last characters
    const firstChar = string[0];
    const lastChar = string[string.length - 1];
  
    // Construct the swapped string
    return lastChar + string.slice(1, -1) + firstChar;
  }
  
  // Example usage:
  const originalString = "name";
  const swappedString = swapFirstLastChar(originalString);
  console.log(`Original string: ${originalString}`);
  console.log(`Swapped string: ${swappedString}`);
  
  