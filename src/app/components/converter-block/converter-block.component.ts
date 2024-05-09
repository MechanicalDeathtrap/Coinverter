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

  calculatedCurrencies: number[] = []

  constructor(private currencyService: CurrencyService) {
    this.getCurrency()
  }

  getCurrency() {
    this.currencyService.getCurrency()
  }

  calculateCurrencyValues(value: number){
    this.calculatedCurrencies = this.currencyService.calculateCurrencyValues(value)
    }
    protected readonly parseInt = parseInt;
}
