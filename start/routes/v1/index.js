/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

const namespace = 'v1'
const v1 = 'api/v1';

/** authenticate route module */
Route.group(function () { require('./auth.js'); })
  .prefix(`${v1}/auth`)
  .namespace(`${namespace}/Auth`)
  .middleware('throttle:60,1')

Route.group(function () { require('./user.js'); })
  .prefix(`${v1}/user`)
  .namespace(`${namespace}/User`)

Route.group(function () { require('./photo.js'); })
  .prefix(`${v1}/photo`)
  .namespace(`${namespace}/Photo`)

Route.group(function () { require('./visitCard.js'); })
     .prefix(`${v1}/visit_card`)
     .namespace(`${namespace}/VisitCard`)


