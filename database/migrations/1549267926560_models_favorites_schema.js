'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoritesSchema extends Schema {
  up () {
    this.create('favorites', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('visit_card_id').unsigned().references('id').inTable('visit_cards')
      table.timestamp('created_at').nullable()
    })
  }

  down () {
    this.drop('favorites')
  }
}

module.exports = FavoritesSchema
