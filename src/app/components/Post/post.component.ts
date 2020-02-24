import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Post } from 'src/app/models'

@Component({
  selector: 'post',
  templateUrl: './post.template.html'
})
export class PostComponent {
  post: Post
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ FetchPost }) => {
      this.post = FetchPost
    })
  }
}
