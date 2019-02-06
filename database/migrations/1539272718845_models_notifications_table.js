'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NotificationsTableSchema extends Schema {

  up () {
    this.create('notifications', (table) => {
      table.increments()
      table.string('type')
      table.integer('notifiable_id').unsigned().nullable()
      table.string('notifiable_type').nullable()
      table.text('data')
      table.timestamp('read_at').nullable()
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists('notifications')
  }

}

module.exports = NotificationsTableSchema
