const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=> console.log("Connected to DB")).catch((err)=> console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);    
}

const initDB = async ()=>{
    await Listing.deleteMany({});//to delete previous data
    initData.data = initData.data.map((obj)=>({...obj, owner:'68714ad447c49d5c70cb5d24'}));
    await Listing.insertMany(initData.data);//insert data
    console.log("Database is initialized");
};

initDB();