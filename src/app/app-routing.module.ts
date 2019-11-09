import { NgModule } from '@angular/core'
import { Routes, RouterModule, Route } from '@angular/router'
import { PostList } from './components/postList/postList.component'
import FetchPost from './components/Post/postData.service'
import { FetchPosts } from './services/fetchPosts.service'
import { PostComponent } from './components/Post/post.component'
import { LoginComponent } from './components/login/login.component'
import { DashBoard } from './components/dashBoard/dashBoard.component'
import { routeAuth } from './services/routeAuth.service'
import { AuthPost } from './components/authPost/authPost.component'
import { NotAuth } from './components/notAuth/notAuthorized.component'
import { CreatePost } from './components/createPost/createPost.component'
import { UpdatePost } from './components/updatePost/updatePost.component'

const routes: Routes = [
  { path: '', component: PostList },
  { path: 'post/:id', component: PostComponent, resolve: { FetchPost } },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: '' },
  {
    path: 'user/dashboard',
    canActivate: [routeAuth],
    resolve: { FetchPosts },
    runGuardsAndResolvers: 'always',
    children: [
      { path: '', component: DashBoard },
      { path: 'post/new', component: CreatePost },
      { path: 'post/:id', component: AuthPost, resolve: { FetchPost } },
      { path: 'post/:id/update', component: UpdatePost }
    ]
  },
  { path: 'not-authorized', component: NotAuth }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
