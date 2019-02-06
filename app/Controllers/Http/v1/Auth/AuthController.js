'use strict'

const BaseController  = use('App/Controllers/Http/v1/BaseController')
const User            = use('App/Models/User')
const Code            = use('App/Models/Code')
const SMS             = use('App/Models/SMS')
const moment          = require('moment')
const ActionTransform = use('App/Transformers/v1/ActionTransformer')

class AuthController extends BaseController {

  async verifyCodeRequest ({ request, antl }) {

    return this.trans('messages.user.controller.index.test', {key:"مصطفی" , test:"تست"})

    const { phone } = request.only(['phone'])

    let code = await Code.findBy({ 'phone': phone })

    if ( code ) {

      if ( moment(code.updated_at).add(2, 'minutes') > moment() ) {

        return new ActionTransform('لطفا برای دریافت کد جدید دو دقیقه منتظر بمانید.', true)

      }

      else {

        code.code   = Code.generateVerifyCode()
        code.status = false
        await code.save();

      }

    }
    else {

      code = await Code.create({
        phone : phone,
        code  : Code.generateVerifyCode(),
        type  : Code.TYPE_NOT_SET,
        status: false,
      });

    }

    let user = await User.findBy({ 'phone': phone })

    if ( user ) {

      code.user_id = user.id
      code.type    = Code.TYPE_LOGIN
      await code.save();

      await SMS.create({
        user_id: user.id,
        phone  : phone,
        message: 'کد ورود به سامانه: ' + code.code,
        status : false,
      });

    }
    else {

      code.type = Code.TYPE_REGISTER
      await code.save();

      await SMS.create({
        phone  : phone,
        message: 'کد ورود به سامانه: ' + code.code,
        status : false,
      });

    }

    return new ActionTransform('کد ارسال شد.', true, {
      code: code.code,
    })

  }

  async login ({ request, response, auth, antl }) {

    const { email, password } = request.only([
      'email',
      'password',
    ])

    const tokens = await auth.authenticator('jwt')
                             .withRefreshToken()
                             .generate(user)

    return {
      status      : true,
      message     : 'Login successfully, Tokens already generate',
      tokenType   : tokens.type,
      token       : tokens.token,
      refreshToken: tokens.refreshToken,
    }

  }

  async register ({ request, response, auth, antl }) {


  }


}

module.exports = AuthController
