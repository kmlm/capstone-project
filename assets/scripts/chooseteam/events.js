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
  const html = "<hr class='featurette-divider'> <h2> Next Fixture </h2> <script src='//code.jquery.com/jquery-2.1.4.min.js'></script><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src='https://statsfc-4f51.kxcdn.com/widget/next-fixture-1.0.js';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'statsfc-next-fixture-js'));</script><div id='next-fixture-div' class='statsfc-next-fixture'data-key='bXBdah2OOD0LsTjdOIVNZ7cdIqHzM4WdQmcsLO_X'data-team='test'data-use-default-css='true'></div>"
  const replaced = html.replace('test',store.team)
  console.log(replaced)
  $('#NextFixture').append(replaced)
    // api.chooseTeam(store.team)
      ui.chooseTeamSuccess(store.team)
      dashboard.populateDashboard(store.team
    )
      // .catch(ui.chooseTeamFailure)
}

const onChangeTeam = function () {
  $('#Dashboard').hide()
  $('#ChooseTeam').show()
  const html = "<hr class='featurette-divider'> <h2> Next Fixture </h2> <script src='//code.jquery.com/jquery-2.1.4.min.js'></script><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src='https://statsfc-4f51.kxcdn.com/widget/next-fixture-1.0.js';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'statsfc-next-fixture-js'));</script><div id='next-fixture-div' class='statsfc-next-fixture'data-key='bXBdah2OOD0LsTjdOIVNZ7cdIqHzM4WdQmcsLO_X'data-team='test'data-use-default-css='true'></div>"
  const replaced = html.replace(store.team,'test')
  console.log(replaced)
  $('#NextFixture').replace(replaced)
  // $('#NextFixture').append(replaced)

  store.team = null
}

const chooseTeamHandlers = function () {
$('.team-choice').on('click', onChooseTeam)
$('#change-favorite-team').on('click', onChangeTeam)
}

module.exports = {
  chooseTeamHandlers
}
