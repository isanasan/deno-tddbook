export class Doller {
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