import { Input, Component } from '@angular/core'

@Component({
  selector: 'postExtract',
  templateUrl: './postExtract.template.html'
})
export class Post {
  @Input() title
  @Input() body
  @Input() author

  extract(): string {
    return this.body.slice(0, 100)
  }
}
