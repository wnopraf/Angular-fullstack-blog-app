import { Post } from '../models'

import { Observable } from 'rxjs'
import authService from './auth.service'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchPosts {
  constructor(private http: HttpClient, private auth: authService) {}

  get(): Observable<Post[]> {
    const userId = this.auth.getUser().id
    const url = `http://localhost:3000/posts?userId=${userId}&_expand=user`
    return this.http.get<Post[]>(url)
  }
}
