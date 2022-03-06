export abstract class Money {
  protected amount: number = 0;
  protected currency: string = "";
  abstract times(multiplier: number): Money;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  getCurrency(): string {
    return this.currency;
  }

  equals(money: Money): boolean {
    return this.amount === money.amount &&
      this.constructor.name === money.constructor.name;
  }

  static doller(amount: number): Money {
    return new Doller(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }
}
export class Doller extends Money {
  times(multiplier: number): Money {
    return Money.doller(this.amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
