'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler{

  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param {Object} error
   * @param {Object} request
   * @param {Object} response
   *
   * @return {void}
   */
  async handle(error, {request, response}){

    /** handle request to not match user email or password */
    if(error.code === 'E_PASSWORD_MISMATCH' || error.code === 'E_USER_NOT_FOUND'){
      if(request.header('accept')){
        response.status(error.status).json({
          status : false,
          message: "Invalid request body data"
        })
        return
      }
    }

    /** handle can not login error */
    if(error.code === 'E_CANNOT_LOGIN'){
      if( request.header('accept')){
        response.status(error.status).json({
          status : false,
          message: "Cannot login multiple users at once, since a user is already logged in"
        })
        return
      }

    }

    /** handle request to not found Route */
    if(error.code === 'E_ROUTE_NOT_FOUND' && request.header('accept')){
      response.status(error.status).json({
        status : false,
        message: "Route not found"
      })
      return
    }

    /** handle request body fields error */
    if(error.code === 'E_VALIDATION_FAILED'){
      let messages = []
      error.messages.forEach(function(item){
        messages.push(item.message)
      })
      response.status(error.status).json({
        status : false,
        message: messages
      })
      return
    }

    /** handle not found method error */
    if(error.code === 'E_UNDEFINED_METHOD'){
      response.status(503).json({
        status : false,
        message: 'Cannot process this action. Method not found'
      })
      return
    }

    /** handle csrf token error */
    if(error.code === 'EBADCSRFTOKEN'){
      response.forbidden('Cannot process your request.')
      return
    }

    response.status(error.status).json(error.message)
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} request
   *
   * @return {void}
   */
  async report(error, {request}){

    /** your code hear */

  }


}

module.exports = ExceptionHandler
