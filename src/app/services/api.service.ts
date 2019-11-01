import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export default class Api {
  constructor(private http: HttpClient) {}
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url)
  }
  post<T>(url: string, post: T): Observable<any> {
    return this.http.post<T>(url, post)
  }
  put<T>(url: string, post: T): Observable<any> {
    return this.http.put<T>(url, post)
  }
  delete<T>(url: string): Observable<any> {
    return this.http.delete<T>(url)
  }
}
