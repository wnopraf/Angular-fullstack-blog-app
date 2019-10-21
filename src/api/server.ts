const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('./src/db/db.json')
const middlewares = jsonServer.defaults()
const bodyParser = jsonServer.bodyParser
const login = require('./login.ts')
const auth = require('./auth.ts')

server.use(middlewares)
server.use(bodyParser)
server.post('/login', login)
server.use(auth)
server.use(router)
server.listen(3000, () => console.log('server listen on port 3000'))
