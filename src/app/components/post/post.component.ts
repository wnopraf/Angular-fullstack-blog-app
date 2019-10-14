import { Input, Component } from '@angular/core'

@Component({
  selector: 'post',
  templateUrl: './post.template.html'
})
export class Post {
  @Input() title
  @Input() body
}
