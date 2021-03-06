const store = require('../store.js')
const showGamesTemplate = require('../templates/game-index.handlebars')
const showOneGameTemplate = require('../templates/game-show.handlebars')
const currentGameDetailsTemplate = require('../templates/currentGameDetails.handlebars')
const eventFeedTemplate = require('../templates/event-feed.handlebars')
const noEventsTemplate = require('../templates/no-events.handlebars')

const getGamesSuccess = function (games) {
  $('#GamesList').show()
  $('#SaveGameButton').hide()
  $('#ReturnFromNewGameButton').hide()
  $('#NewGameButton').show()
  store.games = games.games
//   console.log(store.games)
//   const dateConvert = function (input) {
//     for (let i = 0; i < input.length; i++) {
//       const array1 = input[i].date.split('T')[0].split('-')
//       const fixedArray = []
//       fixedArray[0] = array[1]
//       fixedArray[1] = array[2]
//       fixedArray[2] = array[0]
//       const converted = fixedArray.join('-')
//       store.games[i].date = converted
//   }
//   return store.games
// }
//   dateConvert(store.games)
//   console.log(store.games)
  const userGames = store.games.filter((game) => game._owner === store.user.id)
  const showGames = showGamesTemplate({
    games: userGames
  })
  $('#GamesList').html(showGames)
}

const getGamesFailure = function () {
  $('#doc-message').text('Unable to Retrieve Games at this time')
}

const getOneGameSuccess = function (game) {
  $('#NewGame').hide()
  // const dateConvert = function(input) {
  //   const array = input.date.split('T')[0].split('-')
  //   const fixedArray = []
  //   fixedArray[0] = array[1]
  //   fixedArray[1] = array[2]
  //   fixedArray[2] = array[0]
  //   const converted = fixedArray.join('-')
  //   return converted
  // }
  // const convertedDate = dateConvert(game.game)
  // game.game.date = convertedDate
  $('#GamesList').hide()
  $('#OneGame').show()
  const showGame = showOneGameTemplate({
    game: game.game
  })
  const showNoEvents = noEventsTemplate({
    game: game.game
  })
  if (game.game.events.length === 0) {
    $('#OneGame').html(showNoEvents)
  } else {
    $('#OneGame').html(showGame)
  }
}

const getOneGameFailure = function () {
  $('#doc-message').text('Unable to Retrieve Game at this Time')
}

const deleteGameSuccess = function () {
  $('#doc-message').text('Game Deleted Successfully')
  $('#OneGame').hide()
}

const deleteGameFailure = function () {
  $('#doc-message').text('Unable to Delete Game')
}

const createGameSuccess = function (data) {
  $('#EventsForNewGame').show()
  document.getElementById('NewGameForm').reset()
  $('#NewGameForm').hide()
  // const dateConvert = function (input) {
  //   const array = input.split('-')
  //   const fixedArray = []
  //   fixedArray[0] = array[1]
  //   fixedArray[1] = array[2]
  //   fixedArray[2] = array[0]
  //   const converted = fixedArray.join('-')
  //   return converted
  // }
  // const convertedDate = dateConvert(store.newGame.date)
  // store.newGame.date = convertedDate
  store.newGame.id = data.game.id
  const currentGameDetails = {
    date: store.newGame.date,
    home: store.newGame.home,
    away: store.newGame.away
  }
  const showCurrentGameDetails = currentGameDetailsTemplate({
    game: currentGameDetails
  })
  $('#NewGameInputArea').hide()
  $('#CurrentGameDetailsDiv').show()
  $('#CurrentGameDetailsDiv').html(showCurrentGameDetails)
  $('#EventFeed').html("<div class ='container'><h3> Your events will display here</h3></div>")
}

const createGameFailure = function () {
  $('#doc-message').text('Unable to Create Game')
}

const editGameDetailsSuccess = function () {
  // const dateConvert = function (input) {
  //   const array = input.split('-')
  //   const fixedArray = []
  //   fixedArray[0] = array[1]
  //   fixedArray[1] = array[2]
  //   fixedArray[2] = array[0]
  //   const converted = fixedArray.join('-')
  //   return converted
  // }
  // const convertedDate = dateConvert(store.newGame.date)
  // store.newGame.date = convertedDate
  const currentGameDetails = {
    date: store.newGame.date,
    home: store.newGame.home,
    away: store.newGame.away
  }
  const showCurrentGameDetails =
  currentGameDetailsTemplate({
    game: currentGameDetails
  })
  $('#EditGameForm').hide()
  document.getElementById('EditGameForm').reset()
  $('#NewGameInputArea').hide()
  $('#CurrentGameDetailsDiv').show()
  $('#CurrentGameDetailsDiv').html(showCurrentGameDetails)
}

const editGameDetailsFailure = function () {
  $('#doc-message').text('Unable to Edit Game')
}

const newEventSuccess = function () {
  document.getElementById('NewEventForm').reset()
  store.deleteEventId = null
  const showEventFeedTemplate = eventFeedTemplate({
    events: store.newGame.events
  })
  $('#EventFeed').html(showEventFeedTemplate)
}

const newEventFailure = function () {
  $('#doc-message').text('Unable to Create New Event')
}

// const deleteEventSuccess = function () {
//   console.log('ui success')
// }
//
// const deleteEventFailure = function () {
//   console.error()
// }

const onEditGameFromShowSuccess = function (data) {
  $('#GamesList').hide()
  $('#OneGame').hide()
  $('#ReturnFromNewGameButton').show()
  $('#NewGame').show()
  $('#NewGameForm').hide()
  $('#NewGameInputArea').hide()
  $('#NewGameButton').hide()
  document.getElementById('NewEventForm').reset()
  store.newGame = data.game
  $('#EventsForNewGame').show()
  // const dateConvert = function (input) {
  //   const array = input.split('-')
  //   const fixedArray = []
  //   fixedArray[0] = array[1]
  //   fixedArray[1] = array[2]
  //   fixedArray[2] = array[0]
  //   const converted = fixedArray.join('-')
  //   return converted
  // }
  // const convertedDate = dateConvert(store.newGame.date)
  // store.newGame.date = convertedDate
  store.newGame.id = data.game.id
  const currentGameDetails = {
    date: store.newGame.date,
    home: store.newGame.home,
    away: store.newGame.away
  }
  const showCurrentGameDetails = currentGameDetailsTemplate({
    game: currentGameDetails
  })
  $('#CurrentGameDetailsDiv').show()
  $('#CurrentGameDetailsDiv').html(showCurrentGameDetails)
  const showEventFeedTemplate = eventFeedTemplate({
    events: store.newGame.events
  })
  if (store.newGame.events.length === 0) {
    $('#EventFeed').html("<div class ='container'><h3> You have no events recorded for this game</h3></div>")
  } else {
    $('#EventFeed').html(showEventFeedTemplate)
  }
}

const onEditGameFromShowFailure = function () {
  $('#doc-message').text('Unable to Edit Game')
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  getOneGameSuccess,
  getOneGameFailure,
  deleteGameSuccess,
  deleteGameFailure,
  createGameSuccess,
  createGameFailure,
  editGameDetailsSuccess,
  editGameDetailsFailure,
  newEventSuccess,
  newEventFailure,
  // deleteEventSuccess,
  // deleteEventFailure,
  onEditGameFromShowSuccess,
  onEditGameFromShowFailure
}
