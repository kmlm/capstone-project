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



module.exports = {
  getGames
}
