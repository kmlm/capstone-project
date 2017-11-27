const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const populateDashboard = function (data) {
  console.log('dashboard data is', data)
}

const myDashboard = function () {
  if ( store.team !== undefined && store.team !== null){
    $('#Dashboard').show()
  } else {
    $('#ChooseTeam').show()
    $('#Dashboard').hide()
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
  dashboardHandlers,
  populateDashboard
}
