'use strict'

const store = require('../store.js')



const signUpSuccess = function (data) {
  console.log('successful sign up')
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
  $('#userNameNav').append(user)

}

const signInFailure = function () {

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
