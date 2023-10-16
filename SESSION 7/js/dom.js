console.log(`This is DOM manipulation example`);

//create a function that performs some operation and which can be called when needed
const findEligibility = () => {
  console.log(`Validate button is clicked!`);

  let ageFromUI = document.querySelector("input").value;
  console.log(`ageFromUI : ${ageFromUI}, type : ${typeof ageFromUI}`);

  let ageNum = parseInt(ageFromUI);

  if (ageNum >= 18) {
    console.log(`User is eligible to create account`);
    // document.querySelector("p").innerHTML = `User is eligible to create account`;
    // document.querySelector("p").style.color = "green";

    document.getElementById(
      "outputPara"
    ).innerHTML = `User is eligible to create account`;
    document.getElementById("outputPara").style.color = "green";
  } else {
    console.log(`User is ineligible to create account`);
    //  document.querySelector("p").innerHTML = `User is ineligible to create account`;
    //  document.querySelector("p").style.color = "red";

    document.getElementById(
      "outputPara"
    ).innerHTML = `User is ineligible to create account`;
    document.getElementById("outputPara").style.color = "red";
  }
};

//querySelector() - selects the first element from the body tag that matches the selection criteria
//querySelectorAll() - selects all the elements from the body tag that matches the selection criteria
//getElementById() - selects only one element with the associated id

//locate or find the HTML element button from document/web page
//adding the "click" event for the button
//associate the function findEligibility to the button click event

// document.querySelector("button").addEventListener("click", findEligibility);

let validateButton = document.querySelector("button");

if (validateButton !== undefined) {
  console.log(`button found`);
} else {
  console.log(`button NOT found`);
}

validateButton.addEventListener("click", findEligibility);

let gradeList = [
  { name: "Amy", courseCode: "MADS4007", percentage: 89.54 },
  { name: "Bob", courseCode: "MADS4007", percentage: 45.67 },
  { name: "Charlie", courseCode: "MADS4013", percentage: 67.65 },
  { name: "Denny", courseCode: "MADS4012", percentage: 87.89 },
  { name: "Eric", courseCode: "MADS4007", percentage: 78.99 },
  { name: "Bob", courseCode: "MADS4012", percentage: 59.43 },
  { name: "Fing", courseCode: "MADS4008", percentage: 93.55 },
  { name: "Ching", courseCode: "MADS4012", percentage: 67.9 },
  { name: "Jasdeep", courseCode: "MADS4013", percentage: 87.9 },
];

const showEntireList = () => {
  //iterate through entire gradeList

  let outputData = `
         <table>
            <tr> <th> Name </th> <th> Course Code </th> <th> Percentage </th> </tr>
         
    `;

  for (obj of gradeList) {
    outputData += `<tr> <td> ${obj.name} </td> <td> ${obj.courseCode} </td> <td> ${obj.percentage} </td>`;
  }

  outputData += `</table>`;

  document.getElementById("outTable").innerHTML = outputData;
};

document.getElementById("query1").addEventListener("click", showEntireList);

//create a function to populate a table with only MADS4007 course related data
//associate the function with button havind id query2
//show the output data to the same div "outTable"

const showMADS4007List = () => {
  //iterate through entire gradeList

  let outputData = `
         <table>
            <tr> <th> Name </th> <th> Course Code </th> <th> Percentage </th> </tr>
         
    `;

  for (obj of gradeList) {
    if (obj.courseCode === "MADS4007")
      outputData += `<tr> <td> ${obj.name} </td> <td> ${obj.courseCode} </td> <td> ${obj.percentage} </td>`;
  }

  outputData += `</table>`;

  document.getElementById("outTable").innerHTML = outputData;
};

document.getElementById("query2").addEventListener("click", showMADS4007List);

//querySelectorAll() -
//select all the paragraphs having class redHeader

//document.querySelectorAll("p.redHeader").innerHTML = "Selected";

let selectedParas = document.querySelectorAll("p.redHeader");

for (element of selectedParas) {
  element.innerHTML = "Selected";

  //remove the CSS class redHeader from the selected element
  element.classList.remove("redHeader");

  //add CSS class underlineDecor to the selected element
  element.classList.add("underlineDecor");
}


//functions with parameters


//without parameter
// const sayHi = () => {
//   console.log(`Hello`);
// }

// sayHi();

//with parameters
const sayHi = (name) => {
  console.log(`Hello ${name}`);
}

sayHi("pabita");

const addNumbers = (n1, n2) => {
  console.log(`sum = ${n1+n2}`);

  return n1 + n2;
}

let s = addNumbers(1,2);
console.log(`s = ${s}`);