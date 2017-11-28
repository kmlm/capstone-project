const store = require('../store.js')


const chooseTeamSuccess = function () {
  console.log('ui runs')
  $('#ChooseTeam').hide()
  $('#Dashboard').show()
  console.log()
}


const chooseTeamFailure = function () {
  console.log('choose team ui failure')
}

module.exports = {
  chooseTeamSuccess,
  chooseTeamFailure
}
