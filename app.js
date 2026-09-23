const express = require("express")
//have to use cors to host a front end and backend on same device
var cors = require('cors')
const app = express()
app.use(cors())
const router = express.Router()

router.get("/songs", function(req, res){

const songs = [
            {
                title: "We Found Love",
                artist: "Rihanna",
                popularity: 10,
                releaseDate: new Date(2011, 9, 22),
                genre: ["electro house"]
            },
            {
                title: "Happy",
                artist: "Pharrell Williams",
                popularity: 10,
                releaseDate: new Date(2013, 11, 21),
                genre: ["soul", "new soul"]
            }
        ];

    res.json(songs)
    })

// all requests usually using an api start with /api.. so url would be localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)