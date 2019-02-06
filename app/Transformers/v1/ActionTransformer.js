'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')

/**
 * ActionTransformer class
 *
 * @class ActionTransformer
 * @constructor
 */
class ActionTransformer extends TransformerAbstract {
  /**
   * This method is used to transform the data.
   */

  constructor(message = NULL, success = true, data = undefined) {
    super()
    this.message = message
    this.success = success
    this.data = data
  }

  transform(model) {

    let output = {}

    if (this.data) {

      output = {
        message: this.message,
        success: this.success,
        data: this.data
      }

    } else {

      output = {
        message: this.message,
        success: this.success
      }

    }

    return output
  }


  }





module.exports = ActionTransformer
