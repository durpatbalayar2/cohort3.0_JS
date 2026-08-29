// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

let age = prompt("Enter your age:");

if (age === null) {
  console.warn("You cancelled");
} else if (age.trim() === "") {
  console.error("You have not entered the number");
} else {
  age = age.trim();

  if (isNaN(age)) {
    console.log("Please enter the age number");
  } else {
    age = Number(age);
    if (age >= 18) {
      console.log(`Your age is ${age} and eligible for vote`);
    } else {
      console.log(`Your age is ${age} and not eligible for vote`);
    }
  }
}
