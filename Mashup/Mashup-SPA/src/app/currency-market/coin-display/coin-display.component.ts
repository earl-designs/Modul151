import { Component, OnInit, Input } from '@angular/core';
import { Coin } from 'src/app/_models/coin';
import { Currency } from 'src/app/_models/currency';

@Component({
  selector: 'app-coin-display',
  templateUrl: './coin-display.component.html',
  styleUrls: ['./coin-display.component.css']
})
export class CoinDisplayComponent implements OnInit {
  @Input() coin: Coin;
  @Input() currency: Currency;

  constructor() { }

  ngOnInit() {
  }

}
