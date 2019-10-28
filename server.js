const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const ErrorResponse = require("./utils/errorResponse") ;
dotenv.config({ path: './config/config.env' });
const connectDB = require('./config/db')
    //Route files 
const bootcamps = require("./routes/bootcamps");

//Connect to database 
connectDB();

//Load env vars 

const app = express();
app.use(express.json());


const logger = (req, res, next) => {
        req.hello = 'Hello word';
        next();
    }
    //DEV logging middleware 



//app.use(morgan);

//Mount routers 
app.use('/api/v1/bootcamps', bootcamps);
app.use(errorHandler);


app.get('/', (req, res) => {
    res.send("Hello from express")
})
const PORT = process.env.PORT;
console.log("===MONGO_URI===", process.env.PORT)

app.listen(PORT, console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
});