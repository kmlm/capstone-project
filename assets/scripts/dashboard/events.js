// const getFormFields = require('../../../lib/get-form-fields')
// const api = require('./api')
// const ui = require('./ui')
const store = require('../store')

const myDashboard = function () {
  if (store.team !== undefined && store.team !== null && store.team !== '') {
    $('#Dashboard').show()
    $('#TeamName').html(store.team)
    $('#GameTracker').hide()
  } else {
    $('#ChooseTeam').show()
    $('#Dashboard').hide()
    $('#GameTracker').hide()
  }
}

const dashboardHandlers = function () {
// buttons for showing / hiding on dashboard
  $('#next-fixture-button').on('click', () => $('#NextFixture').toggle())
  $('#top-scorers-button').on('click', () => $('#Top-Scorers').toggle())
  $('#League-Table-button').on('click', () => $('#League-Table').toggle())
  $('#Form-button').on('click', () => $('#Form').toggle())
  $('#Fixtures-button').on('click', () => $('#Fixtures').toggle())
// $('#match-centre-button').on('click', () => $('#MatchCentre').toggle())

  $('#myDashboard').on('click', myDashboard)
}

module.exports = {
  dashboardHandlers
}
