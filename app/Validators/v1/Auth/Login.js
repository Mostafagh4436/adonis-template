'use strict'

const Validator = use('App/Validators/Validator')

class AuthLogin extends Validator {

  async authorize () {
    // if (!isAdmin) {
    //   this.unauthorized()
    //   return false
    // }

    return true
  }

  get rules () {

    return {
      email   : 'required|email',
      password: 'required|min:8',
    }

  }

  get messages () {

    return {
      'email.required'   : 'You must provide a email address.',
      'email.email'      : 'You must provide a valid email address.',
      'password.required': 'You must provide a password',
      'password.min'     : 'You must provide a password more than 8 characters',
    }

  }

}

module.exports = AuthLogin
