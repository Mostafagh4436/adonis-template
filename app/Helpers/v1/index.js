'use strict'

const crypto = use('crypto')

/**
 * Generate "random" alpha-numeric string.
 *
 * @param  {int}      length - Length of the string
 * @return {string}   The result
 */
const randomStr = async (length = 40) => {
  let string = ''
  let len    = string.length

  if ( len < length ) {
    let size   = length - len
    let bytes  = await crypto.randomBytes(size)
    let buffer = new Buffer(bytes)

    string += buffer.toString('base64')
                    .replace(/[^a-zA-Z0-9]/g, '')
                    .substr(0, size)
  }

  return string
}

module.exports = {
  randomStr,
}
