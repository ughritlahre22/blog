import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoService } from './demo.service';
import { PostComponent } from './post/post.component';
import { NotfountComponent } from './notfount/notfount.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { ManageComponent } from './manage/manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchfilterPipe } from './searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NotfountComponent,
    HomeComponent,
    CreateComponent,
    ViewblogComponent,
    ManageComponent,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
