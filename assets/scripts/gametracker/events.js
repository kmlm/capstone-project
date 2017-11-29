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
  $('#NewGame').hide()
  $('#CurrentGameDetailsDiv').hide()
  $('#EventsForNewGame').hide()
  store.newGame = null
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
  $('#NewGameInputArea').show()
  $('#NewGameForm').show()
  $('#GamesList').hide()
  $('#OneGame').hide()
  $('#SaveGameButton').show()
  $('#ReturnFromNewGameButton').show()
  $('#NewGameButton').hide()
}

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('click worked')
  store.newGame = {
    date:  document.getElementById('NewGameForm').elements.item(0).value,
    home: document.getElementById('NewGameForm').elements.item(1).value,
    away:  document.getElementById('NewGameForm').elements.item(2).value,
    events: []
}
    api.createGame(store.newGame)
      .then(ui.createGameSuccess)
      .catch(ui.createGameFailure)
}

const onEditCurrentGameDetails = function () {
  $('#CurrentGameDetailsDiv').hide()
  $('#NewGameInputArea').show()
  $('#EditGameForm').show()
  // document.getElementById('NewGameForm').elements.item(0).value = store.newGame.date
  // document.getElementById('NewGameForm').elements.item(1).value = store.newGame.home
  // document.getElementById('NewGameForm').elements.item(2).value = store.newGame.away
}

const editGameDetails = function () {
    store.newGame.date = document.getElementById('EditGameForm').elements.item(0).value
    store.newGame.home =  document.getElementById('EditGameForm').elements.item(1).value
    store.newGame.away = document.getElementById('EditGameForm').elements.item(2).value
    api.editGameDetails()
      .then(ui.editGameDetailsSuccess)
      .catch(ui.editGameDetailsFailure)
  }


const gameTrackerHandlers = function () {
  $('#game-tracker-nav').on('click', onGameTracker)
  $('#NewGameButton').on('click', onNewGame)
  $('#NewGameForm').on('submit', onCreateGame)
  $('#EditGameForm').on('submit', editGameDetails)
  $(document).on('click','.allGamesButton',getOneGame
  )
  $(document).on('click','.deleteGame',deleteGame
  )
  $(document).on('click','.backToAllGamesButtons',onGameTracker
  )
  $(document).on('click','#ReturnFromNewGameButton',onGameTracker)
  $(document).on('click','#EditCurrentGameDetailsButton',onEditCurrentGameDetails)

}



module.exports = {
  gameTrackerHandlers
}
