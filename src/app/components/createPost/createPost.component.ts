import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import Api from 'src/app/services/api.service'
import Faker from 'faker'

import authService from 'src/app/services/auth.service'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Post } from 'src/app/models'

@Component({
  selector: 'create-post',
  templateUrl: './createPost.component.html'
})
export class CreatePost {
  submit: (form: FormGroup) => void = (form: FormGroup) => {
    if (!this.auth.auth()) {
      this.router.navigate(['/not-auth'])
      return
    }
    if (form.valid) {
      const [postTitle, postBody] = [
        form.get('postTitle'),
        form.get('postBody')
      ]
      const [title, body] = [postTitle.value, postBody.value]
      const userId = this.auth.getUser().id
      const rawToken: string = this.auth.getRawToken()
      const newPost: Post = { userId, image: Faker.image.image(), title, body }
      const headers = {
        headers: {
          authorization: 'bearer ' + rawToken,
          'Content-Type': 'application/json'
        }
      }
      const jsonPost = JSON.stringify(newPost)
      this.http
        .post('http://localhost:3000/posts', jsonPost, headers)
        .subscribe(
          next => {
            console.log('Post posted correctly', next)
            this.router.navigate(['/user/dashboard'])
          },
          err => {
            console.log(err, 'post error')
            this.router.navigate(['/server-error'])
          }
        )
    }
  }
  constructor(
    private http: HttpClient,
    private auth: authService,
    private router: Router
  ) {}
}
