'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CodeSchema extends Schema {
  up () {
    this.create('codes', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('phone').notNullable().index()
      table.string('type').notNullable().index()
      table.integer('code').unsigned()
      table.boolean('status').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('codes')
  }
}

module.exports = CodeSchema
