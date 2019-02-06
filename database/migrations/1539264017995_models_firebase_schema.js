'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FirebaseSchema extends Schema {
  up () {
    this.create('firebases', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('token').nullable().index()
      table.string('type').nullable()
      table.timestamp('created_at').nullable()
    })
  }

  down () {
    this.drop('firebases')
  }
}

module.exports = FirebaseSchema
