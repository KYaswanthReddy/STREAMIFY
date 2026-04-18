import express from 'express';
const app=express();



app.listen(5001,()=>{
    console.log("http://localhost:5001  is running  ");
});

app.get("/",(req,res)=>{
    res.send("Hello World");
});