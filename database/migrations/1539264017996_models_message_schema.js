'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessageSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments()
      table.integer('from_user_id').unsigned().references('id').inTable('users').notNullable()
      table.integer('to_user_id').unsigned().references('id').inTable('users').notNullable()
      table.text('body').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessageSchema
