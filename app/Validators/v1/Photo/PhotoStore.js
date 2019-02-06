'use strict'

class PhotoStore {
  async authorize () {
    // if (!isAdmin) {
    //   this.unauthorized()
    //   return false
    // }

    return true
  }

  get rules () {

    return {
      // photo   : 'file|file_ext:png,jpg|file_size:2mb|file_types:image',
      photo   : 'file|file_ext:png,jpg|file_types:image',

    }

  }

  get messages () {

    return {

    }

  }
}

module.exports = PhotoStore
