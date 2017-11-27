'use strict'

const store = require('../store.js')


const signUpSuccess = function (data) {
  console.log('successful sign up')
  $('#sign-up-modal-close').click()
}

const signUpFailure = function () {

}

const onSignInLinkClick = function (event) {
  event.preventDefault()

}

const onSignUpModalLinkClink = function (event) {
  event.preventDefault()

}

const signInSuccess = function (data) {
  store.user = data.user
  const user = store.user.email
  $('#Signed-In-User-Email').text(user)
  console.log('signInWorked')
  console.log(store.user)
  $('.Signed-In-Nav').show()
  $('.Signed-Out-Nav').hide()
  $('#login-modal-close').click()
  document.getElementById('login').reset()
  document.getElementById('sign-up').reset()
}

const signInFailure = function () {
  console.log('failed')
  $('#login-message').text('Unable to login with that information')
  document.getElementById('login').reset()
  document.getElementById('sign-up').reset()
}

const signInNewUserSuccess = function (data) {

}

const signOutSuccess = function () {
}

const signOutFailure = function () {
}

const changePasswordSuccess = function () {
}

const changePasswordFailure = function () {
}

const uiHandlers = function () {
  $('#signInModal').on('click', onSignInLinkClick)
  $('#signInAfterSignUp').on('click', onSignInLinkClick)
  $('#signUpModal').on('click', onSignUpModalLinkClink)
}

module.exports = {
  uiHandlers,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onSignInLinkClick,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signInNewUserSuccess
}
