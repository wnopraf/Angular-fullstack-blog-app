import Auth from './auth.service'
import { Token } from '../models'
import { Store } from './store.service'

const iat = Math.floor(Date.now() / 1000)
const mockToken: Token = {
  email: 'reto@baylon.com ',
  avatar: 'http://www.getimage.com/reto.jpg',

  iat,
  exp: iat + 60 * 60 * 3
}
const fakeToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1hcmxlbmUuTXVyYXppa0Bob3RtYWlsLmNvbSIsImlhdCI6MTU3MTMyNjk5MCwiZXhwIjoxNTcxMzM3NzkwfQ.42CynkykWv7lC8oeROu0Uo8Z8Z80DG4z0qPgAgHqjRc'
const auth = new Auth()
const { db, decode } = Store

describe('Auth service', () => {
  test('Setting token', () => {
    auth.setToken(fakeToken)
    console.log(decode(fakeToken))

    expect(db.getState()).toHaveProperty('rawToken')
  })
  test('Getting decoded token', () => {
    db.set('decToken', mockToken).write()
    console.log(db.getState())
    expect(auth.getUser()).toEqual({
      email: 'reto@baylon.com ',
      avatar: 'http://www.getimage.com/reto.jpg'
    })
  })
  test('Authorization pass', () => {
    db.set('decToken', mockToken).write()
    expect(auth.auth()).toBe(true)
  })
  test('Authorization fail', () => {
    mockToken.exp = -60 * 60
    db.set('decToken', mockToken).write()
    expect(auth.auth()).toBe(false)
  })
  afterEach(() => {
    db.setState({})
    console.log('Current db state', db.getState())
  })
})
