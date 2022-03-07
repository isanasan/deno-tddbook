import { assertEquals } from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { Money } from "../src/money.ts";
import { Expression } from "../src/expression.ts";
import { Bank } from "../src/bank.ts";

Deno.test("Multiplication", () => {
  const five: Money = Money.doller(2);
  assertEquals(Money.doller(10), five.times(5));
  assertEquals(Money.doller(6), five.times(3));
});

Deno.test("equals", () => {
  assertEquals(true, Money.doller(5).equals(Money.doller(5)));
  assertEquals(false, Money.doller(5).equals(Money.doller(6)));
  assertEquals(false, Money.franc(5).equals(Money.doller(5)));
});

Deno.test("Currency", () => {
  assertEquals("USD", Money.doller(1).getCurrency());
  assertEquals("CHF", Money.franc(1).getCurrency());
});

Deno.test("SimpleAdditation", () => {
  const five: Money = Money.doller(5);
  const sum: Expression = five.plus(five);
  const bank: Bank = new Bank();
  const reduce: Money = bank.reduce(sum, "USD");
  assertEquals(Money.doller(10), reduce);
});

Deno.test("PlusReturnsSum", () => {
  const five: Money = Money.doller(5);
  const sum: Sum = five.plus(five);
  assertEquals(five, sum.augend);
  assertEquals(five, sum.addend);
});
