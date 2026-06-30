const express = require('express');
const app = express();
const db = require('./config/db')
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
db();
app.use(express.json());
app.use(cors());

const route = require('./routes/routes');
app.use('/api', route);

const port = process.env.PORT || 9090;

app.listen(port, () => {
    console.log("Server is running on port " + port);
})