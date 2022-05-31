import { Component,  OnInit } from '@angular/core';

import {ExchangerService} from '../service/exchanger.service'


@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css'],
  providers: [ExchangerService]
})
export class ExchangerComponent implements OnInit {
  public rates$ : any
  public counterFrom=0 ;
  public counterTo= 0;
  public rateFrom  = 0
  public rateTo = 0
  public from = 'AED' ;
  public to = 'AED' ;

 
  constructor(private currencies : ExchangerService) {
  this.currencies.getCurrency().subscribe(data=>this.rates$=data)
   }
  ngOnInit(): void {
  }


  exchangerFrom(event:string){
    this.counterFrom = +event
    this.counterTo = this.counterFrom * this.rates$[this.to] / this.rates$[this.from]
 this.counterTo = +this.counterTo.toFixed(2)
  }
  exchangerTo(event:string){
    this.counterTo = +event
    this.counterFrom = +this.counterTo * this.rates$[this.from] / this.rates$[this.to]
    this.counterFrom = +this.counterFrom.toFixed(2)
  }
  exchangerRateFrom(event:string){
     this.from = event
     this.counterTo = this.counterFrom * this.rates$[this.to] / this.rates$[this.from]
     this.counterTo = +this.counterTo.toFixed(2)
  }
  exchangerRateTo(event:string){
    this.to = event
    this.counterFrom = +this.counterTo * this.rates$[this.from] / this.rates$[this.to]
    this.counterFrom = +this.counterFrom.toFixed(2)
  }

}
