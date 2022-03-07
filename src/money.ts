import { Sum } from "./sum.ts";
export class Money {
  protected amount: number = 0;
  protected currency: string = "";

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  getCurrency(): string {
    return this.currency;
  }

  equals(money: Money): boolean {
    return this.amount === money.amount &&
      this.currency === money.currency;
  }

  static doller(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(money: Money): Money {
    return new Sum(this, money);
  }
}
