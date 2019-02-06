'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BackgroundSchema extends Schema {
  up () {
    this.create('backgrounds', (table) => {
      table.increments()
      table.integer('visit_card_id').unsigned().references('id').inTable('visit_cards').nullable()
      table.string('title').notNullable()
      table.string('disk').notNullable()
      table.string('path').notNullable()
      table.string('thumbnail').nullable()
      table.string('ext').notNullable()
      table.string('type').notNullable().index()
      table.timestamp('created_at').nullable()
    })
  }

  down () {
    this.drop('backgrounds')
  }
}

module.exports = BackgroundSchema
