const low = require('lowdb')
const fsAdapter = require('lowdb/adapters/FileSync')
const casual = require('casual')
const adapter = new fsAdapter(__dirname + '/db.json')
const db = low(adapter)
const id = require('shortid')

db.defaults({
  users: [],
  posts: [],
  count: 0
}).write()

function fillRandomUser(userNumber = 10) {
  console.log(db.get('users').value().length)
  if (db.get('users').value().length) {
    db.get('users')
      .remove(() => true)
      .write()
  }
  let i = 0
  const users = []
  while (i < userNumber) {
    users.push({
      id: id.generate(),
      email: casual.email,
      password: casual.password
    })
    i += 1
  }
  db.get('users')
    .push(...users)
    .write()
}

function belongTo(parentCollection, childCollection, childNumber = 5) {
  parentCollection
    .forEach(e => {
      console.log('iter')

      let i = 0
      while (i < childNumber) {
        childCollection
          .push({
            id: id.generate(),
            userId: e.id,
            title: casual.title,
            body: casual.text
          })
          .write()
        i += 1
      }
    })
    .write()
}

function createDb() {
  fillRandomUser()
  const users = db.get('users')
  const posts = db.get('posts')
  belongTo(users, posts)
}
createDb()
