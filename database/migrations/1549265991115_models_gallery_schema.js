'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GallerySchema extends Schema {
  up () {
    this.create('galleries', (table) => {
      table.increments()
      table.integer('photo_id').unsigned().references('id').inTable('photos')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.boolean('status').defaultTo(true)
      table.timestamp('created_at').nullable()
    })
  }

  down () {
    this.drop('galleries')
  }
}

module.exports = GallerySchema
