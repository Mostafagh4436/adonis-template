'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')
const user = use('App/Models/User')
/**
 * UserIndexTransformer class
 *
 * @class UserIndexTransformer
 * @constructor
 */
class UserIndexTransformer extends TransformerAbstract {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {

    }
  }
}

module.exports = UserIndexTransformer
