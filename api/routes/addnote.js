



var express = require('express');
var router = express.Router();
var Notes = require("../db/models/notes")
/* GET home page. */
router.post('/', async function(req, res) {
 //res.render('index', { title: 'Express' });
  const {title, body, User} = req.body;

//  let note = await Notes.findOne({ title: req.body.title });
//  if (note) {
//    return res
//      .status(400)
//      .json({ error: "Sorry a user with this note already exists" });
//  }

 const note = await new Notes({
   title, body, User
 });
 const savedNote =await note.save()
 res.json(savedNote)
});

module.exports = router;






 