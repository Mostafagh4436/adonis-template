'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Code extends Model {

  static get table () {
    return 'codes'
  }

  static get dates () {
    return [
      'created_at',
      'updated_at',
    ]
  }

  static get TYPE_REGISTER() {
    return 'register';
  }
  static get TYPE_LOGIN() {
    return 'login';
  }
  static get TYPE_NOT_SET() {
    return 'not-set';
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  static generateVerifyCode(){
    return Math.floor(1000 + Math.random() * 9000);
  }

}

module.exports = Code
