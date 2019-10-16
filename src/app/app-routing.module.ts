import { NgModule } from '@angular/core'
import { Routes, RouterModule, Route } from '@angular/router'
import { PostList } from './components/postList/postList.component'
import { Post } from './components/post/post.component'

const routes: Routes = [
  { path: '/', component: PostList },
  { path: '/post/id', component: Post }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
