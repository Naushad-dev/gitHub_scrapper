const request = require("request");
const cheerio = require("cheerio");
const getIssuehtml = require("./issues");

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
      let mainheadingLink = $(linksgot[1]).attr("href");
      const repoName = mainheadingLink.split("/").pop();
      // console.log(mainheadingLink);

      let issueLink = `https://www.github.com${mainheadingLink}/issues`;
      getIssuehtml(issueLink, topic,repoName);
    }
    console.log("'''''''''''...................");
  }
}
module.exports = getReposeHtml;
