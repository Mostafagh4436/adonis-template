'use strict'

class Notification {
  static get type () {
    return 'test'
  }

  via () {
    return ['database']
  }

  toJSON () {
    return {
      foo: 'bar'
    }
  }
}

module.exports = Notification
