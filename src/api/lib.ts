import { sign, verify } from 'jsonwebtoken'
import { config } from 'dotenv'

config()
const key = process.env.API_KEY

export function signToken(payLoad) {
  return sign(payLoad, key, { expiresIn: '3h' })
}

export function verifyToken(token, cb) {
  verify(token, key, cb)
}
