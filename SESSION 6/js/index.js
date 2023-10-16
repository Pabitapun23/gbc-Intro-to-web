console.log("This message is from index.js");

var a = 20;
//backquote ` : prints the value of variable in string
//template literals using ` and ${}
console.log(`a : ${a}`);
console.log(`a + 20 : ${a + 20}`);

//Type inference
var b = "Pabita";
console.log(`Hello, ${b}`);

console.log(`type of a : ${typeof a}`); //It's a string
console.log(`type of b : ${typeof b}`); //It's a number

//integers and float both are treated as a NUMBER in js
var c = 3.14;
console.log(`type of c : ${typeof c}`); //It's a number

//Data types in JS
//numnber, string, boolean, character, null, object, undefined
//array

var d = true; //this value will hold any memory for true
var e = "a";
var f = null; //it will hold some memory but it will be empty for null
var g = {
  firstname: "Jane",
  lastname: "Doe",
  age: 99,
  grade: 54.55,
  pass: false,
  graduated: undefined,
};

//undefined - unassigned variable - not assigned anything in memory
var h = undefined;

console.log(`type of d : ${typeof d}`); //It's boolean
console.log(`type of e : ${typeof e}`); //string
console.log(`type of f : ${typeof f}`); //object
console.log(`type of g : ${typeof g}`); //object
console.log(`type of h : ${typeof h}`); //undefined

//dynamically/loosely/weakely typed language : it's allowing your variable to change its value based on your initialization

f = 45.23; //deallocating the memory
console.log(`type of f : ${typeof f}`); //number

f = undefined;
console.log(`type of f : ${typeof f}`); //undefined

//type casting
g = "123"; //string
console.log(`type of g ${g} : ${typeof g}`);

g = Number("1234");
console.log(`type of g ${g} : ${typeof g}`); //Number

//NaN - not a number
g = Number("A101"); //error
console.log(`type of g ${g} : ${typeof g}`);

g = String(123); //String
console.log(`type of g ${g} : ${typeof g}`);

g = Boolean("true"); //boolean - true
console.log(`type of g ${g} : ${typeof g}`);

g = Boolean("Yes"); //boolean or error - true
console.log(`type of g ${g} : ${typeof g}`);

g = Boolean("Whatever"); //boolean or error - true
console.log(`type of g ${g} : ${typeof g}`);

g = Boolean(343.343); //boolean or error- true - if you provide any value then it is true otherwise it's false
console.log(`type of g ${g} : ${typeof g}`);

g = Boolean(); //boolean - false
console.log(`type of g ${g} : ${typeof g}`);

g = g + 5; //error
console.log(`type of g after + 5 ${g}: ${typeof g}`);

//loops - repeatition statement
var count = 5;

for (count = 0; count <= 5; count++) {
  console.log(`count : ${count}`);
}

sum = 0;

for (var i = 1; i <= 5; i++) {
  sum += i;
  console.log(`i : ${i}`);
}

console.log(`sum : ${sum}`);

//Write a loop that iterates from 1 to 10
//show the sum of all numbers

sum = 0;

for (var i = 1; i <= 10; i++) {
  sum += i;
  console.log(`i : ${i}`);
}

console.log(`sum : ${sum}`);
console.log(`avg : ${sum / (i - 1)}`);

//while loop
count = 10;
sum = 0;

while (count <= 5) {
  sum += count;
  count++;
}

console.log(`count : ${count}`);
console.log(`sum using while : ${sum}`);
console.log(`avg : ${sum / (count - 1)}`);

//do...while
count = 10;
sum = 0;

do {
  sum += count;
  count++;
} while (count <= 5);

console.log(`count : ${count}`);
console.log(`sum using do while : ${sum}`);
console.log(`avg : ${sum / (count - 1)}`);

//conditions

//g = 20  //It is 20
g = "20"; //It is 20

//equality operator (==) - compares value
if (g == 20) {
  //In JS, == compares value not a type
  console.log(`g is 20`);
} else {
  console.log(`g is NOT 20`);
}

//Strict equal (===) - compares value and type both
//In assignment, if it's not mentioned that it's equality operator then it's strictly equal operator by default
g = "20"; //It is NOT 20
if (g === 20) {
  //In JS, == compares value not a type
  console.log(`g is 20`);
} else {
  console.log(`g is NOT 20`);
}

//switch
h = 10;

switch (h) {
  case 5:
    console.log(`h is allocated 5th floor`);
    break;
  case 10:
    console.log(`h is allocated to security office`);
    break;
  case 15:
    console.log(`h is on holiday today`);
    break;
  default:
    console.log(`status unknown for h`);
    break;
}

//variables and scope
//var vs let vs const

