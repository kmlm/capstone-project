'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

$('#next-fixture-button').on('click', () => $('#NextFixture').toggle())

$('#top-scorers-button').on('click', () => $('#Top-Scorers').toggle())

$('#League-Table-button').on('click', ()=> $('#League-Table').toggle())

$('#Form-button').on('click', () => $('#Form').toggle())

$('#Fixtures-button').on('click', () => $('#Fixtures').toggle())

$('#match-centre-button').on('click', () => $('#MatchCentre').toggle())
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
