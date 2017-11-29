const store = require('../store.js')
const showGamesTemplate = require('../templates/game-index.handlebars')
const showOneGameTemplate = require('../templates/game-show.handlebars')
const currentGameDetailsTemplate = require('../templates/currentGameDetails.handlebars')

const getGamesSuccess = function(games) {
  $('#GamesList').show()
  $('#SaveGameButton').hide()
  $('#ReturnFromNewGameButton').hide()
  $('#NewGameButton').show()
  store.games = games.games
  console.log(store.games)
  const dateConvert = function(input) {
    for (let i = 0; i < input.length; i++) {
      const array = input[i].date.split('T')[0].split('-')
      const fixedArray = []
      fixedArray[0] = array[1]
      fixedArray[1] = array[2]
      fixedArray[2] = array[0]
      const converted = fixedArray.join('-')
      store.games[i].date = converted
    }
    return store.games
  }
  dateConvert(store.games)
  const showGames = showGamesTemplate({
    games: store.games
  })
  $('#GamesList').html(showGames)
}

const getGamesFailure = function() {
  console.error()
}

const getOneGameSuccess = function(game) {
  $('#NewGame').hide()
  // $('#')
  const dateConvert = function(input) {
    const array = input.date.split('T')[0].split('-')
    const fixedArray = []
    fixedArray[0] = array[1]
    fixedArray[1] = array[2]
    fixedArray[2] = array[0]
    const converted = fixedArray.join('-')
    return converted
  }
  const convertedDate = dateConvert(game.game)
  game.game.date = convertedDate
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
  // $('GamesList').show()
  // $('#game-tracker-nav').click()
  // console.log(store.games)
}

const deleteGameFailure = function() {
  console.error()
}

const createGameSuccess = function() {
  $('#EventsForNewGame').show()
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

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  getOneGameSuccess,
  getOneGameFailure,
  deleteGameSuccess,
  deleteGameFailure,
  createGameSuccess,
  createGameFailure
}
