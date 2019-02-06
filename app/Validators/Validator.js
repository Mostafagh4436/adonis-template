'use strict'

class Validator {

  async unauthorized() {

    return this.ctx.response.status(401).json({
      status: false,
      message: "Not authorized"
    })

  }

}

module.exports = Validator
