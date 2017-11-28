const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const dashboard = require('../dashboard/events')

const onGameTracker = function () {
  $('#GameTracker').show()
  $('#Dashboard').hide()
  $('#ChooseTeam').hide()
  $('#OneGame').hide()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const getOneGame = function () {
  const div = $(this).closest('div')
  const data = $(div).attr('data-id')
    api.getOneGame(data)
      .then(ui.getOneGameSuccess)
      .catch(ui.getOneGameFailure)
}

const deleteGame = function () {
  const div = $(this).closest('div')
  const data = $(div).attr('data-id')
    api.deleteGame(data)
      .then(ui.deleteGameSuccess)
      .then(api.getGames)
      .then(ui.getGamesSuccess)
      .catch(ui.deleteGameFailure)
}

const onNewGame = function () {
  $('#NewGame').show()
  $('#GamesList').hide()
  $('#OneGame').hide()
}

const gameTrackerHandlers = function () {
  $('#game-tracker-nav').on('click', onGameTracker)
  $('#NewGameButton').on('click', onNewGame)
  $(document).on('click','.allGamesButton',getOneGame
  )
  $(document).on('click','.deleteGame',deleteGame
  )
  $(document).on('click','.backToAllGamesButtons',onGameTracker
  )
}



module.exports = {
  gameTrackerHandlers
}
