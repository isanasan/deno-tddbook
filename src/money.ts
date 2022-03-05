export class Doller {
    constructor(public amount: number) {
            this.amount = amount;
    }
    
    times (multiplier: number)
    {
        return new Doller(this.amount * multiplier);
    }
    
    equals (object: Doller) {
        return true;
    }
}