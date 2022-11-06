var express = require('express');
var router = express.Router();
var Notes = require("../db/models/notes")
/* GET home page. */
router.post('/', async function(req, res) {
 const {User }= req.body;
 try {
    const notes= await Notes.find({User});
res.json(notes)
 } catch (error) {
    console.error(error.message);
    res.status(500).send("error");
 }

}
)

module.exports = router;





