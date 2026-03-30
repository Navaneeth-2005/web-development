const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

let posts=[
    {username:"apnacollege",
     content:"i love coding"},
     {username:"Navaneeth",
     content:"today i got my first job"},
     {username:"preethi",
     content:"i love web development"},
    ]
app.listen(port,()=>{
    console.log("app listening");
});

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("newPost.ejs");
})
app.post("/posts",(req,res)=>{
    console.log(req.body);
    let {user,content}=req.body;
    console.log(user);
    console.log(content);
    posts.push({username:user,content:content});
    res.redirect("/posts");
})
