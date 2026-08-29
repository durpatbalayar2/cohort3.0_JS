// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let mypass = "haihai";
// let attempts = 0;

// let userpass = prompt("Enter your password: ");
// attempts++;

// while (mypass !== userpass) {
//   if (attempts === 3) {
//     console.warn(`Your account have locked`);
//     break;
//   }
//   userpass = prompt("Enter your password: ");
//   attempts++;
// }

// if (userpass === mypass) {
//   console.log("Welcome");
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let count = 0;
// let word = prompt("Enter the word:");

// while (word !== "stop") {
//   if (word === "yes") {
//     count++;
//   }
//   word = prompt("Enter the word:");
// }

// console.log(`You have typed ${count} "yes" word`);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for (let i = 1; i <= 50; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//   if (i % 2 === 1) {
//     sum += i;

//     console.log(i);
//   }
// }

// console.log(`Sum of odd number is ${sum}`);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let num = +prompt("Enter a number:");

// while (num % 2 !== 0) {
//   num = +prompt("Enter a number:");
// }

// console.log(`${num} is even`);

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start = +prompt("Enter a  start number");
// let end = +prompt("Enter a end number");

// //edge case

// if (start > end)
//   console.error("Starting number should not be greater than ending");

// for (let i = start; i <= end; i++) {
//   console.log(i);
// }

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count = 0;
// for (let i = 1; i <= 20; i++) {
//   if (count === 3) break;
//   if (i % 2 !== 0) {
//     console.log(i);
//     count++;
//   }
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let count = 0;
// for (let i = 1; i <= 5; i++) {
//   let num = +prompt("Enter a number");

//   if (num >= 0) count++;
// }
// console.log(`Total positive number are :${count}`);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balanceAmt = 1000;

for (let i = 1; i <= 3; i++) {
  let withdrawal = +prompt("Enter amount to be withdrawn:");

  if (balanceAmt >= withdrawal) {
    balanceAmt = balanceAmt - withdrawal;
    console.log(`₹${withdrawal} withdrawn successfully`);
  } else {
    console.log("Insufficient balance");
  }
}

console.log(`Remaining balance amount is: ₹${balanceAmt}`);
