import { Input, Component } from '@angular/core'

@Component({
  selector: 'PostExtract',
  templateUrl: './postExtract.template.html'
})
export class PostExtract {
  @Input() title
  @Input() body
  @Input() author
  @Input() url
  @Input() avatar

  extract(): string {
    return this.body.slice(0, 100)
  }
}
