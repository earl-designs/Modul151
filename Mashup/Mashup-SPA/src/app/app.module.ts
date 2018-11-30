import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { NavTopComponent } from './common-components/nav-top/nav-top.component';
import { FooterComponent } from './common-components/footer/footer.component';

import { CoinIndexDTOService } from './_services/coinIndexDTO.service';
import { CurrencyService } from './_services/currency.service';
import { CoinsResolver } from './_resolvers/coins-resolver';
import { CurrencyMarketComponent } from './currency-market/currency-market.component';
import { HomeComponent } from './home/home.component';
import { CoinDisplayComponent } from './currency-market/coin-display/coin-display.component';

@NgModule({
   declarations: [
      AppComponent,
      NavTopComponent,
      FooterComponent,
      CurrencyMarketComponent,
      HomeComponent,
      CoinDisplayComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      NgbModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      CoinIndexDTOService,
      CurrencyService,
      CoinsResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
