import jwt from 'jsonwebtoken'
import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/localStorage'
import { Injectable } from '@angular/core'

const adapter = new LocalStorage('db')
@Injectable({ providedIn: 'root' })
export class Store {
  static db = new lowdb(adapter)

  set(key: string, value: any) {
    Store.db.set(key, value)
  }

  decode(token: string) {
    return jwt.decode({ complete: true })
  }

  get(key: string) {
    return Store.db.get(key)
  }
}
