'use strict'

const ask = require('prompt')

function prompt(description, type, callback) {
    ask.get({
        description,
        type: 'string'
    }, (err, { question }) => {
        if(type === 'y/n') {
            if(question.toLowerCase().indexOf('y') !== -1) return callback(true)
            return callback(false)
        } else if(type === 'str') {
            return callback(question.toLowerCase())
        }
    })
}

module.exports = { prompt }