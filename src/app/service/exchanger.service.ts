import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  map, Observable } from 'rxjs';
import { PrivatBankCurrency } from '../interface/privatBankCurrency';


@Injectable({
  providedIn: 'root'
})
export class ExchangerService {
  private urlPrivatBank = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
  private urlExchange = "https://api.apilayer.com/exchangerates_data/latest?&base=EUR"
  private httpOptions = {
    headers: new HttpHeaders({
      'apikey': '7afhVraw2Y3obtDGnpy3uzXKx7qiyFDd'
    })
  };
  // 'FllXIq0l1zt7IWyaRgORm6e3VaTWlchb'
  constructor(private http: HttpClient) { }

  getCurrencyPrivatBank(): Observable<PrivatBankCurrency[]>{
      return this.http.get<PrivatBankCurrency[]>(this.urlPrivatBank)
  }

  getCurrency():Observable<any> {
      return this.http.get<any>(this.urlExchange,this.httpOptions).pipe(map(data=> data.rates ))
    }

}
