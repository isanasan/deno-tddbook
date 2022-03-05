export class Doller {
    constructor(public amount: number) {
            this.amount = amount;
    }
    
    times (multiplier: number) :void
    {
        this.amount = this.amount * 5;
    }
}