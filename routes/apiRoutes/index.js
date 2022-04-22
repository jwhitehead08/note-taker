// CRUD operations
const router = require('express').Router();
let noteDB = require('../../db/db.json');
const fs = require("fs")

router.get("/notes", (req, res) => {
    noteDB = JSON.parse(fs.readFileSync("./db/db.json"))
    res.json(noteDB)
    console.log("GET", noteDB)
})

router.post("/notes", (req, res) => {
    var userNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 160)
    }
    noteDB.push(userNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(noteDB), function (err) {
        if (err) console.error(err)
    })
    res.json(noteDB)
    console.log("POST", noteDB)
})

router.delete("/notes/:id", (req, res) => {
    console.log(req.params.id,"DELETE ROUTE")
    let newNotes = []
    for (i = 0; i < noteDB.length; i++) {
        if (noteDB[i].id != req.params.id) {
            newNotes.push(noteDB[i])
        }
    }
    noteDB = newNotes
    fs.writeFileSync("./db/db.json", JSON.stringify(noteDB), function (err) {
        if (err) console.error(err)
    })
    res.json(noteDB)
    console.log("DELETE", noteDB)
})



module.exports = router;