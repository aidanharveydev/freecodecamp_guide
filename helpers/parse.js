const fs = require('fs')

function parse(file) {
    return JSON.parse(fs.readFileSync(file))
}

module.exports = parse