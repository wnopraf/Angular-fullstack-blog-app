import { verifyToken } from './lib'

export default function auth(req, res, next) {
  if (
    req.method === 'POST' ||
    req.method === 'PUT' ||
    req.method === 'DELETE'
  ) {
    const authorization = req.get('authorization')

    if (!authorization) {
      return res.status(401).send({
        error: 'invalid token'
      })
    }
    const token = authorization.split(' ')[1]

    verifyToken(token, (err, token) => {
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
