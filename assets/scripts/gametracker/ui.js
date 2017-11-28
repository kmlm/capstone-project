const store = require('../store.js')
const showGamesTemplate = require('../templates/game-index.handlebars')
const showOneGameTemplate = require('../templates/game-show.handlebars')

const getGamesSuccess = function (games) {
  $('#GamesList').show()
  $('#SaveGameButton').hide()
  $('#ReturnFromNewGameButton').hide()
  $('#NewGameButton').show()
  store.games = games.games
  console.log(store.games)
      const dateConvert = function (input) {
        for (let i=0; i<input.length; i++)
        {
          store.games[i].date = input[i].date.split('T')[0].split('-').reverse().join('-')
        }
      }
    dateConvert(store.games)
    console.log(store.games)
      const showGames = showGamesTemplate({
        games: store.games
      })
      $('#GamesList').html(showGames)
}


const getGamesFailure = function () {
  console.error()
}

const getOneGameSuccess = function (game) {
    const dateConvert = function (input) {
      let converted = input.date.split('T')[0].split('-').reverse().join('-')
      return converted
        }
    const convertedDate = dateConvert(game.game)
    game.game.date = convertedDate
      $('#GamesList').hide()
      $('#OneGame').show()
      const showGame = showOneGameTemplate({game: game.game})
      $('#OneGame').html(showGame)
}

const getOneGameFailure = function () {
  console.error()
}

const deleteGameSuccess = function () {
  $('#doc-message').text('Game Deleted Successfully')
  $('#OneGame').hide()
  // $('GamesList').show()
  // $('#game-tracker-nav').click()
  // console.log(store.games)
}

const deleteGameFailure = function () {
  console.error()
}
module.exports = {
getGamesSuccess,
getGamesFailure,
getOneGameSuccess,
getOneGameFailure,
deleteGameSuccess,
deleteGameFailure
}