//var - global scoped variable
//let - block scoped variable (local scoped variable) - only available within the block/scope it is declared
//const - block scoped variable - cannot modify variable

var v1 = 19;
console.log(`v1 : ${v1}`);

let v2 = "hello";
console.log(`v2 : ${v2}`);


//const - constant cannot change value once initialized
const v3 = 45;     //constant value cannot be changed
console.log(`v3 : ${v3}`);

// v3 = 67; //error
// console.log(`v3 after change : ${v3}`);  //This is error bcz we are trying too reassign value to constant


for(var j1=1, s1 = 0; j1 <= 10; j1++) 
{
    //var s1 = 0;
    s1 += j1;
    console.log(`INSIDE loop ---- j1 : ${j1}, s1 : ${s1}`);
}

console.log(`AFTER loop ---- j1 : ${j1}, s1 : ${s1}`);



for(let j2=1; j2 <= 5; j2++) 
{
    let s2 = 0;
    s2 += j2;
    console.log(`INSIDE loop ---- j2 : ${j2}, s1 : ${s2}`);
}

//Uncaught error s2 is not defined
//cannot access let variables outside its scope
//console.log(`AFTER loop ---- j2 : ${j2}, s2 : ${s2}`); 

console.log(`Example 3 -------------------`);

// for(let j3=1; j3 <= 10; j1++) 
// {
//     const s3 = 0;
//     s3 += j3;   //error
//     console.log(`INSIDE loop ---- j3 : ${j3}, s1 : ${s3}`);
// }

// console.log(`AFTER loop ---- j3 : ${j3}, s1 : ${s3}`); //error

//array
let numbersList1 = [];
let numbersList2 = [1, 2, 3];
let numbersList3 = new Array();
let numbersList4 = new Array(1, 2, 3);

console.log(`numberList 1 : ${numbersList1} - type : ${typeof(numbersList1)}`);
console.log(`numberList 2 : ${numbersList2} - type : ${typeof(numbersList2)}`);
console.log(`numberList 3 : ${numbersList3} - type : ${typeof(numbersList3)}`);
console.log(`numberList 4 : ${numbersList4} - type : ${typeof(numbersList4)}`);

console.log(`number of elements in list 4 : ${numbersList4.length}`);

//push() - add element at the end of existing array
numbersList4.push(5);
numbersList4.push(10);
numbersList4.push(12, 13, 14);

console.log(`number of elements in list 4 after push(): ${numbersList4.length}`);
console.log(`numbersList 4 : ${numbersList4}`);

//pop() - deletes the last element of array and return it 
//numbersList4.pop()

let deletedElement = numbersList4.pop();
console.log(`number of elements in list 4 after pop(): ${numbersList4.length}`);
console.log(`numbersList 4 : ${numbersList4}`);
console.log(`deleted element : ${deletedElement}`);



//write a for loop to iterate through all elements for array
//and produce the sum of them

let fourthElement = numbersList4[3];

sum = 0;

for(let i = 0; i < numbersList4.length; i++) 
{
    sum += numbersList4[i];
    console.log(`adding ${numbersList4[i]} from position ${i} into sum`);
} 

console.log(`Sum of numbersList4 elements: ${sum}`);


//ES6 - for...of
for(num of numbersList4) {
    sum += num
}

console.log(`Sum of numbersList4 elements using for...of: ${sum}`);



let orderItems = ["hot chocolate", "cold brew", "pumpkin spice", "tim bits"]
let orderPrice = [2.60, 2.79, 3.00, 10.00]
let orderQuantity = [7, 5, 1, 20]

//find order total for all items, all quantities
//find total of individual item
//display all of these information

//orderTotal = 0;

//use for loop with index
// for(let i = 0; i < orderItems.length; i++) {
//     orderTotal += orderQuantity[i] * orderPrice[i]
// }

// console.log(`orderTotal of items are: ${orderTotal}`); //235.15


let itemTotal = 0;
let orderTotal = 0;

for(let i = 0; i < orderItems.length; i++) {
    itemTotal = orderPrice[i] * orderQuantity[i];
    console.log(`${orderQuantity[i]} ${orderItems[i]}(s) would be $ ${itemTotal} priced at $ ${orderPrice[i]} each`);

    orderTotal += itemTotal
}

console.log(`Order Total : $ ${orderTotal}`);

//array of objects
let classList = [
    {name: "Amy", percentage: 89.54},
    {name: "Bob", percentage: 45.67},
    {name: "Charlie", percentage: 67.65},
    {name: "Denny", percentage: 87.89},
];

/* Task:
1. Show all the values from classList array
2. Show all the student names whose percentage is more than 80
3. Check if there is any student who is failing; if so, display their name; failing criteria is less than 50%
4. Check if there is any student with name "Eric";
   if so, display their information
   if not, display appropriate message
*/