import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from './services/account.service';
import { Stock } from './services/stocks.model';
import { StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StocksService]
})
export class AppComponent implements OnInit, OnDestroy {
  refresh: boolean = true;
  stocks: Stock[] = [];
  interval: any;

  constructor(private _accountService: AccountService, private stocksService: StocksService) { }

  ngOnInit(): void {
    this.load();
    
    this.interval = setInterval(() => {
      if (this.refresh) {
        this.load();
      }
    }, 15000);
  }

  toggleRefresh(): void {
    this.refresh = !this.refresh;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  reset(): void {
    this._accountService.reset();
  }

  get accountService() {return this._accountService; }

  private load(): void {
    this.stocksService.getStocks().subscribe(stocks => {
      this.stocks = stocks;
    }, error => {
      console.log(`There was an error loading stocks: ${error}`);
    });
  }
}
