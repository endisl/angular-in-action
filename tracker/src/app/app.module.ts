import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { SummaryComponent } from './components/summary/summary.component';



@NgModule({
  declarations: [
    AppComponent,    
    SummaryComponent
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
