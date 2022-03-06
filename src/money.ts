export abstract class Money {
  protected amount: number = 0;
  abstract times(multiplier: number): Money;
  abstract currency(): string;

  equals(money: Money): boolean {
    return this.amount === money.amount &&
      this.constructor.name === money.constructor.name;
  }

  static doller(amount: number): Money {
    return new Doller(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }
}
export class Doller extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Money {
    return new Doller(this.amount * multiplier);
  }

  currency(): string {
    return "USD";
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
