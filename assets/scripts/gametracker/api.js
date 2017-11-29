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

const createGame = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: data
    }
  })
}

const editGameDetails = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.newGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game:
        {
          date: store.newGame.date,
          home: store.newGame.home,
          away: store.newGame.away
        }
    }
  })
}



module.exports = {
  getGames,
  getOneGame,
  deleteGame,
  createGame,
  editGameDetails
}
