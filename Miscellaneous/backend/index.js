const express=require("express");
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));

app.get("/register",(req,res)=>{
    console.log(req.query);
    res.send("standard get request");
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("standard post request");
})

app.listen(port);

