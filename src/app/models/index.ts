export interface Post {
  id: 'string'
  title: 'string'
  body: 'string'
  userId: 'string'
  user?: User
}

export interface User extends UserInfo {
  id: 'string'
  postId: 'string'
  password: 'string'
}
export interface UserInfo {
  email: 'string'
  avatar: 'string'
}
export interface Token {
  iat: number
  exp: number
  email: string
  [key: string]: any
}
