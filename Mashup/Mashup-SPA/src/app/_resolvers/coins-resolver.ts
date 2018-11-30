import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CoinIndexDTOService } from '../_services/coinIndexDTO.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CoinIndexDTO } from '../_models/coinIndexDTO';

@Injectable()
export class CoinsResolver implements Resolve<CoinIndexDTO> {

    constructor(private coinIndexService: CoinIndexDTOService,
                private router: Router) {}

    resolve (route: ActivatedRouteSnapshot): Observable<CoinIndexDTO> {
        return this.coinIndexService.getCoinIndex().pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
