// JAI SHREE SHYAM
const express= require('express');
const app = express();
app.set('view engine','ejs');
var things= ["C++", "Java"];

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
     var today = new Date();
     var options = {
         weekday :"long",
         day : "numeric",
         month : "long"
     };
     var dat = today.toLocaleDateString("en-US",options);
    res.render("index",{date:dat,thindgs:things});

});
app.post("/",function(req,res){
    var dy = req.body.todo;
      things.push(dy);
      res.redirect("/");
})
app.listen(3000,function(){
    console.log("Server is working");
});