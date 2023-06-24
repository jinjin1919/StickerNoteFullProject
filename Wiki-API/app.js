const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static("public"));

//TODO
mongoose.connect('mongodb+srv://jinjin19:bfV5QE6zl1ahp7B4@customer.jjeixpq.mongodb.net/wikiDB?retryWrites=true&w=majority', {useNewUrlParser: true});


const articleSchema = {
    title: String, 
    content: String
}; 

const Article = mongoose.model("articles", articleSchema);

async function getArti(){

    const Items = await Article.find({});
    return Items;
}

async function getArticleByInput(input){

  const Items = await Article.find({title: {$regex: new RegExp(input, "ig")}});
  return Items;
}

async function deletebyTitle(parsedTitle){

  console.log(parsedTitle); 
  const Items = await Article.deleteOne({title: {$regex: new RegExp(parsedTitle, "ig")}});
  return Items;
}

app.get("/articles/:input", function(req, res) {

  console.log(req.params.input); 
  getArticleByInput(req.params.input).then(function(found) {
      console.log(req.params.input); 
      res.send(found); 
  })
})


app.delete("/articles/:input", function(req, res) {

  console.log(req.params.input); 
  deletebyTitle(req.params.input).then(function(err) {
    if(!err){
      res.send("sucessfully deleted item."); 
    }
  })
})



app.get("/articles", function(req, res) {
    getArti().then(function(found) {
        res.send(found); 
    })
})

async function postArti(New){

  const Items = await New.save();
  return Items;
}

app.post("/articles", function(req, res){

  console.log("here is the req body " + req.body); 

  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  }); 

  postArti(newArticle).catch((err) => {
    console.log(err); 
  }); 

  

}); 

// app.get()


  


app.listen(8000, function() {
  console.log("Server started on port 8000");
});