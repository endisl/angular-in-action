import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { InvestmentsComponent } from './investments/investments.component';
import { TickerComponent } from './ticker/ticker.component';
import { StocksComponent } from './stocks/stocks.component';
import { AlertComponent } from './alert/alert.component';

import { LocalStorageService } from './services/local-storage.service';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
        InvestmentsComponent,
        TickerComponent,
        StocksComponent,
        AlertComponent,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ClarityModule,
  ],
  providers: [
        LocalStorageService,
        CurrencyPipe,
        AccountService
       ],
  bootstrap: [AppComponent]
})
export class AppModule { }
