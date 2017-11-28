const store = require('../store.js')
const showGamesTemplate = require('../templates/game-index.handlebars')

const getGamesSuccess = function (games) {
  store.games = games.games
  console.log(store.games)
      const dateConvert = function (input) {
        for (let i=1; i<input.length; i++)
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

module.exports = {
getGamesSuccess,
getGamesFailure
}
