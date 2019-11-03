import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router'
import authService from './auth.service'
import auth from 'src/api/auth'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class routeAuth implements CanActivate {
  constructor(private auth: authService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.auth.auth()
  }
}
