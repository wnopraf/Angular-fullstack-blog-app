import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PostExtract } from './components/postExtract/postExtract.component'
import { PostList } from './components/postList/postList.component'

import { PostComponent } from './components/Post/post.component'

import { AuthHeader } from './components/authheader/authHeader.component'
import { LoginComponent } from './components/login/login.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PostExtract,
    PostList,
    PostComponent,
    AuthHeader,
    LoginComponent
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
