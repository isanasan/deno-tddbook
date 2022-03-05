export class Doller {
    constructor(public amount: number) {
            this.amount = amount;
    }
    
    times (multiplier: number)
    {
        this.amount *= multiplier;
        return null;
    }
}