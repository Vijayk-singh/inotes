const cheerio = require('cheerio');
const axios = require('axios');
const URL = 'https://www.icc-cricket.com/rankings/mens/team-rankings/t20i';


let rank = [];
axios.get(URL).then((response) =>{

}).catch((error)=>{console.error();})