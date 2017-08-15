'use strict'

const data = require('../helpers/parse.js')('./package.json')

console.log('Avaliable commands:')
Object.keys(data.scripts).forEach(key => {
    console.log('   ' + key)
})
console.log('')

process.exit()