let score = 0;
let tries = 3;

function play(playerChoice) {
    if (tries === 0) {
        alert("Game over!");
        return;
    }

    tries--;

    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getResult(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
    
    if (result === 'win') {
        score++;
        document.getElementById('score').innerText = score;
    }

    document.getElementById('tries').innerText = tries;
}

function getResult(player, computer) {
    if (player === computer) {
        return 'tie';
    }
    switch (player) {
        case 'rock':
            return (computer === 'scissors' || computer === 'lizard') ? 'win' : 'lose';
        case 'paper':
            return (computer === 'rock' || computer === 'spock') ? 'win' : 'lose';
        case 'scissors':
            return (computer === 'paper' || computer === 'lizard') ? 'win' : 'lose';
        case 'lizard':
            return (computer === 'spock' || computer === 'paper') ? 'win' : 'lose';
        case 'spock':
            return (computer === 'rock' || computer === 'scissors') ? 'win' : 'lose';
        default:
            return 'error';
    }
}

function displayResult(player, computer, result) {
    let message = `You chose ${player}, computer chose ${computer}. `;
    switch (result) {
        case 'win':
            message += 'You win!';
            break;
        case 'lose':
            message += 'You lose!';
            break;
        case 'tie':
            message += "It's a tie!";
            break;
        default:
            message += 'Error!';
            break;
    }
    document.getElementById('result').innerText = message;
}
