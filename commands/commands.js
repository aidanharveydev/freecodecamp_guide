'use strict'

const data = require('../helpers/file.js').parse('package')

console.log('Avaliable commands:')
Object.keys(data.scripts).forEach(key => {
    console.log('   ' + key)
})
console.log('')

process.exit()