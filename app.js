const express = require("express")
const app = express()
const router = express.Router()

router.get("/songs", function(req, res){
    const song = {
        title: "Uptown Funk",
        artist: "Bruno Mars",
        popularity: 10,
        genre: ["funk", "boogie"]
    }

    res.json(song)
});

// all requests usually using an api start with /api.. so url would be localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)