const express = require('express');
const https = require('https');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
})
app.post("/", function(req, res){
    res.sendFile(__dirname + "/success.html");
});
app.post("/", function(req, res){
    res.sendFile(__dirname + "/fail.html");
});
app.post("/failure", function(req, res){
    res.redirect("/");
})
app.listen(3000, function () {
    console.log("server running...");
  })

