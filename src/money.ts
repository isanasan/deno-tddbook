export abstract class Money {
  protected amount: number = 0;
  protected currency: string = "";
  abstract times(multiplier: number): Money;
  getCurrency(): string {
    return this.currency;
  }

  equals(money: Money): boolean {
    return this.amount === money.amount &&
      this.constructor.name === money.constructor.name;
  }

  static doller(amount: number): Money {
    return new Doller(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount, "");
  }
}
export class Doller extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
    this.currency = "USD";
  }

  times(multiplier: number): Money {
    return new Doller(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super();
    this.amount = amount;
    this.currency = "CHF";
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
