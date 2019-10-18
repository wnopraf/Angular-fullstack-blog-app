import { NgModule } from '@angular/core'
import { Routes, RouterModule, Route } from '@angular/router'
import { PostList } from './components/postList/postList.component'
import { PostExtract } from './components/postExtract/postExtract.component'

const routes: Routes = [{ path: '', component: PostList }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
