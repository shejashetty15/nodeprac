const express=require("express");
const path=require('path');
const hbs=require('hbs');
const requests=require('requests');
const app=express();
const staticPath=path.join(__dirname,"../public/css");
const templatePath=path.join(__dirname,"../templates/views");
const partialspath=path.join(__dirname,"../templates/partials")

app.use(express.static(__dirname + '/../public/css'));
app.use("/public", express.static(path.join(__dirname, "/../public")));


app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialspath);
// app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.render('index');
});

// app.get("",(req,res)=>{
//     res.send("jsdhsdbjk");
// })
//now challenege for weather data dynamcis

app.get('/about',(req,res)=>{
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=f1ece578158b47a64485aab318ccbf89
        `)
        .on("data", (chunk) => {
            const objdata= JSON.parse(chunk);
            const arrData=[objdata];
            console.log(`city is ${arrData[0].name}and temp is${arrData[0].main.temp}`);
        // console.log(arrData[0].main.temp);
        
        // const realTimeData= arrData
        
      
        
        res.write(arrData[0].name);
        
        //console.log(realTimeData);
        
        }) .on("end", (err) => {
        
        if (err) return console.log("connection closed due to errors", err);
        
        res.end();
        
        });
})






//for query parctice



// app.get("/about",(req,res)=>{
//     console.log(req.query.aname);
//     res.render('about',{
//         name:req.query.aname,
//     });
// })
app.get("/about/*",(req,res)=>{
    res.render('404',{
        errorcomment:"Oops the about page data cant be found",
    });
});
app.get("*",(req,res)=>{
    res.render('404',{
        errorcomment:"Oops the page cant be found",
    });
});
app.listen(800,()=>{
    console.log("lsitrtjd");
})