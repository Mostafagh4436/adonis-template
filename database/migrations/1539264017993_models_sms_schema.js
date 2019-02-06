'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SmsSchema extends Schema {
  up () {
    this.create('sms', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('phone').notNullable().index()
      table.string('message').notNullable()
      table.boolean('status').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('sms')
  }
}

module.exports = SmsSchema
