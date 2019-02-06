'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/**
 * class Token
 * @namespace App/Models/Token
 *
 * @property {number} id
 * @property {number} user_id
 * @property {string} token
 * @property {string} type
 * @property {number} is_revoked
 *
 * @property {App/Models/User} user
 */
class Token extends Model {

  /**
   * @method user
   * @returns {BelongsTo}
   */
  user() {
    return this.belongsTo('App/Models/User')
  }

}

module.exports = Token
