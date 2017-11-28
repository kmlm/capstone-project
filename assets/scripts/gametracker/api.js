const config = require('../config.js')
const store = require('../store')

const getGames = function () {
  return $.ajax({
      url: config.apiOrigin + '/games',
      method: 'GET',
      headers: {
    Authorization: 'Token token=' + store.user.token
  }
    })
  }

  const getOneGame = function (id) {
    return $.ajax({
        url: config.apiOrigin + '/games/' + id,
        method: 'GET',
        headers: {
      Authorization: 'Token token=' + store.user.token
    }
      })
    }

  const deleteGame = function (id) {
    return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'DELETE',
    headers: {
  Authorization: 'Token token=' + store.user.token
}
  })
}

module.exports = {
  getGames,
  getOneGame,
  deleteGame
}
