// ## Operators 

// 1. Add two numbers and print the result.
let a = 10;
let b = 20;
console.log(a + b); // 30 

// 2. Find the remainder when 25 is divided by 4.
let n1 = 25;
let n2 = 4;
console.log(n1 % n2); // 1 (Using the % Modulus operator) 

// 3. Find the square of a number using exponent operator.
let base = 5;
let square = base ** 2; // ** is the exponent operator
console.log(square); // 25 

// 4. Increment a variable using ++.
let c = 5;
c++;
console.log(c); // 6 

// 5. Decrement a variable using --.
let d = 5;
d--;
console.log(d); // 4 

// 6. Use += operator to increase a variable by 20.
let e = 0;
e += 20;
console.log(e); // 20 

// 7. Compare two numbers using >, <, >=, <=.
console.log(6 > 5);   // true
console.log(4 < 6);   // true
console.log(10 >= 10); // true
console.log(5 <= 2);   // false 

// 8. Check if two values are strictly equal using ===.
let x = 5;
let y = 5;
console.log(x === y); // true 

// 9. Compare "10" and 10 using both == and ===.
let strNum = "10";
let realNum = 10;
console.log(strNum == realNum);  // true (Loose: converts type automatically)
console.log(strNum === realNum); // false (Strict: matches value AND type) 

// 10. Create two boolean variables and test &&, ||, and !.
let isSunny = true;
let isWarm = false; 

console.log(isSunny && isWarm); // false (Both must be true)
console.log(isSunny || isWarm); // true  (At least one must be true)
console.log(!isSunny);          // false (Inverts true to false)