'use strict'

const { prompt } = require('../helpers/prompt.js')
const { getUser, switchUser, newUser } = require('../helpers/user.js')
let user = getUser()

prompt(`The current user is ${user.name}. Would you like to change it? (Y/N)`, 'y/n', result => {
    if(!result) {
        console.log('Alright!')
        return process.exit()
    }
    prompt(`Do you want to switch to an existing user? (Y/N)`, 'y/n', result => {
        if(result) {
            prompt(`Okay! Please enter the name of an existing user.`, 'str', result => {
                switchUser(result)
                return process.exit()
            })
        } else {
            prompt(`Would you like to create a new user? (Y/N)`, 'y/n', result => {
                if(!result) return process.exit()
                prompt(`Alright! Enter in the name for a new user.`, 'str', result => {
                    newUser(result)
                    return process.exit()
                })
            })
        }
    })
})