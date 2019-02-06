'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')
const BaseTransformer = use('App/Transformers/v1/BaseTransformer')


/**
 * VisitCardTransformer class
 *
 * @class VisitCardTransformer
 * @constructor
 */
class VisitCardTransformer extends TransformerAbstract {
  /**
   * This method is used to transform the data.
   */

  transform (model) {
    return {
      title      : model.title,
      description: model.description,
      status     : model.status,
      specialty  : model.specialty,
      created_at : model.created_at,
    }
  }
}

module.exports = VisitCardTransformer
