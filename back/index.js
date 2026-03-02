const express = require('express');
const cors = require('cors')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/routes'));
// console.log("check");

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})
