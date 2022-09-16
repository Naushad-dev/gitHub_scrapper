const url="https://www.github.com/topics";
const request= require("request");
const cheerio= require("cheerio");

request(url,cb);

function cb(error,response,html){
    if(error){
        console.log(error)
    }
    else{
       scraper(html)
    }
}

function scraper(html){
    let $=cheerio.load(html);
    
 
}