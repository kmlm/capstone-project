'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const dashboardEvents = require('./dashboard/events')
$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.authHandlers(),
  dashboardEvents.dashboardHandlers()
  // ui.uiHandlers()
  // siteUi.uiHandlers()
})


// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
