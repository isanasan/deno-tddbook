export class Doller {
    public amount: number = 0;
    constructor(amount: number) {
            this.amount = amount;
    }
    
    times (multiplier: number) :void
    {
        this.amount = this.amount * 5;
    }
}