import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router'
import authService from './auth.service'
import auth from 'src/api/auth'
import { Injectable } from '@angular/core'
import { router } from 'json-server'

@Injectable({
  providedIn: 'root'
})
export class routeAuth implements CanActivate {
  constructor(private auth: authService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.auth()) {
      return true
    } else {
      this.router.navigate(['/not-authorized'])
    }
  }
}
