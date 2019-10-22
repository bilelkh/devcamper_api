const express = require('express');
const dotenv = require('dotenv');

//Route files 
const bootcamps = require("./routes/bootcamps");


//Load env vars 
dotenv.config({ path: './config/config.env' });

const app = express();

//Mount routers 
app.use('/api/v1/bootcamps',bootcamps)

app.get('/', (req, res) => {
    res.send("Hello from express")
})
const PORT = process.env.PORT;

app.listen(PORT, console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} mode on port ${PORT}`));