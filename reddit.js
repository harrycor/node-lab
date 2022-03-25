let path = require("path");
let fs = require("fs");
let requestP = require("request-promise");
let filePath = path.join(__dirname, "/popular-articles.json")
const valid_types = ['.jpg', 'gif', '.png'];

let isDownloadable = (ex) => valid_types.includes(ex)
requestP("https://www.reddit.com/r/popular.json")
    .then(hugeResp => {
        const parsedData = JSON.parse(hugeResp).data.children;
        const formattedData = parsedData.map((val) => {
            let loopedReturn = {
                "title": val.data.title,
                "author": val.data.author,
                "url": val.data.url
            }
            if (isDownloadable(path.extname(loopedReturn.url))) {
                console.log('yuppers', loopedReturn.url);
            }
        })

        // fs.writeFileSync(filePath, JSON.stringify(formattedData), err => {
        //     if(err) return console.log(err);
        // })
    })