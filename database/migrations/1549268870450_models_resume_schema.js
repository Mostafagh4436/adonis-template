'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResumeSchema extends Schema {
  up() {
    this.create('resumes', (table) => {
      table.increments()
      table.integer('visit_card_id').unsigned().references('id').inTable('visit_cards')
      table.string('subject')
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('resumes')
  }
}

module.exports = ResumeSchema
