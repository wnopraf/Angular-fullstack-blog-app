import { Store } from './store.service'

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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1hcmxlbmUuTXVyYXppa0Bob3RtYWlsLmNvbSIsImlhdCI6MTU3MTMyNjk5MCwiZXhwIjoxNTcxMzM3NzkwfQ.42CynkykWv7lC8oeROu0Uo8Z8Z80DG4z0qPgAgHqjRc'
    )
    db.set('decToken', token).write()
    expect(db.get('decToken').value()).toHaveProperty('payload')
  })
})
