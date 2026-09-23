const express = require("express")
const app = express()
const router = express.Router()

//start the web server... app.listen(portnumber, function)
app.listen(3000, function(){
    console.log("Listening on port 3000")
});
