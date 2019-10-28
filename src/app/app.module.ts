import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PostExtract } from './components/postExtract/postExtract.component'
import { PostList } from './components/postList/postList.component'
import Api from './services/api.service'
import { HttpClientModule } from '@angular/common/http'
import { PostComponent } from './components/Post/post.component'

import authService from './services/auth.service'
import { AuthHeader } from './components/authheader/authHeader.component'
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    PostExtract,
    PostList,
    PostComponent,
    AuthHeader,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule {}
