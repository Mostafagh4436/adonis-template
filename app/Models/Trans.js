'use strict'

const Model    = use('Model')
const Config   = use('Config')
const Antl     = use('Antl')
const jsonfile = require('jsonfile')

class Trans extends Model {

  constructor () {
    super();
  }

  static trans (key, args = {}) {
    this.key  = key
    this.args = args

    this.getTransValue()

    this.checkTransArgument()

    return this.transValue
  }

  static getTransValue () {

    const node      = this.key.split('.')
    const pathFile  = this.getTransPath(node[0]);
    const pathTrans = node.slice(1, node.length)
    const trans     = jsonfile.readFileSync(pathFile);

    return this.findTransValue(pathTrans, trans)

  }

  static getTransPath (filename) {

    return Config.get('path.locale') + '\\' + Antl.currentLocale() + '\\' + filename + '.json'

  }

  static findTransValue (pathTrans, trans) {

    let transKeys = Object.keys(trans);

    for ( let i = 0; i < pathTrans.length; i++ ) {

      for ( let node = 0; node < transKeys.length; node++ ) {

        if ( pathTrans[i] === transKeys[node] ) {

          if ( typeof trans[transKeys[node]] == 'object' ) {

            let slicePathTrans = pathTrans.slice(1, pathTrans.length)

            this.findTransValue(slicePathTrans, trans[transKeys[node]])

          }

          else if ( trans[pathTrans] !== undefined ) {

            this.transValue = trans[pathTrans]

          }

        }

      }

    }

    return this.transValue
  }

  static checkTransArgument () {

    const errorValue = 'this value has arguments, fill them.'

    let argsKeys = Object.keys(this.args)

    if ( argsKeys.length ) {

      for ( let i = 0; i < argsKeys.length; i++ ) {

        let key = '{' + argsKeys[i] + '}'

        let value = this.args[argsKeys[i]]

        this.transValue = this.transValue.replace(key, value)

      }

    }
    else if ( this.transValue.match('{') != null ) {

      this.transValue = errorValue

    }

  }

}

module.exports = Trans
