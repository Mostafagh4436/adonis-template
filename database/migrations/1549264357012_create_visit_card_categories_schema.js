'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VisitCardCategoriesSchema extends Schema {
  up () {
    this.create('visit_card_categories', (table) => {
      table.primary(['category_id', 'visit_card_id'])
      table.integer('visit_card_id').unsigned().references('id').inTable('visit_cards')
      table.integer('category_id').unsigned().references('id').inTable('categories')
    })
  }

  down () {
    this.drop('visit_card_categories')
  }
}

module.exports = VisitCardCategoriesSchema
