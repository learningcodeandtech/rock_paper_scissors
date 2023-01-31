function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3)

    if (randomChoice === 0) {
        return 'ROCK'
    } else if (randomChoice === 1) {
        return 'PAPER'
    } else if (randomChoice === 2) {
        return 'SCISSORS'
    }
}