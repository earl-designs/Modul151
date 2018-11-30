import { Routes } from '@angular/router';
import { CurrencyMarketComponent } from './currency-market/currency-market.component';
import { HomeComponent } from './home/home.component';
import { CoinsResolver } from './_resolvers/coins-resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Home', component: CurrencyMarketComponent},
    {path: 'CurrencyMarket', component: CurrencyMarketComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
