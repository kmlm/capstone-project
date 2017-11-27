'use strict'

const store = require('../store.js')


const signUpSuccess = function (data) {
  console.log('successful sign up')
  $('#sign-up-modal-close').click()
}

const signUpFailure = function () {
  console.log('sign up failed')

}

// const onSignInLinkClick = function (event) {
//   event.preventDefault()
//
// }
//
// const onSignUpModalLinkClink = function (event) {
//   event.preventDefault()
//
// }

const signInSuccess = function (data) {
  store.user = data.user
  const user = store.user.email
  $('#Signed-In-User-Email').text(user)
  console.log('signInWorked')
  console.log(store.user)
  $('.Signed-In-Nav').show()
  $('.Signed-Out-Nav').hide()
  $('#login-modal-close').click()
  // document.getElementById('login').reset()
  // document.getElementById('sign-up').reset()
//   $('#sign-up-modal-message').text(
// ''
//   )
  $('#Landing-Page-Signed-Out').hide()
  if(store.team === undefined || store.team === null) {
    $('#ChooseTeam').show()
  }
  else {
    $('#Dashboard').show()
  }
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
  $('.Signed-In-Nav').hide()
  $('.Signed-Out-Nav').show()
  $('#Dashboard').hide()
  $('#ChooseTeam').hide()
  $('#Landing-Page-Signed-Out').show()
  $('#Signed-In-User-Email').text('')
  store.user = null
  store.team = null
  console.log(store)
  console.log('sign out successful')
}

const signOutFailure = function () {
  console.log('sign out failed')
}

const changePasswordSuccess = function () {
  $('#cp-modal-close').click()
  $('#doc-message').text('Password Changed Successfully')
}

const changePasswordFailure = function () {
  console.log('Change Password failure')
  $('#passwordChange').text('Please confirm your current password')
}

// const uiHandlers = function () {
//   $('#signInModal').on('click', onSignInLinkClick)
//   $('#signInAfterSignUp').on('click', onSignInLinkClick)
//   $('#signUpModal').on('click', onSignUpModalLinkClink)
// }

module.exports = {
  // uiHandlers,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  // onSignInLinkClick,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signInNewUserSuccess
}
