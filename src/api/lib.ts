import { sign, verify } from 'jsonwebtoken'
const dotEnv = require('dotenv')

dotEnv.config()
const key = process.env.API_KEY

export function signToken(payLoad) {
  return sign(payLoad, key, { expiresIn: '3h' })
}

export function verifyToken(token, cb) {
  verify(token, key, cb)
}
