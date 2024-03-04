const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://tejasyash:tejasyash123@cluster0.t3zi4vx.mongodb.net/database' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose