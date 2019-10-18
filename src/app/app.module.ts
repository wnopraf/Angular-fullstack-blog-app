import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { Post } from './components/postExtract/postExtract.component'
import { PostList } from './components/postList/postList.component'
import Api from './services/api.service'

@NgModule({
  declarations: [AppComponent, Post, PostList],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule {}
