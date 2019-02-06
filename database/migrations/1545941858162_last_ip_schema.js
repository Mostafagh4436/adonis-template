'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LastIpSchema extends Schema {
  up () {
    this.create('last_ips', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('ip')
      table.string('national').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('last_ips')
  }
}

module.exports = LastIpSchema
