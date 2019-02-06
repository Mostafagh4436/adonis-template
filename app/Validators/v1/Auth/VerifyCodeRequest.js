'use strict'

const Validator = use('App/Validators/Validator')

class v1AuthVerifyCodeRequest extends Validator {

  async authorize () {

    return true

  }

  get rules () {

    return {
      phone: 'required|regex:^09\\d{9}$',

    }

  }

  get messages () {

    return {
      'phone.required': 'شماره همراه الزامی است.',
      'phone.regex'   : 'شماره همراه معتبر نمی باشد.',
    }

  }

}

module.exports = v1AuthVerifyCodeRequest
