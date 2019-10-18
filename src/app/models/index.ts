export interface Post {
  id: 'string'
  title: 'string'
  body: 'string'
  userId: 'string'
  user?: User
}

export interface User {
  id: 'string'
  email: 'string'
  avatar: 'string'
  postId: 'string'
  password: 'string'
}
