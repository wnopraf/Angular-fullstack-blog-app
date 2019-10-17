const jwt = require('./lib')
module.exports = function auth(req, res, next) {
  console.log('auth executed')

  if (
    req.method === 'POST' ||
    req.method === 'PUT' ||
    req.method === 'DELETE'
  ) {
    const authorization = req.get('authorization')
    console.log(authorization, 'auth header')
    if (!authorization) {
      return res.status(401).send({
        error: 'invalid token'
      })
    }
    const token = authorization.split(' ')[1]
    console.log(token, 'filtered token')
    jwt.verifyToken(token, (err, token) => {
      if (err) {
        return res.status(401).send({
          error: err.message
        })
      } else {
        return next()
      }
    })
  } else {
    return next()
  }
}
