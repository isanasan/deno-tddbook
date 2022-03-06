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
    return new Doller(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }
}
export class Doller extends Money {
}

export class Franc extends Money {
}
