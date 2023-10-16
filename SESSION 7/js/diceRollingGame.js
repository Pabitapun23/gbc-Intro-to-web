console.log(`This is a game`);

const playNowPressed = () => {
  console.log("Play now button clicked!");
  let playerResult = "";
  let computerResult = "";
  let winner = "";
  let errMsg = ""

  //Player inputs value of dice
  const playerValueFromUI = document.getElementById("playerInput").value;
  const playerValue = parseInt(playerValueFromUI);

  if (playerValue > 6 || playerValue < 1) {
    errMsg = `Error: Invalid input. Please Enter a number between 1 and 6`;
  } else if (isNaN(playerValue)) {
    errMsg = `Error: Invalid input. Please Enter a number`;
  } else if (playerValue === undefined) {
    errMsg = `Error: Invalid input. Please Enter a number`;
  } else {

    console.log(`PlayerValue: ${playerValue}`);

    //Computer value by random number generation
    const computerValue = Math.floor(Math.random() * 6 + 1);
    console.log(`ComputerValue: ${computerValue}`);

    //Guessing the winner
    //whoever has the greater value between 1 and 6 wins the game and if both of them have same value then it's a tie


    if (playerValue > computerValue) {
      console.log(`Player Wins`);
      winner = "Winner is : Player";
    } else if (playerValue < computerValue) {
      console.log(`Computer Wins`);
      winner = "Winner is : Computer";
    } else {
      console.log(`It's a tie`);
      winner = "It's a Tie";
    }

    //Output the result on screen

    //For dice image result of User Player
    if (playerValue == 1) {
      dice1 = `<img src="./assets/images/dice1.png"></img>`;
    } else if (playerValue == 2) {
      dice1 = `<img src="./assets/images/dice2.png"></img>`;
    } else if (playerValue == 3) {
      dice1 = `<img src="./assets/images/dice3.png"></img>`;
    } else if (playerValue == 4) {
      dice1 = `<img src="./assets/images/dice4.png"></img>`;
    } else if (playerValue == 5) {
      dice1 = `<img src="./assets/images/dice5.png"></img>`;
    } else {
      dice1 = `<img src="./assets/images/dice6.png"></img>`;
    }
    playerResult = `Player Value : ${playerValue} ${dice1}`;


    //For dice image result of Computer
    if (computerValue == 1) {
      dice2 = `<img src="./assets/images/dice1.png"></img>`;
    } else if (computerValue == 2) {
      dice2 = `<img src="./assets/images/dice2.png"></img>`;
    } else if (computerValue == 3) {
      dice2 = `<img src="./assets/images/dice3.png"></img>`;
    } else if (computerValue == 4) {
      dice2 = `<img src="./assets/images/dice4.png"></img>`;
    } else if (computerValue == 5) {
      dice2 = `<img src="./assets/images/dice5.png"></img>`;
    } else {
      dice2 = `<img src="./assets/images/dice6.png"></img>`;
    }
    computerResult = `Computer Value : ${computerValue} ${dice2}`;
  }

  document.getElementById(
    "errMsg"
  ).innerHTML = errMsg;
  document.getElementById("errMsg").style.color = "red";

  document.getElementById(
    "playerResult"
  ).innerHTML = playerResult;
  document.getElementById(
    "computerResult"
  ).innerHTML = computerResult;

  document.getElementById("winner").innerHTML = winner;
};

document.querySelector("button").addEventListener("click", playNowPressed);
