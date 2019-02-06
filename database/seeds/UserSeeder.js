'use strict'
const user = use('App/Models/User')
const userJson = use('./../../public/tmp/users.json')
const Database = use('Database')
// const Factory = use('Factory')

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

class UserSeeder {
  async run() {
    const user = await Database.table('users').insert(userJson)
  }
}

module.exports = UserSeeder
