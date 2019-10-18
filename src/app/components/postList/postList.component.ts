import { Component, OnInit } from '@angular/core'
import { Post } from 'src/app/models'
import Api from 'src/app/services/api.service'

@Component({
  templateUrl: './postList.template.html',
  selector: 'Post'
})
export class PostList implements OnInit {
  postData: Post[]
  postResource: string = 'https://localhost:3000/posts/_expand=user'
  constructor(private http: Api) {}

  ngOnInit() {
    this.http.get(this.postResource).subscribe(data => {
      console.log(data, 'data from postlist')
      this.postData = data
    })
  }
}
