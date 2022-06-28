import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private _accountService: AccountService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  toggleRefresh(): void {

  }

  reset(): void {
    this._accountService.reset();
  }

  get accountService() {return this._accountService; }

  private load(): void {

  }
}
