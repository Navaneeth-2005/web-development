const express=require("express");
const app=express();
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));


const port=8080;

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})


app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/hello",(req,res)=>{
    res.send("home");
})
app.get("/rolldice",(req,res)=>{
    let diceData=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:diceData});
})
app.get("/:username",(req,res)=>{
    let username=req.params.username;
    res.send(`this is ${username}`)
})
app.get("/ig/:username",(req,res)=>{
    let username=req.params.username;
    let instaData= require("./data.json");
    let userData=instaData[username];
    
    res.render("instagram.ejs",{userData});
})

