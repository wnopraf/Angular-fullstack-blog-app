import { Store } from './store.service'
import { Token } from '../models'

const { db, decode } = Store

db.set(
  'token',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1hcmxlbmUuTXVyYXppa0Bob3RtYWlsLmNvbSIsImlhdCI6MTU3MTMyNjk5MCwiZXhwIjoxNTcxMzM3NzkwfQ.42CynkykWv7lC8oeROu0Uo8Z8Z80DG4z0qPgAgHqjRc'
).write()

describe(' Localstorage', () => {
  it('should exist', () => {
    expect(db.get('token').value()).toBeDefined()
  })
  it('should decode token', () => {
    const token = decode(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1hcmxlbmUuTXVyYXppa0Bob3RtYWlsLmNvbSIsImF2YXRhciI6Imh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvbmVjb2R5bWljb25lci8xMjguanBnIiwiaWF0IjoxNTcxOTMxNzg4LCJleHAiOjE1NzE5NDI1ODh9.rUY8N9VsCj6MP5_pTui6OJu2IbeJishX2lnmL654T0k'
    )
    db.set('decToken', token).write()
    expect(db.get('decToken').value()).toMatchObject<Token>({
      email: expect.any(String),
      avatar: expect.any(String),
      iat: expect.any(Number),
      exp: expect.any(Number)
    })
  })
})
