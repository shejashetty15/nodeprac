const path=require('path');
const express=require('express');
const app=express();

const port=800;
const staticPath=path.join(__dirname,"../public")
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send();
})
app.get("/con",(req,res)=>{
    res.send();
})
app.listen(port,()=>{
    console.log ("lsi to port 800")
})