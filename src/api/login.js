const jwt = require('./lib')
const db = require('../db/db.json')
const users = db.users
module.exports = function login(req, res, next) {
  if (req.body.email && req.body.password) {
    const user = users.find(e => {
      return e.email === req.body.email
    })
    if (user && user.password === req.body.password) {
      // return token
      const token = jwt.signToken({ email: user.email })
      return res.send({ token })
    } else {
      return res.status(401).send({ error: 'User or password are incorrect.' })
    }
  } else {
    return res
      .status(401)
      .send({ error: 'Please fill email and password fields.' })
  }
}