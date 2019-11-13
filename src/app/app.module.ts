import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PostExtract } from './components/postExtract/postExtract.component'
import { PostList } from './components/postList/postList.component'

import { PostComponent } from './components/Post/post.component'

import { AuthHeader } from './components/authHeader/authHeader.component'
import { LoginComponent } from './components/login/login.component'
import { HttpClientModule } from '@angular/common/http'
import { DashBoard } from './components/dashBoard/dashBoard.component'
import { AuthLInks } from './components/authLinks/authLinks.component'
import { AuthPost } from './components/authPost/authPost.component'
import { NotAuth } from './components/notAuth/notAuthorized.component'
import { PostForm } from './components/postForm/postForm.component'
import { CreatePost } from './components/createPost/createPost.component'
import { UpdatePost } from './components/updatePost/updatePost.component'
import { Modal } from './components/modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    PostExtract,
    PostList,
    PostComponent,
    AuthHeader,
    LoginComponent,
    DashBoard,
    AuthLInks,
    AuthPost,
    NotAuth,
    PostForm,
    CreatePost,
    UpdatePost,
    Modal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
