'use strict'

const { prompt } = require('../helpers/prompt.js')
const { getUser } = require('../helpers/user.js')
const { parse, write } = require('../helpers/file.js')
const { data, name, save } = getUser()
const latest = data.assignments[data.assignments.length - 1]

prompt('Are you sure you want to stop? (Y/N)', 'y/n', result => {

    if(!result) {
        console.log('Alright!')
        return process.exit()
    }

    prompt('Okay! Did you finish all your problems?', 'y/n', result => {

        if(!result) {
            console.log('No worries! Run "npm start" when you are ready to finish.')
            latest.status = 'paused'
            save()

            return process.exit()
        }

        console.log('Congrats! Give yourself a pat on the back and run "npm start" when you\'re ready for the next assignment!')
        latest.status = 'finished'
        latest.end = Date.now()
        save()

        return process.exit()
    })

})