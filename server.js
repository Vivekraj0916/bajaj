const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.json());


app.get('/bajaj-backend', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.post('/bajaj-backend', (req, res) => {
    const { data } = req.body;


    const userInfo = {
        user_id: "vivekraj07",
        email: "22BCS16334@cuchd.in",
        roll_number: "22BCS16334"
    };

    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            ...userInfo,
            numbers: [],
            alphabets: [],
            highest_alphabet: []
        });
    }

   
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().pop().toUpperCase()] : [];


    res.json({
        is_success: true,
        ...userInfo,
        numbers,
        alphabets,
        highest_alphabet
    });
});


const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
