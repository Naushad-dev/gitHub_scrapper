const url = "https://www.github.com/topics";
const request = require("request");
const cheerio = require("cheerio");
const getReposeHtml = require("../getReposPage");

request(url, cb);

function cb(error, response, html) {
  if (error) {
    console.log(error);
  } else {
    scraper(html);
  }
}

function scraper(html) {
  let $ = cheerio.load(html);
  let arrElement = $(".no-underline.d-flex.flex-column.flex-justify-center");
  for (let i = 0; i < arrElement.length; i++) {
    let href = $(arrElement[i]).attr("href");
    const topic = href.split("/").pop();
    let fullLink = `https://www.github.com/${href}`;
    getReposeHtml(fullLink, topic);
  }
}
