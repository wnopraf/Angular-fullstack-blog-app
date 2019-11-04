import { Component, Input } from '@angular/core'

@Component({
  selector: 'auth-links',
  templateUrl: './authLinks.component.html'
})
export class AuthLInks {
  @Input() id
}
