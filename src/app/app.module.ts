import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { HomeService } from './home.service';
import { HomeComponent } from './home/home.component';

const ROUTES = [
 {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent //PostsComponent injected here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    PostsService,
    HomeService
  ],// Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
