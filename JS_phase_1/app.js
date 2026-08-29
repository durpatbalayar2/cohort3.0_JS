// 1. Print no. from 1 to 10

for(let i=1;i<=10;i++){
    console.log(i)
}

//2. Print only even no from 1 to 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


//3. prrint no. from 10 to 1

for(let i=10; i>=1;i--){
    console.log(i)
}

//4. print the word "yes" 5times.

for(let i=1;i<=5;i++){
    console.log("yes")
}


//5. print wheather no. from 1 to 10 are even or odd

for(let i=1;i<=10;i++){
    if(i%2===0){
        console.log(`${i} is even`)
    }else{
        console.log(`${i} is odd`)
    }
}

//6. Ask user for a number and say if it is positive or negative

let n = +prompt("Enter a number")

if (n > 0) {
    console.log(`${n} is positive`)
} else if (n < 0) {
    console.log(`${n} is negative`)
} else {
    console.log("You entered zero")
}
