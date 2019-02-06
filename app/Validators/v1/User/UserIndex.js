'use strict'
const Validator = use('App/Validators/Validator')

class UserIndex {
  async authorize() {
    // if (!isAdmin) {
    //   this.unauthorized()
    //   return false
    // }

    return true
  }

  get rules() {

    return {
      // photo_id: 'integer',
      // refer_id: 'integer',
      // phone: 'required|string',
      // first_name: 'required|string',
      // last_name: 'required|string',
      // status: 'required|string',
    }

  }

  get messages() {

    return {
      // 'email.required': 'You must provide a email address.',
      // 'email.email': 'You must provide a valid email address.',
      // 'password.required': 'You must provide a password',
      // 'password.min': 'You must provide a password more than 8 characters',
    }

  }
}
module.exports = UserIndex
