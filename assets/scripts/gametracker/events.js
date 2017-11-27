const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const dashboard = require('../dashboard/events')

const onGameTracker = function () {
  $('#GameTracker').show()
  $('#Dashboard').hide()
  $('#ChooseTeam').hide()
}

const gameTrackerHandlers = function () {
  $('#game-tracker-nav').on('click', onGameTracker)
}



module.exports = {
  gameTrackerHandlers
}