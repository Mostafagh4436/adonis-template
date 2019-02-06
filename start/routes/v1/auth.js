const Route = use('Route')
const namespace = 'v1/Auth'
const as = 'auth'


Route.post('code/request', 'AuthController.verifyCodeRequest')
     .as(`${ as }.verifyCodeRequest`)
     .validator([`${ namespace }/VerifyCodeRequest`])

Route.post('login', 'AuthController.login')
     .as(`${ as }.login`)
     .validator([`${ namespace }/Login`])

