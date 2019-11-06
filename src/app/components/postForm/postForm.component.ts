import { Input, Component } from '@angular/core'
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http'
@Component({
  selector: 'post-form',
  templateUrl: './postForm.component.html'
})
export class PostForm {
  @Input() title: string
  @Input() body: string
  @Input() submitAction: (form: FormGroup) => void
  @Input() serverValidation: HttpErrorResponse
  form: FormGroup
  get postTitle(): FormControl {
    return this.form.get('postTitle') as FormControl
  }
  get postBody(): FormControl {
    return this.form.get('postBody') as FormControl
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      postTitle: fb.control(this.title || '', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      postBody: fb.control(this.body || '', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ])
    })
  }

  displayErrors(errors: { [key: string]: any }) {
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
}
