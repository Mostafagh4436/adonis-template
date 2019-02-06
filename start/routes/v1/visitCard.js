/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * @type {string} namespace
 */
const namespace = 'v1/VisitCard'

/**
 * @type {string} as
 */
const as = 'visitCard'

/**
 * route to login method
 */
Route.post('/', 'VisitCardController.index')
     .as(`${ as }.index`)
     .validator([`${ namespace }/VisitCardIndex`])
