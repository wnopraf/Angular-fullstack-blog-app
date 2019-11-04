import { ActivatedRoute } from '@angular/router'
import { Post } from 'src/app/models'
import { Component } from '@angular/core'
import { FetchPosts } from 'src/app/services/fetchPosts.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashBoard.component.html'
})
export class DashBoard {
  userPosts: Post[]
  constructor(private route: ActivatedRoute) {
    route.data.subscribe(({ FetchPosts }: { FetchPosts: Post[] }) => {
      console.log(FetchPosts, 'user posts')
      this.userPosts = FetchPosts
    })
  }
}
