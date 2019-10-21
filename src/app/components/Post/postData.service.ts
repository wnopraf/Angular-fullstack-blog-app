import Api from '../../services/api.service'
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Post } from '../../models'

@Injectable({
  providedIn: 'root'
})
export default class FetchPost implements Resolve<Post> {
  constructor(private http: Api) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> {
    const url = `http://localhost:3000/posts/${route.params.id}?_expand=user`

    return this.http.get<Post>(url)
  }
}
