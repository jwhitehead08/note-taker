// CRUD operations
const router = require('express').Router();
let noteDB = require('../../db/db.json');

router.get("/notes", (req,res)=>{
  noteDB = JSON.parse(fs.readFileSysnc("./db/db.json"))
  res.json(noteDB)
  console.log("GET",noteDB)
})

router.post("/notes", (req,res)=>{
    var userNote = {
        title: req.body.title,
        text:req.body.text,
        id:Math.floor(Math.random() * 160)
    } 
    noteDB.push(userNote)
    fs.writeFileSysnc("./db/db.json",JSON.stringify(noteDB),function(err){
        if(err)console.error(err)
    })
    res.json(noteDB)
    console.log("POST",noteDB)
  })
  

module.exports = router;