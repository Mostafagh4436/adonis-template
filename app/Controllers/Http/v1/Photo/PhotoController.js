'use strict'
const Helpers         = use('Helpers')
const Photo           = use('App/Models/photo')
const Jimp            = require('jimp');
const uuidv1          = require('uuid/v1');
const ActionTransform = use('App/Transformers/v1/ActionTransformer')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with photos
 */
class PhotoController {
  /**
   * Show a list of all photos.
   * GET photos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new photo.
   * GET photos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new photo.
   * POST photos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    // // open a file called "lenna.png"

    const pic = request.file('photo')

    await pic.move(Helpers.tmpPath('uploads'), {
      name     : uuidv1() + pic.clientName,
      overwrite: true,
    })

    if ( !pic.moved() ) {
      return pic.errors()
    }

    const image = Jimp.read(Helpers.tmpPath('uploads/') + pic.fileName, (err, img) => {
      if ( err ) throw err;
      img
        .resize(80, 80) // resize
        .quality(90) // set JPEG quality
        .write(Helpers.tmpPath('uploads/thumbnails/' + pic.fileName)); // save
    });

    const photo = {
      user_id  : 1,
      path     : Helpers.tmpPath('uploads'),
      ext      : pic.extname,
      thumbnail: Helpers.tmpPath('uploads/thumbnails/' + pic.fileName),
      disk     : 'local',
    }

    await Photo.create(photo)

    return new ActionTransform('عکس با موفقیت ایجاد شد')
  }

  /**
   * Display a single photo.
   * GET photos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing photo.
   * GET photos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update photo details.
   * PUT or PATCH photos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a photo with id.
   * DELETE photos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PhotoController
