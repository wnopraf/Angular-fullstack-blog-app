import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Post } from 'src/app/models'

@Component({
  selector: 'PostComponent',
  templateUrl: './post.template.html'
})
export class PostComponent {
  post: Post
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ FetchPost }) => {
      console.log(FetchPost, 'post data')
      this.post = FetchPost
    })
  }
}
