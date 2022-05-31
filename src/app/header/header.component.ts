import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrivatBankCurrency } from '../interface/privatBankCurrency';
import {ExchangerService} from '../service/exchanger.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ExchangerService]
})
export class HeaderComponent implements OnInit {
  public currencies$:Observable<PrivatBankCurrency[]>

  constructor(private currencies: ExchangerService) {
    this.currencies$ =  this.currencies.getCurrencyPrivatBank()
   }

  ngOnInit(): void {
  }

}
