import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../_models/currency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  baseUrl = 'http://data.fixer.io/api/';

  constructor(private http: HttpClient) { }

  getLatestCurrencys(): Observable<Currency> {
    return this.http.get<Currency>(this.baseUrl + 'latest?access_key=' + '0924401e0f622b176c822d86644ee172');
  }
}
