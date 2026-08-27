// ## Type Conversion & Coercion 

// 1. Convert the string "50" into a number.
let n1 = "50";
let n2 = Number(n1);
console.log(n2); // 50 

// 2. Convert the number 100 into a string.
let num = 100;
let str = String(num);
console.log(str); // "100" 

// 3. Convert "true" into a boolean.
let strBool = "true";
let actualBool = (strBool === "true");
console.log(actualBool); // true 

// 4. Check the output of:
console.log("5" + 2);  // "52" (String concatenation)
console.log("5" - 2);  // 3    (Numeric subtraction)
console.log(true + 1); // 2    (True converts to 1) 

// 5. Create a variable with value "123abc" and convert it into a number.
let txt = "123abc";
let nm = Number(txt);
console.log(nm); // NaN (Because it contains text characters) 

// 6. Use parseInt() on "500px".
console.log(parseInt("500px")); // 500 (Extracts numbers from the start)