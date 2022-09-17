const request = require("request");
const cheerio = require("cheerio");

function getReposeHtml(url, topic) {
  request(url, cb);

  function cb(error, response, html) {
    if (error) {
      console.log(error);
    } else {
      //console.log(html);
      getRepoLink(html);
    }
  }
  function getRepoLink(html) {
    let $ = cheerio.load(html);
    let headingLink = $(".f3.color-fg-muted.text-normal.lh-condensed");
    console.log(topic);
    for (let i = 0; i < 10; i++) {
      let linksgot = $(headingLink[i]).find("a");
      let mainheadingLink = $(linksgot).attr("href");
      console.log(mainheadingLink);
    }
    console.log("'''''''''''...................");
  }
}
module.exports = getReposeHtml;
