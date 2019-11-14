import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'auth-post',
  templateUrl: './authPost.component.html'
})
export class AuthPost implements OnInit {
  id: string
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }: Params) => {
      this.id = id
    })
  }
}
