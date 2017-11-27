"use strict"

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const dashboard = require('../dashboard/events')

const onChooseTeam = function (event) {
  console.log('click worked')
  event.preventDefault()
  const team = $(this)[0].closest('tr');
  store.team = $(team).attr('data-id')
    // api.chooseTeam(store.team)
      ui.chooseTeamSuccess(store.team)
      dashboard.populateDashboard(store.team)
      // .catch(ui.chooseTeamFailure)
}

const onChangeTeam = function () {
  $('#Dashboard').hide()
  $('#ChooseTeam').show()
  store.team = null
}

const chooseTeamHandlers = function () {
$('.team-choice').on('click', onChooseTeam)
$('#change-favorite-team').on('click', onChangeTeam)
}

module.exports = {
  chooseTeamHandlers
}
