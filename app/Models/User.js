'use strict'


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

const Event = use('Event')

class User extends Model {

  static boot () {

    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if ( userInstance.dirty.password ) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })

  }

  static get traits () {
    return [
      '@provider:Morphable',
      '@provider:HasDatabaseNotifications',
      '@provider:Notifiable',
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  static get primaryKey () {
    return 'id'
  }

  static get dates () {
    return super.dates.concat([
      'deleted_at',
    ])
  }

  static formatDates (field, value) {
    if ( field === 'created_at' || field === 'updated_at' ) {
      return value.format('YYYY-MM-DD')
    }
    return super.formatDates(field, value)
  }

  static get hidden () {
    return [
      'password',
      'email_verify',
      'deleted_at',
      'created_at',
      'updated_at',
    ]
  }


  tokens () {
    return this.hasMany('App/Models/Token')
  }

  codes () {
    return this.hasOne('App/Models/Code')
  }

  sms () {
    return this.hasMany('App/Models/SMS')
  }

  lastIps () {
    return this.hasMany('App/Models/LastIp')
  }


}

module.exports = User
