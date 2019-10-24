import { create, router, defaults, bodyParser } from 'json-server'
import login from './login'
import auth from './auth'

/* const jsonServer = require('json-server') */

/* const server = jsonServer.create()
const router = router('./src/db/db.json')
const middlewares = jsonServer.defaults()
const bodyParser = jsonServer.bodyParser */
/* const login = require('./login.ts')
const auth = require('./auth.ts') */
const server = create()
server.use(defaults())
server.use(bodyParser)
server.post('/login', login)
server.use(auth)
server.use(router('./src/db/db.json'))
server.listen(3000, () => console.log('server listen on port 3000'))
