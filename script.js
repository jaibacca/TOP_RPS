function game() {
        
    let round = 1;
    let maxRounds = 5;
    
    console.log("GAME START! Playing " + maxRounds + " rounds.");
    
    for(round; round <= maxRounds; round++) {
        console.log("ROUND " + round);
        let computerSelection = computerPlay();
        let playerInput = prompt("Please play ROCK, PAPER, or SCISSORS");
        let result = playRound(playerInput, computerSelection);
        console.log(result);
    }
}

function playRound(playerSelection, computerSelection) {
    let play = playerSelection.toUpperCase();
    console.log(play);
    let comp = computerSelection.toUpperCase();
    console.log(comp);
    // Input Validation
    if(play != "ROCK" && play != "PAPER" && play != "SCISSORS") {
        return "Sorry, that's not a valid play. Try again.";
    }
    // Win Condition
    if((play == "ROCK" && comp == "SCISSORS") ||
       (play == "PAPER" && comp == "ROCK") ||
       (play == "SCISSORS" && comp == "PAPER")) {
        return (play + " beats " + comp + ": You Win!");
    }
    // Lose Condition
    if((play == "SCISSORS" && comp == "ROCK") ||
       (play == "ROCK" && comp == "PAPER") ||
       (play == "PAPER" && comp == "SCISSORS")) {
        return (comp + " beats " + play + ": You Lose!");
    }
    // Draw Condition
    if (play == comp) {
        return "Both played " + play + ": Draw Game!"
    }
    else return "ERROR: Outside edge case reached"
        
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*100) % 3;
    if (randomNumber == 0) {
        return "Rock";
    }
    if (randomNumber == 1) {
        return "Paper";
    }
    if (randomNumber == 2) {
        return "Scissors";
    }
}


let playCount = 0;
let compCount = 0;

const buttons = document.querySelectorAll('.playerBtn');

const ticker = document.querySelector('#resultsTicker');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetGame() {
    removeAllChildNodes(ticker);
    playCount = 0;
    compCount = 0;
}

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      const computerChoice = computerPlay();
      const result = playRound(button.id.toUpperCase(), computerChoice);

      const div = document.createElement('div');
      div.textContent = result;
      ticker.appendChild(div);

      if (result.includes("Win!")) {
        playCount++;
      }
      if (result.includes("Lose!")) {
        compCount++;
      }
      if (playCount == 5) {
        alert(playCount + "-" + compCount + ": Victory!");
        resetGame();
      }
      if (compCount == 5) {
        alert(playCount + "-" + compCount + ": Defeat.");
        resetGame();
      }
    });
});  