require('dotenv').config();
const cors = require('cors');
const express = require('express');

const PORT = process.env.PORT || 3500;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/projects', require('./routes/api/projects'));

ProjectsDB = require('./config/dbConn');

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});