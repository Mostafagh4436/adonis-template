'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OptionsSchema extends Schema {
  up () {
    this.create('options', (table) => {
     table.increments()
      table.string('name').nullable()
      table.string('key').index()
      table.string('value')
      table.boolean('status').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('options')
  }
}

module.exports = OptionsSchema
