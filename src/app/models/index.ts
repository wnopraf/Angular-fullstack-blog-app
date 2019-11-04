export interface Post {
  id: 'string'
  title: 'string'
  body: 'string'
  image: 'string'
  userId: 'string'
  user?: User
}

export interface User extends UserInfo {
  postId: 'string'
  password: 'string'
}
export interface UserInfo {
  id: 'string'
  email: 'string'
  avatar: 'string'
}
export interface Token {
  iat: number
  exp: number
  email: string
  [key: string]: any
}
export interface LoginUser {
  email: string
  password: string
}
