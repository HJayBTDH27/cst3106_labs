const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path'); 

app.use(express.static('public'));

app.get('/roll-dices', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'lab06_yatzy_tester.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
