'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 80).nullable()
      table.string('family', 80).nullable()
      table.string('username', 80).nullable().unique()
      table.string('phone', 14).notNullable().unique()
      table.string('email', 254).nullable().unique()
      table.string('password', 60).notNullable()
      table.string('email_verify').nullable()
      table.boolean('status').defaultTo(true)
      table.timestamp('deleted_at').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
