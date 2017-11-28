const store = require('../store.js')
const showGamesTemplate = require('../templates/game-index.handlebars')

const getGamesSuccess = function (games) {
  store.games = games.games
  console.log(store.games)
  const showGames = showGamesTemplate({
    games: games.games
  })
  $('#GamesList').append(showGames)
}

const getGamesFailure = function () {
  console.error()
}

module.exports = {
getGamesSuccess,
getGamesFailure
}
