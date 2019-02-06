/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * @type {string} namespace
 */
const namespace = 'v1/Photo'

/**
 * @type {string} as
 */
const as = 'photo'

/**
 * route to login method
 */
Route.post('/', 'PhotoController.store')
     .as(`${ as }.store`)
     .validator([`${ namespace }/PhotoStore`])
