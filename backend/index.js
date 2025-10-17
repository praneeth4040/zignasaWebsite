const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});