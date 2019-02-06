'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RatesSchema extends Schema {
  up () {
    this.create('rates', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('visit_card_id').unsigned().references('id').inTable('visit_cards')
      table.integer('rate').nullable()
      table.string('comment').nullable()
      table.timestamp('created_at').nullable()
    })
  }

  down () {
    this.drop('rates')
  }
}

module.exports = RatesSchema
