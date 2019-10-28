const ErrorResponse = require('../utils/errorResponse')
const errorHander = (err, req, res, next) => {
    console.log("===err===", err);
    let error = {...err }
    error.message = err.message;
    //Log to console for dev 
    // console.log("===err===", err);

    // mongoose bad ObjectId 

    if (err.name === 'CastError') {
        const message = `Bootcamp not found with id of ${err.value}`;
        error = new ErrorResponse()
    }

    // Mongoose duplicate key 
    if (err.name === "Validatio required") {
        const message = Object.values(err.errors).map(val.message);
        error = new ErrorResponse(message, 400)
    }

    // Mongooose duplicate key 

    if (error.code === 11000) {
        const message = 'Duplicate field value entred';
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })
    res.status(500)
}

module.exports = errorHander;