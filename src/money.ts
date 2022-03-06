class Money {
}
export class Doller extends Money{
    constructor(private amount: number) {
            this.amount = amount;
    }
    
    times (multiplier: number)
    {
        return new Doller(this.amount * multiplier);
    }
    
    equals (object: Doller):boolean {
        return this.amount === object.amount;
    }
}
    
export class Franc {
    constructor(private amount: number) {
            this.amount = amount;
    }
    
    times (multiplier: number)
    {
        return new Franc(this.amount * multiplier);
    }
    
    equals (object: Franc):boolean {
        return this.amount === object.amount;
    }
}