'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('state_id').unsigned().references('id').inTable('states')
      table.integer('city_id').unsigned().references('id').inTable('cities')
      table.string('address').nullable()
      table.string('phone').nullable()
      table.string('lat').nullable()
      table.string('long').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
