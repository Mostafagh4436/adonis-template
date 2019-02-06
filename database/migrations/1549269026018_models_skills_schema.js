'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SkillsSchema extends Schema {
  up () {
    this.create('skills', (table) => {
      table.increments()
      table.integer('resume_id').unsigned().references('id').inTable('resumes')
      table.string('title').notNullable()
      table.integer('level').nullable()
      table.timestamp('created_at').nullable()
    })
  }

  down () {
    this.drop('skills')
  }
}

module.exports = SkillsSchema
