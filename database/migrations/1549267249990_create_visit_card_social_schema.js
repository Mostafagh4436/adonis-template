'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VisitCardSocialSchema extends Schema {
  up () {
    this.create('visit_card_social', (table) => {
      table.primary(['visit_card_id','social_id'])
      table.integer('social_id').unsigned().references('id').inTable('socials')
      table.integer('visit_card_id').unsigned().references('id').inTable('visit_cards')
    })
  }

  down () {
    this.drop('visit_card_social')
  }
}

module.exports = VisitCardSocialSchema
