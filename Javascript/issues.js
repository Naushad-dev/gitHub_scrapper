const request = require("request");
const cheerio = require("cheerio");

function getReposeHtml(url, topic) {
  request(url, cb);

  function cb(error, response, html) {
    if (error) {
      console.log(error);
    } else {
      //console.log(html);
      getIssuehtml(html)
    }
  }

  function  getIssuehtml(html){

  }

}
module.exports=getIssuehtml;