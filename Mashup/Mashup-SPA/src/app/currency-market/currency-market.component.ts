import { Component, OnInit } from '@angular/core';
import { CoinIndexDTOService } from '../_services/coinIndexDTO.service';
import { CurrencyService } from '../_services/currency.service';
import { CoinIndexDTO } from '../_models/coinIndexDTO';
import { Coin } from '../_models/coin';
import { Currency } from '../_models/currency';

@Component({
  selector: 'app-currency-market',
  templateUrl: './currency-market.component.html',
  styleUrls: ['./currency-market.component.css']
})
export class CurrencyMarketComponent implements OnInit {
  coins: Coin[];
  currency: Currency;

  constructor(private wCIService: CoinIndexDTOService, private currencyService: CurrencyService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.wCIService.getCoinIndex().subscribe((coinIndex: CoinIndexDTO) => {
      this.coins = coinIndex.Markets;
    }, error => {
      console.log(error);
    });

    this.currencyService.getLatestCurrencys().subscribe((currency: Currency) => {
      this.currency = currency;
    }, error => {
      console.log(error);
    });
  }

}
