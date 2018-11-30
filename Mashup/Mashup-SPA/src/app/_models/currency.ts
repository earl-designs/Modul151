import { ExchangeRate } from './exchangeRate';
export interface Currency {
    base: string;
    date: Date;
    rates: ExchangeRate;
}
