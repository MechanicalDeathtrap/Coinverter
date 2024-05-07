import {ChangeDetectionStrategy, Component, Input, Output} from '@angular/core';
import {CurrencyData, CurrencyValue} from "../../currency";
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-converter-block',
  templateUrl: './converter-block.component.html',
  styleUrl: './converter-block.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConverterBlockComponent {

  currencies: CurrencyData | undefined
  calculatedCurrencies: number[] =[]

  constructor(private currencyService: CurrencyService) {
    this.getCurrency()
  }

  getCurrency() {
      this.currencyService.getCurrency().subscribe(currency => this.currencies = currency)
  }

  calculateCurrencyValues(value: number){

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
    }
    protected readonly parseInt = parseInt;
}
