'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')

/**
 * BaseTransformer class
 *
 * @class BaseTransformer
 * @constructor
 */
class BaseTransformer extends TransformerAbstract {
  constructor (message = NULL, success = true, data = undefined) {
    super()
    this.message = message
    this.success = success
    this.data    = data

    if ( this.data === undefined ) {
      return response.json({
        message: 'داده ی ارسالی معتبر نیست',
        success: false,
      });
    }

  }

  transform (model) {

    return {}
  }

  with(){

  }
}

module.exports = BaseTransformer
