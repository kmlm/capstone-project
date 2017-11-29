const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const dataSave = data
  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('#sign-up-modal-message').text('Password and password confirmation do not match.')
  } else {
    document.getElementById('sign-up').reset()
    api.signUp(data)
      .then(ui.signUpSuccess)
      .then(() => api.signIn(dataSave))
      // .then(ui.signInNewUserSuccess)
      .then(ui.signInSuccess)
      .catch(ui.signUpFailure)
  }
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  if (store.user === undefined || null) {
    $('#passwordChange').text('You must sign in before you can change your password.')
  } else if (data.passwords.old.length === 0) {
    $('#passwordChange').text('Please enter your current password.')
  } else if (data.passwords.new.length === 0) {
    $('#passwordChange').text('Please enter a new password.')
  } else if (data.passwords.new === data.passwords.old) {
    $('#passwordChange').text('New and old passwords are the same. Please try again')
  } else {
    console.log(data)
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  }
}

const clearLogin = function () {
  document.getElementById('login').reset()
  $('#login-message').text('')
}

const clearSignUp = function () {
  document.getElementById('sign-up').reset()
  $('#sign-up-modal-message').text(
'')
}

const clearPassword = function () {
  $('#passwordChange').text('')
  document.getElementById('change-password-form').reset()
}

const authHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#login').on('submit', onSignIn)
  $('#Sign-Out').on('click', onSignOut)
  $('#change-password-form').on('submit', onChangePassword)
  $('#cp-modal-close').on('click', clearPassword)
  $('#login-modal-close').on(
  'click', clearLogin)
  $('#sign-up-modal-close').on(
    'click', clearSignUp)
  $(document).on('click', () => $('#doc-message').text(''))
}

module.exports = {
  authHandlers
}
