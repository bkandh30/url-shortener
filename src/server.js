const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const urlRoutes = require('./routes/urlRoutes');

const app = express();
const PORT = 8000;

connectDB();

app.use(bodyParser.json());

app.use('/', urlRoutes);
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is Running on the ${PORT}`);
})