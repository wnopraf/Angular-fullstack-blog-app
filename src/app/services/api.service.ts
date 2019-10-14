import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Post } from '../models'

@Injectable()
export default class Api {
  constructor(private http: HttpClient) {}
  get(url: string): Observable<Post[]> {
    return this.http.get<Post[]>(url)
  }
  post(url: string, post: Post): Observable<Post> {
    return this.http.post<Post>(url, post)
  }
  put(url: string, post: Post): Observable<Post> {
    return this.http.put<Post>(url, post)
  }
  delete(url: string): Observable<Post> {
    return this.http.delete<Post>(url)
  }
}
