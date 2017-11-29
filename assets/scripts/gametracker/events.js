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
  $('#EventFeed').html('')
  document.getElementById('NewEventForm').reset()
  store.newGame = null
  store.newEvent = null
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
}

const editGameDetails = function () {
    store.newGame.date = document.getElementById('EditGameForm').elements.item(0).value
    store.newGame.home =  document.getElementById('EditGameForm').elements.item(1).value
    store.newGame.away = document.getElementById('EditGameForm').elements.item(2).value
    api.editGameDetails()
      .then(ui.editGameDetailsSuccess)
      .catch(ui.editGameDetailsFailure)
  }

const newEvent = function(event) {
  console.log(store.newGame)
  event.preventDefault()
  const newEvent = {
    minute: document.getElementById('NewEventForm').elements.item(0).value,
    team: document.getElementById('NewEventForm').elements.item(1).value,
    eventType: document.getElementById('NewEventForm').elements.item(2).value,
    player: document.getElementById('NewEventForm').elements.item(3).value,
    comment: document.getElementById('NewEventForm').elements.item(4).value
  }
  store.newGame.events.push(newEvent)
  console.log(store.newGame)
  console.log(store.newGame.events)
  api.newEvent()
    .then(ui.newEventSuccess)
    .catch(ui.newEventFailure)
}

const deleteEvent = function (event) {
  event.preventDefault()
  console.log('pre',store.newGame)
  const div = $(this).closest('div')
  const id = $(div).attr('data-id')
  console.log(div)
  console.log(id)
  // // const updatedEvents = store.newGame.events.filter((event) => event.id !== id)
  // store.newGame.events = updatedEvents
  // console.log('post', store.newGame)
}

const onEditGameFromShow = function () {
  const div1 = $(this).closest('div')
  const div2 = $(div1).closest('div')
  const id = $(div2).attr('data-id')
  api.getOneGame(id)
    .then(ui.onEditGameFromShowSuccess)
    // .then(onNewGame)
    // .then(ui.editGameDetailsSuccess)
    // .then(ui.newEventSuccess)
    .catch(ui.onEditGameFromShowFailure)
}

const gameTrackerHandlers = function () {
  $('#game-tracker-nav').on('click', onGameTracker)
  $('#NewGameButton').on('click', onNewGame)
  $('#NewGameForm').on('submit', onCreateGame)
  $('#EditGameForm').on('submit', editGameDetails)
  $('#NewEventForm').on('submit', newEvent)
  $(document).on('click','.editEvent',deleteEvent
  )
  $(document).on('click','.editGameFromShow',onEditGameFromShow
  )
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
