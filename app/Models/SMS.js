'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model   = use('Model')
const request = require('request');

class SMS extends Model {

  static boot () {

    super.boot()

    this.addHook('afterCreate', async (sms) => {
      SMS.sendSMS(sms)
    })

  }

  static get table () {
    return 'sms'
  }

  static get dates () {
    return [
      'created_at',
      'updated_at',
    ]
  }

  static sendSMS (sms) {

    const username = 'rasoul2023'
    const password = '2606852'

    const body = {
      'PhoneNumber'        : '9830006859990235',
      'Message'            : sms.message,
      'Mobiles'            : [sms.phone],
      'UserGroupID'        : Math.random().toString(36).substr(2, 5),
      'SendDateInTimeStamp': sms.created_at,
    }

    const options = {
      url   : 'http://smspanel.trez.ir/api/smsAPI/SendMessage',
      method : 'POST',
      body   : body,
      json   : true,
      headers: {
        'Content-Type' : 'application/json',
        'Authorization': 'Basic ' + Buffer.from(username + ':' + password).toString('base64'),
      },
    }

    request(options, function (err, res) {

      if ( err ) {
        console.log(err)
      }
      else {
        console.log(res.body.Result)
      }

    });

  }

}

module.exports = SMS
