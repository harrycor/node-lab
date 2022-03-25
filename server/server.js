let path = require("path");
let fs = require("fs");

let chirps = [
    {
        name: "tony",
        msg: "I'm a tiger brah"
    },
    {
        name: "The Dude",
        msg: "C'mon. Lets go bowling"
    },
    {
        name: "Santa",
        msg: "Beaches and hohoho's"
    },
    {
        name: "Batman",
        msg: "Where are they!?"
    },
    {
        name: "Billy Madison",
        msg: "ooowwwwwww"
    }
];
let chirpFilePath = path.join(__dirname, "../chirps.json");
// fs.writeFileSync(chirpFilePath, JSON.stringify(chirps), err => {
//     console.log(err)
// })


fs.readFile(chirpFilePath, {
    encoding: "utf-8"
}, (err, data) => {
    console.log(data)
})
// fs.readFile(chirpFilePath, (err, data) => {
//     console.log(data.toString())
// })

