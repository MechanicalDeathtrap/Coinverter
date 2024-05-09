import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from "rxjs";
import {CurrencyData} from "../currency";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currencies: CurrencyData | undefined
  calculatedCurrencies: number[] =[]

  private apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';
  //'https://api.currencyapi.com/v3/latest?apikey=cur_live_MeZAGiFMXm29hflj2t4C2X6sSOxpXPN0EOfVypez&currencies=EUR%2CUSD%2CCAD';
  constructor(private httpClient: HttpClient) {}
  getCurrency(): void /*Observable<CurrencyData>*/{
    this.httpClient.get<CurrencyData>(this.apiUrl)
        .subscribe((currency) =>{this.currencies = currency });
  }

  calculateCurrencyValues(value: number) {
    console.log(this.currencies)
    if (value){
      this.calculatedCurrencies = []
      this.calculatedCurrencies.push(Math.round(value / <number>this.currencies?.Valute.USD.Value))
      this.calculatedCurrencies.push(Math.round(value / <number>this.currencies?.Valute.EUR.Value))
      this.calculatedCurrencies.push(Math.round(value / <number>this.currencies?.Valute.GBP.Value))
      this.calculatedCurrencies.push(Math.round(value / <number>this.currencies?.Valute.JPY.Value))
      this.calculatedCurrencies.push(Math.round(value / <number>this.currencies?.Valute.CNY.Value))
    }
    else {
      this.calculatedCurrencies = [0,0,0,0,0]
    }
    return this.calculatedCurrencies
  }
}

