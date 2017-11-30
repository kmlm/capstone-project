const store = require('../store.js')

const chooseTeamSuccess = function () {
  console.log('ui runs')
  $('#ChooseTeam').hide()
  $('#Dashboard').show()
  $('#TeamName').html(store.team)
  $('#GameTracker').hide()
  console.log()
}

const chooseTeamFailure = function () {
  console.log('choose team ui failure')
  $('#document').text('Unable to Choose Teams at this Time')
}

module.exports = {
  chooseTeamSuccess,
  chooseTeamFailure
}
