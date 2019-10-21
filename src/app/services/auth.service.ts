import { Injectable } from '@angular/core'
import { Store } from './store.service'

@Injectable({ providedIn: 'root' })
export default class {
  auth() {
    if (Store.db.get('token')) return true
    return false
  }

  getUser() {
    return Store.db.get('token.user')
  }

  setToken(token) {
    Store.db.set('token', token)
  }
}
