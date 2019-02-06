'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username').notNullable().unique()
      table.integer('photo_id').unsigned().references('id').inTable('photos').nullable()
      table.integer('refer_id').unsigned().references('id').inTable('users').nullable()
      table.string('phone').notNullable().unique().index()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('status').index().nullable()
      table.timestamp('deleted_at').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
