const jwt = require('jsonwebtoken')
const key = 'ngKey'

function signToken(payLoad) {
  return jwt.sign(payLoad, key, { expiresIn: '3h' })
}

function verifyToken(token, cb) {
  jwt.verify(token, key, cb)
}

module.exports = {
  signToken,
  verifyToken
}
