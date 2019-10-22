const mongoose = require('mongoose');

console.log("===MONGO_URI===",process.env.PORT)

const connectDB = async() => {

    const conn = await mongoose.connect(process.env.MONGO_URI, {

        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })

    console.log(`MONGODB CONNECTED SUCCESSFULLY`.red.bold)
}


module.exports = connectDB ;