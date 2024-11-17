let diceValues = [0,0,0,0,0];

function rollDice() {
    let x = Math.floor(Math.random() * 6) + 1;
    return x;
}

function rollFiveDice() {
    for (let i = 0; i < 5; i++) {
        diceValues[i] = rollDice();
    }

}