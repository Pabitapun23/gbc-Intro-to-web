console.log("This message is from index.js");

var a = 20;
//backquote `
//template literals using ` and ${}
console.log(`a : ${a}`)
console.log(` a + 20 : ${a + 20}`)

//type inference
var b = "Jane Doe"
console.log(`Hello, ${b}`);

console.log(` type of a : ${typeof(a)}`);
console.log(` type of b : ${typeof(b)}`);

var c = 3.15
console.log(` type of c : ${typeof(c)}`);

//data types in JS
//number, string, boolean, null, object, undefined
//array

var d = true
var e = 'a'

//assigned in memory with null value
var f = null
var g = { 
    firstname: "Jane", 
    lastname : "Doe", 
    age : 99,
    grade : 54.56,
    pass: false,
    grduated: undefined
}

//undefined - unassigned variable - not assigned anything in memory
var h = undefined

console.log(` type of d : ${typeof(d)}`);
console.log(` type of e : ${typeof(e)}`);
console.log(` type of f : ${typeof(f)}`);
console.log(` type of g : ${typeof(g)}`);
console.log(` type of h : ${typeof(h)}`);

//dynamically/loosely/weakely typed language

f = 45.6
console.log(` type of f : ${typeof(f)}`);

f = undefined
console.log(` type of f : ${typeof(f)}`);

//type casting

g = "123"   //string
console.log(` type of g ${g} : ${typeof(g)}`);

g = Number("123")   //Number
console.log(` type of g ${g} : ${typeof(g)}`);

//NaN - Not a Number
g = Number("A101")  //error
console.log(` type of g ${g} : ${typeof(g)}`);

g = g + 5
console.log(` type of g after + 5 ${g} : ${typeof(g)}`);

g = String(123) //string
console.log(` type of g ${g} : ${typeof(g)}`);

g = Boolean("true") //boolean
console.log(` type of g ${g} : ${typeof(g)}`);

g = Boolean("yes")  // boolean or error
console.log(` type of g ${g} : ${typeof(g)}`);

g = Boolean()  // boolean or error
console.log(` type of g ${g} : ${typeof(g)}`);

//loops - repeatition statement

var count = 5;
//for loop
for(count = 1; count <= 3; count++){
    console.log(`count : ${count}`);
}

var sum = 0;

for(var i = 1; i <= 5; i++ ){
    sum += i;
    console.log(`i : ${i}`);
}

console.log(`sum : ${sum}`);

//write a loop that iterates from 1 to 10,
// show the sum of all numbers
//show the average of sum


//while loop
count = 1 //10
sum = 0

while(count <= 5){
    sum += count
    count++
}

console.log(`count  : ${count}`);
console.log(`sum using while : ${sum}`);
console.log(`avg : ${sum / (count - 1) }`);

//do...while
count = 1 // 10
sum = 0

do{
    sum += count
    count++
}while(count <= 5)

console.log(`count  : ${count}`);
console.log(`sum using do..while : ${sum}`);
console.log(`avg : ${sum / (count - 1) }`);

//conditions

// g = 20
g = "20"

//equality operator (==) - compares values
if (g == 20){
    console.log(`g is 20`);
}else{
    console.log(`g is NOT 20`);
}

//strict equaliy operator (===) - compares value and type both
g = "20"

console.log(`strict equality ------`);
if (g === 20){
    console.log(`g is 20`);
}else{
    console.log(`g is NOT 20`);
}

//switch

h = 10

switch(h){
    case 5: {
        console.log(`h is allocated 5th floor`);
        break;
    }
    case 10 : 
        console.log(`h is allocated to security office`);
        break;
    case 15 : 
        console.log(`h is on holiday today`);
        break;
    default: 
        console.log(`status unknown for h`);
        break;  
}

//variables and scope
// var vs let vs const

//var - global scoped variable
//let - block scoped variable - only available within the block/scope it is declared
//const - block scoped variable - cannot modify value

var v1 = 19;
console.log(`v1 : ${v1}`);

let v2 = "hello";
console.log(`v2 : ${v2}`);

//const - constant cannot change value once initialized
const v3 = 45;
console.log(`v3 : ${v3}`);

// v3 = 67; //error
// console.log(`v3 after change : ${v3}`);

for(var j1 = 1, s1 = 0; j1 <= 10; j1++){
    // var s1 = 0;
    s1 += j1;
    console.log(`INSIDE loop ---- j1 : ${j1}, s1 : ${s1}`);
}

console.log(`AFTER loop --- j1 : ${j1}, s1 : ${s1}`);

console.log(`Example 2 -------------------------------------`);

for(let j2 = 1; j2 <= 5; j2++){
    let s2 = 0;
    s2 += j2;
    console.log(`INSIDE loop ---- j2 : ${j2}, s2 : ${s2}`);
}

//cannot access let variables outside its scope
// console.log(`AFTER loop --- j2 : ${j2}, s2 : ${s2}`); //error

console.log(`Example 3 -------------------------------------`);

// for(let j3 = 1; j3 <= 5; j3++){
//     const s3 = 0;
//     s3 += j3;   //error
//     console.log(`INSIDE loop ---- j3 : ${j3}, s3 : ${s3}`);
// }

// console.log(`AFTER loop --- j3 : ${j3}, s3 : ${s3}`); //error

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
console.log(`numberList 4 : ${numbersList4}`);

//pop - deletes the last element of array and return it
// numbersList4.pop()
let deletedElement = numbersList4.pop()
console.log(`number of elements in list 4 after pop(): ${numbersList4.length}`);
console.log(`numberList 4 : ${numbersList4}`);
console.log(`deleted element : ${deletedElement}`);

//write a for loop to iterate through all elements of array 
// and produce the sum of them

let fourthEle = numbersList4[3]

sum = 0;

for(let i = 0; i < numbersList4.length; i++){
    sum += numbersList4[i]
    console.log(`adding ${numbersList4[i]} from position ${i} into sum`);
}

console.log(`sum of numbersList4 elements : ${sum}`);

sum = 0
//ES6 - for..of
for(num of numbersList4){
    sum += num
    console.log(`adding ${num} into sum`);
}

console.log(`sum of numbersList4 elements using for..of : ${sum}`);

let orderItems= ["hot chocolate", "cold brew", "pumpkin spice", "tim bits"]
let orderPrice = [2.60, 2.79, 3.00, 10.00]
let orderQuantity = [7, 5, 1, 20]

//find order total for all items, all quantities
//find total of inidividual item
//display all of these information

let itemTotal = 0;
let orderTotal = 0;

for (let i = 0; i < orderItems.length; i++){
    itemTotal = orderPrice[i] * orderQuantity[i];
    console.log(`${orderQuantity[i]} ${orderItems[i]}(s) would be $ 
            ${itemTotal} priced at $ ${orderPrice[i]} each `);

    orderTotal += itemTotal
}

console.log(`Order Total : $ ${orderTotal}`);

//array of objects
let classList = [
    {name: "Amy", percentage: 89.54},
    {name: "Bob", percentage: 45.67},
    {name: "Charlie", percentage: 67.65},
    {name: "Denny", percentage: 87.89}
];


/*
Task:

1. show all the values form classList aray
2. show all the student names whose percentage is more than 80
3. check if there is any student who is failing; if so, display their name;
    failing criteria is less than 50%
4. check if there is any student with name "Eric";
    if so, display their information
    if not, display appropriate message
*/