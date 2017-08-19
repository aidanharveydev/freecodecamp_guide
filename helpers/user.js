'use strict'

const { parse, write } = require('./file.js')

function getUser(user) {
    if(!user) user = parse('settings').user
    const data = parse(`${user}-status`)

    function save() {
        write(`${user}-status`, data)
    }            

    return { data, name: user, save }
}

function newUser(name) {
    write(`${name}-status`, {"assignments": []})
    const settings = parse('settings')
    settings.user = name
    write('settings', settings)
}

function switchUser(name) {
    const settings = parse('settings')
    settings.user = name
    write('settings', settings)
}

module.exports = { getUser, newUser, switchUser }