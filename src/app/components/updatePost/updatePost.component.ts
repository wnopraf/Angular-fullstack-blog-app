import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import authService from 'src/app/services/auth.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Post } from 'src/app/models'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'update-post',
  templateUrl: './updatePost.component.html'
})
export class UpdatePost implements OnInit {
  url: string
  post: Post

  submit: (form: FormGroup) => void = (form: FormGroup) => {
    if (!this.auth.auth()) {
      this.router.navigate(['/not-auth'])
      return
    }
    if (form.valid) {
      const [postTitle, postBody] = [
        form.get('postTitle'),
        form.get('postBody')
      ]
      const [title, body] = [postTitle.value, postBody.value]
      const userId = this.auth.getUser().id
      const rawToken: string = this.auth.getRawToken()
      const newPost: Post = {
        id: this.post.id,
        userId,
        image: this.post.image,
        title,
        body
      }
      const headers = {
        headers: {
          authorization: 'bearer ' + rawToken,
          'Content-Type': 'application/json'
        }
      }
      const jsonPost = JSON.stringify(newPost)
      this.http.put(this.url, jsonPost, headers).subscribe(
        next => {
          this.router.navigate(['/user/dashboard'])
        },
        err => {
          this.router.navigate(['/server-error'])
        }
      )
    }
  }
  constructor(
    private http: HttpClient,
    private auth: authService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(({ id }: { id: string }) => {
      this.url = `http://localhost:3000/posts/${id}`
    })
  }
  getPostData(): Observable<Post> {
    return this.http.get<Post>(this.url)
  }

  ngOnInit() {
    this.getPostData().subscribe((post: Post) => {
      this.post = post
    })
  }
}
