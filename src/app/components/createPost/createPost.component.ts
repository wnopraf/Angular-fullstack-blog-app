import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import Api from 'src/app/services/api.service'
import Faker from 'faker'
@Component({
  selector: 'create-post',
  templateUrl: './createPost.component.html'
})
export class CreatePost {
  validationServer: ErrorConstructor = null
  constructor(private http: Api) {}
  submit(form: FormGroup) {
    const { postTile: title, postBody: body } = form.controls
    const newPost = { image: Faker.image.avatar(), title, body }
    if (form.valid) {
      this.http.post('http://localhost:3000/posts', newPost).subscribe(
        next => {
          console.log('Post posted correctly')
        },
        err => {
          this.validationServer = err
        }
      )
    }
  }
}
