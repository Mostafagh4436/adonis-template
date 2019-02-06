'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WorkSchema extends Schema {
  up () {
    this.create('works', (table) => {
      table.increments()
      table.integer('resume_id').unsigned().references('id').inTable('resumes')
      table.string('title').notNullable()
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('works')
  }
}

module.exports = WorkSchema
