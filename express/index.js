const express=require("express");
const app=express();

let port=8080;

app.listen(port,()=>{
    console.log(`app is listening  on ${port}`)
})

/*app.use((req,res)=>
{console.log("request recieved");
    res.send("this is a basic response");
});*/

app.get("/apple",(req,res)=>{
    res.send("apple path");
})
app.get("/mango",(req,res)=>{
    res.send("mango path");
})
app.use((req,res)=>{
    res.send("path does notu exist");
})

