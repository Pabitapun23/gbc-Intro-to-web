//function here
const calculateElectricityBill = () => {
  console.log("Button Pressed!");

  // initializing variable for validation error message
  let errMsg = "";
  let hasErrorField = false;

  //clear error msg
  document.getElementById("error-msg-on-peak").innerHTML = "";
  document.getElementById("error-msg-off-peak").innerHTML = "";

  // CLEAR any existing output
  document.querySelector("section").innerHTML = "";

  // User inputs data to calculate
  //this is a string data for on peak hours that user inputs from textbox
  let inputOnPeakHours = document.getElementById("userOnPeakHour").value;

  //Checking error condition : whether the input for on peak hours textbox is non-empty and valid number or not
  if (
    inputOnPeakHours.trim() == "" ||
    isNaN(inputOnPeakHours) ||
    parseFloat(inputOnPeakHours) < 0
  ) {
    errMsg = "Enter a valid hours";
    hasErrorField = true;
    document.getElementById("error-msg-on-peak").innerHTML = `${errMsg}`;
  } else {
    //converts input string data to float
    inputOnPeakHours = parseFloat(inputOnPeakHours);
  }

  //same for off peak hours textbox
  let inputOffPeakHours = document.getElementById("userOffPeakHour").value;

  //Checking error condition : whether the input for off peak hours textbox is non-empty and valid number or not
  if (
    inputOffPeakHours.trim() == "" ||
    isNaN(inputOffPeakHours) ||
    parseFloat(inputOffPeakHours) < 0
  ) {
    errMsg = "Enter a valid hours";
    hasErrorField = true;
    document.getElementById("error-msg-off-peak").innerHTML = `${errMsg}`;
  } else {
    //converts input string data to float
    inputOffPeakHours = parseFloat(inputOffPeakHours);
  }

  //don't proceed further if any of the fields has an error
  if (hasErrorField) {
    return false;
  }

  //variables for storing calculated electricity bill
  let OnPeakConsumptionCharges = "";
  let OffPeakConsumptionCharges = "";
  let GrossConsumptionCharges = "";
  let salesTax = "";
  let provincialRebate = "";
  let netConsumptionCharges = "";

  //getting selected province residence's value
  const userSelectFromUI = document.querySelector("select").value;

  console.log(`The user inputs on peak data: ${inputOnPeakHours}`);
  console.log(`The user inputs off peak data: ${inputOffPeakHours}`);
  console.log(`The selected province of residence is: ${userSelectFromUI}`);

  //Calculate electricity bill
  // Charge for on peak hours = $0.132/kWh
  // Charge for off peak hours = $0.065/kWh
  //.toFixed(2): for 2 decimal places
  OnPeakConsumptionCharges = (inputOnPeakHours * 0.132).toFixed(2);
  OffPeakConsumptionCharges = (inputOffPeakHours * 0.065).toFixed(2);

  //Calculating total consumption charges : sum of on-peak usage and off-peak usage
  //parseFloat(): converts the datas into float and stores it as float
  //.toFixed(2): for 2 decimal places
  GrossConsumptionCharges = (
    parseFloat(OnPeakConsumptionCharges) + parseFloat(OffPeakConsumptionCharges)
  ).toFixed(2);

  //Sales Tax Calculation
  //HST is 13% of Gross Consumption Charges
  salesTax = parseFloat(GrossConsumptionCharges * 0.13).toFixed(2);

  //Calculate Provincial Rebate : it will be 8% of gross consumption charges for residents of British Columbia 
  //and 0 for residents of other places
  if (userSelectFromUI === "1") {
    provincialRebate = (GrossConsumptionCharges * 0.08).toFixed(2);
  } else {
    provincialRebate = parseFloat(0).toFixed(2);
  }

  //Net Consumption Charges : (Gross Consumption Charges + HST - Provincial Rebate)
  //Calculate total consumption charges that user has to pay
  netConsumptionCharges = (
    parseFloat(GrossConsumptionCharges) +
    parseFloat(salesTax) -
    parseFloat(provincialRebate)
  ).toFixed(2);

  //Outputs in console
  console.log(`On Peak Charges: ${OnPeakConsumptionCharges}`);
  console.log(`Off Peak Charges: ${OffPeakConsumptionCharges}`);
  console.log(`Total Consumption Charges: ${GrossConsumptionCharges}`);
  console.log(`Sales Tax: ${salesTax}`);
  console.log(`Provincial Rebate: ${provincialRebate}`);
  console.log(`YOU MUST PAY: ${netConsumptionCharges}`);

  // Showing output on html
  const output = ` 
    <section id="receipt-container-section">
        <div class="box">
            <div class="on-peak-box">
                <h2>ON PEAK USAGE</h2>
                <p class="calculated-amount">$${OnPeakConsumptionCharges}</p>
                <p>$${inputOnPeakHours} @ $0.132/kWh</p>
            </div>
            <div class="off-peak-box">
                <h2>OFF PEAK USAGE</h2>
                <p class="calculated-amount">$${OffPeakConsumptionCharges}</p>
                <p>$${inputOffPeakHours} @ $0.065/kWh</p>
            </div>
        </div>

        <section id="receipt-amount-section">
            <p>Total Consumption Charges: <span>$${GrossConsumptionCharges}</span></p>
            <p>Sales Tax (13%): <span>$${salesTax}</span></p>
            <p>Provincial Rebate: <span>$${provincialRebate}</span></p>
        </section>

        <section id="total-amount-section">
            <h2>TOTAL TO PAY</h2>
            <p>$${netConsumptionCharges}</p>
        </section>
    </section>  
    `;

  // append that html to the section element
  document.querySelector("section").innerHTML += output;
};

//Event detect here
document
  .querySelector("#btn-calculate")
  .addEventListener("click", calculateElectricityBill);
