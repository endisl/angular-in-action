import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from './services/account.service';
import { AlertService } from './services/alert.service';
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

  constructor(private _accountService: AccountService, 
    private stocksService: StocksService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.accountService.init();
    this.load();
    
    this.interval = setInterval(() => {
      if (this.refresh) {
        this.load();
      }
    }, 15000);
  }

  toggleRefresh(): void {
    this.refresh = !this.refresh;
    let onOff = (this.refresh) ? 'on' : 'off';
    this.alertService.alert(`You have turned automatic refresh ${onOff}`, 'info');
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  reset(): void {
    this._accountService.reset();
    this.alertService.alert('You have reset your portfolio!');
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
