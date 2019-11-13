import { Component, Input } from '@angular/core'

import authService from 'src/app/services/auth.service'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'auth-links',
  templateUrl: './authLinks.component.html'
})
export class AuthLInks {
  @Input() id
  open: boolean
  showModal = () => {
    if (this.open) {
      this.open = false
    } else {
      this.open = true
    }
  }
  delete = () => {
    if (this.auth.auth()) {
      const headers = {
        headers: { authorization: 'bearer ' + this.auth.getRawToken() }
      }
      const url = `http://localhost:3000/posts/${this.id}`
      this.http.delete(url, headers).subscribe(
        data => {
          console.log('delete', data)

          this.router.navigate(['/user/dashboard'])
        },
        error => {
          this.router.navigate(['/500'])
        }
      )
    } else {
      this.router.navigate(['/login'])
    }
  }
  constructor(
    private http: HttpClient,
    private auth: authService,
    private router: Router
  ) {}
}
