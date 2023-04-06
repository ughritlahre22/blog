import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfountComponent } from './notfount/notfount.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // redirect to `first-component
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'create', component: CreateComponent },
  { path: 'create/:id', component: CreateComponent },
  { path: 'Viewblog', component:  ViewblogComponent },
  { path: 'manage', component:  ManageComponent },
  
 
  { path: '**', component: NotfountComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
