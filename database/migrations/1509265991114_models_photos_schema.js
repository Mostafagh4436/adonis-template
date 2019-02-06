'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhotosSchema extends Schema {
  up () {
    this.create('photos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().nullable()
      table.string('disk').notNullable()
      table.string('path').notNullable()
      table.string('thumbnail').nullable()
      table.string('ext').notNullable()
      table.timestamp('created_at').nullable()
    })
  }

  down () {
    this.drop('photos')
  }
}

module.exports = PhotosSchema
