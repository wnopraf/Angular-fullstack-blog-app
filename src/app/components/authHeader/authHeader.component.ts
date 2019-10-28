import { Component } from '@angular/core'
import authService from 'src/app/services/auth.service'
import { UserInfo } from 'src/app/models'

@Component({
  selector: 'auth-header',
  templateUrl: './authHeader.component.html'
})
export class AuthHeader {
  isLogged: boolean
  user: UserInfo
  constructor(private auth: authService) {
    this.isLogged = this.auth.auth()
    this.user = this.auth.getUser()
  }
}
