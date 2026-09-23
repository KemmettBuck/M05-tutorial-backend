const express = require("express")
const app = express()
const router = express.Router()

//start the web server... app.listen(portnumber, function)
app.listen(3000, function(){
    console.log("Listening on port 3000")
});

// make api using routes (to handle browser requests)
//GET request 
// app.get("/hello", function(req, res){
//    res.send("<h1>Hello Express</h1>")
// });

// app.get("/goodbye", function(req, res){
//    res.send("<h1>Goodbye Express</h1>")
// });

