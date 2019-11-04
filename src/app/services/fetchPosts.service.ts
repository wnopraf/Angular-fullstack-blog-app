import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router'
import { Post } from '../models'
import Api from './api.service'
import { Observable } from 'rxjs'
import authService from './auth.service'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FetchPosts implements Resolve<Post[]> {
  constructor(private api: Api, private auth: authService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post[]> {
    const user = this.auth.getUser()
    const url = `http://localhost:3000/posts?userId=${user.id}&_expand=user`
    return this.api.get(url)
  }
}
