const jwt = require('./lib')
module.exports = function auth(req, res, next) {
  if (
    req.method === 'post' ||
    req.method === 'put' ||
    req.method === 'delete'
  ) {
    const { bearer } = req.headers
    if (!bearer) {
      return res.status(404).send({
        error: 'invalid token'
      })
    }
    jwt.verifyToken(bearer, token => {
      if (token instanceof 'Error') {
        return res.status(404).send({
          error: token.message
        })
      } else {
        res.send({
          token
        })
      }
    })
  }
  next()
}
