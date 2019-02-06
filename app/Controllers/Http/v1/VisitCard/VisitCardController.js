'use strict'
const VisitCard           = use('App/Models/VisitCard')
const VisitCardTransformer = use('App/Transformers/v1/VisitCard/VisitCardTransformer')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with visitcards
 */
class VisitCardController {
  /**
   * Show a list of all visitcards.
   * GET visitcards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {transform } ctx.transform
   */
  async index ({ request, response, transform  }) {

    let cards = await VisitCard.all()
    // return response.json(users)
    // return response.json(jsonFile);
 return transform.collection(cards, VisitCardTransformer)
    // return new VisitCardTransform()
  }


  /**
   * Render a form to be used for creating a new visitcard.
   * GET visitcards/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new visitcard.
   * POST visitcards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single visitcard.
   * GET visitcards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing visitcard.
   * GET visitcards/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update visitcard details.
   * PUT or PATCH visitcards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a visitcard with id.
   * DELETE visitcards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = VisitCardController
