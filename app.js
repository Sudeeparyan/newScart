var express=require('express');
const app=express();
const port=2800;
const mongo= require('mongodb');
const MongoClient=mongo.MongoClient;
const mongourl="mongodb+srv://Sudeep:vnktsbhg9@cluster0.rvlj3.mongodb.net/S-cart?retryWrites=true&w=majority"
var db;

app.get('/',(req,res) =>{
    res.send("Welcome to Api")
})
app.get('/mobiles',(req,res)=>{
    db.collection('mobiles').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongourl,(err,client)=>{
    if(err) console.log("error while connecting");
    db=client.db('S-cart');
})
app.listen(port,()=>{
    console.log(`listening on port no ${2800}`)
})