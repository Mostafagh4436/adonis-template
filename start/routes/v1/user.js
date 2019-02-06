/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * @type {string} namespace
 */
const namespace = 'v1/User'

/**
 * @type {string} as
 */
const as = 'user'

/**
 * route to login method
 */
Route.get('index', 'UserController.index')
     .as(`${ as }.index`)
     .validator([`${ namespace }/UserIndex`])
