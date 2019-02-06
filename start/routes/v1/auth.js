/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * @type {string} namespace
 */
const namespace = 'Auth'

/**
 * @type {string} as
 */
const as = 'auth'

/**
 * route to login method
 */
Route.post('login', 'AuthController.login')
     .as(`${as}.login`)
     .validator([`${namespace}/Login`])

/**
 * route to register method
 */
// Route.post('register', 'AuthController.register').as(`${as}.register`)

/**
 * route to logout method
 */
// Route.get('/logout', 'AuthController.logout').as(`${as}.logout`).middleware(['auth'])
