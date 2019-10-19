import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export default class Api {
  constructor(private http: HttpClient) {}
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url)
  }
  post<T>(url: string, post: T): Observable<T> {
    return this.http.post<T>(url, post)
  }
  put<T>(url: string, post: T): Observable<T> {
    return this.http.put<T>(url, post)
  }
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url)
  }
}
