const store = require('../store.js')

const chooseTeamSuccess = function () {
  $('#ChooseTeam').hide()
  $('#Dashboard').show()
  $('#TeamName').html(store.team)
  $('#GameTracker').hide()
}

const chooseTeamFailure = function () {
  $('#doc-message').text('Unable to Choose Teams at this time')
}

module.exports = {
  chooseTeamSuccess,
  chooseTeamFailure
}
