import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowingComponent } from './components/following/following.component';


@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent,
    FollowingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
