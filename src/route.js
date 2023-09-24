const express=require('express');
const app=express();
const port=800;
app.get("/",(req,res)=>{
    res.send("<h1>hjadjsadnjksdc</h1>")
})
app.get("/home",(req,res)=>{
    res.send({
        num:1,
        name:"shetty",
        phone:"6382318123"
    });
})
app.get("/con",(req,res)=>{
    res.send("bcsdcbsjdc")
})
app.listen(port,()=>{
    console.log(`listening to port number${port}`);
})