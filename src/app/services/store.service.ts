import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import { Injectable } from '@angular/core'
import { decode } from 'jsonwebtoken'

const adapter = new LocalStorage('db')

@Injectable({ providedIn: 'root' })
export class Store {
  static db: any = lowdb(adapter)

  static decode(token: string): string | { [key: string]: any } {
    return decode(token, { complete: true })
  }
}
