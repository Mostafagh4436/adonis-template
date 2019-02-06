'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JobSchema extends Schema {
  up () {
    this.create('jobs', (table) => {
      table.increments()
      table.integer('resume_id').unsigned().references('id').inTable('resumes')
      table.string('title').notNullable()
      table.string('company').notNullable()
      table.text('description').nullable()
      table.timestamp('start_at').nullable()
      table.timestamp('end_at').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('jobs')
  }
}

module.exports = JobSchema
