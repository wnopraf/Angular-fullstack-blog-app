import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

import { decode } from 'jsonwebtoken'

const adapter = new LocalStorage('db')

export class Store {
  static db: any = lowdb(adapter)

  static decode(token: string): string | { [key: string]: any } {
    return decode(token)
  }
}
