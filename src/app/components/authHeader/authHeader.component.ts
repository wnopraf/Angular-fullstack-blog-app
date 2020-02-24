import { Component } from '@angular/core'
import authService from 'src/app/services/auth.service'
import { UserInfo } from 'src/app/models'
import { Router, NavigationStart } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'auth-header',
  templateUrl: './authHeader.component.html'
})
export class AuthHeader {
  isLogged: boolean
  user: UserInfo

  constructor(private auth: authService, private router: Router) {
    this.router.events
      .pipe(
        filter(data => {
          return data instanceof NavigationStart
        })
      )
      .subscribe(data => {
        this.isLogged = this.auth.auth()

        this.user = this.isLogged && this.auth.getUser()
      })
  }
  logOut() {
    this.auth.removeToken()
    this.router.navigate(['/logout'])
  }
}
