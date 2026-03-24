const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Your input is invalid ! Try again.");
  }
};

const getComputerChoice = () => {
  let computerInput = Math.floor(Math.random() * 3);
  switch (computerInput) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "The Computer somehow messed up... Loading another input...";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie !";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Congrats, computer !";
    } else {
      return "Congrats, human!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Congrats, computer !";
    } else {
      return "Congrats, human!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Congrats, computer !";
    } else {
      return "Congrats, human!";
    }
  } else if (userChoice === "bomb") {
    return "Holy moly, you chose a BOMB! Nevermind, you win :) !";
  }
};

const playGame = () => {
  let userChoice = getUserChoice("rock");
  console.log(`You chose ${userChoice}.`);
  let computerChoice = getComputerChoice();
  if (userChoice !== "bomb") {
    console.log(`Computer chose ${computerChoice}.`);
  }
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
