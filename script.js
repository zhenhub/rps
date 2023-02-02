let playScore = 0;
let compScore = 0;

function getComputerChoice() {
  // array consist of rock, paper, scissor
  const arr = ["rock", "paper", "scissor"];
  // randomly choose between one of the three choices
  const choice = arr[Math.floor(Math.random() * arr.length)];
  // return the randomized choice
  return choice;
}

function caseInSensitive(arg) {
  // set arg passed through parameters case-insensitive
  return arg.toLowerCase().charAt(0).toUpperCase() + arg.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  // utilize the caseInSensitive() to set parameters case-insensitive
  let playSelect = caseInSensitive(playerSelection);
  let compSelect = caseInSensitive(computerSelection);

  // return values
  let playWin = `You win! Player:[${playSelect}] BEATS Computer:[${compSelect}]`;
  let compWin = `You lose! Computer:[${compSelect}] BEATS Player:[${playSelect}]`;
  let tie = `It's a tie! Player:[${playSelect}] TIES Computer:[${compSelect}]`;

  // compare the choices between player and computer
  // tie if player chose the same choice as computer
  if (playSelect === compSelect) {
    return tie;
    // player wins on the following conditions
  } else if (
    (playSelect === "Rock" && compSelect === "Scissor") ||
    (playSelect === "Paper" && compSelect === "Rock") ||
    (playSelect === "Scissor" && compSelect === "Paper")
  ) {
    playScore++;
    return playWin;
    // if all else returns false, computer wins
  } else {
    compScore++;
    return compWin;
  }
}

function checkWinner() {
  // check score and report a winner
  if (playScore === compScore) {
    return `The score is tied at [${playScore}] : [${compScore}]`;
  } else if (playScore > compScore) {
    return `Player win! [${playScore}] : [${compScore}]`;
  } else {
    return `Computer win! [${compScore}] : [${playScore}]`;
  }
}

function game() {
  // play 5 rounds of RPS
  for (let i = 0; i < 5; i++) {
    // get choices from player and computer
    const playerSelection = prompt("Rock, Paper, Scissor?");
    const computerSelection = getComputerChoice();
    // invoke playRound()
    console.log(playRound(playerSelection, computerSelection));
  }
  // log the winner through checkWinner()
  console.log(checkWinner());
}
game();
