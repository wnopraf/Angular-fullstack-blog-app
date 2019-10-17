const low = require('lowdb')
const fsAdapter = require('lowdb/adapters/FileSync')
const faker = require('faker')
const adapter = new fsAdapter(__dirname + '/db.json')
const db = low(adapter)
const id = require('shortid')

db.defaults({
  users: [],
  posts: [],
  count: 0
}).write()

function fillRandomUser(userNumber = 10) {
  let i = 0
  const users = []
  while (i < userNumber) {
    users.push({
      id: id.generate(),
      email: faker.internet.email(),
      password: faker.internet.password(6),
      avatar: faker.image.avatar()
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
            title: faker.name.title(),
            body: faker.lorem.paragraphs(),
            image: faker.image.image()
          })
          .write()
        i += 1
      }
    })
    .write()
}
function reset() {
  db.forIn((value, key) => {
    db.set(key, []).write()
  }).write()
}

function createDb() {
  reset()
  fillRandomUser()
  const users = db.get('users')
  const posts = db.get('posts')
  belongTo(users, posts)
}
createDb()
