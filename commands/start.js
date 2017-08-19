'use strict'

const { prompt } = require('../helpers/prompt.js')
const { getUser } = require('../helpers/user.js')
const { parse, write } = require('../helpers/file.js')
const { data, name, save } = getUser()
const latest = data.assignments[data.assignments.length - 1]

prompt(`Are you ready to ${latest && latest.status === 'paused' ? 'resume your section' :'start the next section'}? (Y/N)`,'y/n' , result => {
    
    const { assignments } = parse('schedule')

    if(!latest || latest.status === 'finished') {

        const current = assignments[data.assignments.length]

        prompt(`Your next assignment is from "${current.start}" to "${current.end}". A total of ${current.number} problems! Are you sure you're ready? (Y/N)`, 'y/n', result => {
            
            if(!result) {
                console.log('No problem! Just run "npm start" when you\'re ready to start.')
                return process.exit()
            }

            console.log(`Alright! Here is the link to start: ${current.url}`)

            data.assignments.push({
                status: 'working',
                number: assignments[data.assignments.length].number,
                start: Date.now(),
                end: 0
            })
            save()

            return process.exit()
        })
    } else if(latest.status === 'paused') {

        const current = assignments[data.assignments.length - 1]

        prompt(`Your current assignment is from "${current.start}" to "${current.end}". Are you sure you're ready to resume? (Y/N)`, 'y/n', result => {

            if(!result) {
                console.log('No problem! Just run "npm start" when you\'re ready to resume.')
                return process.exit()
            }

            console.log('Alright! Good luck! Remember to run "npm run stop" when you\'re done or need a break!')

            data.assignments[data.assignments.length -1].status = 'working'
            save()

            return process.exit()
        })
    } else {
        console.log('Error')
        return process.exit()
    }

})
