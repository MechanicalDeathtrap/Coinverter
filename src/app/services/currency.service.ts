import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from "rxjs";
import {CurrencyData} from "../currency";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';
  //'https://api.currencyapi.com/v3/latest?apikey=cur_live_MeZAGiFMXm29hflj2t4C2X6sSOxpXPN0EOfVypez&currencies=EUR%2CUSD%2CCAD';
  constructor(private httpClient: HttpClient) {

  }

/*  getCu(): void{
    this.httpClient.get(this.apiUrl)
        .subscribe((data) => {
          console.log(data)
        });
  }*/
  getCurrency(): Observable<CurrencyData>{
    return this.httpClient.get<CurrencyData>(this.apiUrl)
        .pipe(
            tap(() => console.log('getCurrency'))
        );
  }
}

