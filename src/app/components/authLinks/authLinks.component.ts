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
  openModal: boolean

  constructor(
    private http: HttpClient,
    private auth: authService,
    private router: Router
  ) {}
  delete() {
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

  confirmModal(confirmation?: string) {
    if (confirmation) {
      switch (confirmation) {
        case 'yes':
          this.delete()
          document.body.style.overflow = 'visible'

          return
        case 'no':
          this.openModal = false
          document.body.style.overflow = 'visible'

          return
      }
    } else {
      this.openModal = true
      document.body.style.overflow = 'hidden'
    }
  }
}
