import { Component } from '@angular/core'

import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  AbstractControl
} from '@angular/forms'
import Api from 'src/app/services/api.service'
import { LoginUser } from 'src/app/models'
import authService from 'src/app/services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: FormControl
  password: FormControl
  loginForm: FormGroup
  serverValidation: { error: string }

  constructor(
    private fb: FormBuilder,
    private http: Api,
    private auth: authService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(14)
      ])
    })
    this.email = this.loginForm.get('email') as FormControl
    this.password = this.loginForm.get('password') as FormControl
  }
  displayErrors(errors: { [key: string]: any }, field: string) {
    console.log(errors, errors)
    let msg: string[] = []
    for (const [errorKey, errorMsg] of Object.entries(errors)) {
      switch (errorKey) {
        case 'required':
          msg.push('* This field can´t left unfilled.')
          break
        case 'minlength':
          msg.push(
            `* This field must have at least ${errorMsg.requiredLength} characters.`
          )
          break
        case 'maxlength':
          msg.push(
            `* This field must not have more than ${errorMsg.requiredLength} characters.`
          )
          break
        case 'email':
          msg.push(
            `* You must enter a valid email pattern. e.g. rpahilltop@gmail.com`
          )
      }
    }
    return msg
  }
  submit() {
    this.serverValidation = null
    if (this.loginForm.valid) {
      this.http
        .post<LoginUser>('http://localhost:3000/login', {
          email: this.email.value,
          password: this.password.value
        })
        .subscribe({
          next: data => {
            console.log(data, 'res token')
            if (data.token) {
              this.auth.setToken(data.token)
              this.router.navigate(['/'])
            }
          },
          error: e => {
            console.log(e, 'error in response')
            this.serverValidation = e.error
            this.loginForm.reset()
          }
        })
    }
  }
}
