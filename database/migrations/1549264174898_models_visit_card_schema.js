'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VisitCardSchema extends Schema {
  up () {
    this.create('visit_cards', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('resume_id').unsigned().nullable()
      table.string('title').notNullable()
      table.string('specialty').nullable()
      table.text('description').nullable()
      table.boolean('status').default(true)
      table.timestamp('deleted_at').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('visit_cards')
  }
}

module.exports = VisitCardSchema
