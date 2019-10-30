import { NgModule } from '@angular/core'
import { Routes, RouterModule, Route } from '@angular/router'
import { PostList } from './components/postList/postList.component'
import FetchPost from './components/Post/postData.service'
import { PostComponent } from './components/Post/post.component'
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  { path: '', component: PostList },
  { path: 'post/:id', component: PostComponent, resolve: { FetchPost } },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
