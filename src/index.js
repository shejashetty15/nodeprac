const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("hello hi from shetty's server");
});

app.listen(800,()=>{
    console.log("listening to port number 800");
});