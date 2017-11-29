const store = require('../store.js')
const showGamesTemplate = require('../templates/game-index.handlebars')
const showOneGameTemplate = require('../templates/game-show.handlebars')
const currentGameDetailsTemplate = require('../templates/currentGameDetails.handlebars')
const eventFeedTemplate = require('../templates/event-feed.handlebars')

const getGamesSuccess = function(games){
  $('#GamesList').show()
  $('#SaveGameButton').hide()
  $('#ReturnFromNewGameButton').hide()
  $('#NewGameButton').show()
  store.games = games.games
  console.log(store.games)
  // const dateConvert = function (input) {
  //   for (let i = 0; i < input.length; i++) {
  //     const array = input[i].date.split('T')[0].split('-')
  //     const fixedArray = []
  //     fixedArray[0] = array[1]
  //     fixedArray[1] = array[2]
  //     fixedArray[2] = array[0]
  //     const converted = fixedArray.join('-')
  //     store.games[i].date = converted
  //   }
  //   return store.games
  // }
  // dateConvert(store.games)
  const userGames = store.games.filter( (game) => game._owner === store.user.id )
  console.log(userGames)
  const showGames = showGamesTemplate({
    games: userGames
  })
  $('#GamesList').html(showGames)
}

const getGamesFailure = function() {
  console.error()
}

const getOneGameSuccess = function(game) {
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
  $('#OneGame').html(showGame)
}

const getOneGameFailure = function() {
  console.error()
}

const deleteGameSuccess = function() {
  $('#doc-message').text('Game Deleted Successfully')
  $('#OneGame').hide()
}

const deleteGameFailure = function() {
  console.error()
}

const createGameSuccess = function(data) {
  console.log(data)
  $('#EventsForNewGame').show()
  document.getElementById('NewGameForm').reset()
  $('#NewGameForm').hide()
  const dateConvert = function(input) {
    const array = input.split('-')
    const fixedArray = []
    fixedArray[0] = array[1]
    fixedArray[1] = array[2]
    fixedArray[2] = array[0]
    const converted = fixedArray.join('-')
    return converted
  }
  const convertedDate = dateConvert(store.newGame.date)
  store.newGame.date = convertedDate
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
}

const createGameFailure = function() {
  console.error()
}

const editGameDetailsSuccess = function (){
  const dateConvert = function(input) {
    const array = input.split('-')
    const fixedArray = []
    fixedArray[0] = array[1]
    fixedArray[1] = array[2]
    fixedArray[2] = array[0]
    const converted = fixedArray.join('-')
    return converted
  }
  const convertedDate = dateConvert(store.newGame.date)
  store.newGame.date = convertedDate
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

const editGameDetailsFailure = function ()
{
  console.error()
}

const newEventSuccess = function () {
  document.getElementById('NewEventForm').reset()
  console.log('ui level',store.newGame.events)
  // const passThrough = {
  //   event: store.newEvent
  // }
  // console.log(passThrough)
  const showEventFeedTemplate = eventFeedTemplate({
    events: store.newGame.events
  })
  $('#EventFeed').html(showEventFeedTemplate)
}

const newEventFailure = function ()
{
  console.error()
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
  newEventFailure
}
