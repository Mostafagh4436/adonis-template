'use strict'

const Helpers = use('Helpers')
const Config  = use('Config')
const Trans   = use('App/Models/Trans')

class BaseController {

  constructor () {
    this.helper       = Helpers;
    this.config       = Config;
  }

  trans (key, args = {}) {
    return Trans.trans(key, args)
  }

  getConfig (key, args) {
    return this.config.get(key, args)
  }

  setConfig (key, value) {
    return this.config.get(key, value)
  }

}

module.exports = BaseController
