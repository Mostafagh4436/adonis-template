'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StateSchema extends Schema {
  up () {
    this.create('states', (table) => {
      table.increments()
      table.string('name').notNullable()
    })
  }

  down () {
    this.drop('states')
  }
}

module.exports = StateSchema
