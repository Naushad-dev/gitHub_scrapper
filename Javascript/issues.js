const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

function getIssuehtml(url, topic, repoName) {
  request(url, cb);

  function cb(error, response, html) {
    if (error) {
      console.log(error);
    } else {
      //console.log(html);
      getIssues(html);
    }
  }

  function getIssues(html) {
    let $ = cheerio.load(html);
    let issueArray = $(
      ".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title"
    );
    console.log(issueArray.length);
    let issuelinkArray = [];
    for (let i = 0; i < issueArray.length; i++) {
      let issueslink = $(issueArray[i]).attr("href");
      issuelinkArray.push(issueslink);
    }
    // console.log(topic, " ", issuelinkArray);

    let folderpath = path.join(__dirname, topic);
    dirCreator(folderpath);
    let filepath = path.join(folderpath, repoName + ".json");
    fs.writeFileSync(filepath, JSON.stringify(issuelinkArray));
  }
  function dirCreator(folderpath) {
    if (fs.existsSync(folderpath) == false) {
      fs.mkdirSync(folderpath);
    }
  }
}
module.exports = getIssuehtml;
