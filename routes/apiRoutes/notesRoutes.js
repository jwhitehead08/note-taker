const router = require('express').Router();
//const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { notes } = require('../../db/db.json');
var uniqid = require('uniqid'); 

// router.get('/db', (req, res) => {
//   let results = notes;
//   if (req.query) {
//     results = filterByQuery(req.query, results);
//   }
//   res.json(results);
// });

router.get('/notes/:title', (req, res) => {
  const result = findById(req.params.title, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  // req.body.id = notes.length.toString();

  // if (!validateNote(req.body)) {
  //   res.status(400).send('The note is not properly formatted.');
  // } else {
  //   const notes = createNewNote(req.body, notes);
  //   res.json(notes);
  // }
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;