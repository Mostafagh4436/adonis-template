'use strict'

/** @type {App/Models/User} */
const User = use('App/Models/User')
/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

const BaseController = use('App/Controllers/Http/v1/BaseController')

class AuthController extends BaseController {

  async login ({ request, response, auth, antl }) {

    // const credentials = request.only(['email', 'password'])

    const { email, password } = request.only([
      'email',
      'password',
    ])

    const user = await User.findBy('email', email)

    if ( user ) {

      if ( Hash.verify(password, user.password) ) {

        const tokens = await auth.authenticator('jwt')
                                 .withRefreshToken()
                                 .generate(user)

        return {
          status: true,
          message: 'Login successfully, Tokens already generate',
          tokenType: tokens.type,
          token: tokens.token,
          refreshToken: tokens.refreshToken,
        }


      }


    }

    return {
      status: false,
      message: 'Invalid Input Data',
    }

  }


}

module.exports = AuthController
