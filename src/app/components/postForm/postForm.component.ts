import { Input, Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'post-form',
  templateUrl: './postForm.component.html'
})
export class PostForm implements OnInit {
  @Input() title: string
  @Input() body: string
  @Input() submitAction: (form: FormGroup) => void

  form: FormGroup
  get postTitle(): FormControl {
    return this.form.get('postTitle') as FormControl
  }
  get postBody(): FormControl {
    return this.form.get('postBody') as FormControl
  }

  constructor(private fb: FormBuilder) {}

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
  ngOnInit() {
    this.form = this.fb.group({
      postTitle: this.fb.control(this.title || '', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      postBody: this.fb.control(this.body || '', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ])
    })
  }
}
