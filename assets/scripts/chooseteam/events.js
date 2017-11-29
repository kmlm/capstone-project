'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const dashboard = require('../dashboard/events')

const onChooseTeam = function (event) {
  console.log('click worked')
  event.preventDefault()
  const team = $(this)[0].closest('tr')
  store.team = $(team).attr('data-id')
  const addedFixture = "<section id='added-fixture'></section>"
  $('#NextFixture').append(addedFixture)
  const html = "<hr class='featurette-divider'> <h2> Next Fixture </h2> <script src='//code.jquery.com/jquery-2.1.4.min.js'></script><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src='https://statsfc-4f51.kxcdn.com/widget/next-fixture-1.0.js';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'statsfc-next-fixture-js'));</script><div id='next-fixture-div' class='statsfc-next-fixture'data-key='bXBdah2OOD0LsTjdOIVNZ7cdIqHzM4WdQmcsLO_X'data-team='test'data-use-default-css='true'></div>"
  const replaced = html.replace('test', store.team)
  console.log(replaced)
  $('#added-fixture').append(replaced)
  api.chooseTeam(store.team)
    // .then(console.log)
      .then(ui.chooseTeamSuccess)
    //   .then(() => dashboard.populateDashboard(store.team
    // ))
      .catch(ui.chooseTeamFailure)
}

const onChangeTeam = function () {
  $('#added-fixture').remove()
  $('#Dashboard').hide()
  $('#ChooseTeam').show()
  store.team = null
}

const returningUser = function () {
  const addedFixture = "<section id='added-fixture'></section>"
  $('#NextFixture').append(addedFixture)
  const html = "<hr class='featurette-divider'> <h2> Next Fixture </h2> <script src='//code.jquery.com/jquery-2.1.4.min.js'></script><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src='https://statsfc-4f51.kxcdn.com/widget/next-fixture-1.0.js';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'statsfc-next-fixture-js'));</script><div id='next-fixture-div' class='statsfc-next-fixture'data-key='bXBdah2OOD0LsTjdOIVNZ7cdIqHzM4WdQmcsLO_X'data-team='test'data-use-default-css='true'></div>"
  const replaced = html.replace('test', store.team)
  console.log(replaced)
  $('#added-fixture').append(replaced)
}

const chooseTeamHandlers = function () {
  $('.team-choice').on('click', onChooseTeam)
  $('#change-favorite-team').on('click', onChangeTeam)
}

module.exports = {
  chooseTeamHandlers,
  returningUser
}
