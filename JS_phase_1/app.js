//replace "Banana" with "Kiwi" in the array

let arr = ["Apple","Banana"]

arr.splice(1,1,"Kiwi")

console.log(arr);

//Insert "Red" & "Blue"  at index 1 in the given array

let colors = ["Green", "Yellow"]

colors.splice(1,0,"Red","Blue")

//Extract only the middle 3 elements from this array

let items = [1, 2, 3, 4, 5, 6];
let newArr = items.slice(2, 5);

//Sort this array alphabetically and  then reverse it.

let names = ["Zara","Arjun","Mira","Bhavya"]
names.sort().reverse()

//Use .map()  to square this number

let num = [1, 2, 3, 4, 5];

function square() {
  return num.map(function (val) {
    return val * val;
  });
}

console.log(square());

//Use filter() method to keep number greater than 10

let arr = [5,12,8,20,3]

 let newArr =arr.filter(function(val){

    return val >10

})

//Use reduce() to find the sum of this array

let arr =[10,20,30,40,50]

let newArr =arr.reduce((acc,val)=>{
    return acc + val
},0)

//Use find() method  to get the first number less than 10:

let arr = [12, 15, 3, 8, 20];
let newElem = arr.find(function (val) {
  return val < 10;
});

//Use some() to check  if any student  has scored marks below 35

let marks = [45, 60, 28, 90];

let ans = marks.some(function (val) {
  return val < 35;
});

 //Use every() to check if all number are even

let arr = [2, 4, 6, 8, 20];

let ans =arr.every((a) => {
  return a % 2 === 0;
});


//Destructure this array to get firstn\Name and lastName

let arr = ["Durpat","Balayar"]

let [firstName,lastName] = arr;
console.log(firstName)
console.log(lastName)


//Merge two array using spread operator

let a =[1,2]
let b=[3,4]

let c = [...a,...b]
