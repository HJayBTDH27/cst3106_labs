const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path'); 

app.use(express.static('public'));

app.get('/roll-dices', (req, res) => {
    let diceValues = [0,0,0,0,0];

    function rollDice() {
        let x = Math.floor(Math.random() * 6) + 1;
        return x;
    }

    function rollFiveDice() {
        let array = [0,0,0,0,0];
        for (let i = 0; i < 5; i++) {
            array[i] = rollDice();
        }
        return array;
    }
    diceValues = [...rollFiveDice()];

    res.json({diceValues});
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'lab07_yatzy_tester.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
