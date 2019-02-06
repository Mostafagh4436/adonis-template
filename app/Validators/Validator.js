'use strict'

const Helpers = use('Helpers')
const Config  = use('Config')

class Validator {

  constructor () {

    this.helper = Helpers;
    this.config = Config;

  }

  async fails (errorMessages) {

    let messages = []
    errorMessages.forEach(function (item) {
      messages.push(item.message)
    })

    return this.ctx.response
               .send({
                 status : false,
                 message: messages,
               })

  }

  async unauthorized () {

    return this.ctx.response
               .status(401)
               .json({
                 status : false,
                 message: 'Not authorized',
               })

  }

  formatMessage (key, args) {

    return this.ctx.antl.formatMessage(key, args)

  }

  getConfig (key, args) {

    return this.config.get(key, args)

  }

}

module.exports = Validator
