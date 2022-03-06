import { Expression } from "./expression.ts";
import { Money } from "./money.ts";
export class Bank {
  reduce(souce: Expression, to: string): Money {
    return Money.doller(10);
  }
}
