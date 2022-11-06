var express = require('express');
var router = express.Router();
const cheerio = require('cheerio');
const axios = require('axios');
const URL = 'https://gradecard.ignou.ac.in/gradecard/view_gradecard.aspx?eno=175194441&prog=BCA&type=1';


/* GET home page. */
router.get('/', function(req, res, next) {
  
  let rank = [];
axios.get(URL).then((response) =>{
let $ = cheerio.load(response.data);
$('#ctl00_Head1').each(function(el, index){

//let rank =$(this).find('td.rankings-block__banner--pos').text().trim();
// let team =$(this).find('tr.rankings-block__banner').text().trim();
// let point =$(this).find('td.rankings-block__banner--points').text().trim();
console.log($(this).text())
return false;
// res.json(team)

})
}).catch((error)=>{console.error();})
});

module.exports = router;
