const fs = require('fs')

function parse(file) {
    if(file === 'package') return JSON.parse(fs.readFileSync('./package.json'))
    return JSON.parse(fs.readFileSync(`./data/${file}.json`))
}

function write(file, data) {
    fs.writeFileSync(`./data/${file}.json`, JSON.stringify(data))
}

module.exports = { parse, write }