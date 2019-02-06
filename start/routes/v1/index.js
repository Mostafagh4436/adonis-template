/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

const namespace = 'v1'
const v1 = 'api/v1';

/** authenticate route module */
Route.group(function () { require('./auth.js'); })
     .prefix(`${v1}/auth`)
     .namespace(`${namespace}/Auth`)


