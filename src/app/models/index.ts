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

export interface Token {
  iat: number
  exp: number
  email: string
  [key: string]: any
}
