const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4 } = require("uuid"); 
const methodOverride=require("method-override")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

let posts=[
    {   id:uuidv4(),
        username:"apnacollege",
     content:"i love coding"},
     {id:uuidv4(),
        username:"Navaneeth",
     content:"today i got my first job"},
     {id:uuidv4(),
        username:"preethi",
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
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    console.log(post);
    res.render("show.ejs",{post});
})
app.post("/posts",(req,res)=>{
    console.log(req.body);
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})

app.patch("/posts/:id",(req,res)=>{
    let id=req.params.id;
    let post=posts.find((p)=>id===p.id);
    let newContent=req.body.content;
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("editForm.ejs",{post});
})
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
})