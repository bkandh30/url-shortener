const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.URI, {});
        console.log("Connected to MONGODB ...")
    } catch (err) {
        console.error('Error connecting to the Database: ', err);
    }
} 

module.exports = connectDB;