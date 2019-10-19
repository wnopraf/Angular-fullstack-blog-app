import { Component, OnInit } from '@angular/core'
import { Post } from 'src/app/models'
import Api from 'src/app/services/api.service'

@Component({
  templateUrl: './postList.template.html',
  selector: 'PostList'
})
export class PostList implements OnInit {
  postData: Post[]
  postResource: string = 'http://localhost:3000/posts?_expand=user'
  constructor(private http: Api) {}

  ngOnInit() {
    this.http.get<Post[]>(this.postResource).subscribe(data => {
      console.log(data, 'data from postlist')
      this.postData = data
    })
  }
}
