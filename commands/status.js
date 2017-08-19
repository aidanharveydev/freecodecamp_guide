'use strict'

const { name, data } = require('../helpers/user.js').getUser()
console.log(`The current user is ${name}. Run "npm run user" to make changes.`)
const { assignments } = require('../helpers/file.js').parse('schedule')
const current = data.assignments[data.assignments.length - 1 || 0]
if(!current) {
    console.log(`You havent started any assignments yet. Run "npm start" to get started!`)
    return process.exit()
}
const latest = assignments[current.status === 'finished' ? data.assignments.length : data.assignments.length - 1 ]
const moment = require('moment')

console.log(`Your ${ current.status === 'finished' ? 'next assignment is' : `current assignment is`} from ${latest.start} to ${latest.end}.`)
if(current.status === 'working' || current.status === 'finished') console.log(`You started on ${moment(current.start)}`)
if(current.status === 'finished') console.log(`and finished on ${moment(current.end)}`)
//Add analytics down here for ...
// - Average days to complete one assignment
// - Number of working vs break days
// - Completion % of assignments

process.exit()