class Money {
    protected amount: number = 0;
    
    equals (money: Money):boolean {
        return this.amount === money.amount;
    }
}
export class Doller extends Money{
    constructor(amount: number) {
        super();
        this.amount = amount;
    }
    
    times (multiplier: number)
    {
        return new Doller(this.amount * multiplier);
    }
}
    
export class Franc extends Money{
    constructor(amount: number) {
        super();
        this.amount = amount;
    }
    
    times (multiplier: number)
    {
        return new Franc(this.amount * multiplier);
    }
}