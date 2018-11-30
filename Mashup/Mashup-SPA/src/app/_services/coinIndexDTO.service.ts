import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoinIndexDTO } from '../_models/coinIndexDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinIndexDTOService {
  baseUrl = 'https://www.worldcoinindex.com/apiservice';

  constructor(private http: HttpClient) { }

  getCoinIndex(): Observable<CoinIndexDTO> {
    return this.http.get<CoinIndexDTO>(this.baseUrl + '/json?key=' + 'sO0dg3TVXxspacjcVgUt0zCKBfLmkv');
  }
}
