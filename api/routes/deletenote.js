var express = require('express');
const { findOneAndDelete } = require('../db/models/notes');
var router = express.Router();
var Notes = require("../db/models/notes")

router.post('/', async function(req, res) {
 const {id} = req.body;
 let note = await Notes.findById(id)
 if(!note){return res.status(404).send("Not Found")}
//  if (note.User.toString() !== id) {
//     return res.status(401).send("Not Allowed");
// }
 note = await Notes.findByIdAndDelete(id)
 res.json({ "Success": "Note has been deleted", note: note });

});

module.exports = router;



