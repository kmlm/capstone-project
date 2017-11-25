'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const store = require('./store')

$(() => {
  setAPIOrigin(location, config)
})

$('.team-choice').on('click', (event) => {
  event.preventDefault()
  // $('#ChooseTeam').hide()
  let test = event.target.closest('tr')
  console.log('test is', test)
  let test2 = test.attr('data-id')
  console.log('test 2 is', test2)
  // store.favTeam = this.parent()
  // console.log(store.favTeam)
  })

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
