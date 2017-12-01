const config = require('../config.js')
const store = require('../store')

const chooseTeam = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-team/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      favTeam: data
    }
  })
}

module.exports = {
  chooseTeam
}
