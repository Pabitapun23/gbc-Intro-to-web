console.log(`This is arrays demo`);

//Array of Object Literals
let gradeList = [
  { name: "Amy", courseCode: "MADS4007", percentage: 89.54 },
  { name: "Bob", courseCode: "MADS4007", percentage: 45.67 },
  { name: "Charlie", courseCode: "MADS4013", percentage: 67.65 },
  { name: "Denny", courseCode: "MADS4012", percentage: 87.89 },
  { name: "Eric", courseCode: "MADS4007", percentage: 78.99 },
  { name: "Bob", courseCode: "MADS4012", percentage: 59.43 },
  { name: "Fing", courseCode: "MADS4008", percentage: 93.55 },
];

let gradeList1 = [];
let gradeList2 = new Array();

//iterate through array to show all the information

for (obj of gradeList) {
  console.log(
    `Name: ${obj.name}, CourseCode: ${obj.courseCode}, Percentage: ${obj.percentage}%`
  );
}

gradeList.push({ name: "Ching", courseCode: "MADS4012", percentage: 67.9 });
gradeList.push({ name: "Jasdeep", courseCode: "MADS4013", percentage: 87.9 });

for (let i = 0; i < gradeList.length; i++) {
  console.log(
    `Name: ${gradeList[i].name}, Course Code : ${gradeList[i].courseCode}, Percentage : ${gradeList[i].percentage} %`
  );
}

console.log();
let ar1 = new Array();

ar1.push(12, 15, 20, 2);

console.log(`ar1 : ${ar1}`);

ar1.push("hello there");
ar1.push(3.14, 45.32);
ar1.push({ firstname: "Amy", lastname: "Jackson" }); //bujhena

console.log(`ar1 : ${ar1}`);

//Constant arrays
const ar2 = [1, 2]; //acceptable

ar2.push(10); //acceptable

console.log(`ar2: ${ar2}`);

//gives error
// ar2 = [12, 13, 14]; //error
// console.log(`ar2 : ${ar2}`);

ar1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//find index of the element with value 16
//which position element 16 is at?

let searchElement = 16;

// let matchedIndex = ar1.findIndex(searchElement)
let matchedIndex = ar1.indexOf(searchElement);

console.log(`Element ${searchElement} is at position ${matchedIndex}`);

//find position of first element which is more than 13

matchedIndex = ar1.findIndex((element) => element > 13);

console.log(
  `position of first element which is more than 13 is ${matchedIndex}`
);

//If there is no matching value presenr in your array, indexOf() or findIndex() return -1
searchElement = 60;
matchedIndex = ar1.indexOf(searchElement);
console.log(`Element ${searchElement} is at position ${matchedIndex}`);

matchedIndex = ar1.findIndex((element) => element > 30);
console.log(
  `position of first element which is more than 30 is ${matchedIndex}`
);

//find the postition of an object where the grade is more than 70
matchedIndex = gradeList.findIndex((obj) => obj.percentage > 70);
console.log(
  `The first object having percentage more than 70 is at position ${matchedIndex}`
);

if (matchedIndex !== -1) {
  //if the matching object is present
  console.log(`matching object : ${gradeList[matchedIndex]}`);
  console.log(
    `matching object : ${gradeList[matchedIndex].name}, ${gradeList[matchedIndex].courseCode}, ${gradeList[matchedIndex].percentage}`
  );
} else {
  console.log(`no matching object with percentage more than 70 found`);
}

//find the object where percentage is more than 90

//find() - returns the element which matches the criteria;
//if there is no matching element, it returns undefined


let matchedObject = gradeList.find( (element) => element.percentage >= 90)

if(matchedObject === undefined){
console.log(`matching object not found`);
}else{
console.log(`matching object : ${matchedObject.name}, ${matchedObject.courseCode}, ${matchedObject.percentage}`);
}
