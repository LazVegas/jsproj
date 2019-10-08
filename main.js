// Functions -------------------------

function play() {
    var pPick = prompt("(1) Rock\n(2) Paper\n(3) Scissors\n");
	var cPick = Math.floor(Math.random() * 3) + 1;
    playOneRound(pPick, cPick);
}

function playOneRound(playerPick, computerPick) {

    if (playerPick == 1 && computerPick == 2) {
        alert("Paper beats Rock - you lose!");
        computerScore = computerScore + 1;
        alert("The score is: Player: " + playerScore + ", Computer: " + computerScore);
    } else if (playerPick == 1 && computerPick == 3) {
        alert("Rock beats Scissors - you win!");
        playerScore = playerScore + 1;
        alert("The score is: Player: " + playerScore + ", Computer: " + computerScore);
    } else if (playerPick == 2 && computerPick == 1) {
        alert("Paper beats Rock - you win!");
        playerScore = playerScore + 1;
        alert("The score is: Player: " + playerScore + ", Computer: " + computerScore);
    } else if (playerPick == 2 && computerPick == 3) {
        alert("Scissors beats Paper - you lose!");
        computerScore = computerScore + 1;
        alert("The score is: Player: " + playerScore + ", Computer: " + computerScore);
    } else if (playerPick == 3 && computerPick == 1) {
        alert("Rock beats Scissors - you lose!");
        computerScore = computerScore + 1;
        alert("The score is: Player: " + playerScore + ", Computer: " + computerScore);
    } else if (playerPick == 3 && computerPick == 2) {
        alert("Scissors beats Paper - you win!");
        playerScore = playerScore + 1;
        alert("The score is: Player: " + playerScore + ", Computer: " + computerScore);
    } else {
        alert("Tie!");
        alert("The score is: Player: " + playerScore + ", Computer: " + computerScore);
    }

    if (playerScore == 5) {
        alert("Congratulations, you win");
      	go();
    } else if (computerScore == 5) {
        alert("You lose. Sucker!");
        go();
    } else {
        play();
    }
}

function rules() {
    alert("The game is simple.\nRock beats Scissors.\nPaper beats Rock.\nScissors beats Paper.\nFirst one to 5 wins!!!!\nGood Luck.");
    go();
}

function end() {
    alert("Thank you for playing.");
}

// -------------------------

var playerScore = 0;
var computerScore = 0;

function go() {
    var start = prompt("Roshambo\n\n(1) Play\n(2) Rules\n(3) Exit\n");
    if (start == 1) {
        play();
    } else if (start == 2) {
        rules();
    } else if (start == 3) {
        end();
    } else {
        alert("Really?!  Try again!");
        go();
    }
}

go();